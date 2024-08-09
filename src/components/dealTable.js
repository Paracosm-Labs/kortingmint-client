// components/dealTable.js
import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';

function DealTable({ onEdit, onDelete }) {
  // Sample data - replace with actual data fetching logic
  const [deals, setDeals] = useState([
    {
      id: 1,
      image: 'https://via.placeholder.com/200x150',
      supply: 250,
      description: '20% off on summer items',
      validFrom: '2023-06-01',
      validTo: '2023-08-31',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/200x150',
      supply: 250,
      description: '15% off on winter apparel',
      validFrom: '2023-11-01',
      validTo: '2023-12-31',
    }
  ]);

  return (
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Supply</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal) => (
            <tr key={deal.id}>
              <td><img src={deal.image} alt={deal.supply} width="100" /></td>
              <td>{deal.supply}</td>
              <td>{deal.description}<p className='text-muted text-small'>Valid Thru: {deal.validFrom} - {deal.validTo}</p></td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-2" onClick={() => onEdit(deal)}>
                  Edit
                </Button>
                <Button variant="outline-danger" size="sm" onClick={() => onDelete(deal.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default DealTable;