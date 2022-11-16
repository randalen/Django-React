import React, { SyntheticEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProductsCreate = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()
        
        await fetch('http://localhost:8000/api/products', {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({title, image})

        });
        setRedirect(true);
    }

    if (redirect){
        return <Navigate to={'/products'}/>
    }
    
    return (
        <form onSubmit={submit}>
            <div className='form-group'>
                <label>
                    Title
                    <input type='text' className='form-control' name='title'
                        onChange={e => setTitle(e.target.value)}/>
                </label>
            </div>
            <div className='form-group'>
                <label>
                    Image
                    <input type='text' className='form-control' name='image'
                        onChange={e => setImage(e.target.value)}/>
                </label>
            </div>
            <button className='btn btn-outline-secondary'>Save</button>

        </form>
    );
};

export default ProductsCreate;