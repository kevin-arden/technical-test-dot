import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./views/homepage";
import Profile from "./views/profile";
import Login from "./views/login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Router>
      <div>
        <Header loginState={isLogin} setLoginState={setIsLogin} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute isLogin={isLogin}>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

function PrivateRoute({ isLogin, children }) {
  return isLogin ? children : <Navigate to="/login" />;
}

export default App;
