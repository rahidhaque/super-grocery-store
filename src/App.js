import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login/Login';
import Registration from './Pages/Authentication/Registration/Registration';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth'
import ManageItems from './Pages/ManageItems/ManageItems';
import InventoryDetail from './Pages/InventoryDetail/InventoryDetail';
import AddItems from './Pages/AddItems/AddItems';
import MyItems from './Pages/MyItems/MyItems';
import Blogs from './Pages/Blogs/Blogs';




function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/manageitems' element={<RequireAuth>
          <ManageItems></ManageItems>
        </RequireAuth>} >
        </Route>
        <Route path='home/inventory/:_id' element={
          <RequireAuth><InventoryDetail></InventoryDetail></RequireAuth>
        }></Route>
        <Route path='/inventory/:_id' element={
          <RequireAuth><InventoryDetail></InventoryDetail></RequireAuth>
        }></Route>
        <Route path='manageitems/inventory/:_id' element={
          <RequireAuth><InventoryDetail></InventoryDetail></RequireAuth>
        }></Route>
        <Route path='/additems' element={<AddItems></AddItems>}></Route>
        <Route path='/myitems' element={
          <RequireAuth><MyItems></MyItems></RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
