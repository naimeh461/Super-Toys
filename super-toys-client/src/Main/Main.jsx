

import { Outlet } from "react-router-dom";
import Footer from "../Share/Footer";
import NavBar from "../Share/NavBar";
const Main = () => {
    return (
        <div >
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;