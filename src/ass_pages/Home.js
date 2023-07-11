import React from 'react'
import {Link} from 'react-router-dom';
import {FiShoppingBag, FiGift} from "react-icons/fi";
import {GiPayMoney} from "react-icons/gi";
import {MdSecurity} from "react-icons/md";
import {FcOnlineSupport} from "react-icons/fc";
import Marquee from "react-fast-marquee";
import BlogCard from '../ass_components/BlogCard';
import ProductCard from '../ass_components/ProductCard';
import MeilleursVentes from '../ass_components/MeilleursVentes';

const Home = () => {
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

  let meilleursVenteCardProps=[
    { id:1,
      image1:'images/bestseller-images/bestseller1.webp',
      product_category:'Grains',
      product_title:'Riz long',
      progress_bar:'75',
      star_number:5,
      price:650,
      actual_price:650,
      days:1,
      in_stock:'50 tonnes',
      farmers_number:12
    },
    { id:2,
      image1:'images/bestseller-images/bestseller8.jpg',
      product_category:'Grains',
      product_title:'Maïs nouveau',
      progress_bar:'50',
      star_number:4,
      price:600,
      actual_price:650,
      days:3,
      in_stock:'80 tonnes',
      farmers_number:21
    },
    { id:3,
      image1:'images/bestseller-images/bestseller4.jpg',
      product_category:'Fruits',
      product_title:'Ananas',
      progress_bar:'75',
      star_number:5,
      price:900,
      actual_price:650,
      days:2,
      in_stock:'12 tonnes',
      farmers_number:13
    }
  ]

  let blogCardProps=[
    { id:1,
      image:'images/blog-images/delivery1.jpg',
      blog_category:'Grains',
      blog_title:'Livraison 24/72h en moyenne',
      blog_description:"Nos articles sont en cours de révision. Le service de newsletter vous tient au courants des échances futures jusqu'en Septembre. De là vous retrouverez toutes nos publications en ligne à nouveau...",
      publish_date:'12/06/23',
      likes:650,
      views:254,
      update_date:'12/06/23'
    },
    { id:2,
      image:'images/blog-images/security1.png',
      blog_category:'Grains',
      blog_title:'Payement 100% securise en ligne',
      blog_description:"Nos articles sont en cours de révision. Le service de newsletter vous tient au courants des échances futures jusqu'en Septembre. De là vous retrouverez toutes nos publications en ligne à nouveau...",
      publish_date:'12/06/23',
      likes:650,
      views:254,
      update_date:'12/06/23'
    },
    { id:3,
      image:'images/blog-images/quality1.jpg',
      blog_category:'Grains',
      blog_title:'6000 produits de qualite PRO',
      blog_description:"Nos articles sont en cours de révision. Le service de newsletter vous tient au courants des échances futures jusqu'en Septembre. De là vous retrouverez toutes nos publications en ligne à nouveau...",
      publish_date:'12/06/23',
      likes:650,
      views:254,
      update_date:'12/06/23'
    },
    { id:4,
      image:'images/blog-images/collectivity1.png',
      blog_category:'Grains',
      blog_title:'Particulier, Pro & Collectivite',
      blog_description:"Nos articles sont en cours de révision. Le service de newsletter vous tient au courants des échances futures jusqu'en Septembre. De là vous retrouverez toutes nos publications en ligne à nouveau...",
      publish_date:'12/06/23',
      likes:650,
      views:254,
      update_date:'12/06/23'
    }
  ]

  return (<>
    <section className='assiganto-home-wrapper-1 py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative'>
              <img src="images/presentation_images/1a Bannière 1920x1200.png" 
                   className="img-fluid rounded-3" 
                   alt="main-banner"/>
              <div className='main-banner-content position-absolute'>
                <h5>ASSIGANTO AGRO</h5>
                <h4>Pour valoriser votre production</h4>
                <p>Production Agricole<br/>Production minière</p>
                <Link className='button' to='/signup'>Commencez ici</Link>
              </div> 
            </div>            
          </div>  
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-center align-items-center'>
            <div className='small-banner position-relative'>
              <img src="images/presentation_images/presentation3.png" 
                   className="img-fluid rounded-3" 
                   alt="small-banner"/>
              <div className='small-banner-content position-absolute'>
                <h4>En croissance</h4>
                <h5>Gains et céréales</h5>
                <p>De 10 kg <br/>à 100 tonnes</p>
              </div> 
            </div>  
            <div className='small-banner position-relative'>
              <img src="images/presentation_images/presentation4.png" 
                   className="img-fluid rounded-3" 
                   alt="small-banner"/>
              <div className='small-banner-content position-absolute'>
              <h4>En Moisson</h4>
                <h5>Matières premières</h5>
                <p>De 10 kg <br/>à 100 tonnes</p>
              </div> 
            </div>
            <div className='small-banner position-relative'>
              <img src="images/presentation_images/presentation5.png" 
                   className="img-fluid rounded-3" 
                   alt="small-banner"/>
              <div className='small-banner-content position-absolute'>
              <h4>En croissance</h4>
                <h5>Tubercules</h5>
                <p>De 10 kg <br/>à 100 tonnes</p>
              </div> 
            </div>  
            <div className='small-banner position-relative'>
              <img src="images/presentation_images/fruits-et-legumes.jpg"
                   className="img-fluid rounded-3" 
                   alt="small-banner"/>
              <div className='small-banner-content position-absolute'>
                <h4>En Moisson</h4>
                <h5>Fruits et légumes</h5>
                <p>De 10 kg <br/>à 100 tonnes</p>
              </div> 
            </div>
            </div>
          </div>         
        </div>        
      </div>
    </section>
    <section className='assiganto-home-wrapper-2 py-4'>    
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              <div className="d-flex align-items-center gap-10">
               <FiShoppingBag className='fs-3'/>
               <div>
                <h6>Achat simplifié</h6>
                <p className='mb-0'>Achater de partout</p>
               </div>
              </div>
              <div className="d-flex align-items-center gap-15">
               <FiGift className='fs-3'/>
               <div>
                <h6>Remise journalière</h6>
                <p className='mb-0'>Plus de 25%</p>
               </div>
              </div>
              <div className="d-flex align-items-center gap-15">
               <GiPayMoney className='fs-3'/>
               <div>
                <h6>Meilleurs prix</h6>
                <p className='mb-0'>Au prix des fermiers</p>
               </div>
              </div>
              <div className="d-flex align-items-center gap-15">
               <MdSecurity className='fs-3'/>
               <div>
                <h6>Paiement sécurisé</h6>
                <p className='mb-0'>100% sécurisé</p>
               </div>
              </div>
              <div className="d-flex align-items-center gap-15">
               <FcOnlineSupport className='fs-3'/>
               <div>
               <h6>Service client 24/7</h6>
                <p className='mb-0'>Aide d'un expert</p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='assiganto-home-wrapper-2 py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
              <div className='d-flex flex-column'>
                <div>
                  <h6>Les céréales</h6>
                <Link className='farmers-link'>
                  10 fermiers
                </Link>
                </div>
                <img src='images/specimen-images/cereale4.jpg' className='img-fluid' alt='produits cerealiers' />
              </div>
              <div className='d-flex flex-column'>
                <div>
                  <h6>Les légumes</h6>
                  <Link className='farmers-link'>
                  14 fermiers
                </Link>
                </div>
                <img src='images/specimen-images/legume1.jpg' className='img-fluid' alt='legumes et fruits' />
              </div>
              <div className='d-flex flex-column'>
                <div>
                  <h6>Les tubercules</h6>
                <Link className='farmers-link'>
                  6 fermiers
                </Link>
                </div>
                <img src='images/specimen-images/tubercule3.webp' className='img-fluid' alt='tubercules' />
              </div>
              <div className='d-flex flex-column'>
                <div>
                  <h6>Matières premières</h6>
                <Link className='farmers-link'>
                  2 fermiers
                </Link>
                </div>
                <img src='images/specimen-images/coton1.jpg'  className='img-fluid' alt='coton' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='featured-wrapper assiganto-home-wrapper-2 py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Disponible chez les détaillants</h3>
          </div>
          {productCardProps.map((item, index) => (

                <ProductCard {...item}/>

            ))}

        </div>
      </div>
    </section>
    
    <section className="special-wrapper assiganto-home-wrapper-2 py-4">
      <div className='container-xxl'>
        <div className='row'>
          <div className=''>
            <div className='col-12'>
              <h3 className='section-heading'>Les offres du moment</h3>
            </div>
            <div className='row'>
              {meilleursVenteCardProps.map((item, index) => (
                   <MeilleursVentes {...item}/>))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='famous-wrapper assiganto-home-wrapper-2 py-4'>
      <div className="container-xxl">
      <div className='row'>
      <div className='col-12'>
              <h3 className='section-heading'>Equipements agricoles</h3>
            </div>
      </div>
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/equipment-images/tete-de-debroussailleuse-multifils-attilina.jpg' 
                   className='img-fluid' 
                   alt='famous' />
              <div className='famous-content position-absolute'>
                <h5>tête de débroussailleuse</h5>
                <h6>multifils-attilina</h6>
                <p>8000 FCFA HT</p>
                <Link className='equipment-link'>
                  Voir détails
                </Link>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
            <img src='images/equipment-images/fil-de-debroussaillage-pro-ellipse-bruit-reduit-25mm-vert-et-noir-blister-de-65m.jpg' 
                   className='img-fluid' 
                   alt='famous' />
              <div className='famous-content position-absolute'>
              <h5>fil de debroussaillage</h5>
                <h6>pro ellipse bruit</h6>
                <p>9000 FCFA HT</p>
                <Link className='equipment-link'>
                  Voir détails
                </Link>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
            <img src='images/equipment-images/piquet-vigne-intermediaire-encoches-lonneo-e01-galva-z275-ep-15-mm-long-180-m-lot-200-unites.jpg' 
                   className='img-fluid' 
                   alt='famous' />
              <div className='famous-content position-absolute'>
                <h5>piquet de vigne</h5>
                <h6>intermediaire</h6>
                <p>11500 FCFA</p>
                <Link className='equipment-link'>
                  Voir détails
                </Link>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
            <img src='images/equipment-images/repulsif-gibier-ultrason-solaire-doxmand-dual-surface-couverte-2-ha.jpg' 
                   className='img-fluid' 
                   alt='famous' />
              <div className='famous-content position-absolute'>
                <h5>ultrason solaire</h5>
                <h6>repulsif de gibier</h6>
                <p>11500 FCFA</p>
                <Link className='equipment-link'>
                  Voir détails
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='marque-wrapper assiganto-home-wrapper-2 py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee>
                <div className='mx-4 w-45'>
                <img src='images/payment-method-icons/floozNoColor.png' 
                   className='img-fluid' 
                   alt='famous' />
                </div>
                <div className='mx-4 w-45'>
                <img src='images/payment-method-icons/paypalNoColor.png' 
                   className='img-fluid' 
                   alt='famous' />
                </div>
                <div className='mx-4 w-45'>
                <img src='images/payment-method-icons/masterNoColor.png' 
                   className='img-fluid' 
                   alt='famous' />
                </div>
                <div className='mx-4 w-45'>
                <img src='images/payment-method-icons/ecoNoColor.png' 
                   className='img-fluid' 
                   alt='famous' />
                </div>
                <div className='mx-4 w-45'>
                <img src='images/payment-method-icons/worldNoColor.png' 
                   className='img-fluid' 
                   alt='famous' />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='blog-wrapper assiganto-home-wrapper-2 py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Actualités récentes</h3>
          </div>
          {blogCardProps.map((item, index) => (
            <div className='col-3'>
                   <BlogCard  {...item}/>
            </div>
          ))} 
        </div>
      </div>
    </section>
  </>
    
  )
}
export default Home