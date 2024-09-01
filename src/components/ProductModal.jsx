import React from 'react';
import { Modal, Table } from 'antd';
import '../styles/ProductModal.css';

const ProductModal = ({ onClose }) => {
    return (
        <Modal
            visible={true}
            title="Add More Products"
            onCancel={onClose}
            footer={null}
            className="modal"
        >
        </Modal>
    );
};

export default ProductModal;
