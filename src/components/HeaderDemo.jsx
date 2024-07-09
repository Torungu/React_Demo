import React from 'react'

const HeaderDemo = () => {
  const sinhVien={
    hoTen:'Teo',
    lop:'12A',
    tuoi:18,

  }
  const arrFood=[{
    tenMon:'Mi xao hai san',
    giaTien:25000,
  },{
    tenMon:'Sup cua',
    giaTien:35000,
  },{
    tenMon:'Lau Hadilao',
    giaTien:21000,
  }]
  const classButton='px-5 py-2 bg-green-700 rounded'
  return (
    <div>
      <h2 className='text-white bg-slate-950 p-10'>LIFE IS SAD</h2>
      <p>Tui la {sinhVien.hoTen}</p>
      <p>{sinhVien.tuoi >=18 ? 'Grats ban tren 18':'Sad ban chua du 18'}</p>
      <p>{[<div>Yoooooo</div>,<h1>Ciaoooo~</h1>]}</p>
      <button className={classButton} id={sinhVien.lop}>Log In</button>
      {[arrFood.map((item,index)=>{
        return <div className='bg-yellow-700 grid grid-cols-2 grid-rows-1'>
      <h3>{item.tenMon}</h3>
      <p>{item.giaTien}</p>
    </div>})]}
    </div>
  )
}

export default HeaderDemo
