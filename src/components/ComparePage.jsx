import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import { Table, Button } from 'antd';
import { ProductContext } from '../utils/ProductContext';
import '../styles/ComparePage.css';

const ComparePage = () => {
    const { selectedProducts } = useContext(ProductContext);

    const columns = [
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
                    disabled={selectedProducts.some(p => p.id === record.id)}
                >
                    Compare
                </Button>
            ),
        },
    ];

    return (
        <div className="compare-page">
            <Sidebar />
            <h1>Compare Products</h1>
            {selectedProducts.length === 0 ? (
                <p>No products to compare.</p>
            ) : (
                <Table
                    dataSource={selectedProducts}
                    columns={columns}
                    pagination={{ pageSize: 10 }}
                    rowKey="id"
                />
            )}
        </div>
    );
};

export default ComparePage;