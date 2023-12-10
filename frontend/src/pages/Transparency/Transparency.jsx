import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardComponent from '../../components/CardComponent/CardComponent';


const Transparency = () => {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedId, setSelectedId] = useState(null);

<<<<<<< HEAD
=======
  // CTA Content
  const ctaInfo = {
    title:`Experience the Power of Blockchain Transparency`,
    text:`Immerse yourself in the world of transparent smart
     contracts on Polygon. Real-time data and traceability, 
     courtesy of Chainlink, are changing the game. Dive 
     into the blockchain revolution now!`,
    btnText:`Experience Traceability`,
    btnLink: `https://allianz-teal.vercel.app/public-works`
  }
>>>>>>> 58c540ffa9c91618036c8807d06ee4c34ebdb4c5

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:3000/getworkdatas');
                console.log(result);
                setData(result.data.reduce((obj, item) => ({ ...obj, [item._id]: item }), {}));
            } catch(error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);


    const handleClick = (id) => {
        setSelectedId(id);
    };

    const handleClose = () => {
        setSelectedId(null);
    };

    return (
        <div className="container">
            <div>
                 <h1>TRANSPARENCY</h1>
            </div>
           
            {selectedItem ? (
                <CardComponent data={data} setSelectedItem={setSelectedItem} setSelectedId={setSelectedId} />
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Public Work Name</th>
                            <th>Location</th>
                            <th>Budget</th>
                            <th>Schedule</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(data).map((item) => (
                            <tr key={item._id}>
                                <td>{item.Public_work_name}</td>
                                <td>{item.location}</td>
                                <td>{item.budget}</td>
                                <td>{item.schedule}</td>
                                <td>
                                    <button onClick={() => handleClick(item._id)}>
                                        Ver detalles
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Transparency;