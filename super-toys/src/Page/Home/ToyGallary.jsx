import LazyLoad from 'react-lazy-load';
import Marquee from "react-fast-marquee";

import img1 from "../../assets/toyGallary/1.jpg"
import img2 from "../../assets/toyGallary/2.jpg"
import img3 from "../../assets/toyGallary/3.jpg"
import img4 from "../../assets/toyGallary/4.webp"
import img5 from "../../assets/toyGallary/5.jpg"
import img6 from "../../assets/toyGallary/6.jpg"
import img7 from "../../assets/toyGallary/7.jpg"
import img8 from "../../assets/toyGallary/8.jpg"
import img9 from "../../assets/toyGallary/9.jpg"
import img10 from "../../assets/toyGallary/10.webp"

const ToyGallary = () => {
    return (
        
        <div className="card w-[80%] m-auto shadow-2xl my-60">
            <h2 className="text-3xl font-bold text-center blue-light rounded-2xl p-3">New Toy Gallery</h2>
            <Marquee className="p-20" speed={100} >
            <LazyLoad>
                <img className="h-80" src={img1}></img>
            </LazyLoad>
            <LazyLoad>
                <img className="h-80" src={img2}></img>
            </LazyLoad>
            <LazyLoad>
                <img className="h-80" src={img3}></img>
            </LazyLoad>
            <LazyLoad>
                <img className="h-80" src={img4}></img>
            </LazyLoad>
            <LazyLoad>
                <img className="h-80" src={img5}></img>
            </LazyLoad>
            <LazyLoad>
                <img className="h-80" src={img6}></img>
            </LazyLoad>
            <LazyLoad>
                <img className="h-80" src={img7}></img>
            </LazyLoad>
            <LazyLoad>
                <img className="h-80" src={img8}></img>
            </LazyLoad>
            <LazyLoad>
                <img className="h-80" src={img9}></img>
            </LazyLoad>
            <LazyLoad>
                <img className="h-80" src={img10}></img>
            </LazyLoad>
                 
            </Marquee>
            
        </div>
       
  
  
    );
};

export default ToyGallary;