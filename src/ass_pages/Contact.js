import React from 'react'
import BreadCrumb from '../ass_components/BreadCrumb'
import Meta from '../ass_components/Meta'
import {AiOutlineHome, BsInfoCircle, AiOutlinePhone, AiOutlineMail, AiOutlineInfoCircle} from "react-icons/ai";

const Contact = () => {
  return (
    <>
    <Meta title={"Les blogs"}/>
    <BreadCrumb title='Contact'/>
    <div className='contact-wrapper assiganto-home-wrapper-2 py-5'>
      <div className='container-xxl'>
              <div className='row'>
                <div className='col-12'>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.860125824984!2d1.227437874612771!3d6.149480193837586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1f51653f02b%3A0xcc8cea5c0a97cfc6!2sColombe%20de%20la%20Paix!5e0!3m2!1sfr!2sfr!4v1686064421082!5m2!1sfr!2sfr" 
                width="600" 
                height="450" 
                className="border-0 w-100" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
                <div className='col-12 mt-5'>
                  <div className='contact-inner-wrapper d-flex justify-content-between'>
                    <div>
                      <h3 className='contact-title mb-4'>Contact Us</h3>
                      <form action="" className='d-flex flex-column gap-15'>
                        <div>
                          <input type='text' className='form-control' placeholder='Nom'/>
                        </div>
                        <div>
                          <input type='email' className='form-control' placeholder='Email'/>
                        </div>
                        <div>
                          <input type='tel' className='form-control' placeholder='Telephone'/>
                        </div>
                        <div>
                          <textarea name='' id='' cols='30' rows='4' className='w-100 form-control' placeholder='Votre message ici'></textarea>
                        </div>
                        <div>
                          <button className='button border-0'>Envoyer</button>
                        </div>
                      </form>
                    </div>
                    <div>
                      <h3 className='contact-title'>Get in touch with us</h3>
                      <div>
                        <ul className='ps-0'>
                          <li className='mb-3 d-flex align-items-center gap-15'>
                            <AiOutlineHome className='fs-5' />
                            <address className='mb-0'>
                            Assiganto Rue Massina,<br/> 
                              Adidogomé, Lomé
                            </address>
                          </li>
                          <li className='mb-3 d-flex align-items-center gap-15'>
                            <AiOutlinePhone className='fs-5' />
                            <a href="tel:+228 987 87 87 87">+228 987 87 87 87</a>
                          </li>
                          <li className='mb-3 d-flex align-items-center gap-15'>
                            <AiOutlineMail className='fs-5' />
                            <a href="mailto:assiganto@assiganto.com">assiganto@assiganto.com</a>
                          </li>
                          <li className='mb-3 d-flex align-items-center gap-15'>
                            <AiOutlineInfoCircle className='fs-5' />
                            <p className='mb-0'>
                              Lundi - Vendrdi │ 9hr - 18hr
                            </p>
                          </li>
                        </ul>
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
      </div>
    </div>
    </>
  )
}

export default Contact