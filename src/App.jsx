
import './App.css'
import Banner from './components/Banner/Banner';
import Section from './components/Banner/Section/Section';
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
 
    </>
  )
}

export default App
