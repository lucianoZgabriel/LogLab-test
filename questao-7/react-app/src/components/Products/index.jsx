import React, { useState, useEffect } from 'react';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/products")  // Ajuste a porta se necessário
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Erro ao buscar produtos:", err));
    }, []);

    return (
        <div className="products-list">
            <h2>Lista de Produtos</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;