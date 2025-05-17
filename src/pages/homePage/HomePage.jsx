import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import HeroSection from '../../components/heroSection/HeroSection'
import Features from '../../components/features/Features'
import BusinessLunch from '../../components/businessLunch/BusinessLunch'

export const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Features />
            <BusinessLunch />
            <HeroSection />
            <Footer />
        </div>
    )
}
