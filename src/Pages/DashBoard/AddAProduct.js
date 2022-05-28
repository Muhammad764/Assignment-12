import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const AddAProduct = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))

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
                const product = {
                    name: data.name,
                    email: data.email,
                    product: data.product,
                    img: img
                }
            
                fetch('http://localhost:5000/product', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Product added successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add the product');
                    }
                })

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
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                type="field"
                                placeholder="Add product details"
                                className="input input-bordered w-full max-w-xs"
 
                            />
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
                                <span className="label-text">Product</span>
                    </label>
                    <select {...register('product')} className="select w-full input-bordered max-w-xs">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }
                    </select>
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
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                <input className='btn w-full btn-secondary max-w-xs text-white' type="submit" value="Add Product" />
                    </form>
        </div>
    );
};

export default AddAProduct;