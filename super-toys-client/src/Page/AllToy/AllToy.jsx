import { useEffect, useRef, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { AiOutlineSearch } from "react-icons/ai";
import AddedToysCard from "../../Layout/AddedToysCard";
const AllToy = () => {
    const [addedToys, setAddedToys] = useState([]);
    const [sortOperation, setSortOperation] = useState(true);
    const searchRef = useRef(null);
    const [search, setSearch] = useState('');
    useTitle("All Toy")

    useEffect(() => {
        fetch(`https://super-toy-server-neon.vercel.app/addedToy?search=${search}&sort=${sortOperation ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setAddedToys(data));
    }, [sortOperation, search])

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }
    
    return (
        <div className="h-screen -mb-10">
            <div className="flex w-[80%] m-auto my-10 items-center gap-6 ">
                <div className="form-control w-[80%] flex-grow">
                    <div className="input-group">
                        <input type="text" ref={searchRef} placeholder="Search" className="input input-bordered w-full" />
                        <button onClick={handleSearch} className="btn btn-square blue-light"><AiOutlineSearch></AiOutlineSearch></button>
                    </div>
                </div>
                     <button className="blue-light px-4 py-3 rounded-lg" onClick={() => setSortOperation(!sortOperation)}>{sortOperation ? 'ascending' : 'descending'}</button>
            </div>

            <div className="overflow-x-auto w-full ">
                <table className="table w-[80%] mx-auto my-8 shadow-lg rounded-2xl">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Toy Photo</th>
                        <th>Name</th>
                        <th>Seller</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>View Details</th>
                    </tr>
                    </thead>
                    <tbody >
                        {
                            addedToys.map(toy => <AddedToysCard key={toy._id} toy={toy}></AddedToysCard>)
                        }
                    </tbody>
                    
                </table>
            
            </div>
        </div>
       
    );
};

export default AllToy;