import React from 'react'
import {Link} from 'react-router-dom';
import Popover from './Popover.tsx';

const UserPopover = () => {
  return (
    <>
    <Popover preferredPosition="bottom-center">
                <Popover.Trigger>
                <p className="mb-0">Identifiez-vous <br/>Mon Compte</p>
                </Popover.Trigger>
                <Popover.Content className='account-popover'>
                 <div className='d-flex flex-column py-3'>
                  <div className='d-flex flex-column justify-content-center align-items-center getting-started'>
                    <Link className='button' to='/login'>
                    <Popover.Close>
                        <button className='popover-close'>Identifiez-vous</button>
                    </Popover.Close>   
                    </Link>
                    <div className='d-flex mt-2'>
                        <p className='small-text'>Nouveau client ?</p>&nbsp;
                        <Link className='small-text' to='/signup'>  
                        <Popover.Close>
                        <button className='popover-signup'>Commencez ici</button>
                        </Popover.Close>
                        </Link>
                    </div>
                  </div>

                  <div className='d-flex explorer'>
                   <div className='d-flex flex-column justify-content-begin align-items-center left'>
                   <h5 className=''>Vos listes</h5>
                    <ul className="" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="text-dark" to="">Creer une liste</Link></li>
                      <li><Link className="text-dark" to="">Liste d'achat saisonniere</Link></li>
                      <li><Link className="text-dark" to="">Liste de matiere premiere</Link></li>
                      <li><Link className="text-dark" to="">Explorer les listes</Link></li>
                    </ul>
                   </div>
                   <div className='d-flex flex-column align-items-center right'>
                   <h5 className=''>Votre compte</h5>
                    <ul className="" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="text-dark" to="/signup1">Votre compte</Link></li>
                      <li><Link className="text-dark" to="">Vos commandes</Link></li>
                      <li><Link className="text-dark" to="">Votre liste d'envie</Link></li>
                      <li><Link className="text-dark" to="">Vos recommendations</Link></li>
                      <li><Link className="text-dark" to="">Vos livraisons programmes</Link></li>
                      <li><Link className="text-dark" to="">Adhesions et abonnements</Link></li>
                      <li><Link className="text-dark" to="">Votre compte Assiganto Prime</Link></li>
                      <li><Link className="text-dark" to="">Gerer votre contenue</Link></li>
                      <li><Link className="text-dark" to="">Creer un compte professionel gratuit</Link></li>
                    </ul>
                   </div>
                 </div> 

                 </div>
                </Popover.Content>
              </Popover>
    </>
  )
}

export default UserPopover