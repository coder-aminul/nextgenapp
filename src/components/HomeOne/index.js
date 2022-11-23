import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import Drawer from '../Mobile/Drawer';
import BlogHomeOne from './BlogHomeOne';
import FaqHomeOne from './FaqHomeOne';
import FeaturesHomeOne from './FeaturesHomeOne';
import FooterHomeOne from './FooterHomeOne';
import HeroHomeOne from './HeroHomeOne';
import HomeOneHeader from './HomeOneHeader';
import PricingHomeOne from './PricingHomeOne';
import ProjectHomeOne from './ProjectHomeOne';
import ServicesHomeOne from './ServicesHomeOne';
import TeamHomeOne from './TeamHomeOne';
import TestimonialHomeOne from './TestimonialHomeOne';
import TrafficHomeOne from './TrafficHomeOne';

function HomeDark() {
    const [drawer, drawerAction] = useToggle(false);
    const [darkMode, setDarkMode] = useToggle(false);

    useEffect(() => {
        document.body.classList.add('appie-init');
        if (darkMode) {
            document.body.classList.add('appie-dark');
        } else {
            document.body.classList.remove('appie-dark');
        }
        return () => {
            document.body.classList.remove('appie-dark');
        };
    });

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HomeOneHeader
                className={darkMode ? 'appie-header-area-dark' : ''}
                dark={darkMode}
                darkEnable
                changeMode={setDarkMode.toggle}
                action={drawerAction.toggle}
            />
            <HeroHomeOne className={darkMode ? 'appie-hero-area-dark' : ''} />
            <ServicesHomeOne className={darkMode ? 'appie-service-area-dark' : ''} />
            <FeaturesHomeOne className={darkMode ? 'appie-features-area-dark' : ''} />
            <TrafficHomeOne className={darkMode ? 'appie-traffic-area-dark' : ''} />
            <TestimonialHomeOne />
            <TeamHomeOne className={darkMode ? 'appie-team-area-dark' : ''} />
            <PricingHomeOne className={darkMode ? 'appie-pricing-area-dark' : ''} />
            <FaqHomeOne className={darkMode ? 'appie-faq-area-dark' : ''} />
            <BlogHomeOne className={darkMode ? 'appie-blog-area-dark' : ''} />
            <ProjectHomeOne />
            <FooterHomeOne className={darkMode ? 'appie-footer-area-dark' : ''} />
            <BackToTop />
        </>
    );
}

export default HomeDark;
