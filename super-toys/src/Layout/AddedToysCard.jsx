import { Link } from "react-router-dom";

const AddedToysCard = ({toy}) => {
    const {name,photoUrl,sellerName,sellerEmail,subCategories,price,quantity,_id} = toy;

    return (
    
            <tr>
                    <th >
                        <img className="rounded-full w-12 h-12 "src={photoUrl}></img>
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
                    <button className="blue-light p-2 rounded-lg"><Link to={`/addedToyDetails/${_id}`}>View Details</Link></button>
                    </th>
            </tr>
                
    );
};

export default AddedToysCard;