import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const ToyDetails = () => {
    const addedToy = useLoaderData();
    const {name,photoUrl,sellerName,sellerEmail,price,quantity,rating,description} = addedToy
    return (
        <div className="w-[80%] m-auto  mt-40 h-screen">
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="w-[500px] h-full mr-auto" src={photoUrl} alt="Album"/></figure>
            <div className="card-body">
                <div className="flex justify-between ">
                        <h2 className="text-3xl font-bold">{name}</h2>
                        <Rating  className="" style={{ maxWidth: 200 }} value={Math.round(rating)}/>
                </div>
                <div className="flex flex-col gap-6 mt-4">
                    <p className="text-xl font-semibold">Seller Name : {sellerName}</p>
                    <p className="text-xl font-semibold">Seller Email: {sellerEmail}</p>
                    <p className="text-xl font-semibold">Quantity : {quantity}</p>
                    <p className="text-xl font-semibold">Price : ${price}</p>
                    <p className="text-xl font-semibold">Description : <span className=" text-lg font-normal">{description}</span></p>
                </div>
        </div>
        </div>
        </div>
    );
};

export default ToyDetails;