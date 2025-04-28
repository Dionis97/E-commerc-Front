import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProducItem from './ProducItem';
import { useTranslation } from 'react-i18next';

const LastestCollcetion = () => {
    const { t } = useTranslation();

  const {products} = useContext(ShopContext);
  const [latestProducts , SetLatestProducts] = useState([]);

  useEffect(() =>{
    SetLatestProducts(products.slice(0,10));
  },[])

  
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
          <Title text1={t("all_models")} text2={t('take_your_pick')}/>
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
         {t( 'let_our_products_make_your_day_easier')}
          </p>
        </div>

        {/* Rendering Products */}

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            latestProducts.map((item, index)=>(
              <ProducItem key={index} id={item._id} image={item.image} name={item.name}/>
            ))
          }
        </div>
    </div>
  )
}

export default LastestCollcetion