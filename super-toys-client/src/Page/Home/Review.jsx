import { useContext, useEffect, useState } from "react";
import ReviewDesign from "../../Layout/ReviewDesign";
// import required modules
import reviewImg from "../../assets/review.png"
import { Form } from "react-router-dom";
import { ToastContainer ,toast} from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

const Review = () => {
   const[reviews,setReviews] = useState([])
   const {user} = useContext(AuthContext)
   
   const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const reviewer = form.name.value;
        const picture = user?.photoURL; 
        const comment = form.reviewComment.value;
        const review_number = form.reviewNumber.value
        const review = {reviewer,picture,comment,review_number}
       
        fetch("https://super-toy-server-neon.vercel.app/reviews",{
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body : JSON.stringify(review)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.insertedId){
                toast.success("Add Toy Successfully",{theme: "colored",});
                const allReview = [...reviews,review]
                setReviews(allReview)
            }
        })

   }

   useEffect(()=>{
    fetch("https://super-toy-server-neon.vercel.app/reviews")
    .then(req => req.json())
    .then(data =>  setReviews(data));
   },[])

    return (
      
        <div>
            <ToastContainer position="top-center" />
            <h2 className="text-center text-3xl font-bold">Review Section</h2>
            <p className="text-center mt-3 text-gray-400">The Superhero Gazette <br /> Action Figure Reviews for the Ultimate Fan Experience</p>
            <ReviewDesign reviews={reviews}></ReviewDesign>

            <div className="card lg:card-side bg-base-100 shadow-xl w-[80%] m-auto shadow-inner my-20 p-10 flex gap-20 bg-blue-50">
            <img className="lg:w-[40%] "src={reviewImg}/>
            <div className="divider lg:divider-horizontal"></div> 
            <div className="w-full">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Attention Heroes We want Your Value  Reviews! <br /></h2>
            <Form onSubmit={handleReview} >
                <div >
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <textarea placeholder="Name" defaultValue={user?.displayName} name="name"  className="textarea textarea-bordered textarea-xs w-full" ></textarea>
                </div>
                <div >
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <textarea placeholder="Please Give float number under 5" name="reviewNumber" className="textarea textarea-bordered textarea-xs w-full" ></textarea>
                       
                </div>
                <div >
                        <label className="label">
                            <span className="label-text">Review</span>
                        </label>
                        <textarea placeholder="Your valuable feedback" name="reviewComment" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>
                <div className="form-control mt-6">
                    <input className=" blue-light btn-block p-3 rounded-lg" type="submit" value="Submit Review" />
                </div>
            </Form>
            </div>
            </div>
        </div>
        
    );
};

export default Review;