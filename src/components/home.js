import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './home.css'

function Home() {

  const [minValue, setMinValue] = useState(0);
	const [maxValue, setMaxValue] = useState(1200);


  return (
    <div className="container-fluid px-0 py-0 bg-dark vh-100">
        <div className='row pb-5'>
          <div className='col-md-6 pt-2 ps-5'>
            <div className='d-block h3 text-white'>
              SHOP OUR LATEST <br/>
              AVAILABLE STOCK HERE
            </div>
            <div className='d-block'>
             <div className='d-flex col-7'>
               <input class="form-control me-2" type="search" placeholder="Enter Search Term (e.g iPhone X, 128GB or A1)" aria-label="Search"/>
               <Button variant="info">Search</Button>
             </div>
            </div>
          </div>
          <div className='col-md-6 pt-0'>
            <img src="/images/laptop-tablet-mobile.png" className='img-fluid' height='327' width='600' alt='av'/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-2 text-white' style={{ backgroundColor: '#21232F' }}>
            <h6>Category</h6>
            <ul className='list-unstyled ps-3'>
              <li>All</li>
              <li>iphone</li>
              <li>Samsung</li>
              <li>ipod</li>
              <li>Macbook</li>
              <li>AirPods</li>
            </ul>
            <h6 className='pt-4'>Price Filter</h6>
            <ul className='list-unstyled ps-3'>
              <li>
              <MultiRangeSlider
			min={0}
			max={1200}
			step={12}
      label='false'
      ruler='false'
      barInnerColor='white'
      barLeftColor='grey'
      barRightColor='grey'
			minValue={minValue}
			maxValue={maxValue}
			onInput={(e) => {
        setMinValue(e.minValue);
        setMaxValue(e.maxValue);
      }}
    ></MultiRangeSlider>
              </li>
              <li className='mt-3'><input type='text' placeholder='Min'/> </li>
              <li className='text-center'>|</li>
              <li><input type='text' placeholder='Max'/></li>
            </ul>
            <h6 className='pt-4'>Storage</h6>
            <ul className='list-unstyled ps-3'>
              <li><input type='radio' name='storazeSizes' id='1'/> <label for='1'>32GB</label></li>
              <li><input type='radio' name='storazeSizes' id='2'/> <label for='2'>64GB</label></li>
              <li><input type='radio' name='storazeSizes' id='3'/> <label for='3'>128GB</label></li>
              <li><input type='radio' name='storazeSizes' id='4'/> <label for='4'>512GB</label></li>
            </ul>
          </div>
          <div className='col-md-10'>
            
          </div>
        </div>
    </div>
  );
}

export default Home;
