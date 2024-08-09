import React from 'react';
import { Offcanvas, Card, Button } from 'react-bootstrap';

const sampleDealData = [
  {
    id: 1,
    image: 'https://picsum.photos/200/100?random=1',
    title: '20% Off Electronics',
    description: 'Save 20% on all electronics purchases at TechStore.',
    validFrom: '2023-06-01',
    validTo: '2023-08-31'
  },
  {
    id: 2,
    image: 'https://picsum.photos/200/100?random=2',
    title: 'Free Coffee Every Week',
    description: 'Enjoy a free coffee every week at participating CoffeeHouse locations.',
    validFrom: '2023-04-01',
    validTo: '2023-12-31'
  },
  {
    id: 3,
    image: 'https://picsum.photos/200/100?random=3',
    title: '15% Off FitnessPro Memberships',
    description: 'Get a 15% discount on FitnessPro club memberships.',
    validFrom: '2023-01-01',
    validTo: '2023-12-31'
  }
];

function OffcanvasDeals({ show, onHide, club }) {
  return (
    <Offcanvas show={show} onHide={onHide} placement="bottom" className="kmint-deals">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{club ? club.name : 'Deals'}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {club ? (
          <div className="d-flex overflow-auto" style={{ gap: '10px' }}>
            {sampleDealData.map((deal) => (
              <Card key={deal.id} style={{ minWidth: '350px', maxWidth: '350px' }} className="flex-shrink-0">
                <Card.Img variant="top" src={deal.image} alt={deal.title} />
                <Card.Body>
                  <Card.Title>{deal.title}</Card.Title>
                  <Card.Text style={{minHeight: '70px'}}>{deal.description}</Card.Text>
                  <Card.Text className="text-muted">Valid from {deal.validFrom} to {deal.validTo}</Card.Text>
                  <Button className="btn-kmint-blue mb-2">Mint Now</Button>
                  <p className='text-xs text-muted text-center'>$2 Service Fee</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        ) : (
          <p>No deals available</p>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffcanvasDeals;
