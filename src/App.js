import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import Home from "./components/Home";
import { About } from "./components/About";
import NoteState from "./context/notes/NoteState";
import { IconContext } from "react-icons/lib";
import Alerts from "./components/Alerts";
import background from "./components/back.jpg";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserDetails from "./components/UserDetails";
import ContactUs from "./components/ContactUs";
import Welcome from "./components/Welcome";



function App() {
  

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <IconContext.Provider value={{ size: "1.1em" }}>
        <NoteState>
          <Router>
            <NavigationBar />
            <Alerts />
            <div className="container">
              <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Welcome />} path="/iNoteBook" />
                <Route exact element={<About />} path="/about" />
                <Route exact element={<Login />} path="/login" />
                <Route exact element={<Signup />} path="/signup" />
                <Route exact element={<UserDetails />} path="/details" />
                <Route exact element={<ContactUs />} path="/contact" />
              </Routes>
            </div>
          </Router>
        </NoteState>
      </IconContext.Provider>
    </div>
  );
}

export default App;

//Switch --> Routes
/*Instead of 
<Route exact path="/about">
  <About />
</Route>
Now
<Route exact element={<About />} path="/about">
</Route>
*/
