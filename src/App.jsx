import './App.css'
import MainPanel from './Components/Main/MainPanel'
import SideBar from './Components/SideBar/SideBar'


function App() {

  return (
    <>
    <div className='h-screen w-full flex flex-row gap-5  app-container'>
      <SideBar/>
      <MainPanel/>
    </div>
    </>
  )
}

export default App
