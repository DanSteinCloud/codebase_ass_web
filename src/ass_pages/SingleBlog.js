import React from 'react'
import BreadCrumb from '../ass_components/BreadCrumb'
import Meta from '../ass_components/Meta'
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from 'react-router-dom';

const SingeBlog = () => {
  return (
    <>
    <Meta title={"Details"}/>
    <BreadCrumb title="Contenu d'article"/>
    <div className='wishlist-wrapper assiganto-home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className="single-blog-card">
                  <Link to="/publications" className="d-flex align-items-center gap-10"><HiOutlineArrowLeft className='fs-4' to="/publications"/>Retour aux articles</Link>
                  <h3 className="title">6000 produits de qualite PRO</h3>
                  <img src="/images/app_images/IMG-20230516-WA0018.jpg" 
                   className="img-fluid rounded-3 w-100 my-4" 
                   alt="main-banner"/>
                   <p>
                   Depuis 2010, Agrifournitures est basé entre Lyon, Grenoble et Chambéry.
                   La région Auvergne-Rhône-Alpes est dynamique et riche en fournisseurs et partenaires avec qui nous avons su bâtir des relations de confiance.
                   Sa position géographique est logistiquement optimale afin de livrer rapidement la France, la Belgique et le Luxembourg avec un seul dépôt.
                   </p>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SingeBlog