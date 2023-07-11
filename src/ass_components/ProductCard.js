import React from 'react'
import ReactStars from "react-rating-stars-component"
import {IoIosAddCircle} from "react-icons/io"
import { useLocation } from 'react-router-dom';
// import { Icon } from '@iconify/react';
import { FiHeart, FiEye } from "react-icons/fi";
import { MdOutlineCompareArrows } from "react-icons/md";
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
let location = useLocation();
const {grid} = props;
  return (
    <>
        <div className={`${location.pathname == "/magasin" ? `gr-${grid}` : 'col-3' } `}>
        <Link className='product-card position-relative' to="/product-details">
        <div className="wishlist-icon position-absolute">
                        <Link>
                         <FiHeart className='fs-5'/>
                        </Link>
                    </div>
            <div className='product-image' to='/product-details'>
                <img src={props.image1}
                     className='img-fluid'
                     alt='pomme' />
                <img src={props.image2}
                     className='img-fluid'
                     alt='pomme' />
            </div>
            <div className='product-details'>
                <h6 className='brand'>Designation</h6>
                <h5 className='product-title'>{props.product_title}</h5>
                <ReactStars
                    count={5}
                    size={24}
                    value={props.star_number}
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                Riches en fibres et en acides gras poly-insaturés. Elles contribuent ainsi à réguler les lipides dans l'organisme, favorisant ainsi l'absence ou la baisse du cholestérol.
                </p>
                <p className='price'>{props.price} FCFA /Kg</p>
                <Link className='button' to="/cart">Ajouter</Link>
            </div>
            <div className="action-bar position-absolute">
                   
                <div className="d-flex flex-column gap-15">
                   
                    <Link>
                     <MdOutlineCompareArrows className='fs-5'/>
                    </Link>
                    <Link>
                     <FiEye className='fs-5'/>
                    </Link>
                    <Link>
                     <IoIosAddCircle className='fs-5'/>
                    </Link>
                    
                </div>
            </div>
        </Link>
    </div>
    </>
  )
}

export default ProductCard