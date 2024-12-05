import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
 import Users from './pages/Users'
import Navbar from './components/Navbar'
 import Menu from './components/Menu'

function App() {

  const Layout = () => {
    return(
      <div className="bg-[#2a3447] text-white text-sm h-screen " >
        <Navbar/>
        <div className='flex' >
          <div className="flex w-60 pl-6 border-gray-600 border-r">
            <Menu/>
          </div>
          <div className="w-full px-4 py-1">
            <Outlet/>
          </div>
          </div>
      </div>
    )
  }

  const router = createBrowserRouter([
   {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/:itemTitle',
        element: <Users/>
      },
    ]
   }
  ])
 
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
