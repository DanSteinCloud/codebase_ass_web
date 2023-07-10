import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = (props) => {
  return (
    
        <div className='blog-card'>
            <div className='card-image'>
                <img src={props.image} 
                     className='img-fluid'
                     alt='pomme' />
            </div>
            <div className='blog-content'>
                <p className='date'>{props.publish_date}</p>
                <h5 className='title'>{props.blog_title}</h5>
                <p className='desc'>{props.blog_description}</p>
                <Link className='button' to="/blog/:id">Lire plus</Link>
            </div>
        </div>
  
  )
}

export default BlogCard