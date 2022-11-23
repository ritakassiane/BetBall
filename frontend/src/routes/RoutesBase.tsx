import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { ForgotPassword } from '../pages/ForgotPassword';
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { NewGame } from "../pages/NewGame";
import { PerfilHistoric } from '../pages/PerfilHistoric';
import {Bet} from "../pages/Bet";
import { CreateUser } from '../pages/CreateUser';
import {PerfilDeposit } from '../pages/PerfilDeposit';
import { PerfilWithdraw } from '../pages/PerfilWithdraw';
import { Home } from '../pages/Home';
import { PerfilSettings } from '../pages/PerfilSettings';
import { ChangeUsersPassword } from '../pages/ChangeUserPassword';


export const RoutesBase = () => {
   return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/newgame" element={<NewGame />} />
            <Route path="/bet" element={<Bet/>}/>
            <Route path="/user/create" element={<CreateUser/>} />
            <Route path="/perfil/deposit" element={<PerfilDeposit/>} />
            <Route path="/perfil/withdraw" element={<PerfilWithdraw/>} />
            <Route path="/perfil/historic" element={<PerfilHistoric/>}/>
            <Route path="/perfil/settings" element={<PerfilSettings/>} />
            <Route path="/superuser /password" element={<ChangeUsersPassword/>}/>
        </Routes>
     </BrowserRouter>
   )
}
