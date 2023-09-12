import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const BoostHealth=()=>{
    return(
        <div className="tailswagcon">
            <h1>Boost Their Health</h1>
            <p>Explore our supplement section and find the right match for every concern!</p>
            <div>

            <Swiper

      spaceBetween={40}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
       
      <SwiperSlide>
            <img className='wsimg' src="https://headsupfortails.com/cdn/shop/files/drools_01_30ee586e-0fe9-492c-8bd9-cc6ed52d9f9f.png?v=1689573203"/>
      </SwiperSlide>
      <SwiperSlide>
            <img className='wsimg' src="https://headsupfortails.com/cdn/shop/files/huft_02_9365b580-4711-4849-8cfe-724b5073481d.png?v=1689573209"/>
      </SwiperSlide>
      <SwiperSlide>
            <img className='wsimg' src="https://headsupfortails.com/cdn/shop/files/himalaya_03_20c4175a-f5ca-4fd4-825e-fc527cc2507b.png?v=1689573223"/>

      </SwiperSlide>
      <SwiperSlide>
            <img className='wsimg' src="https://headsupfortails.com/cdn/shop/files/virbac_04_042ea276-96a2-448e-b0c5-5ec5ce231979.png?v=1689573236"/>
      </SwiperSlide>
        <SwiperSlide>
            <img className='wsimg' src="https://headsupfortails.com/cdn/shop/files/my_beau_05_46af6101-9b0d-4ce9-8d7e-71692b06029b.png?v=1689573247"/>
      </SwiperSlide>
      
    </Swiper>
        </div>
        </div>
    )
}

export default BoostHealth