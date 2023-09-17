/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css';

const Cart = ({ selectedActors, remaining, totalCost }) => {

    return (
        <div>
            <h3>Total Actors: {selectedActors.length}</h3>
            <h5>remaining: {remaining}</h5>
            <h5>totalCost: {totalCost}</h5>
            {
                selectedActors.map(actor => (
                    <li key={actor.id}>{actor.name}</li>
                ))
            }
        </div>
    );
};

export default Cart;