import React,{useState} from 'react'
import Bar from './pages/Bar'
import InvisalignBenefitsSection from './pages/WhyLove'
import HowItWorks from './pages/HowItWorks'
import BeforeAfterSection from './pages/BeforeAfter'
import FAQSection from './pages/FAQ'
import TestimonialsSection from './pages/TestimonialsSection'
import FormSection from './pages/ContactUs'
import Footer from './pages/Footer'
import AboutUs from './pages/AboutUs'
import HeroCarousel from './pages/HeroSection'
import BookingModal from './pages/BookingModal'
import ProcessSection from './pages/Process'


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
 
    <>
        <BookingModal isOpen={isModalOpen} onClose={closeModal} />
       <HeroCarousel openModal={openModal}/>
       <Bar openModal={openModal}/>
       <BeforeAfterSection/>
       <AboutUs/>
       <ProcessSection/>
       <InvisalignBenefitsSection/>
       {/* <HowItWorks/> */}
       <FAQSection/>
       <TestimonialsSection/>
       <FormSection/>
       <Footer/>
    </>
  )
}

export default App