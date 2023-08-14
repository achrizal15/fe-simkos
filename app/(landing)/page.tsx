import * as React from 'react';
import Section from '@/components/core/Section/Section';
import Banner from './_components/Banner';
import RoomsSection from './_components/RoomsSection';
import OfferSection from './_components/OfferSection';

// https://sailing.thimpress.com/demo-1/

export default function Page() {

    return (
        <>
            <Banner />
            <Section>
                <Section.Heading
                    title='Master Rooms'
                    description='Contrary to popular belief'
                />
                <RoomsSection/>
            </Section>
            <OfferSection/>
        </>
    );
}
