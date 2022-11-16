#amqps://fegittzo:JmvEImN13GZWTFLasVnB64_ItmFBye3W@turkey.rmq.cloudamqp.com/fegittzo
import json
import pika
params = pika.URLParameters('amqps://fegittzo:JmvEImN13GZWTFLasVnB64_ItmFBye3W@turkey.rmq.cloudamqp.com/fegittzo')

connection = pika.BlockingConnection(params)

channel = connection.channel()

def publish(method, body):
    properties = pika.BasicProperties(method)
    channel.basic_publish(exchange='', routing_key='main', body=json.dumps(body), properties=properties)