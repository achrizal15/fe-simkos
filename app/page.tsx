import * as React from 'react';
import Section from '@/components/core/Section/Section';
import Banner from './_components/Banner';
import RoomsSection from './_components/RoomsSection';

// https://sailing.thimpress.com/demo-1/

export default function Page() {

    return (
        <>
            <Banner />
            <Section >
                <Section.Heading
                    title='Hotel Master Rooms'
                    description='Contrary to popular belief'
                />
                <RoomsSection/>
            </Section>
            <Section>
                Tess
            </Section>
        </>
    );
}
