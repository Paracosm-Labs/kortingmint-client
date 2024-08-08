// components/offerModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function OfferModal({ show, onHide, offer }) {
  const [offerImage, setOfferImage] = useState(offer?.image || '');
  const [maxSupply, setMaxSupply] = useState(offer?.maxSupply || '');
  const [offerDescription, setOfferDescription] = useState(offer?.description || '');
  const [offerValidFrom, setOfferValidFrom] = useState(offer?.validFrom || '');
  const [offerValidTo, setOfferValidTo] = useState(offer?.validTo || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitting offer:', {
      image: offerImage,
      maxSupply: maxSupply,
      description: offerDescription,
      validFrom: offerValidFrom,
      validTo: offerValidTo
    });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title>{offer ? 'Edit Offer' : 'Create New Offer'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Offer Image</Form.Label>
            <Form.Control type="file" value={offerImage} onChange={(e) => setOfferImage(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Max Supply</Form.Label>
            <Form.Control type="text" value={maxSupply} onChange={(e) => setMaxSupply(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} value={offerDescription} onChange={(e) => setOfferDescription(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Valid From</Form.Label>
            <Form.Control type="date" value={offerValidFrom} onChange={(e) => setOfferValidFrom(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Valid To</Form.Label>
            <Form.Control type="date" value={offerValidTo} onChange={(e) => setOfferValidTo(e.target.value)} />
          </Form.Group>
          <div className="text-end">
            <Button variant="outline-secondary" onClick={onHide} className="me-2">
              Cancel
            </Button>
            <Button className='btn btn-kmint-blue' type="submit">
              {offer ? 'Update Offer' : 'Create Offer'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default OfferModal;