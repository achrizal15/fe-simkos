import * as React from 'react';
import Section from '@/components/core/Section/Section';
import Banner from './_components/Banner';
import data from 'public/templates/beta/data/rooms.json';
import Image from 'next/image';
// https://sailing.thimpress.com/demo-1/

export default function Page() {
    return (
        <>
            <Banner />
            <Section>
                <Section.Heading
                    title='Hotel Master Rooms'
                    description='Contrary to popular belief'
                />
                <section className='grid md:grid-cols-3 grid-cols-2 gap-2 '>
                    {data.map((e, k) => (
                        <div className='h-80 bg-red-500 relative'>
                            <Image
                                src={e.image}
                                alt={e.name}
                                key={e.code}
                                fill
                                sizes='(max-width: 768px) 100vw'
                            />
                        </div>
                    ))}
                </section>
            </Section>
        </>
    );
}
