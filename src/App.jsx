import React, { useEffect, useState } from "react";
import "./css/public.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Register } from "./pages/LoginAndRegister/Register";
import { Login } from "./pages/LoginAndRegister/Login";
import { Main } from "./pages/Main/Main";
import { SetProfile } from "./components/Profile/SetProfile";
import { PrivateRoute } from './pages/PrivateRoute/PrivateRoute';

export default function App() {
  const [token, setToken] = useState(null);

  return (
    // 우선 로그인으로 진입, 로그인 하고나면 나머지 라우팅 가능하도록 설정
    <>
        <Routes>
          {/* Public으로 접근 가능한 경로 */}
          <Route path="/" element={<Login setToken={setToken} /> } />
          <Route path="/register" element={<Register />} />

          {/* Private으로 접근 가능한 경로 */}
          <Route path="/main" element={<PrivateRoute authenticated={token} component={<Main />}/>}/>
          <Route path="/Setprofile" element={<PrivateRoute authenticated={token} component={<SetProfile />}/>}/>
          
          {/* default 경로 설정 */}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    </>
  );
}