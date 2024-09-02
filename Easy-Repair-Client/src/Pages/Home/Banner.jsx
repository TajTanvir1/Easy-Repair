import pic1 from "../../assets/images/banner/1.jpg"

const Banner = () => {
   return (
      <div>
         <div className="carousel w-full h-[400px]">
            <div id="slide1" className="carousel-item relative w-full">
               <img
                  src={pic1}
                  className="w-full" />
               <div className="absolute justify-end gap-3 left-5 right-5 bottom-1 flex -translate-y-1/2 transform ">
                  <a href="#slide4" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a>
               </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
               <img
                  src={pic1}
                  className="w-full" />
               <div className="absolute justify-end gap-3 left-5 right-5 bottom-1 flex -translate-y-1/2 transform ">
                  <a href="#slide1" className="btn btn-circle">❮</a>
                  <a href="#slide3" className="btn btn-circle">❯</a>
               </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
               <img
                  src={pic1}
                  className="w-full" />
               <div className="absolute justify-end gap-3 left-5 right-5 bottom-1 flex -translate-y-1/2 transform ">
                  <a href="#slide2" className="btn btn-circle">❮</a>
                  <a href="#slide4" className="btn btn-circle">❯</a>
               </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
               <img
                  src={pic1}
                  className="w-full" />
               <div className="absolute justify-end gap-3 left-5 right-5 bottom-1 flex -translate-y-1/2 transform ">
                  <a href="#slide3" className="btn btn-circle">❮</a>
                  <a href="#slide1" className="btn btn-circle">❯</a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;