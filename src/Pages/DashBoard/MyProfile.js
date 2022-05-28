import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();

    const { data: profile, isLoading } = useQuery('profile', () => fetch('http://localhost:5000/profile').then(res => res.json()))
    
     const onSubmit = async data => {
         console.log('data', data);
          fetch('http://localhost:5000/profile', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(profile)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Profile added successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add the profile');
                    }
                })

    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='lg:pl-80 pb-10'>
           <form onSubmit={handleSubmit(onSubmit)}>
                     <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                </div> 
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
                                <span className="label-text">Education</span>
                            </label>
                            <textarea
                                type="field"
                                placeholder="Add product details"
                                className="input input-bordered w-full max-w-xs"
 
                            />
                        </div>           

                
                <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Your Loaction"
                                className="input input-bordered w-full max-w-xs"
 
                            />
                        </div>
                <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Enter Your Number"
                                className="input input-bordered w-full max-w-xs"
 
                            />
                        </div>
               <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Linkedin Profile</span>
                            </label>
                            <input
                                type="url"
                                placeholder="Enter Your Linkedin Profile"
                                className="input input-bordered w-full max-w-xs"
 
                            />
                        </div>
                <input className='btn w-full mt-4 btn-secondary max-w-xs text-white' type="submit" value="Add Product" />
                    </form> 
        </div>
    );
};

export default MyProfile;