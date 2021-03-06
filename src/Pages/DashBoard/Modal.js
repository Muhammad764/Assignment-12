import React from 'react';
import { toast } from 'react-toastify';


const Modal = ({ deletingProduct,refetch,setDeletingProduct }) => {
    const { name, email } = deletingProduct;
    
    const handelDelete = email => {
        fetch(`https://agile-retreat-61796.herokuapp.com/product/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`product: ${name} id deleted`)
                    setDeletingProduct(null)
                    refetch()
            }
        })
    }
    return (
         <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete {name}!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                    <button onClick={()=> handelDelete(email)} className="btn btn-sm btn-error ">Delete</button>
                        <label for="delete-confirm-modal" className="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal;