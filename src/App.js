import "./App.css";
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Coach from "./Pages/Coach/Coach";
import Inscription from "./Pages/Inscription/Inscription";
import Newsletter from "./Pages/Newsletter/Newsletter";
import Reservation from "./Pages/Reservation/Reservation";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";

export default function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Navbar/>
                    <div className="contenu">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/coach" element={<Coach/>}/>
                            <Route path="/inscription" element={<Inscription/>}/>
                            <Route path="/newsletter" element={<Newsletter/>}/>
                            <Route path="/reservation" element={<Reservation/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/registration" element={<Registration/>}/>

                        </Routes>
                    </div>
                </div>
            </Router>
        </>

    );
}