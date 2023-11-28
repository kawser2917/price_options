import './App.css'
// import Daisynav from './components/DaisyNav/Daisynav'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
    <Navbar></Navbar>
    {/* <Daisynav></Daisynav> */}
    <h1 className='text-7xl bg-green-400'>Vite + React</h1>
    <PriceOptions></PriceOptions>
    
    </>
  )
}

export default App
