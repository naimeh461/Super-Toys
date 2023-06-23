import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import ProductTab from "./ProductTab";
import Review from "./Review";
import ToyGallary from "./ToyGallary";



const Home = () => {
    useTitle("Home")
    return (
        <div>
            
            <ProductTab></ProductTab>
            <Review></Review>
           
        </div>
    );
};

export default Home;