import { Form, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateDetails = () => {
    const params = useParams();
    const id = params.id
    
    const handleSubmit =(event) => {
        event.preventDefault();
        const form = event.target;
        const price = parseFloat(form.price.value);
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updateToy = {price,quantity,description}
        fetch(`https://super-toy-server-neon.vercel.app/myAddedToyUpdate/${id}`,{
                method: "PATCH",
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(updateToy)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    toast.success("Update the Toy successfully",{theme: "colored",});
                   //update state
                }
            })
        }
    return (
        <Form onSubmit={handleSubmit}  className="flex flex-col text-center justify-center items-center">
             <ToastContainer position="top-center" />
            <div className="form-control shadow-2xl p-14 flex flex-col gap-5 my-20 rounded-3xl">
                <h2 className="-mt-14 mb-10 text-2xl blue-light p-2 rounded-b-lg">Update Toy</h2>
                {/* price */}
                <div>
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name="price" className="input input-bordered" />
                </div>
                {/* quantity */}
                <div>
                    <label className="label">
                        <span className="label-text">Available quantity</span>
                        </label>
                    <input type="text" placeholder="available quantity" name="quantity" className="input input-bordered" />
                </div>
                {/* Description */}
                <div className="flex">
                    <div className="w-full ">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" placeholder="Detail description" name="description" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className=" blue-light btn-block p-3 rounded-lg" type="submit" value="Update Toy" />
                </div>
            </div>
        </Form>
        
    );
};

export default UpdateDetails;