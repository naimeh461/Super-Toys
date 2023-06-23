import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import MyToyTable from "../../Layout/MyToyTable";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [sortOperation, setSortOperation] = useState(true);
    const [myToys, setMyToys] = useState([]);
    const url = `https://super-toy-server-neon.vercel.app/myAddedToys?email=${user.email}&sort=${sortOperation ? 'asc' : 'desc'}`;
    useEffect(() => {
        fetch(url)
        .then(res =>  res.json())
        .then(data => setMyToys(data))
    },[sortOperation])

    const handleDelete = id =>{
        const proceed = confirm("Are You sure you want to delete")
        if(proceed){
            fetch(`https://super-toy-server-neon.vercel.app/myAddedToysDelete/${id}`,{
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    toast.error("Delete Successfully",{theme: "colored",});
                    const remaining=  myToys.filter(myToy => myToy._id !== id)
                    setMyToys(remaining)
                }
            })
        }
    }
    
    return (
        <div>
            <ToastContainer position="top-center"/>
            <div className="text-center my-5">
                <button className="blue-light px-4 py-3 rounded-lg" onClick={() => setSortOperation(!sortOperation)}>{sortOperation ? 'ascending' : 'descending'}</button>
            </div>
            <div className="overflow-x-auto w-full ">
                
                <table className="table w-[80%] mx-auto my-8 shadow-lg rounded-2xl">
                    {/* head */}
                    <thead>
                    <tr>
                    <th>
                        <label>
                            
                        </label>
                        </th>
                        <th>Toy Photo</th>
                        <th>Name</th>
                        <th>Seller</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>View Details</th>
                        <th>Update</th>
                    </tr>
                    </thead>
                    <tbody >
                        {
                            myToys.map(myToy => <MyToyTable key={myToy._id} myToy={myToy} handleDelete={handleDelete} ></MyToyTable>)
                        }
                    </tbody>
                    
                </table>
            
            </div>
        </div>
        
    );
};

export default MyToys;