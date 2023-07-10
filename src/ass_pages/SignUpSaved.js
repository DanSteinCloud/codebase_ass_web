import React from 'react'
import BreadCrumb from '../ass_components/BreadCrumb'
import Meta from '../ass_components/Meta'
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <>
    <Meta title={"Login"}/>
    <BreadCrumb title="Page d'inscription"/>
    <div className='wishlist-wrapper assiganto-home-wrapper-2 py-5'>
        <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className="text-center mb-3" >INSCRIPTION</h3>
              <form action="" className="d-flex flex-column gap-15" >
              <div>
                <input type='text' name='nom' className='form-control' placeholder='Nom'></input>
                </div>
                <div>
                <input type='text' name='prenom' className='form-control' placeholder='Prenom'></input>
                </div>
                <div>
                <input type='email' name='email' className='form-control' placeholder='Email'></input>
                </div>
                <div>
                <input type='tel' name='telephone' className='form-control' placeholder='Telephone'></input>
                </div>
                <div className="mt-1">
                <input type='password' name='password' className='form-control' placeholder='Password'></input>
                </div>
                <div>
                  <div className="mt-3 d-flex align-items-center justify-content-center gap-15">
                    <button className="button">Enregistrer</button>
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

export default SignUp