import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { Product } from '../types';

const Product = () => {

  const {productId} = useParams();
  const {products} = useContext(ShopContext);
  const [productData, setProductData] = useState<Product | null>(null);
  const [image,setImage] = useState<string | null>(null);

  const fetchProductData = async () => {
    products.map((item)=>{
      if(item._id === productId){
        if (item.image && item.image.length > 0) {
          setProductData(item);
          setImage(item.image[0]);
        }
        return null;
      }
    })
  }
    

  useEffect(()=> {
    fetchProductData();  
  },[productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap:12 flex-row sm:flex-row '>

        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row '>
         <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
             {
               productData.image && productData.image.map((item,index) => ( 
                <img onClick={()=>setImage(item)} key={index} src={item} alt={productData.name} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0  cursor-pointer'/>
               ))
             }
         </div>
         <div className='w-full sm:w-80%'>
            <img src={image || ''} alt={productData.name} className='w-full h-auto'/>
         </div>
        </div>

        {/* Product Details */}
        <div className='flex-1'>
         <h1 className='text-2xl font-medium mt-2'>{productData.name}</h1>
         <div className='flex items-center gap-1 mt-2'>
             <img src="" alt="" className="w-3 5" />
             <img src="" alt="" className="w-3 5" />
             <img src="" alt="" className="w-3 5" />
             <img src="" alt="" className="w-3 5" />
             <img src="" alt="" className="w-3 5" />
         </div>
        </div>
      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product


