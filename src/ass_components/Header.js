/* eslint-disable */
import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import { Icon } from '@iconify/react';
import { FiHeart, FiUser, FiShoppingCart, FiList } from "react-icons/fi";
import UserPopover from '../ass_overlay_components/UserPopover.js';


const Header = () => {
  return (<>
  <header className="header-top-strip py-3">
    <div className='container-xxl'>
      <div className='row'>
       <div className='col-6'>
        <p className='text-white mb-0 fs-5 fw-bold'>AGRO</p>
       </div>
       <div className='col-6'>
         <p className='text-end text-white fs-7'>
          Nous contacter&nbsp;: &nbsp;
          <a className='text-white fs-7' href="tel:+228099043462"> +&nbsp;228 09 904 34 62</a>
         </p>
       </div>
      </div>
    </div>
  </header>
  <header className="header-upper py-3">
    <div className='container-xxl'>
      <div className='row align-items-center'>
       <div className='col-2'>
       <img src="images/core_images/logo-transaparent.png" className='logo'
                   alt="logo"/>
       </div>
       <div className='col-5'>
       <div className="input-group">
        <input type="text" 
               className="form-control py-2" 
               placeholder="Que recherchez-vous ?" 
               aria-label="Que recherchez-vous ?" 
               aria-describedby="basic-addon2" />
        <span className="input-group-text p-3" id="basic-addon2">
          <BsSearch className='fs-7'/>
        </span>
        </div>
       </div>
       <div className='col-5'>
        <div className='header-upper-links d-flex align-items-center justify-content-between'>
          <div>
            <Link className='header-options gap-10' to="/compare-products">
              <Icon icon="ic:outline-compare-arrows" 
                    color='#1e4b8a' 
                    height='30' 
                    width='30'
                    vFlip='true' />
              <p className="mb-0">Comparateur <br/>De prix</p>
            </Link>
          </div>
          <div>
            <Link className='header-options gap-10' to="/wishlist">
            <FiHeart className='header-options-icons'/>
              <p className="mb-0">Mes <br/>Favoris </p>
            </Link>
          </div>
          <div>
            <Link className='header-options gap-10'>
              <FiUser className='header-options-icons'/>
              <UserPopover />
            </Link>
          </div>
          <div>
            <Link className='header-options gap-10' to="/cart">
              <FiShoppingCart className='header-options-icons'/>
              <div className='d-flex flex-column gap-10'>
                <span className='badge bg-white shopping-badge'>0</span>
                <p className="mb-0">XOF</p>
              </div>
            </Link>
          </div>
        </div>
       </div>
      </div>
    </div>
  </header>
  <header className="header-bottom py-3">
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='menu-bottom d-flex align-items-center gap-30'>
            <div>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <FiList className='fs-7'/><span className='me-5 d-inline-block'>Tous les produits</span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                  <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                  <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                </ul>
              </div>
            </div>
            <div className='menu-links'>
              <div className='d-flex align-items-center gap-15'>
               <NavLink to="/">Accueil</NavLink>
               <NavLink to="/map">Map</NavLink>
               <NavLink to="/magasin">Stocks</NavLink>
               <NavLink to="basics">Les détaillants</NavLink>
               <NavLink to="basics">Les producteurs</NavLink>
               <NavLink to="basics">Matières premières</NavLink>
               <NavLink to="publications">Publications</NavLink>
               <NavLink to="contact">Contact</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  </>);
}
export default Header