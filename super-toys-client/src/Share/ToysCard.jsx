import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
// import LazyLoad from 'react-lazy-load';
const AllToys = ({toy}) => {

    const {photoUrl,name,price,rating,_id} = toy
    const {user} = useContext(AuthContext)
    
    return (
        <div >
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box flex justify-between items-center">
                <p className='text-blue-950 text-xl font-medium m-0 p-0'>You have to log in first to view details</p>
                <div className="modal-action mt-2">
                <label htmlFor="my-modal" className="ml-auto blue-light p-3 rounded-lg"><Link to={`/toyDetails/${_id}`}>View Details</Link></label>
                </div>
            </div>
            </div>
            <div className="card w-[80%] glass mx-auto mt-9">
            {/* <LazyLoad></LazyLoad> */}
            <img src={photoUrl} alt="car!"/>
            <div className="card-body">
                <h2 className="card-title text-black">{name}</h2>
                <p className="text-black text-xl">Price : ${price}</p>
                <div className="card-actions flex ">
                 <h2 className="text flex items-center gap-3 text-black mt-5">{rating}<Rating  style={{ maxWidth: 100 }} value={Math.round(rating)}/></h2>
                {
                    user ?   <button className="blue-light p-4 rounded-lg  ml-auto"><Link to={`/toyDetails/${_id}`}>View Details</Link></button> :<label htmlFor="my-modal" className=" ml-auto blue-light p-3 rounded-lg">View Details</label> 
                }
                </div>
            </div>
            </div>
        </div>
    );
};

export default AllToys;