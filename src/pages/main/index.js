import React, {useState, useEffect } from 'react';

import api from '../../services/api';

function Main() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
         aloadProducts();
    });

    const aloadProducts = async () => {        
        const response = await api.get('/products');
        setProducts(response.data.docs);
    };

    return (
        <div className="product-list">
            {products.map(product => (
                <h2 key={product._id}>{product.title}</h2>
            ))}
        </div>
    )

}

export default Main;