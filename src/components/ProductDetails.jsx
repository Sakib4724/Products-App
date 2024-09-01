import React, { useEffect, useState, useContext } from 'react';
import { Table, Button, notification } from 'antd';
import Sidebar from './Sidebar';
import { fetchProducts } from '../utils/ProductApi';
import { ProductContext } from '../utils/ProductContext';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
    const [products, setProducts] = useState([]);
    const { selectedProducts, setSelectedProducts } = useContext(ProductContext);
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    useEffect(() => {
        fetchProducts().then((data) => setProducts(data));
    }, []);

    const handleCompareClick = (product) => {
        if (selectedProducts.length >= 4) {
            notification.error({
                message: 'Compare Limit Reached',
                description: 'You can only compare up to 4 products.',
            });
            return;
        }
        if (selectedProducts.includes(product)) {
            notification.info({
                message: 'Product Already Selected',
                description: 'This product is already selected for comparison.',
            });
            return;
        }
        setSelectedProducts([...selectedProducts, product]);
    };

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    const columns = [
        {
            title: 'Image',
            dataIndex: 'images',
            key: 'images',
            render: (image) => <img src={image} alt="product" style={{ width: 50 }} />,
            width: 100,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            width: 150,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            width: 200,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            width: 100,
        },
        {
            title: 'Discount Percentage',
            dataIndex: 'discountPercentage',
            key: 'discountPercentage',
            width: 150,
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
            width: 100,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            width: 100,
        },
        {
            title: 'Compare',
            key: 'compare',
            render: (text, record) => (
                <Button
                    onClick={() => handleCompareClick(record)}
                    disabled={selectedProducts.includes(record)}
                    className="compare-button"
                >
                    Compare
                </Button>
            ),
            width: 100,
        },
    ];

    return (
        <div className="product-details">
            <Button
                className="sidebar-toggle-btn"
                onClick={toggleSidebar}
                style={{ marginBottom: 16 }}
            >
                {isSidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
            </Button>

            <div className={`sidebar ${isSidebarVisible ? 'active' : ''}`}>
                <Sidebar />
            </div>

            <Table
                dataSource={products}
                columns={columns}
                pagination={{ pageSize: 10 }}
                rowKey="id"
                scroll={{ y: 500 }}
                sticky
            />
        </div>
    );
};

export default ProductDetails;