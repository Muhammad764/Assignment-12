import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();

    const { data: profile, isLoading } = useQuery('profile', () => fetch('https://agile-retreat-61796.herokuapp.com/service').then(res => res.json()))

    const imageStorageKey='558efe71218c8071ccf57782d573ccc7';
    
     const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const profile = {
                    name: data.name,
                    email: data.email,
                    education: data.education,
                    location: data.location,
                    phone:data.number,
                    profile: data.profile,
                    img: img
                }
            
                fetch('https://agile-retreat-61796.herokuapp.com/profile', {
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
            
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='lg:pl-80 pl-6 pb-10'>
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
                            <input
                                type="text"
                                placeholder="Education"
                                className="input input-bordered w-full max-w-xs"
                                {...register("education", {
                                    required: {
                                        value: true,
                                        message: 'education is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                            </label>
                </div>           

                
                <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Location"
                                className="input input-bordered w-full max-w-xs"
                                {...register("location", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}
                            </label>
                </div>
                <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'number is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                            </label>
                </div>
               <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Linkedin</span>
                            </label>
                            <input
                                type="link"
                                placeholder="Your profile"
                                className="input input-bordered w-full max-w-xs"
                                {...register("profile", {
                                    required: {
                                        value: true,
                                        message: 'profile is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.profile?.type === 'required' && <span className="label-text-alt text-red-500">{errors.profile.message}</span>}
                            </label>
                </div>
                 <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input
                                type="file"
                                
                                className="input input-bordered w-full max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
                        </div>
                <input className='btn w-full mt-4 btn-secondary max-w-xs text-white' type="submit" value="Add Product" />
                    </form> 
        </div>
    );
};

export default MyProfile;