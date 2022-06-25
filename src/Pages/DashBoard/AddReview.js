import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `https://agile-retreat-61796.herokuapp.com/review`
        fetch(url, {
            method:'POST',
           headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
            .then(result => {
                console.log(result)
                 toast.success('review added successfully')
                reset()
        })
    }
    return (
        <div>
            <div className='lg:pl-80 pl-6'>
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
            </div>
      <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                     <textarea
                                type="text"
                                placeholder="Description"
                                className="input input-bordered w-full max-w-xs"
                          {...register("description", {
                              required: {
                               value: true,
                               message: 'Description is Required'
                         }
                     })}
                />
            </div>
      <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Ratting</span>
                    </label>
                     <textarea
                                type="text"
                                placeholder="Ratting"
                                className="input input-bordered w-full max-w-xs"
                          {...register("ratting", {
                              required: {
                               value: true,
                               message: 'Ratting is Required'
                         }
                     })}
                />
            </div>
      <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                                  <input placeholder='Photo URL' className='input input-bordered w-full max-w-xs' type="text" {...register("img")} /><br/>
                        </div>
      <input className='btn mt-2 mb-6 w-full btn-secondary max-w-xs text-white' type="submit" value="Add Ratting" />
      
      
    </form>

      
        </div>
        </div>
    );
};

export default AddReview;