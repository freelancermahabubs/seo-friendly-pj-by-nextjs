import Brands from '@/components/Brands';
import Contacts from '@/components/Contacts';
import HowWorks from '@/components/HowWorks';
import Testimonial from '@/components/Testimonial';
import React from 'react';

const Page = () => {
    return (
        <>
            <Testimonial/>
            <Brands/>
            <HowWorks/>
            <Contacts/>
        </>
    );
};

export default Page;