import React from 'react'
import BreadCrumb from '../ass_components/BreadCrumb'
import Meta from '../ass_components/Meta'
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <>
    <Meta title={"Reset"}/>
    <BreadCrumb title='PASSWORD RESET'/>
    <div className='wishlist-wrapper assiganto-home-wrapper-2 py-5'>
    <div className='container-xxl'>
      <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className="text-center mb-3" >Changement de mot de passe</h3>
              <form action="" className="d-flex flex-column gap-15" >
                <div>
                <input type='email' name='password' className='form-control' placeholder='Mot de passe'></input>
                </div>
                <div className="mt-1">
                <input type='password' name='password' className='form-control' placeholder='Confirmez le mot de passe'></input>
                </div>
                <div>
                  <div className="d-flex align-items-center justify-content-center gap-30">
                    <button className="button">Soumettre</button>
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

export default ResetPassword