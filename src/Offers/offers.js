import './offers.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Offers=()=>{
    return(
        <>
        <div className=' offerscon'>
            <div className='offerstext'>
        <h1>Unleash the superhero in your Dog</h1>
            <p>Disney & Marvel Collection at Up To 50% Off</p>
            </div>
        <Swiper
className='offersswiper'
spaceBetween={40}
slidesPerView={5}
onSlideChange={() => console.log('slide change')}
onSwiper={(swiper) => console.log(swiper)}
>
 
<SwiperSlide>
  <div>
      <img className='oimg' src="https://headsupfortails.com/cdn/shop/products/DSC_4438_662570e7-5cdf-4f3a-a66e-13142af6ec04_large.jpg?v=1680288996"/>
  </div>
</SwiperSlide>

<SwiperSlide>
<div>
      <img className='oimg' src="https://headsupfortails.com/cdn/shop/products/DSC_4475_1fd7681a-69b2-44bd-9e06-5dfd47629702_large.jpg?v=1680289053"/>
  </div>
</SwiperSlide>
<SwiperSlide>
<div>
      <img className='oimg' src="https://headsupfortails.com/cdn/shop/products/DSC_4516_7fe18cc7-559f-4b7e-9e60-6d2e78ba59dc_large.jpg?v=1680289035"/>
  </div>
</SwiperSlide>
<SwiperSlide>
<div>
      <img className='oimg' src="https://headsupfortails.com/cdn/shop/products/DSC_1585-Edit_5f95d5e6-41fb-405b-8a3c-42a511bdb7cb_large.jpg?v=1680289218"/>
  </div>
</SwiperSlide>
  <SwiperSlide>
<div>
      <img className='oimg' src="https://headsupfortails.com/cdn/shop/products/DSC_3011_42853443-d82d-48db-bcaf-6daf169256cc_large.jpg?v=1680289406"/>
  </div>
</SwiperSlide>
<SwiperSlide>
<div>
      <img className='oimg' src="https://headsupfortails.com/cdn/shop/products/DSC_4426_d079a868-e017-4eb0-bcca-4a2f5ca86ee7_large.jpg?v=1680288966"/>
  </div>
</SwiperSlide>
<SwiperSlide>
<div>
      <img className='oimg' src="https://headsupfortails.com/cdn/shop/products/DSC_1773-Edit_e70a90d8-a958-4f23-bfaa-5c7e3a01291b_large.jpg?v=1680289237"/>
  </div>
</SwiperSlide>

  <SwiperSlide>
<div>
      <img className='oimg' src="https://headsupfortails.com/cdn/shop/products/DSC_4516_7fe18cc7-559f-4b7e-9e60-6d2e78ba59dc_large.jpg?v=1680289035"/>

  </div>
</SwiperSlide>
<SwiperSlide>
<div>
      <img className='oimg' src="https://headsupfortails.com/cdn/shop/products/DSC_1253-Edit_4046e552-ea11-4966-a70b-58aa244228cd_large.jpg?v=1680289196"/>

  </div>
</SwiperSlide>
</Swiper>
</div>
            </>
    )
}

export default Offers