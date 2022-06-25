import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../Hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser )

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


     if (loading || gLoading) {
        return <Loading></Loading>
    }

     if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }
    
    if (token) {
        navigate(from, { replace: true });
    }
    return (
        <div className='flex h-screen justify-center items-center bg-secondary'>
            <div className="card w-96 mx-2 bg-base-100 shadow-xl">
               <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                 <label className="label">
                <span className="label-text">Email</span>
               </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" {...register("email", {
                                required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'input a valid Email'}
                                    })} />
                          <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                 {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                   </label>
                        </div>
            <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                 <input
                type="password"
                placeholder="Password"
                 className="input input-bordered w-full max-w-xs"
             {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                 {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                <input className='btn w-full btn-secondary max-w-xs text-white' type="submit" value="Login" />
                    </form>
                     <p className='pl-2 pt-3'><small>New to Leather Manufacturer ? <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-secondary">
                        
                        <div className=''><svg viewBox="0 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" aria-hidden="true" focusable="false" width="24" height="24" role="img"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg></div>
                        <div className='pl-4'>Sign up with google</div>
                    </button>
             </div>
            </div>
        </div>
    );
};

export default Login;