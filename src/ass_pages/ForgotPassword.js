import React from 'react'
import BreadCrumb from '../ass_components/BreadCrumb'
import Meta from '../ass_components/Meta'
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <>
    <Meta title={"Password"}/>
    <BreadCrumb title='Reinitialisation de mot de passe'/>
    <div className='wishlist-wrapper assiganto-home-wrapper-2 py-5'>
        <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className="text-center mb-3" >Reinitialisation de mot de passe</h3>
              <p className="text-center mt-2 mb-3">Entrer le mot de passe associe a votre compte</p>
              <form action="" className="d-flex flex-column gap-15" >
                <div>
                <input type='email' name='email' className='form-control' placeholder='Email'></input>
                </div>
                <div>
                  <div className="d-flex flex-column align-items-center justify-content-center gap-30">
                    <button to="/reset-password"className="button" type="submit">Envoyer</button>
                    <Link to='/login'>Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default ForgotPassword