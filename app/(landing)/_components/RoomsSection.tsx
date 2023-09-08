'use client';
import React from 'react';
import { Carousel } from 'primereact/carousel';
import style from '../page.module.scss';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import RoomInteraface from 'utils/Interfaces/RoomInterface';
import TemplateRoomsCarousel from './TemplateRoomsCarousel';

const RoomsSection =  ({ rooms }:{rooms:RoomInteraface[]}) => {
    const carouselRef = React.useRef(null);

    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    const onNext = () => {
        if (carouselRef.current) {
            const nextElement = carouselRef.current
                .getElement()
                .querySelector('.p-carousel-next');
            nextElement.click();
        }
    };
    const onPrev = () => {
        if (carouselRef.current) {
            const nextElement = carouselRef.current
                .getElement()
                .querySelector('.p-carousel-prev');
            nextElement.click();
        }
    };
    return (
        <Carousel
            containerClassName={style.roomContainerCarousel}
            ref={carouselRef}
            showIndicators={false}
            footer={
                <div className='mt-5 flex justify-center'>
                    <div className='flex gap-5'>
                        <button onClick={onPrev} className='hover:text-purple-600 text-2xl'>
                            <AiOutlineArrowLeft />
                        </button>
                        <button className='font-bold  hover:text-purple-600'>VIEW ALL ROOMS</button>
                        <button onClick={onNext} className='hover:text-purple-600 text-2xl'>
                            <AiOutlineArrowRight />
                        </button>
                    </div>
                </div>
            }
            value={rooms}
            numVisible={3}
            responsiveOptions={responsiveOptions}
            itemTemplate={(room: RoomInteraface) => <TemplateRoomsCarousel room={room} />}
        ></Carousel>
    );
}
export default RoomsSection