import { Link } from 'react-router-dom';
import { GrDocumentUpdate } from "react-icons/gr";

const MyToyTable = ({myToy ,handleDelete }) => {
    const {name,photoUrl,sellerName,sellerEmail,subCategories,price,quantity,_id} = myToy;
    return (
        <tr>
                    <th>
                        <button onClick={()=> handleDelete(_id)} className="btn btn-circle btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </th>
                    <th >
                       { photoUrl && <img className="rounded-full w-12 h-12 "src={photoUrl}></img>}
                    </th>
                    <td>
                        <p className="text-xl font-semibold">{name}</p>
                    </td>
                    <td>
                        {sellerName}
                        <br/>
                        <span className="badge badge-ghost badge-sm">{sellerEmail}</span>
                    </td>
                    <td>{subCategories}</td>
                    <th>
                        <p>${price}</p>
                    </th>
                    <th>
                        {quantity}
                    </th>
                    <th>
                    
                        <button className="blue-light p-4 rounded-lg  ml-auto"><Link to={`/addedToyDetails/${_id}`}>View Details</Link></button> 
                    </th>
                    <th>
                    
                    <button className=" text-2xl text-white p"><Link to={`/updateDetails/${_id}`}><GrDocumentUpdate className=''></GrDocumentUpdate></Link></button>
                    </th>
            </tr>
    );
};

export default MyToyTable;