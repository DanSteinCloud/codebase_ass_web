import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'

const MeilleursVentes = (props) => {
  return (
    <div className='col-4 mb-3'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div to='/product-details'>
                    <img src={props.image1} 
                         alt="meilleurs"
                         className='img-fluid bestseller_image' />
                <Link className='farmers-link'>
                  {props.farmers_number} producteurs
                </Link>
                </div>
                <div className='special-product-content'>
                    <h5 className='brand'>{props.product_category}</h5>
                    <h6 className='title'>{props.product_title}</h6>
                    <ReactStars
                    count={5}
                    size={24}
                    value={props.star_number}
                    edit={false}
                    activeColor="#ffd700"
                    />
                    <p className='price'>
                        <span className='red-p'>
                        {props.price} FCFA 
                        </span> &nbsp;
                        <strike>{props.actual_price} FCFA </strike>
                    </p>
                    <div className='discount-till d-flex flex-column align-items-center gap-10'>
                    <div className='d-flex'>
                        <p className='mb-0'>
                            <b className='p-3'>{props.days} </b>jours
                        </p>
                        <div className='d-flex align-items-center gap-10'>
                            <span className='badge rounded-circle p-3 bg-danger'>0</span>:
                            <span className='badge rounded-circle p-3 bg-danger'>0</span>:
                            <span className='badge rounded-circle p-3 bg-danger'>0</span>
                        </div>
                    </div>
                        <div className='prod-count my-3'>
                                    <p>Disponible: {props.in_stock}</p>
                            <div className='progress'>
                                <div className='progress-bar'
                                     role="progress-bar"
                                     style={{width: "25%"}}
                                     aria-valuenow={props.progress_bar}
                                     aria-valuemin="0"
                                     aria-valuemax="100"
                                     >
                                </div>
                            </div>
                        </div>
                        <div>
                           <Link className='button' to='product-details'>Voir plus</Link>
                        </div>    
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default MeilleursVentes