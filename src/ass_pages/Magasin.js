import React, {useState} from 'react'
import BreadCrumb from '../ass_components/BreadCrumb'
import Meta from '../ass_components/Meta'
import ReactStars from "react-rating-stars-component"
import { FiList } from "react-icons/fi";
import ProductCard from '../ass_components/ProductCard';
import Colors from '../ass_components/Colors';

const Magasin = () => {
  const [grid, setGrid]=useState(4)
  const gridSetter = (i) => {
    setGrid(i)
  }
  let productCardProps=[
    { id:1,
      image1:'images/detail-images/detail1.jpg',
      image2:'images/detail-images/detail111.jpg',
      product_title:'Soja alvic',
      star_number:4,
      price:650
    },
    { id:2,
      image1:'images/detail-images/detail22.webp',
      image2:'images/detail-images/detail2.jpg',
      product_title:'Pomme de terre',
      star_number:4,
      price:600
    },
    { id:3,
      image1:'images/detail-images/detail3.webp',
      image2:'images/detail-images/detail33.jpeg',
      product_title:'Fruits et legumes',
      star_number:4,
      price:900
    },
    { id:4,
      image1:'images/detail-images/detail4.jpg',
      image2:'images/detail-images/detail44.webp',
      product_title:'Patate douce',
      star_number:4,
      price:700
    }
  ]
  return (
    <>
    <Meta title={"En Stock"}/>
    <BreadCrumb title='PRODUITS'/>
    <div className='store-wrapper assiganto-home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>
                Afficher par categories
              </h3>
              <div>
                <ul className='ps-0'>
                  <li>General</li>
                  <li>Vivrier</li>
                  <li>Transformation</li>
                  <li>Mineral</li>
                </ul>
              </div>
            </div>
            <div className='filter-card mb-3'>
            <h3 className='filter-title'>
                Filtrer Par
              </h3>
              <h5 className="sub-title">Disponibilté</h5>
              <div>
              <div className="form-check">
                <input className="form-check-input" type='checkbox' value='' id=''/>
                <label className="form-check-label" htmlFor="">
                  En stock(7)
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type='checkbox' value='' id=''/>
                <label className="form-check-label" htmlFor="">
                  En rupture(0)
                </label>
              </div>
              </div>
              <h5 className="sub-title">Prix</h5>
              <div className="d-flex align-items-center gap-10">
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="Min." />
                    <label for="floatingInput">De</label>
                </div>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput1" placeholder="Min." />
                    <label for="floatingInput">A</label>
                </div>
              </div>
              <h5 className="sub-title">Types</h5>
              <div>
                <div>
                  <Colors />
                </div>
              </div>
              <h5 className="sub-title">Quantité</h5>
              <div>
              <div className="form-check">
                <input className="form-check-input" type='checkbox' value='' id=''/>
                <label className="form-check-label" htmlFor="color-1">
                  S (2)
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type='checkbox' value='' id=''/>
                <label className="form-check-label" htmlFor="color-2">
                  M (2)
                </label>
              </div>
              </div>

            </div>
            <div className='filter-card mb-3'>
            <h3 className='filter-title'>
                Meilleurs recherches
              </h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-itens-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Céréales
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Grains
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Légumes
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Fruits
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Tubercules
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Minerais
                  </span>
                </div>
              </div>
            </div>
            <div className='filter-card mb-3'>
            <h3 className='filter-title'>
                En livraison gratuite
              </h3>
              <div>
                <div className="random-products mb-3 d-flex">
                 <div className="w-50">
                  <img src="images/detail-images/detail22.webp" className="img-fluid" alt="" />
                 </div>
                 <div className="w-50">
                  <h5>Pomme de terre de campagne</h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value="4"
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <b>650 XOF /Kg</b>
                 </div>
                </div>
                <div className="random-products d-flex">
                 <div className="w-50">
                  <img src='images/detail-images/detail3.webp' className="img-fluid" alt="" />
                 </div>
                 <div className="w-50">
                  <h5>Pomme de terre de campagne</h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value="4"
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <b>650 XOF /Kg</b>
                 </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-9'>
            <div className='filter-sort-grid mb-4'>
              <div className="d-flex justify-content-between align-items-center">
              <div className='d-flex align-items-center gap-10'>
                <p className="mb-0 d-block" style={{"width":"100px"}}>Rechercher :</p>
                <select name="" className="form-control form-select" id="" defaultValue={"DEFAULT"}>
                  <option value="DEFAULT" disabled>
                    Choisir
                  </option>
                  <option value="manual">
                    Promotion
                  </option>
                  <option value="best-selling" selected="selected">
                    Meilleurs ventes
                  </option>
                  <option value="title-ascending">
                    Bon marché
                  </option>
                  <option value="manual">
                    Astreintes
                  </option>
                  <option value="manual">
                    Rares
                  </option>
                </select>
              </div>
              <div className="d-flex align-items-center gap-10">
                <p className="totalproducts mb-0">21 Produits</p>
                <div className="d-flex align-items-center gap-10 grid">
                <FiList className='list-icon fs-3'onClick={()=>gridSetter(3)} />
                <FiList className='list-icon fs-3'onClick={()=>gridSetter(4)} />
                <FiList className='list-icon fs-3'onClick={()=>gridSetter(6)} />
                <FiList className='list-icon fs-3'onClick={()=>gridSetter(12)} />
                </div>
              </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex flex-wrap gap-10">
              {productCardProps.map((item, index) => (
                  <ProductCard {...item} grid={grid} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Magasin