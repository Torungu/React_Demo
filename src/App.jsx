import { useState } from 'react'
import HeaderDemo from './components/HeaderDemo'
import Content from './components/Content'
import Navi from './components/Navi'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-red-300'>SADKEK</h1>
      <div className='container text-center mx-auto'>
        <HeaderDemo/>
      <div className='flex h-40'>
        <Navi/>
        <Content/>
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default App
