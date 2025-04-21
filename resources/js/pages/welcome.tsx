import FeaturesSection from '@/components/features-section';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import MarketSection from '@/components/market-section';
import Navbar from '@/components/navbar';
import type { SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Welcome({ pasars }: any) {
    const { auth } = usePage<SharedData>().props;

    // Ensure pasars is always an array
    const marketData = Array.isArray(pasars) ? pasars : [];

    return (
        <>
            <Head title="Welcome" />

            {/* Header/Navbar */}
            <Navbar auth={auth} />

            <main>
                {/* Hero Section */}
                <HeroSection />

                {/* Market Listing */}
                <MarketSection pasars={marketData} />

                {/* Features Section */}
                <FeaturesSection />

                {/* Testimonials */}
                {/* <TestimonialsSection /> */}

                {/* Call to Action */}
                {/* <CTASection /> */}
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
