import React from 'react'
// import '../DemoCss/demoCss.css'
import style from '../DemoCss/demoCss.module.css'
const DemoCss = () => {
  return (
    <div className='demo_css'>
      <h2 className={style.h2}>Demo Css in React</h2>
      <p className={style.sub_title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nisi.</p>
    </div>
  )
}

export default DemoCss
