import { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate, // Import Navigate from react-router-dom
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";
import HotelHome from "./pages/booking_pages/home/HotelHome";
import List from "./pages/booking_pages/list/List";
import Hotel from "./pages/booking_pages/hotel/Hotel";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/messenger" element={!user ? <Home /> : <Messenger />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route
            exact
            path="/"
            element={user ? <Home /> : <Register />} // Redirect to the login page if not logged in
          />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/hotelhome" element={<HotelHome/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
