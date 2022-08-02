import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { api } from "./api/api";

function App() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    async function autoLogin() {
      try {
        const parsedToken = JSON.parse(token);

        const response = await api.post(
          "/user/autologin",
          {},
          {
            headers: {
              auth: parsedToken,
            },
          }
        );

        setUser(response.data.user);
        navigate("/dashboard");
      } catch (error) {
        localStorage.removeItem("@TOKEN");
      }
    }

    if (token) {
      autoLogin();
    }
  }, []);

  async function userCreate(formData, setLoading, setError, callback) {
    try {
      setLoading(true);
      setError(false);

      const response = await api.post("/user/", formData);

      if (callback) {
        callback(response.data);
      }
    } catch (error) {
      setError(error.response.data.error);

      setTimeout(() => {
        setError(false);
      }, 3000);
    } finally {
      setLoading(false);
    }
  }

  async function userLogin(formData, setLoading, setError, callback) {
    try {
      setLoading(true);
      setError(false);
      const response = await api.post("/user/login", formData);

      setUser(response.data.user);

      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));

      navigate("/dashboard");

      if (callback) {
        callback(response.data);
      }
    } catch (error) {
      setError(error.response.data.error);

      setTimeout(() => {
        setError(false);
      }, 3000);
    } finally {
      setLoading(false);
    }
  }

  //Função de logout resentando o estado e localstorage
  function userLogout(callback) {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    navigate("/");

    //Callback que será utilizado para lidar com o problema de hierarquia de providers
    if (callback) {
      callback();
    }
  }
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login userLogin={userLogin} />} />
        <Route path="/dashboard" element={<Dashboard />} userLogout={userLogout} />
        <Route path="/register" element={<Register userCreate={userCreate} />} />
      </Routes>
    </div>
  );
}

export default App;
