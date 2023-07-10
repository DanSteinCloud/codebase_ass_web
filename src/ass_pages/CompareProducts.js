import React from 'react'
import BreadCrumb from '../ass_components/BreadCrumb'
import Meta from '../ass_components/Meta'
import { AiOutlineClose } from "react-icons/ai";
import Colors from '../ass_components/Colors';
import ProductCard from '../ass_components/ProductCard';

const CompareProducts = () => {
  return (
    <>
    <Meta title={"Comparer Produits"}/>
    <BreadCrumb title='COMPARAISON DES PRIX'/>
    <div className='compare-product-wrapper assiganto-home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='compare-product-card position-relative'>
              <AiOutlineClose className="position-absolute cross fs-3 img-fluid'"/>
              <div className='product-card-image'>
                <img src='images/detail-images/detail1.jpg' className='w-100 img-fluid'/>
              </div>
              <div className='compare-product-details'>
                 <h5 className='title'>Ble d'or de la garangue</h5>
                 <h6 className='price mb-3 mt-3'>600 XOF</h6>
                 <div>
                  <div className='product-details'>
                    <h5>Brand :</h5>
                    <p>Havels</p>
                  </div>
                  <div className='product-details'>
                    <h5>Type :</h5>
                    <p>Havels</p>
                  </div>
                  <div className='product-details'>
                    <h5>Availability :</h5>
                    <p>Havels</p>
                  </div>
                  <div className='product-details'>
                    <h5>Color :</h5>
                    <Colors />
                  </div>
                  <div className='product-details'>
                    <h5>Size :</h5>
                    <div className='d-flex gap-10'>
                      <p>S</p>
                      <p>M</p>
                    </div>
                    
                  </div>
                 </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CompareProducts