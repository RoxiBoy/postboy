import './index.css'
import Navbar from './components/Navbar'
import Requests from './components/Requests'
import Hero from './components/Hero'
import Output from './components/Output'
import { useState } from 'react'

 export default function App() {
  const [response, setResponse] = useState<string>('')

  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex flex-row'>
        <Requests />
        <div className='flex flex-col'>
          <Hero onResponse={setResponse}/>
          <Output  response={response}/>
        </div>
      </div>

    </div>
  )
}
