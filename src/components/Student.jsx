import React from 'react'

function Student(a) {
    function modify() {
        a.setData(a.data + 1)
    }
  return (
    <div>
   <h1>{a.data}</h1> 
   <button onClick={modify}>increment</button>
    </div>
  )
}

export default Student