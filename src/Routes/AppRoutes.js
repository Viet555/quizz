import { Route, Routes, Link } from 'react-router-dom';
import Header from '../component/Header/Header'
import Home from '../component/Home/Home';
import User from '../component/User/User';
import Admin from '../component/Admin/Admin'
import Dashboard from '../component/Admin/Content/Dashboard';
import ManageUser from '../component/Admin/Content/Manageuser';
const AppRoutes = () => {
    return (
        <>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/login" element={<Header />} />
                <Route path="/User" element={<User />} />

                <Route path="/Admin" element={<Admin />} >
                    <Route index element={<Dashboard />} />
                    <Route path="ManageUser" element={<ManageUser />} />
                </Route>

            </Routes>

        </>
    )
}
export default AppRoutes;
//index element Dashboard  macdinh cho vao dash