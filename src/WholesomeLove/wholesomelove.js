import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './wholesomelove.css'

const WholesomeLove = ()=>{
    return(
        <div>
            <h1> The Wholesome Love ❤️ </h1>
            <Swiper

      spaceBetween={40}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
       
      <SwiperSlide>
            <img className='wsimg' src="https://headsupfortails.com/cdn/shop/files/T_05_b577807c-8b03-40dc-8850-87dc29bf300c.png?v=1692878558"/>
      </SwiperSlide>
      <SwiperSlide>
            <img className='wsimg' src="https://headsupfortails.com/cdn/shop/files/T_06.png?v=1692809471"/>
      </SwiperSlide>
      <SwiperSlide>
            <img className='wsimg' src="https://headsupfortails.com/cdn/shop/files/T_01.png?v=1692809471"/>

      </SwiperSlide>
      <SwiperSlide>
            <img className='wsimg' src="https://headsupfortails.com/cdn/shop/files/T_02.png?v=1692809471"/>
      </SwiperSlide>
        <SwiperSlide>
            <img className='wsimg' src="https://headsupfortails.com/cdn/shop/files/T_03.png?v=1692809471"/>
      </SwiperSlide>
      <SwiperSlide>
            <img className='wsimg' src="https://headsupfortails.com/cdn/shop/files/T_04.png?v=1692809471"/>
      </SwiperSlide>
      <SwiperSlide>
            <img className='wsimg' src="https://headsupfortails.com/cdn/shop/files/T_06.png?v=1692809471"/>
      </SwiperSlide>
        <SwiperSlide>
            <img className='wsimg' src="https://headsupfortails.com/cdn/shop/files/T_05_b577807c-8b03-40dc-8850-87dc29bf300c.png?v=1692878558"/>
      </SwiperSlide>
      <SwiperSlide>
            <img className='wsimg' src="https://headsupfortails.com/cdn/shop/files/T_02.png?v=1692809471"/>
      </SwiperSlide>
    </Swiper>
        </div>
    )
}

export default WholesomeLove