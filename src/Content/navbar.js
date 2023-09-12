import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import PopularFB from '../PopularFB/popularfb';
import Wholesome from '../Wholesome/wholesome';
import WholesomeLove from '../WholesomeLove/wholesomelove';
import TopBrands from '../TopBrands/topbrands';
import TopCategories from '../TopCategories/topcategories';
import TailsWag from '../TailsWag/tailswag';
import FTSC from '../FTSC/ftsc';
import BoostHealth from '../BoostHealth/boosthealth';
import './navbar.css'
import Offers from '../Offers/offers';
import PetGrooming from '../PetGrooming/petgrooming';
import FollowUs from '../FollowUs/followus';
import Footer from '../Footer/footer';
const Content=()=> {
return (
    <>
    
	<div className='carousel'>
	<Carousel>
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src="https://headsupfortails.com/cdn/shop/files/Frame_1171280306_1500x.jpg?v=1694169118"
			alt="Image One"
		/>
		
		</Carousel.Item>
		<Carousel.Item interval={500}>
		<img
			className="d-block w-100"
src="https://headsupfortails.com/cdn/shop/files/Dash-Dog-_1920x400_076dad13-fdd1-4173-b89e-741e224a2b71_1500x.jpg?v=1694410579"
			alt="Image Two"
		/>
		
		</Carousel.Item>
        <Carousel.Item interval={500}>
		<img
			className="d-block w-100"
src="https://headsupfortails.com/cdn/shop/files/pet_food_web_e65a4ca7-3994-4490-abb7-775562df58ed_1500x.jpg?v=1694185808"
			alt="Image Three"
		/>
		
		</Carousel.Item>
	</Carousel>
	</div>
    <img className='saras_message' src="https://headsupfortails.com/cdn/shop/files/Sara_s_message_web_dec3b7da-fd2e-4de4-a99b-e54c8952b906.png?v=1693482531"/>
    
    <PopularFB/>
    <Wholesome/>
    <div>
        <img className='hupi' src="https://headsupfortails.com/cdn/shop/files/1720X320_1.jpg?v=1692870419"/>
    </div>
    <div>
        <img className='hupin' src="https://headsupfortails.com/cdn/shop/files/Frame_1171280144-2_1.png?v=1692877848"/>
    </div>
    <WholesomeLove/>
    <TopBrands/>
    <TopCategories/>
    <div>
        <img className='hupcw' src="https://headsupfortails.com/cdn/shop/files/CAT_WEB_d811ada3-eeea-4837-8851-bddc46c11727.jpg?v=1689586735"/>
    </div>
    <FTSC/>
    <TailsWag/>
    <img className='twd' src="https://headsupfortails.com/cdn/shop/files/beds_web.png?v=1689573185"/>
    <BoostHealth/>
    <img className='hupcw' src="https://headsupfortails.com/cdn/shop/files/grooming_web_1_17fd54f8-894f-4b19-be2b-37e4e058e865.jpg?v=1689590399"/>
    
    <PetGrooming/>
    <img className='hupcw' src="https://headsupfortails.com/cdn/shop/files/web-gif-_1.gif?v=1681127107"/>
    
    <Offers/>
    <FollowUs/>
    <Footer/>
    </>
);
}

export default Content