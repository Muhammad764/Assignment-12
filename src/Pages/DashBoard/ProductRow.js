import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';

const ProductRow = ({ product, index,setDeletingProduct}) => {
    const { name, img, email } = product;
    
    
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                <label onClick={() => setDeletingProduct(product)} for="delete-confirm-modal" className="btn btn-sm btn-outline btn-error"><TrashIcon className='w-6 py-1'></TrashIcon></label>
            </td>
        </tr>
    );
};

export default ProductRow;