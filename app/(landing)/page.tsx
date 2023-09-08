import * as React from 'react';
import Section from '@/components/core/Section/Section';
import Banner from './_components/Banner';
import RoomsSection from './_components/RoomsSection';
import OfferSection from './_components/OfferSection';
import { fetchHeader } from '@/utils/fetching/fetch';

// https://sailing.thimpress.com/demo-1/
const getRooms = async () => {
    const { headers } = await fetchHeader()
    const res = await fetch(`${process.env.NEXT_PUBLIC_FE_API_URL}/rooms`, {
        headers
    })
    if (res.status != 200) {
        throw new Error(res.statusText)
    }
    return await res.json()
}
const Page = async () => {
    const {data:rooms} = await getRooms()
    return (
        <>
            <Banner />
            <Section>
                <Section.Heading
                    title='Master Rooms'
                    description='Contrary to popular belief'
                />
                <RoomsSection rooms={rooms} />
            </Section>
            <OfferSection />
        </>
    );
}
export default Page