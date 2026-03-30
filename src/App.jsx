
import './App.css'
import Banner from './components/Banner/Banner';
import Section from './components/Banner/Section/Section';
import Footer from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
import PricingCard from './components/PricingCard/PricingCard';
import StepCard from './components/StepsCards/StepCard';

function App() {
 

  return (
    <>

  <Navbar></Navbar>
  <Banner></Banner>
  <Section></Section>
  <StepCard></StepCard>
  <PricingCard></PricingCard>
  <Footer></Footer>
 
    </>
  )
}

export default App
