// components/BorrowModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function BorrowModal({ show, onHide }) {
  const [borrowAmount, setBorrowAmount] = useState('');
  const [purpose, setPurpose] = useState('');
  const [repaymentTerm, setRepaymentTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitting borrow request:', { borrowAmount, purpose, repaymentTerm });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title>Borrow Funds</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Borrow Amount</Form.Label>
            <Form.Control
              type="number"
              value={borrowAmount}
              onChange={(e) => setBorrowAmount(e.target.value)}
              required
            />
            <Form.Text className="text-muted">Available credit: $35,000</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Purpose of Borrowing</Form.Label>
            <Form.Select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              required
            >
              <option value="">Select a purpose</option>
              <option value="inventory">Inventory Purchase</option>
              <option value="equipment">Equipment Purchase</option>
              <option value="marketing">Marketing Campaign</option>
              <option value="expansion">Business Expansion</option>
              <option value="other">Other</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Repayment Term</Form.Label>
            <Form.Select
              value={repaymentTerm}
              onChange={(e) => setRepaymentTerm(e.target.value)}
              required
            >
              <option value="">Select a repayment term</option>
              <option value="3">3 months</option>
              <option value="6">6 months</option>
              <option value="12">12 months</option>
              <option value="18">18 months</option>
              <option value="24">24 months</option>
            </Form.Select>
          </Form.Group>
          <div className="text-end">
            <Button variant="secondary" onClick={onHide} className="me-2">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Borrow Funds
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default BorrowModal;