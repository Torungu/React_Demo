import React from 'react'
const DemoEvent = () => {
    
    return (
        <div>
            <h2>DemoEvent</h2>
            <button onClick={()=>{
                alert('on')
            }} className="px-5 py-2 bg-pink-600">Show</button>
            <label className='block'>Name</label>
            <input type="text" name="" id="" placeholder='Your name ?' className='p-2 border rounded-md block mb-10' onChange={(event)=>{
                console.log(event.target.value)
            }} />
        </div>
      )
}

export default DemoEvent
