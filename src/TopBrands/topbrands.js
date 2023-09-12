import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './topbrands.css'
const TopBrands=()=>{
    return(
       <>
       <div className='swipercont'>
        <h1 className='ssmh'>Explore Top Brands </h1>
       <Swiper

      spaceBetween={40}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
       
      <SwiperSlide>
        <div>
            <img className='ssimg' src="https://headsupfortails.com/cdn/shop/files/11_FARMINA.png?v=1688671649"/>
            <h1 className='ssh'>Farmina</h1>
            <p className="ssp">Flat 10% Off</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
      <div>
            <img className='ssimg' src="https://headsupfortails.com/cdn/shop/files/02_HAPPI_DOGGY.png?v=1688671333"/>
            <h1 className='ssh'>Happy Doggy</h1>
            <p className='ssp'>Up To 30% Off</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <img className='ssimg' src="https://headsupfortails.com/cdn/shop/files/01_HUFT_4bf6e6d9-9bd2-4bb7-8725-25b5969df65d.png?v=1688671249"/>
            <h1 className='ssh'>HUFT</h1>
            <p className='ssp'>Up To 30% Off</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <img className='ssimg' src="https://headsupfortails.com/cdn/shop/files/04_ISLE_OF_DOGS.png?v=1688671482"/>
            <h1 className='ssh'>Isle Of Dogs</h1>
            <p className='ssp'>Up To 35% Off</p>
        </div>
      </SwiperSlide>
        <SwiperSlide>
      <div>
            <img className='ssimg' src="https://headsupfortails.com/cdn/shop/files/05_KONG.png?v=1688671503"/>
            <h1 className='ssh'>KONG</h1>
            <p className='ssp'>Up To 15% Off</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <img className='ssimg' src="https://headsupfortails.com/cdn/shop/files/07_SCHESIR.png?v=1688671550"/>
            <h1 className='ssh'>Schesir</h1>
            <p className='ssp'>Up To 30% Off</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <img className='ssimg' src="https://headsupfortails.com/cdn/shop/files/09_CHIP_CHOPS.png?v=1688671597"/>
            <h1 className='ssh'>Chip Chops</h1>
            <p className='ssp'>Up To 10% Off</p>
        </div>
      </SwiperSlide>

        <SwiperSlide>
      <div>
            <img className='ssimg' src="https://headsupfortails.com/cdn/shop/files/11_FARMINA.png?v=1688671649"/>
            <h1 className='ssh'>Farmina</h1>
            <p className='ssp'>Up To 10% Off</p>
        </div>
      </SwiperSlide>
      
    </Swiper>
    </div>
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-6 '>
                    <img className='sdimg' src="https://headsupfortails.com/cdn/shop/files/loveabowl_web.png?v=1689572910" />
                </div>
                <div className='col-6'>
                    <img className='sdimg' src="https://headsupfortails.com/cdn/shop/files/nature_s_hug_web.png?v=1689572925"/>
                </div>
            </div>
        </div>
    </div>
       </>
        
    )
}

export default TopBrands