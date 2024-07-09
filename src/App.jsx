import { useState } from 'react'
import HeaderDemo from './components/HeaderDemo'
import Content from './components/Content'
import Navi from './components/Navi'
import Footer from './components/Footer'
import RenderShoes from './components/RenderShoes'
import DemoEvent from './components/DemoEvent'
import DemoCss from './components/DemoCss/DemoCss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-red-300'>SADKEK</h1>
      <div className='container mx-auto'>
        <HeaderDemo/>
        <div className='flex h-40'>
        <Navi/>
        <Content/>
      </div>
      <Footer/>
        <h1>Render Shoes</h1>
        <RenderShoes/>
        <hr className='my-3'/>  
        <DemoEvent/>
        <hr className='my-3'/> 
        <DemoCss/>
        <hr className='my-3'/> 
        <h1>Demo Sass</h1>
        <h5 className="demo_sass">Hello BabyRed</h5>
      </div>
      
    </>
  )
}

export default App
