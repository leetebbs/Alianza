import React from 'react';

const CardComponent = ({ data, setSelectedItem, setSelectedId }) => {
 return (
  <div className="card">
    <h1>{data.Public_work_name}</h1>
    <p>{data.location}</p>
    <p>{data.budget}</p>
    <p>{data.schedule}</p>
    <button onClick={() => setSelectedItem(null)}>Cerrar</button>
  </div>
 );
};

export default CardComponent;