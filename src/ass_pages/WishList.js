import React from 'react'
import BreadCrumb from '../ass_components/BreadCrumb'
import Meta from '../ass_components/Meta'
import { AiOutlineClose } from "react-icons/ai";
import ProductCard from '../ass_components/ProductCard';

const WishList = () => {
  return (
    <>
    <Meta title={"Vos favoris"}/>
    <BreadCrumb title='Achats courants'/>
    <div className='wishlist-wrapper assiganto-home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='wishlist-card position-relative'>
            <AiOutlineClose className="position-absolute cross fs-3 img-fluid'"/>
              <div className='product-card-image'>
                <img src='images/detail-images/detail1.jpg' className='w-100 img-fluid'/>
              </div>
              <div className='wishlist-details bg-white px-2 py-3'>
                <h5 className='title'>Ble d'or de la garangue</h5>
                <h6 className='price mb-3 mt-3'>600 XOF</h6>
              </div>
            </div>      
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default WishList