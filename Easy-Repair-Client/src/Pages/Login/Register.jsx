import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {

   const {createUser} = useContext(AuthContext);

const handleRegister = e =>{
   e.preventDefault();
   const form = e.target;
   const name = form.name.value;
   const email = form.email.value;
   const password = form.password.value;
   console.log(name, email, password);

   createUser(email, password)
   .then(result => {
      const user = result.user;
      console.log(user)
   })
   .catch(error => console.log(error))
}

   return (
      <div>
         <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
               <div className="text-center w-1/2 mr-10">
                  <img src={img} alt="" className='' />
               </div>
               <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                  <h1 className="text-3xl font-bold text-center mt-4 text-sky-600">Register here</h1>
                  <form onSubmit={handleRegister} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Enter Password</span>
                        </label>
                        <input type="password" name='password' placeholder="enter password" className="input input-bordered" required />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <input type="submit" value="Register" className="btn btn-accent" />
                     </div>
                  </form>
                  <p className='text-lg text-center mb-4'>Already have an Account in Easy Repair? <Link to='/login' className='text-sky-600 font-semibold'>Login</Link></p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;