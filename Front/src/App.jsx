import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Upload from './Pages/Upload'
import Upload1 from './Pages/Upload1'
import Profile from './Pages/Profile'
import PublicRoutes from './middlewares/PrivateRoutes'
import PrivateRoutes from './middlewares/PublicRoutes'

function App() {

  return (
    <>
      <Navbar />
      <div class="mt-24">
        
          <Routes>
            <Route path="/" element={ <Home/> } />

            <Route element={<PublicRoutes />}>
              <Route path="login" element={ <Signin/> } />
              <Route path="register" element={ <Signup/> } />
            </Route>

            <Route element={<PrivateRoutes />} >
              <Route path="profile" element={ <Profile/> } />
              <Route path="upload" element={ <Upload1/> } />
            </Route>

          </Routes>

        
      </div>
      
    </>
  )
}

export default App
