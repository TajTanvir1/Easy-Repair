import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";



const Services = () => {
   const [services, setServices] = useState([]);

   useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/services`)
         .then(res => res.json())
         .then(data => setServices(data))
   }, [])

   return (
      <div>
         <div className="mx-auto text-center">
            <h1 className="text-3xl text-sky-600">Our Services</h1>
            <p className="lg:w-1/2 w-3/4 mx-auto my-2">The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
         </div>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {
               services.map(service => <ServiceCard
               key={service._id}
               service={service}
               ></ServiceCard>)
            }
         </div>
      </div>
   );
};

export default Services;