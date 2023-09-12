import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './popularfb.css'

const PopularFB=()=>{
    return(
       <>
       <div className='swipercon'>
        <h1 className='ssmh'>Popular Food Brands</h1>
       <Swiper

      spaceBetween={40}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
       
      <SwiperSlide>
        <div>
            <img className='ssimg' src="https://headsupfortails.com/cdn/shop/files/schesir_3b0aae6d-3af9-451c-97ed-541bae871572.png?v=1688822844"/>
            <h1 className='ssh'>schesir</h1>
            <p className="ssp">  Up To 30% Off</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
      <div>
            <img className='ssimg' src="https://headsupfortails.com/cdn/shop/files/Nature_s_Hug_7585b6c3-58d7-4f1b-81bc-c356bcdf3bc8.png?v=1688822659"/>
            <h1 className='ssh'>Nature's Hug</h1>
            <p className='ssp'>Up To 10% Off</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <img className='ssimg' src="https://headsupfortails.com/cdn/shop/files/loveabowl_c4fa687b-1e15-494a-b479-76af7d521c50.png?v=1688822723"/>
            <h1 className='ssh'>Loveabowl</h1>
            <p className='ssp'>New Launch</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <img className='ssimg' src="https://headsupfortails.com/cdn/shop/files/farmina_6952747e-c852-47d9-81d9-bc5a44bf54b7.png?v=1688822789"/>
            <h1 className='ssh'>Farmina</h1>
            <p className='ssp'>Flat 10% Off</p>
        </div>
      </SwiperSlide>
        <SwiperSlide>
      <div>
            <img className='ssimg' src="https://headsupfortails.com/cdn/shop/files/pedigree_1025e6e2-c28c-4424-b565-58e9e8f56e88.png?v=1688822575"/>
            <h1 className='ssh'>pedigree</h1>
            <p className='ssp'>Up To 15% Off</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <img className='ssimg' src="https://headsupfortails.com/cdn/shop/files/RC_a6d60e8d-0bad-4552-981f-c3090d1caddc.png?v=1688822905"/>
            <h1 className='ssh'>Royal Canin</h1>
            <p className='ssp'>Up To 30% Off</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <img className='ssimg' src="https://headsupfortails.com/cdn/shop/files/orijen_ed62d40b-9926-42b5-b315-9203d618f8c2.png?v=1688822978"/>
            <h1 className='ssh'>Orijen</h1>
            <p className='ssp'>Fresh Stock</p>
        </div>
      </SwiperSlide>

        <SwiperSlide>
      <div>
            <img className='ssimg' src="https://headsupfortails.com/cdn/shop/files/signature.png?v=1689665344"/>
            <h1 className='ssh'>Signature</h1>
            <p className='ssp'>Up To 30% Offk</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <img className='ssimg' src="https://headsupfortails.com/cdn/shop/files/whiskas_9211efdb-7680-4dd5-8255-3cbd2477c0ca.png?v=1688823114"/>
            <h1 className='ssh'>Whiskas</h1>
            <p className='ssp'>Up To 17% Off</p>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
       </>
        
    )
}

export default PopularFB