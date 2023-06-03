import "./App.css";
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Inscription from "./Pages/Inscription/Inscription";
import Reservation from "./Pages/Reservation/Reservation";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import Coach from "./Pages/Coach/Coach";
import AdminRouteGuardian from "./Components/AdminRouteGuardian";
import HoursParams from "./Pages/Admin/HoursParams/HoursParams";
import ReservationList from "./Pages/Admin/ReservationList/ReservationList";
import AddArticle from "./Pages/Admin/AddArticle/AddArticle";
import ListArticles from "./Pages/Admin/ListArticle/ListArticles";
import Footer from "./Components/Footer/Footer";
import UserRouteGuardian from "./Components/UserRouteGuardian";
import NotConnected from "./Pages/NotConnected/NotConnected";
import Journal from "./Pages/Journal/Journal";
import Article from "./Pages/Article/Article";
import ScrollTop from "./Components/ScrollTop";

export default function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <ScrollTop />
                    <Navbar/>
                    <div className="contenu">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/coach" element={<Coach/>}/>
                            <Route path="/inscription" element={<Inscription/>}/>
                            <Route path="/newsletter" element={<Journal/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/registration" element={<Registration/>}/>
                            <Route path="/connected" element={<NotConnected/>}/>
                            <Route path="/article/:id" element={<Article />} />
                            <Route element={<UserRouteGuardian/>}>
                                <Route path="/reservation" element={<Reservation/>}/>
                            </Route>
                            <Route element={<AdminRouteGuardian/>}>
                                <Route path="/admin/horaires" element={<HoursParams/>}/>
                                <Route path="/admin/reservations" element={<ReservationList/>}/>
                                <Route path="/admin/articles" element={<AddArticle/>}/>
                                <Route path="/admin/liste/articles" element={<ListArticles/>}/>
                            </Route>
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            </Router>
        </>

    );
}