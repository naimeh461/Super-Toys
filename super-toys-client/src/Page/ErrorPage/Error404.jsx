import { Link, useRouteError } from "react-router-dom";
import imError from  "../../assets/error.png"
const Error404 = () => {
    const {error} = useRouteError();
    return (
        <div className="carousel-item relative w-full ">
            < img className="w-full h-screen" src={imError} alt="" />
            <div className="absolute flex items-center p-20 h-full w-full ">
                <div className="absolute flex justify-center gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <div className="gap-3 text-center p-5 rounded-xl">
                        <p className='text-2xl font-semibold md:text-3xl text-white'>{error?.message}</p><br />
                        <Link to='/'><button className="btn bg-white text-blue-950">Go Back To Home Page</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error404;