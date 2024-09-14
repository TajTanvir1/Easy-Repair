import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
import { Link } from 'react-router-dom';


const About = () => {
   return (
      <div>
         <div className="hero p-4 my-8 border-l-4 rounded-lg border-sky-500 lg:min-h-[500px] items-center">
            <div className="hero-content flex-col lg:flex-row">
               <div className='lg:w-1/2 relative'>
                  <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                  <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
               </div>
               <div className='lg:w-1/2'>
                  <h1 className="text-3xl text-sky-600 font-bold">About Us</h1>
                  <p className="py-6 text-4xl font-bold">
                  We are qualified & of experience in this field
                  </p>
                  <p className="py-2 text-xl">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                  </p>
                  <p className="py-2 text-xl">
                  The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                  </p>
                  <Link to='/about'>
                  <button className="btn btn-outline btn-accent">Get More Info</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
