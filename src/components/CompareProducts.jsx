import React, { useState, useContext, useEffect } from 'react';
import { Button, Modal, Table, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../utils/ProductApi';
import Sidebar from './Sidebar';
import { ProductContext } from '../utils/ProductContext';

const CompareProducts = () => {
    const [products, setProducts] = useState([]);
    const { selectedProducts, setSelectedProducts } = useContext(ProductContext); // Use context
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts().then(data => setProducts(data.products)); // Fetch products for modal
    }, []);

    const handleAddMore = () => {
        setShowModal(true);
    };

    const handleCompare = () => {
        if (selectedProducts.length < 2) {
            notification.error({
                message: 'Error',
                description: 'At least 2 products are required for comparison.',
            });
            return;
        }
        navigate('/compare-page', { state: { products: selectedProducts } });
    };

    const handleModalProductClick = (product) => {
        if (selectedProducts.some(p => p.id === product.id)) {
            setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
        } else {
            if (selectedProducts.length < 4) {
                setSelectedProducts([...selectedProducts, product]);
            } else {
                notification.error({
                    message: 'Limit Exceeded',
                    description: 'Cannot add more than 4 products for comparison.',
                });
            }
        }
    };

    const modalColumns = [
        {
            title: 'Image',
            dataIndex: 'thumbnail',
            render: image => <img src={image} alt="product" style={{ width: 50 }} />,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Discount Percentage',
            dataIndex: 'discountPercentage',
            key: 'discountPercentage',
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Compare',
            render: (text, record) => (
                <Button
                    onClick={() => handleCompareClick(record)}
                    disabled={selectedProducts.some(p => p.id === record.id)} // Check by ID
                >
                    Compare
                </Button>
            ),
        },
    ];

    return (
        <div className="compare-products">
            <Sidebar />
            <Button onClick={handleAddMore}>Add More</Button>
            <Button onClick={handleCompare}>Compare</Button>
            <Modal
                visible={showModal}
                title="Add More Products"
                onCancel={() => setShowModal(false)}
                footer={null}
            >
                <Table
                    dataSource={products}
                    columns={modalColumns}
                    rowKey="id"
                    pagination={false}
                    onRow={(record) => ({
                        onClick: () => handleModalProductClick(record),
                        style: {
                            cursor: 'pointer',
                            backgroundColor: selectedProducts.some(p => p.id === record.id) ? '#e6f7ff' : '',
                        },
                    })}
                />
            </Modal>
        </div>
    );
};

export default CompareProducts;
