import React from 'react'
import {FiSend, FiFacebook, FiTwitter, FiYoutube, FiInstagram} from "react-icons/fi";
import {Link} from 'react-router-dom';

const Footer = () => {
  return <>
  <footer className="py-4">
    <div className='container-xxl'>
      <div className='row align-iten-center'>
        <div className='col-5'>
          <div className='footer-top-data d-flex gap-30 align-items-center text-white'>
          <FiSend className='fs-3 footer_send'/>
            <h2 className="mb-0">Souscrire a la newsletter</h2>
            
          </div>
        </div>
        <div className='col-7 text-white'>
          <div className="input-group">
            <input type="text" 
                  className="form-control py-1" 
                  placeholder="Votre adresse mail" 
                  aria-label="Votre adresse mail" 
                  aria-describedby="basic-addon2" />
            <span className="input-group-text p-2" id="basic-addon2">
              Souscrire
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer className="py-4">
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-4'>
          <h4 className='text-white mb-4'>Nous contacter</h4>
          <div>
            <address>
              <p className="text-white fs-5">Siège:
              <p className="text-white fs-6">Assiganto Rue Massina,<br/> 
              Adidogomé, Lomé<br/>
              PinCode:131107</p>
              </p> 
            </address>
            <a href="tel:+228 09 98 53 46" className='mt-3 d-block mb-1 text-white'>+228 09 98 53 46</a>
            <a href="mailto:assiganto@assiganto.tg" className='mt-4 d-block mb-0 text-white'>assiganto@assiganto.tg</a>
          </div>
          <div className='social_icons d-flex align-items-center gap-30 mt-4'>
            <a href="/#" to="/#"><FiFacebook className='fs-4  text-white'/></a>
            <a href="/#" to="/#"><FiTwitter className='fs-4  text-white'/></a>
            <a href="/#" to="/#"><FiYoutube className='fs-4  text-white'/></a>
            <a href="/#" to="/#"><FiInstagram className='fs-4  text-white'/></a>
          </div>
        </div>
        <div className='col-3'>
          <h4 className='text-white mb-4'>Informations</h4>
          <div className="footer-links d-flex flex-column">
            <Link className='text-white py-2 mb-1' to='/shipping-policy'>Informations légales</Link>
            <Link className='text-white py-2 mb-1'>Récolte & Production</Link>
            <Link className='text-white py-2 mb-1' to='/refund-policy'>Conservation & conditionnement</Link>
            <Link className='text-white py-2 mb-1' to='/terms-and-conditions'>Termes et règlements</Link>
          </div>
        </div> 
        <div className='col-3'>
          <h4 className='text-white mb-4'>Comptes</h4>
          <div className="footer-links d-flex flex-column">
            <Link className='text-white py-2 mb-1'>Mon compte Agro Pro</Link>
            <Link className='text-white py-2 mb-1'>Mon compte Particulier</Link>
            <Link className='text-white py-2 mb-1'>Compte Monde</Link>
            <Link className='text-white py-2 mb-1'>Partenaires</Link>
          </div>
        </div>
        <div className='col-2'>
          <h4 className='text-white mb-4'>FAQ</h4>
          <div className="footer-links d-flex flex-column">
            <Link className='text-white py-2 mb-1'>Comment commencer</Link>
            <Link className='text-white py-2 mb-1'>Service livraison</Link>
            <Link className='text-white py-2 mb-1'>A propos de payement</Link>
            <Link className='text-white py-2 mb-1'>Renouvellement</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer className="py-4">
    <div className='row'>
      <div className='col-12'>
        <p className='text-center mb-0 text-white'>
          &copy; {new Date().getFullYear()} Powered by ASSIGANTO SA
        </p>
      </div>
    </div>
  </footer>
  </>
}

export default Footer