import React, { useEffect, useState } from 'react';
import bg1 from '../../../assets/marvelbg.jpg'
import { Link } from 'react-router-dom';
const Marvel = () => {
    const [marvelToys, setMarvelToys]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/toys/Marvel')
        .then(res=> res.json())
        .then(data=> setMarvelToys(data))
    },[])
    return (
        <div className='flex flex-row justify-center mb-5' style={{
            backgroundImage: `url(${bg1})`,
          }}>
           
           {
            marvelToys.map(marvel=> <div className=' flex' key={marvel._id}>
                {/* card */}
                <div className="card w-96 glass m-5 p-5  font-bold ">
                   <figure><img className=' h-96' src={marvel.photo} alt="car!"/></figure>
                   <div className="card-body">
                   <h2 className="card-title mb-2 font-extrabold ">{marvel.name}</h2>
                   <div className='flex'>
                   <p>Rating: {marvel.rating}</p>
                   <p>Price: {marvel.price} TK</p>
                   </div>
                    
                    <div className="card-actions justify-end">
                    <Link to={`/toy/${marvel._id}`}><button className="btn btn-primary bg-purple-700 ">Details</button></Link>
                    </div>
                </div>
              </div>
            </div> )
           }
        </div>
    );
};

export default Marvel;