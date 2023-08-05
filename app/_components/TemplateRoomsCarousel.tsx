import { H3, H4, H5 } from '@/components/core/Headings/Headings';
import Image from 'next/image';
import React from 'react';
import RoomInterface from 'utils/Interfaces/RoomInterface';
import { BsArrowRight } from 'react-icons/bs';
import { MdLunchDining } from 'react-icons/md';
import { FaShower } from 'react-icons/fa';
import { AiOutlineWifi } from 'react-icons/ai';
const TemplateRoomsCarousel: React.FC<{ room: RoomInterface }> = ({ room }) => {
    return (
        <div className='border mx-1 hover:shadow-lg group transition-all duration-500 hover:scale-[1.005] mb-5 mt-1'>
            <div className='h-60 relative overflow-hidden'>
                <Image
                    src={room.image}
                    alt={room.name}
                    key={room.code}
                    fill
                    sizes='(max-width: 768px) 100vw'
                />
                <div className='absolute transition-all duration-500 top-0 bottom-0 left-0 right-0 group-hover:bg-black/30 flex items-center justify-center text-white text-3xl'>
                    <BsArrowRight className='translate-y-32 group-hover:translate-y-0 duration-500' />
                </div>
            </div>
            <div className='p-5'>
                <H3 className='group-hover:text-purple-600'>{room.name}</H3>
                <p className='line-clamp-2 mt-2'>{room.description}</p>
                <div className='grid grid-cols-8 mt-5 border-b pb-5 group-hover:border-purple-200'>
                    {room.features.map((feature, key) => {
                        switch (feature.icon) {
                            case 'AiOutlineWifi':
                                return (
                                    <div
                                        key={key}
                                        className='feature-icon text-gray-400 text-lg last:border-none first:mr-2 last:pl-4 first:pl-0 px-2 border-r border-gray-400'
                                    >
                                        <AiOutlineWifi />
                                    </div>
                                );
                            case 'MdLunchDining':
                                return (
                                    <div
                                        key={key}
                                        data-pr-tooltip='No notifications'
                                        data-pr-position='bottom'
                                        className='feature-icon text-gray-400 text-lg last:border-none first:mr-2 last:pl-4 first:pl-0 px-2 border-r border-gray-400'
                                    >
                                        <MdLunchDining />
                                    </div>
                                );
                            default:
                                return (
                                    <div
                                        key={key}
                                        className='feature-icon text-gray-400 text-lg last:border-none first:mr-2 last:pl-4 first:pl-0 px-2 border-r border-gray-400'
                                    >
                                        <FaShower />
                                    </div>
                                );
                        }
                    })}
                </div>
                <div className='pt-5'>
                    <p className='mr-2 inline'>Price:</p>
                    <p className='inline text-2xl font-bold'>{room.price.toLocaleString('id-ID',{style:'currency',currency:'IDR'})}</p>
                    <p className='inline'>/night</p>
                </div>
            </div>
        </div>
    );
};

export default TemplateRoomsCarousel;
