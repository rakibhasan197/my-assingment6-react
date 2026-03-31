
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner';
import Section from './components/Banner/Section/Section';
import Footer from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
import PricingCard from './components/PricingCard/PricingCard';
import StepCard from './components/StepsCards/StepCard';
import MainSection from './components/MainSection/MainSection';
import TabCart from './components/TabCard/TabCart';

const getProducts = async ()=>{
  const res = await fetch("/products.json")
  return res.json()
}

const productPromise = getProducts();

function App() {
 
 const [activeTab, setActiveTab] = useState('product');
 const [isCount, setIsCount] = useState(false)
 const [carts , setCarts] = useState([])


  return (
    <>

<Navbar carts={carts} isCount={isCount}></Navbar>
  <Banner></Banner>
  <Section></Section>


      <div className="text-center mb-12 md:mb-20 px-4">
  
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
    Premium Digital Tools
  </h2>

  <p className="text-gray-400 mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
    Choose from our curated collection of premium digital products designed to
    boost your productivity and creativity.
  </p>

</div>
      
    
<div className="tabs tabs-box flex justify-center mb-20 bg-transparent gap-2">

  <input
    type="radio"
    name="my_tabs_1"
    className="tab peer checked:bg-red-500 checked:text-white rounded-full w-40"
    aria-label="Products"
    onClick={() => setActiveTab("product")}
    defaultChecked
  />

  <input
    type="radio"
    name="my_tabs_1"
    className="tab peer checked:bg-red-500 checked:text-white rounded-full w-40"
    aria-label={`Carts (${carts.length})`}
    onClick={() => setActiveTab("Cart")}
  />

</div>


 
   { activeTab === "product" ? <MainSection productPromise={productPromise} carts={carts} setCarts={setCarts} setIsCount={setIsCount}></MainSection> : null}
  
  {activeTab === "Cart" ? <TabCart carts={carts} setCarts={setCarts}></TabCart> : null}
  <StepCard></StepCard>
  <PricingCard></PricingCard>
  <Footer></Footer>
 
    </>
  )
}

export default App
