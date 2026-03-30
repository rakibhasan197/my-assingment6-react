import { CiShoppingCart } from "react-icons/ci";
import './App.css'

function App() {
 

  return (
    <>

     <div className="navbar bg-base-100 max-w-[80%] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" >
       
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
        <li>
        
          <ul className="p-2">
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
             <li>FAQ</li>
          </ul>
        </li>
       
      </ul>
    </div>
    <a className="btn btn-ghost text-blue-500 text-3xl">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5">
      <li className="font-semibold">Products</li>
      <li className="font-semibold">
        Features
      </li>
      <li className="font-semibold">Pricing</li>
      <li className="font-semibold">Testimonials</li>
      <li className="font-semibold">FAQ</li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <CiShoppingCart></CiShoppingCart>

    <p className="font-semibold">Login</p>
    <button className='btn btn-primary rounded-full'>Get Started</button>
  </div>
</div>

      <h1 className='text-6xl'>react project</h1>
 
    </>
  )
}

export default App
