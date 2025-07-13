// import './App.css'
import { useState } from 'react'
import Item from './components/Item'
import ItemDate from './components/ItemDate'
import Yellow from './components/Yellow'
import Aqua from './components/Aqua'
import Student from './components/Student'

function App() {
  const [first, setfirst] = useState(0)
  const response = [
    {itemDate:18,
      itemMonth:"april",
      itemYear:2058,
      itemName:"maggi"
    },
    {itemDate:23,
      itemMonth:"november",
      itemYear:1734,
      itemName:"yippe"
    }, 
    {itemDate:23,
      itemMonth:"october",
      itemYear:2085,
      itemName:"foodles"
    },
     {itemDate:29,
      itemMonth:"may",
      itemYear:1208,
      itemName:"chings"
    }
  ]

  let age = 20

  function f1(){
    console.log("Hello");
    
  }
  return ( 
    <>
      <div>
        <Yellow response={response}/>
        <Student data={first} setData={setfirst}/>
      </div>
   
    </>
  )
}

export default App
