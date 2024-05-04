import { useEffect, useState } from 'react';
import ProductDetail from '../../layouts/Main/ProductDetail';
import prodImg from '../../assets/home/vase.jpg';
import fbImg from '../../assets/logo/fb_logo.jpg';
export default function KitchenwareDetail() {
    const [product, setProduct] = useState({
        productName: 'San pham A',
        rating: 4,
        soldItem: 100,
        color: ['red', 'yellow'],
        pictures: [
            prodImg,
            fbImg,
            prodImg,
            fbImg,
            prodImg,
            fbImg,
            prodImg,
            fbImg,
        ],
        price: 1000000,
    });
    useEffect(() => {}, []);
    return (
        <>
            <ProductDetail {...product} />
        </>
    );
}
