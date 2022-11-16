#amqps://fegittzo:JmvEImN13GZWTFLasVnB64_ItmFBye3W@turkey.rmq.cloudamqp.com/fegittzo

import pika
params = pika.URLParameters('amqps://fegittzo:JmvEImN13GZWTFLasVnB64_ItmFBye3W@turkey.rmq.cloudamqp.com/fegittzo')

connection = pika.BlockingConnection(params)

channel = connection.channel()

channel.queue_declare(queue='admin')

def callback(ch, method, properties, body):
    print('recevied in admin')
    print(body)

channel.basic_consume(queue='admin', on_message_callback=callback, auto_ack=True)

print('started consuming')

channel.start_consuming()

channel.close()