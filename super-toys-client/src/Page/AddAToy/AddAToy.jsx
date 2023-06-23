import { Form } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const AddAToy = () => {
    const {user} = useContext(AuthContext)
    useTitle("AddToy")
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategories = form.subCategories.value;
        const price = parseFloat(form.price.value);
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const addToy = {name,photoUrl,sellerName,sellerEmail,subCategories,price,rating,quantity,description}
        console.log(addToy)

        fetch("https://super-toy-server-neon.vercel.app/add-toy",{
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(addToy) 
        })
        .then(res=> res.json())
        .then(data => {
            if(data.insertedId){
                toast.success("Add Toy Successfully",{theme: "colored",});
            }
        })

    }
    //photoUrl url, name ,seller name, seller email, sub-category,price,rating, avaiable quantity, detail description
    return (
        <Form onSubmit={handleSubmit} className="flex flex-col text-center justify-center items-center">
             <ToastContainer position="top-center" />
            <div className="form-control shadow-2xl p-14 flex flex-col gap-5 my-20 rounded-3xl">
                <h2 className="-mt-14 mb-10 text-2xl blue-light p-2 rounded-b-lg">Add A Toy</h2>
                <div className="flex gap-10">
                    <div >
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">photoUrl URL</span>
                        </label>
                        <input type="text" placeholder="photoUrl URL" name="photoUrl" className="input input-bordered" />
                    </div>
                </div>
                <div className="flex gap-10">
                    <div >
                        <label className="label">
                            <span className="label-text">Seller name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder="Seller Name" name="sellerName" className="input input-bordered" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">seller email</span>
                        </label>
                        <input type="text" placeholder="Seller Email" defaultValue={user?.email} name="sellerEmail" className="input input-bordered" />
                    </div>
                </div>
                <div className="flex gap-10">
                    <div >
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <input type="text" placeholder="sub-categories" name="subCategories" className="input input-bordered" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name="price" className="input input-bordered" />
                    </div>
                </div>
                <div className="flex gap-10">
                    <div >
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder="Rating under 5" name="rating" className="input input-bordered" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" placeholder="available quantity" name="quantity" className="input input-bordered" />
                    </div>
                </div>
                <div className="flex">
                    <div className="w-full ">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" placeholder="Detail description" name="description" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className=" blue-light btn-block p-3 rounded-lg" type="submit" value="Add Toy" />
                </div>
            </div>
        </Form>
        
    );
};

export default AddAToy; 