import React from 'react'
import BreadCrumb from '../ass_components/BreadCrumb'
import Meta from '../ass_components/Meta'
import BlogCard from '../ass_components/BlogCard'

const Blogs = () => {
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
  return (
    <>
    <Meta title={"Les blogs"}/>
    <BreadCrumb title='Activités récentes'/>
    <div className='blog-wrapper assiganto-home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3'>
                    <div className='filter-card mb-3'>
                    <h3 className='filter-title'>
                        Afficher par categories
                    </h3>
                    <div>
                        <ul className='ps-0'>
                        <li>Céréales</li>
                        <li>Fruits et légumes</li>
                        <li>Tubercules</li>
                        <li>Minerais</li>
                        </ul>
                    </div>
                    </div>
                    <div className='filter-card mb-3'>
                    </div>
                  
                
                </div>
                <div className='col-9'>
                    <div className='d-flex gap-10'>
                    {blogCardProps.map((item, index) => (
                       <BlogCard  {...item}/>))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Blogs