//import Swiper slider 
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SwiperSlide } from 'swiper/react';



import { StyledSwiper } from './styles'

// imrport images slider 
import SliderMac from '../../assets/img/slidemac01.jpg'
import SliderMouse from '../../assets/img/slidemouse01.jpg'
import SliderFone from '../../assets/img/slidefone01.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const Slider = () => {
  

    return (
        <StyledSwiper 
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={300}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper: any) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide><img src={SliderMac} alt="" /></SwiperSlide>
        <SwiperSlide><img src={SliderMouse} alt="" /></SwiperSlide>
        <SwiperSlide><img src={SliderFone} alt="" /></SwiperSlide>

        ...
        
        </StyledSwiper>
            )
        }


