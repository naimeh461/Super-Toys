import banner1 from "../../assets/Banner/Website-banner1.jpg"
import banner2 from "../../assets/Banner/Website-banner2.jpg"
import banner3 from "../../assets/Banner/Website-banner3.jpg"
import banner4 from "../../assets/Banner/Website-banner4.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle blue-primary">❮</a> 
      <a href="#slide2" className="btn btn-circle blue-primary">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle blue-primary">❮</a> 
      <a href="#slide3" className="btn btn-circle blue-primary">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={banner3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle blue-primary">❮</a> 
      <a href="#slide4" className="btn btn-circle blue-primary">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={banner4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle blue-primary">❮</a> 
      <a href="#slide1" className="btn btn-circle blue-primary">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;