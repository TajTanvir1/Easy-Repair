import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {

   const {_id, title, img, price } = service;

   return (
      <div>
         <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
               <img
                  src={img}
                  alt={title}
                  className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
               <h2 className="card-title">{title}</h2>
               <p className='text-sky-700 text-xl font-semibold'>Price: ${price}</p>
               <div className="card-actions">
                  <Link to={`/checkout/${_id}`}>
                  <button className="btn btn-outline btn-accent">Book Now</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ServiceCard;