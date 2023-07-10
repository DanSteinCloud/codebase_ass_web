import React from 'react'
import BreadCrumb from '../ass_components/BreadCrumb'
import Meta from '../ass_components/Meta'
import { IoIosArrowBack } from "react-icons/io"
import {Link} from 'react-router-dom'

const Checkout = () => {
  return (
    <>
    <Meta title={"Checkout"}/>
    <BreadCrumb title="Payement"/>
    <section className='checkout-wrapper assiganto-home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
            <div className='col-7'>
                <div className='checkout-left-data'>
                    <h3 className='website-name'>Assiganto</h3>
                    <nav id='detailnavigation' aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link className='text-dark total-price'  to='#'>Cart &nbsp;</Link></li>
                            <li className="breadcrumb-item active" aria-current="page"><Link className='text-dark total-price' to='#'>Information &nbsp;</Link></li>
                            <li className="breadcrumb-item"><Link className='text-dark total-price' to='#'>Shipping &nbsp;</Link></li>
                            <li className="breadcrumb-item"><Link className='text-dark total-price' to='#'>Paiement &nbsp;</Link></li>
                        </ol>
                    </nav>
                    <h4 className='title total'>Contact Informations</h4>
                    <p className='user-details total'> Dundj Himmels (dj.himmels@gmail.com)</p>
                    <h4 className='mb-3'>Shipping Adress</h4>
                    <form action='' className='d-flex flex-wrap gap-15 justify-content-between'>
                      <div className='w-100'>
                        <select name='' className='form-control form-select' id=''>
                            <option value="" selected disabled>Pays</option>
                            <option>Togo</option>
                            <option>Ghana</option>
                            <option>Cote d'ivoire</option>
                        </select>
                      </div>
                      <div className='w-100'>
                        <input type='text' className='form-control' placeholder='Region'/>
                      </div>
                      <div className='flex-grow-1'>
                        <input type='text' className='form-control' placeholder='Nom'/>
                      </div>
                      <div className='flex-grow-1'>
                        <input type='text' className='form-control' placeholder='Prenom'/>
                      </div>
                      <div className='w-100'>
                        <input type='text' className='form-control' placeholder='Adresse'/>
                      </div>
                      <div className='w-100'>
                        <input type='text' className='form-control' placeholder='Appartement'/>
                      </div>
                      <div className='flex-grow-1'>
                      <select name='' className='form-control form-select' id=''>
                            <option value="" selected disabled>Region</option>
                            <option>Maritime</option>
                            <option>Plateau</option>
                            <option>Kara</option>
                            <option>Centrale</option>
                            <option>Savane</option>
                        </select>
                      </div>
                      <div className='flex-grow-1'>
                      <select name='' className='form-control form-select' id=''>
                            <option value="" selected disabled>Ville</option>
                            <option>Lome</option>
                            <option>Kara</option>
                            <option>Sokode</option>
                        </select>
                      </div>
                      
                      <div className='flex-grow-2'>
                        <input type='text' className='form-control' placeholder='Zip Code'/>
                      </div>
                      <div className='w-100'>
                        <div className='d-flex justify-content-between align-items-center'>
                        <Link to='/cart' className='text-dark'><IoIosArrowBack className='me-2'/>Return to Cart</Link>
                        <Link className='button'><a>Continuer le Payement</a></Link>
                        </div>
                      </div>
                    </form>
                </div>            
            </div>
            <div className='col-5'>
                    <div className='d-flex border-bottom py-4'>
                       <div className='d-flex mb-2 gap-10 align-items-center'>
                        <div className='w-75 d-flex gap-10'>
                            <div className='w-25 position-relative'>
                                <span style={{"top":"-10px", "right":"2px"}}
                                      className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span>
                                <img src='images/detail-images/detail4.jpg'
                                    className='img-fluid'
                                    alt='pomme' />
                            </div>
                            <div>
                                <h5 className='total-price'>
                                  fdxgfvhb
                                </h5>
                                <p className='total-price'>s / #hgj</p>
                            </div>
                        </div>
                        <div className='flex-grow-1'>
                            <h5 className='total'>6750 XOF</h5>
                        </div>
                       </div>
                    </div>
                    <div className='d-flex border-bottom py-4'>
                       <div className='d-flex mb-2 gap-10 align-items-center'>
                        <div className='w-75 d-flex gap-10'>
                            <div className='w-25 position-relative'>
                                <span style={{"top":"-10px", "right":"2px"}}
                                      className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span>
                                <img src='images/detail-images/detail4.jpg'
                                    className='img-fluid'
                                    alt='pomme' />
                            </div>
                            <div>
                                <h5 className='total-price'>
                                  fdxgfvhb
                                </h5>
                                <p className='total-price'>s / #hgj</p>
                            </div>
                        </div>
                        <div className='flex-grow-1'>
                            <h5 className='total'>6750 XOF</h5>
                        </div>
                       </div>
                    </div>
                    <div className='border-bottom py-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='total'>Subtotal</p>
                            <p className='total-price'>18650 XOF</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='mb-0 total'>Shipping</p>
                            <p className='mb-0 total-price'>18650 XOF</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                      <h4 className='total'>Total</h4>
                      <h5 className='total-price'>18650 XOF</h5>
                    </div>
                </div>            
            </div>
      </div>
    </section>
    </>
  )
}

export default Checkout