import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import Home from "@/pages/home";
import Login from "./pages/login";
import { SelectedPage } from "@/shared/types";
import Register from "./pages/register";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  const route = useLocation();
  // const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  return (
    <div className=""><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<Login />} />
    <Route path="/sign-up" element={<Register />} />
    </Routes>
    </div>
  );
}

export default App;
