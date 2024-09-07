import pic1 from "../../assets/images/banner/1.jpg"

const Banner = () => {
   return (
      <div className="rounded-lg">
         <div className="carousel w-full h-[400px] rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
               <img
                  src={pic1}
                  className="w-full" />
               <div className="absolute justify-end gap-3 left-5 right-5 bottom-1 flex -translate-y-1/2 transform">
                  
                  <a href="#slide4" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a>
               </div>
               <div className="absolute left-0 bottom-0 flex pl-8 top-0 items-center bg-gradient-to-r from-neutral-800 to-transparent">
                  <div className="text-white w-1/2 space-y-7">
                     <h1 className="text-4xl font-bold">Affordable Price For Car Servicing</h1>
                     <h1>There are many variations of passages of  available, but the majority have suffered alteration in some form</h1>
                     <div className="space-x-4">
                        <button className="btn btn-accent">Discover More</button>
                        <button className="btn btn-outline btn-accent">Latest Project</button>
                     </div>
                  </div>
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
               <div className="absolute left-0 bottom-0 flex pl-8 top-0 items-center bg-gradient-to-r from-neutral-800 to-transparent">
                  <div className="text-white w-1/2 space-y-7">
                     <h1 className="text-4xl font-bold">Affordable Price For Car Servicing</h1>
                     <h1>There are many variations of passages of  available, but the majority have suffered alteration in some form</h1>
                     <div className="space-x-4">
                        <button className="btn btn-accent">Discover More</button>
                        <button className="btn btn-outline btn-accent">Latest Project</button>
                     </div>
                  </div>
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
               <div className="absolute left-0 bottom-0 flex pl-8 top-0 items-center bg-gradient-to-r from-neutral-800 to-transparent">
                  <div className="text-white w-1/2 space-y-7">
                     <h1 className="text-4xl font-bold">Affordable Price For Car Servicing</h1>
                     <h1>There are many variations of passages of  available, but the majority have suffered alteration in some form</h1>
                     <div className="space-x-4">
                        <button className="btn btn-accent">Discover More</button>
                        <button className="btn btn-outline btn-accent">Latest Project</button>
                     </div>
                  </div>
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
               <div className="absolute left-0 bottom-0 flex pl-8 top-0 items-center bg-gradient-to-r from-neutral-800 to-transparent">
                  <div className="text-white w-1/2 space-y-7">
                     <h1 className="text-4xl font-bold">Affordable Price For Car Servicing</h1>
                     <h1>There are many variations of passages of  available, but the majority have suffered alteration in some form</h1>
                     <div className="space-x-4">
                        <button className="btn btn-accent">Discover More</button>
                        <button className="btn btn-outline btn-accent">Latest Project</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;