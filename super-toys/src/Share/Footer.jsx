import logo from "../../public/superToy.png"
import { FaTwitter, FaFacebook , FaYoutube} from "react-icons/fa";
const Footer = () => {
    return (
        
            <div id="app">
                <footer className="footer p-10 blue-primary text-neutral-content " id="footer">
            <div>
                <div className="flex gap-3 justify-center items-center">
                <img src={logo} alt="" className="w-12" />
                <p className="text-2xl font-bold">Super Toy</p>
                </div>
                <div className="mt-7">
                    <p>Shop address: 5 Begum Rokeya Ave, Dhaka</p>
                    <p>Copyright © 2023 - All right reserved by superToy Ltd</p>
                </div>

            </div> 
            <div>
                <span className="footer-title">Social</span> 
                <div className="grid grid-flow-col gap-4">
                <a href="https://twitter.com/" className="text-2xl"><FaTwitter></FaTwitter></a> 
                <a href="https://facebook.com/"className="text-2xl"><FaFacebook></FaFacebook></a> 
                <a href="https://youtube.com/" className="text-2xl"><FaYoutube></FaYoutube></a>
                </div>
                <div className="mt-5">
                    <h2 className="text-xl font-bold">Contact Us</h2>
                    <p>Phone: +8801731231</p>

                </div>
            </div>
             </footer>
            </div>
    );
};

export default Footer;