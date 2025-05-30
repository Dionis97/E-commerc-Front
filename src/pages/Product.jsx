import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {
    const {productId} = useParams();
    const {products} = useContext(ShopContext);
    const [productDate , setProductDate] = useState(false);
    const [image , setImage ] = useState('');
    const fetchProductData = async () =>{

        products.map((item) =>{
            if (item._id === productId) {
                setProductDate(item)
                console.log(item);
                setImage(item.image[0])
                return null;
            }
        })
    }

    useEffect(() => {
        fetchProductData();
    },[productId,products])

  return productDate ? (  
    <div className='bord er-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
        {/* Product Date */}
        <div className='flex gap- 12 sm:gap-12 flex-col sm:flex-row'>
            {/* Product Images */}
            <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'> 
                <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                    {
                        productDate.image.map((item,index)=>(
                            <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                        ))
                    }

                </div>
                <div className='w-full sm:w-[80%]'>
                    <img className='w-full h-auto' src={image} alt="" />
                </div>
            </div>
            {/* Products Info */}
            <div className='flex-1'>
                <h1 className='font-medium text-2xl mt-2'>{productDate.name}</h1>
                <div className='flex items-center gap-1 mt-2'>
                    <p className='mt-5 text-gray-500 md:w4/5'>{productDate.description}</p>

                </div>
            </div>
        </div>
    </div>
  ) : <div className=' opacity-0'></div>
}

export default Product