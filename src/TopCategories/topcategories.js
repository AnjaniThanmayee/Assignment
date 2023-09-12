import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './topcategories.css'

const TopCategories=()=>{
    return(
       <>
       <div className='swipercon'>
        <h1 className='ssmh'> Explore Top Categories </h1>
       <Swiper

      spaceBetween={40}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
       
      <SwiperSlide>
        <div>
            <img className='timg' src="https://headsupfortails.com/cdn/shop/files/cat_litter_11.png?v=1688672678"/>
            <h1 className='tssh'>Litter Accessories</h1>
        </div>
      </SwiperSlide>

      <SwiperSlide>
      <div>
            <img className='timg' src="https://headsupfortails.com/cdn/shop/files/bandana_01.png?v=1688672449"/>
            <h1 className='tssh'>Bandanas</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <img className='timg' src="https://headsupfortails.com/cdn/shop/files/bowl_02.png?v=1688672470"/>
            <h1 className='tssh'>Bowls</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <img className='timg' src="https://headsupfortails.com/cdn/shop/files/grooming_03.png?v=1688672496"/>
            <h1 className='tssh'>Grooming</h1>
        </div>
      </SwiperSlide>
        <SwiperSlide>
      <div>
            <img className='timg' src="https://headsupfortails.com/cdn/shop/files/CLH_05.png?v=1688672543"/>
            <h1 className='tssh'>Walk Essentials</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <img className='timg' src="https://headsupfortails.com/cdn/shop/files/mat_06.png?v=1688672567"/>
            <h1 className='tssh'>Beds And Mats</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <img className='timg' src="https://headsupfortails.com/cdn/shop/files/treats_07.png?v=1688672589"/>
            <h1 className='tssh'>Treats</h1>
        </div>
      </SwiperSlide>

        <SwiperSlide>
      <div>
            <img className='timg' src="https://headsupfortails.com/cdn/shop/files/toys_08_8e558200-9626-4bfb-861a-a9db0cad4f18.png?v=1688672620"/>
            <h1 className='tssh'>Toys</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <img className='timg' src="https://headsupfortails.com/cdn/shop/files/T-shirt_09.png?v=1688672636"/>
            <h1 className='tssh'>T-Shirts</h1>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
       </>
        
    )
}

export default TopCategories