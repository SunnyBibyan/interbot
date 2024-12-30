
import Hero from '@/components/landing page/Hero'
import Features from '@/components/landing page/Features'
import UseCases from '@/components/landing page/UseCases'
import HowItWorks from '@/components/landing page/HowItWorks'
import Testimonials from '@/components/landing page/Testimonials'
import Pricing from '@/components/landing page/Pricing'
import FAQ from '@/components/landing page/FAQ'
import Footer from '@/components/landing page/Footer'
import Header from '@/components/landing page/Header'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <Hero />
      <Features />
      <UseCases />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
     <Footer/>
    </main>
  )
}

