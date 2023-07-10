import React from 'react'
import BreadCrumb from '../ass_components/BreadCrumb'
import Meta from '../ass_components/Meta'
import { AiFillDelete } from "react-icons/ai"
import {Link} from 'react-router-dom'

const Cart = () => {
  return (
    <>
    <Meta title={"Panier"}/>
    <BreadCrumb title="Votre Panier"/>
    <section className='cart-wrapper assiganto-home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                  <h4 className='cart-col-1'>Product</h4>
                  <h4 className='cart-col-2'>Price</h4>
                  <h4 className='cart-col-3'>Quantity</h4>
                  <h4 className='cart-col-4'>Total</h4>
                </div>
                <div className='cart-data mb-2 py-3 d-flex justify-content-between align-items-center'>
                 <div className='cart-col-1 gap-15 d-flex align-items-center'>
                    <div className='w-30'>
                        <img src='images/detail-images/detail4.jpg'
                        className='img-fluid'
                        alt='pomme' />
                    </div>
                    <div className='w-70'>
                        <p>Titre</p>
                        <p>Size: X</p>
                        <p>Color: Y</p>
                    </div>
                 </div>
                 <div className='cart-col-2'>
                    <h5 className='price'>8900 XOF</h5>
                 </div>
                 <div className='cart-col-3'>
                   <input type='number' min={1} max={10} style={{width:'60px'}}name='' id='' className='form-control'/>
                 </div>
                 <div className='cart-col-4 d-flex justify-content-between align-items-center'>
                 <h5 className='price mb-0'>8900 XOF</h5>
                  <AiFillDelete className='text-danger fs-5'/>
                 </div>
                </div> 
                <div className='cart-data mb-2 py-3 d-flex justify-content-between align-items-center'>
                 <div className='cart-col-1 gap-15 d-flex align-items-center'>
                    <div className='w-30'>
                        <img src='images/detail-images/detail4.jpg'
                        className='img-fluid'
                        alt='pomme' />
                    </div>
                    <div className='w-70'>
                        <p>Titre</p>
                        <p>Size: X</p>
                        <p>Color: Y</p>
                    </div>
                 </div>
                 <div className='cart-col-2'>
                    <h5 className='price'>8900 XOF</h5>
                 </div>
                 <div className='cart-col-3'>
                   <input type='number' min={1} max={10} style={{width:'60px'}} name='' id='' className='form-control'/>
                 </div>
                 <div className='cart-col-4 d-flex justify-content-between align-items-center'>
                 <h5 className='price mb-0'>8900 XOF</h5>
                  <AiFillDelete className='text-danger fs-5'/>
                 </div>
                </div>              
            </div>
            <div className='col-12 d-flex justify-content-between py-2 mt-4'>
                <div className='d-flex justify-content-between align-items-baseline'>
                <Link to="/magasin" className="button">Continue shopping</Link>
                </div>
                <div className='d-flex flex-column align-items-end'>
                <h4>Subtotal: 17650 XOF</h4>
                <p>Toutes taxes incluses</p>
                <Link to="/checkout" className="button">Checkout</Link>
                </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Cart