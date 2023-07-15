import * as React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { callApi } from '../helpers/axios_helper';
import { getUser, login, logout } from '../helpers/auth_helper';
import BreadCrumb from '../ass_components/BreadCrumb'
import Meta from '../ass_components/Meta'
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default class SignUp extends React.Component {

  constructor(props) {
      super(props);
      this.state = { user: {}, api: "", buyer:false, seller:false, clicked:false};
      this.shouldCancel = false;
      this.buyer= false;
  }

  seller = false;
  buyer = false;
  clickedSeller = false;
  clickedBuyer = false;

  setBuyer = () => {
    this.buyer = !this.buyer;
    this.clickedBuyer = !this.clickedBuyer;
    this.forceUpdate();
 }
 setSeller = () => {
    this.seller = !this.seller;
    this.clickedSeller = !this.clickedSeller;
    this.forceUpdate();
 }
  componentDidMount() {
      this.getUser();
  }

  login = () => {
      login();
  };

  callApi = () => {
      callApi()
          .then(response => {
              this.setState({ api: response.data });
              toast.success('Api return successfully data, check in section - Api response');
          })
          .catch(error => {
              toast.error(error);
          });
  };

  componentWillUnmount() {
      this.shouldCancel = true;
  }

  logout = () => {
      logout();
  };

  getUser = () => {
      getUser().then(user => {
          if (user) {
              toast.success('User has been successfully loaded from store.');
          } else {
              toast.info('You are not logged in.');
          }

          if (!this.shouldCancel) {
              this.setState({ user });
          }
      });
  };

render() {
   
  return (
    <>
    <Meta title={"Registration"}/>
    <BreadCrumb title='Page de connexion'/>
    <div className='wishlist-wrapper assiganto-home-wrapper-2 py-3'>
    <div className='container-xxl'>
      <div className='row'>
          <div className='col-12'>
            <div className='d-flex flex-column full-auth-card py-2'>
              <div className='login-header d-flex'>
                <div className='login-picto'>
                <img src="images/core_images/assiganto-picto.png" 
                    className="img-fluid" 
                    alt="small-banner"/>
                </div>
                <div className='login-header-signup'>
                    <RiAccountCircleFill className='header-options-icons' to='/login'/>
                    <Link to='/login' className='login-header-singnup-text'>SE CONNECTER</Link>
                </div>
              </div>
              <div className='d-flex login-space py-4'>
              <div className='login-form'>
              <h5 className="text-start mb-3" >CREATION DE COMPTE</h5>
              <form action="" className="d-flex flex-column gap-15" >
                {((!this.buyer && !this.clickedSeller) || (this.buyer))?
                <div className="radio-box form-check pt-2">
                  <input className="form-check-input" type='checkbox' value='' id='' onClick={this.setBuyer}/>
                  <label className="form-check-label" htmlFor="">
                  Créer un compte d'achat
                  </label>
                  <p className='small-text'>Compte qui vous permet d'acheter, de commander <br/>et de vous faire livrer</p>
                </div>:
                <div></div>
                }
                
                {((!this.seller && !this.clickedBuyer) || (this.seller))?
                <div className="radio-box form-check pt-2 mr-4">
                  <input className="form-check-input" type='checkbox' value='' id='' onClick={this.setSeller}/>
                  <label className="form-check-label" htmlFor="">
                  Créer un compte de vente
                  </label>
                  <p className='small-text'>Compte qui vous permet de vendre vos produits, <br/>et d'encaisser</p>
                </div>:
                <div></div>
                }
        {this.buyer ?
        <div>
            <div className="flex-col">
                    <label htmlFor="billFirstName">Nom</label>
                    <input
                        type="text"
                        id="billFirstName"
                        name="billFirstName"
                        placeholder="Nom du compte acheteur"
                        pattern="([A-Z])[\w+.]{1,}"
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="billFirstName">Prenom</label>
                    <input
                        type="text"
                        id="billFirstName"
                        name="billFirstName"
                        placeholder="Prenom"
                        pattern="([A-Z])[\w+.]{1,}"
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="billFirstName">Telephone</label>
                    <input
                        type="phone"
                        id="billFirstName"
                        name="billFirstName"
                        placeholder="Numero de telephone"
                        pattern="([A-Z])[\w+.]{1,}"
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="billFirstName">Email</label>
                    <input
                        type="email"
                        id="billFirstName"
                        name="billFirstName"
                        placeholder="Email du compte acheteur"
                        pattern="([A-Z])[\w+.]{1,}"
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="billFirstName">Adresse</label>
                    <input
                        type="text"
                        id="billFirstName"
                        name="billFirstName"
                        placeholder="Adresse"
                        pattern="([A-Z])[\w+.]{1,}"
                    />
                </div>
            
                <div className="flex-col">
                    <label htmlFor="billFirstName">Mot de passe</label>
                    <input
                        type="password"
                        id="billFirstName"
                        name="billFirstName"
                        placeholder="Email"
                        pattern="([A-Z])[\w+.]{1,}"
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="billFirstName">Confirmer</label>
                    <input
                        type="password"
                        id="billFirstName"
                        name="billFirstName"
                        placeholder="Confirmez le mot de passe"
                        pattern="([A-Z])[\w+.]{1,}"
                    />
                </div>
            <div>
            <div className="mt-3 d-flex align-items-center justify-content-center gap-15">
                <button className="button" onClick={this.login}>Enregister</button>
            </div>
            </div>
        </div> :
        <div></div>}
       
        {this.seller ?
        <div>
        <div className="flex-col">
                    <label htmlFor="billFirstName">Nom</label>
                    <input
                        type="text"
                        id="billFirstName"
                        name="billFirstName"
                        placeholder="Nom du compte vendeur"
                        pattern="([A-Z])[\w+.]{1,}"
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="billFirstName">Prenom</label>
                    <input
                        type="text"
                        id="billFirstName"
                        name="billFirstName"
                        placeholder="Prenom"
                        pattern="([A-Z])[\w+.]{1,}"
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="billFirstName">Telephone</label>
                    <input
                        type="phone"
                        id="billFirstName"
                        name="billFirstName"
                        placeholder="Numero de telephone"
                        pattern="([A-Z])[\w+.]{1,}"
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="billFirstName">Email</label>
                    <input
                        type="email"
                        id="billFirstName"
                        name="billFirstName"
                        placeholder="Email du compte vendeur"
                        pattern="([A-Z])[\w+.]{1,}"
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="billFirstName">Adresse</label>
                    <input
                        type="text"
                        id="billFirstName"
                        name="billFirstName"
                        placeholder="Adresse"
                        pattern="([A-Z])[\w+.]{1,}"
                    />
                </div>
            
                <div className="flex-col">
                    <label htmlFor="billFirstName">Mot de passe</label>
                    <input
                        type="password"
                        id="billFirstName"
                        name="billFirstName"
                        placeholder="Email"
                        pattern="([A-Z])[\w+.]{1,}"
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="billFirstName">Confirmer</label>
                    <input
                        type="password"
                        id="billFirstName"
                        name="billFirstName"
                        placeholder="Confirmez le mot de passe"
                        pattern="([A-Z])[\w+.]{1,}"
                    />
                </div>
        <div>
        <div className="mt-3 d-flex align-items-center justify-content-center gap-15">
            <button className="button" onClick={this.login}>Enregister</button>
        </div>
        </div>
    </div>:
        
            <div>
               
            </div>
           
        }
               
              </form>
              {!this.seller && !this.buyer && !this.clickedBuyer && !this.clickedseller  ?
            <div className="mt-3 d-flex align-items-center justify-content-center" to='/business-registration'>
                <Link className="buttonBusiness" to='/business-registration'>Créer un compte Assiganto business</Link>
            </div>
            :<div></div> 
            }
                </div>
                <div className='seller-pub'>
                <img src="images/assiganto-pub-svg/agro.png" 
                    className="img-fluid pub-image" 
                    alt="small-banner"/>
                </div>
                <div></div>
              </div>

            </div>
          </div>
        </div>
      </div>
        
    </div>
    </>
  )
}
}
