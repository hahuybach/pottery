import { useState } from 'react';
import ListProductLayout from '../../layouts/Main/ListProductsLayout';

export default function Kitchenware() {
    const [products, setProducts] = useState([]);
    return (
        <>
            <ListProductLayout products={products} />
        </>
    );
}
