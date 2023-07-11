import React, {useState} from 'react'
import BreadCrumb from '../ass_components/BreadCrumb'
import Meta from '../ass_components/Meta'
import ProductCard from '../ass_components/ProductCard'
import ReactStars from "react-rating-stars-component"
import ReactImageZoom from 'react-image-zoom'
import { Icon } from '@iconify/react';
import { FiHeart } from "react-icons/fi";
import { Link } from 'react-router-dom'

const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState(true);
    const copyToClipboard = (text) => {
  console.log('text', text)
  var textField = document.createElement('textarea')
  textField.innerText = text
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
}
    const props = { width:600, height: 500, zoomWidth: 600, img:'/images/detail-images/detail4.jpg'}

    let productCardProps=[
        { id:1,
          image1:'images/detail-images/detail1.jpg',
          image2:'images/detail-images/detail111.jpg',
          product_title:'Soja alvic',
          star_number:4,
          price:650
        },
        { id:2,
          image1:'images/detail-images/detail22.webp',
          image2:'images/detail-images/detail2.jpg',
          product_title:'Pomme de terre',
          star_number:4,
          price:600
        },
        { id:3,
          image1:'images/detail-images/detail3.webp',
          image2:'images/detail-images/detail33.jpeg',
          product_title:'Fruits et legumes',
          star_number:4,
          price:900
        },
        { id:4,
          image1:'images/detail-images/detail4.jpg',
          image2:'images/detail-images/detail44.webp',
          product_title:'Patate douce',
          star_number:4,
          price:700
        }
      ]
  return (
    <>
    <Meta title={"Details"}/>
    <BreadCrumb title="Contenu d'article"/>
    <div className='main-product-wrapper assiganto-home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
            <div className='col-6'>
                <div className='main-product-image'>
                 <div>
                  <ReactImageZoom {...props}/>
                 </div>
                </div>
                <div className='other-product-image d-flex'>
                    <div><img src='images/detail-images/detail4.jpg'
                     className='img-fluid'
                     alt='pomme' /></div>
                    <div><img src='images/detail-images/detail4.jpg'
                     className='img-fluid'
                     alt='pomme' /></div>
                    <div><img src='images/detail-images/detail4.jpg'
                     className='img-fluid'
                     alt='pomme' /></div>
                    <div><img src='images/detail-images/detail4.jpg'
                     className='img-fluid'
                     alt='pomme' /></div>
                </div>
            </div>
            <div className='col-6'>
                <div className='main-product-details'>
                    <div className='border-bottom'>
                    <h3 className='title'>Les meilleurs des produits agricole sur les marche</h3>
                    </div>
                    <div className='border-bottom py-3'>
                    <p className='price'>35000 XOF</p>
                    </div>
                    <div className='py-3'>
                        <div className='d-flex align-items-center gap-10 my-2'>
                            <h3 className='product-heading'>Type :</h3>
                            <p className='product-data'>35000 XOF</p>
                        </div>
                        <div className='d-flex align-items-center gap-10 my-2'>
                            <h3 className='product-heading'>Brand :</h3>
                            <p className='product-data'>35000 XOF</p>
                        </div>
                        <div className='d-flex align-items-center gap-10 my-2'>
                            <h3 className='product-heading'>Category :</h3>
                            <p className='product-data'>35000 XOF</p>
                        </div>
                        <div className='d-flex align-items-center gap-10 my-2'>
                            <h3 className='product-heading'>Tags :</h3>
                            <p className='product-data'>35000 XOF</p>
                        </div>
                        <div className='d-flex align-items-center gap-10 my-2'>
                            <h3 className='product-heading'>Availability :</h3>
                            <p className='product-data'>In stock</p>
                        </div>
                        <div className='d-flex flex-column gap-10 mt-2 mb-3'>
                            <h3 className='product-heading'>Size :</h3>
                            <div className='d-flex flex-wrap gap-15'>
                                <span className='badge border-1 bg-wite text-dark border-secondary'>S</span>
                                <span className='badge border-1 bg-wite text-dark border-secondary'>M</span>
                                <span className='badge border-1 bg-wite text-dark border-secondary'>L</span>
                                <span className='badge border-1 bg-wite text-dark border-secondary'>X</span>
                            </div>
                        </div>
                        <div className='d-flex flex-column gap-10 mt-2 mb-3'>
                            <h3 className='product-heading'>Color :</h3>
                            <div className='d-flex flex-wrap gap-15'>In stock</div>
                        </div>
                        <div className='d-flex flex-row align-items-center gap-15 mt-2 mb-3'>
                            <h3 className='product-heading'>Quantity :</h3>
                            <div className='d-flex flex-wrap gap-15'>
                                <input type='number' min={1} max={10} style={{width:'60px'}}name='' id='' className='form-control'/>
                            </div>
                        
                      
                         <button className="button border-0">To card</button>
                         <button className="button signup" type='submit'>Buy it now</button>
                         </div>
                        <div className='d-flex align-items-center gap-15'>
                          <div>
                            <a href=''><Icon icon="ic:outline-compare-arrows" 
                                              color='#777777' 
                                              height='30' 
                                              width='30'
                                              vFlip='true' className='me-2'/>Add to compare</a>
                          </div>
                          <div>
                            <a href=''><FiHeart className='fs-5 me-2'/>Add to wishList</a>
                          </div>
                        </div>
                        <div className='d-flex flex-column gap-10 my-3'>
                            <h3 className='product-heading'>Shipping and returns :</h3>
                            <p className='product-data'>Apres livarison vous avec 48 heures pour soumettre votre<br />
                            reclamation ou eventuellement le retour du produit achete.<br />
                            <b>5-10 business days !</b></p>
                        </div>
                        <div className='d-flex align-items-center gap-10 my-3'>
                            <h3 className='product-heading'>Product Link</h3>
                            <a href='javascript:void(0);' onClick={()=> copyToClipboard("http://localhost:3000/product-details")}>
                              Copy product link
                            </a>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap-10'>
                    <ReactStars
                                    count={5}
                                    size={24}
                                    value={4}
                                    edit={false}
                                    activeColor="#ffd700"
                            />
                            <p className='mb-0 t-review'>( 2 reviews )</p>
                    </div>
                    <a className='review-btn' href='#review'>Write a review</a>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div className='description-wrapper assiganto-home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
            <div className='col-12'>
                <div className='bg-white p-3'>
                <h4>Description</h4>
                <p>Dans la meme categorie Dans la meme categorie Dans la 
                meme categorie Dans la meme categorie Dans la meme categorie Dans la meme categorie</p>
                </div> 
            </div>
            </div>
        </div>
    </div>
    <section className='reviews-wrapper assiganto-home-wrapper-2 py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 id='review'>Notes</h3>
            <div className='review-inner-wrapper'>
                <div className='review-head d-flex justify-content-between align-items-end'>
                    <div>
                        <h4 className='mb-2'>Notes des clients</h4>
                        <div className='d-flex align-items-center gap-10'>
                            <ReactStars
                                    count={5}
                                    size={24}
                                    value={4}
                                    edit={false}
                                    activeColor="#ffd700"
                            />
                            <p className='mb-0'>Based on 2 reviews</p>
                        </div>
                    </div>   
                    {orderedProduct && 
                    <div>
                        <a href='/#' className='text-dark text-decoration-underline '>Ajouter une précision</a>
                    </div>}
                </div>
                <div className='review-form py-4'>
                    <h4>Ecrire une note</h4>
                    <form action="" className='d-flex flex-column gap-15'>
                            <div>
                            <textarea name='' id='' cols='30' rows='4' className='w-100 form-control' placeholder='Votre note ici'></textarea>
                            </div>
                            <div className='d-flex justify-content-end'>
                              <button className='button border-0'>Soumettre la note</button>
                            </div>
                          
                    </form>
                </div>
                <div className='reviews mt-4'>
                    <div className='review'>
                            <div className='d-flex gap-10 align-items-center'>
                                <h6 className='mb-0'>Navdeep</h6>
                                <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={true}
                                        activeColor="#ffd700"
                                />
                            </div>
                            <p className='mt-3'>La echerche a été facile et l'experience d'achat conviviale. La livraison a été ponctuelle avec des mains habilesl pour le rangement a l'entrepot. </p>
                    </div>
                </div>
                <div className='reviews mt-4'>
                    <div className='review'>
                            <div className='d-flex gap-10 align-items-center'>
                                <h6 className='mb-0'>SandyStar</h6>
                                <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={true}
                                        activeColor="#ffd700"
                                />
                            </div>
                            <p className='mt-3'>src/ass_pages/SingleProduct.js
                            Line 8:28:  'setOrderedProduct' is assigned a value but never used </p>
                    </div>
                </div>
            </div> 
          <div>
          </div> 
        </div>
      </div>
      </div>
    </section>
    <section className='featured-wrapper assiganto-home-wrapper-2 py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Dans la meme categorie</h3>
          </div>
          {productCardProps.map((item, index) => (

                <ProductCard {...item}/>

            ))}

        </div>
      </div>
    </section>
    </>
  )
}

export default SingleProduct