import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route index element={<Login />} />
      <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoutes />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
