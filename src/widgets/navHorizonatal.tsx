'use client'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { IconAdjustmentsHorizontal } from '@tabler/icons-react'
import BotaoIcone from '../components/logo/BotaoIcone'
const NavHorizontal = () => {
    return(
        <div className='flex flex-row items-center'>

            <Swiper
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
                640: {slidesPerView:3},
                764: {slidesPerView:4},
                1024: {slidesPerView:6},
                1280: {slidesPerView:9},
            }}
            >
                

            </Swiper>
            <BotaoIcone icone={(
            <IconAdjustmentsHorizontal
          aria-label="Icone Filtros"
          size={20}
          />
          )}>

            Filtros
          </BotaoIcone>
        </div>
    )
}

export default NavHorizontal