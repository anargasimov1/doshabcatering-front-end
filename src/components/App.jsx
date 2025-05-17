import { HomePage } from '../pages/homePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/login/Login';
import { Register } from '../pages/register/Register';
import './App.css';
import { About } from '../pages/about/About';
import { Contact } from '../pages/contact/Contact';
import { Privacy } from '../pages/privacy/Privacy';
import { Profile } from '../pages/profile/Profile';
import { Product } from '../pages/products/Product';
import { Faq } from '../pages/faq/Faq';
import { Admin } from '../admin/Admin';
import { SendOtp } from '../pages/sendOtp/SendOtp';
import { UpdatePassword } from '../pages/updatePassword/UpdatePassword';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} path='/' />
        <Route element={<Login />} path='/login' />
        <Route element={<Register />} path='/register' />
        <Route element={<About />} path='about' />
        <Route element={<Contact />} path='/contact' />
        <Route element={<Privacy />} path='/privacy' />
        <Route element={<Profile />} path='/profile' />
        <Route element={<Product />} path='/products' />
        <Route element={<Faq />} path='faq' />
        <Route element={<Admin />} path='admin' />
        <Route element={<SendOtp />} path='sendotp' />
        <Route element={<UpdatePassword />} path='updatepassword' />
      </Routes>
    </BrowserRouter>
  )
}
