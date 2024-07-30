import React from 'react'
import './Home.css'
import Carasoule from '../Carasoule/Carasoule';
import Homecard from '../Homecardsec/Homecard';
import Topselltoys from '../Topselltoys/Topselltoys';
import Topbook from '../Topbooks/Topbook';
import Homecard2 from '../Homecard2/Homecard2';
import Moreitem from '../Moreitem/Moreitem';
import Product from '../Product/Product';

const Home = () => {
  return (
    <div className='home'>
      <Carasoule />
      <Homecard />  
      <Topselltoys />
      <Topbook />
      <Homecard2 />
      <Moreitem />
      <Product />
    </div>
  )
}

export default Home
