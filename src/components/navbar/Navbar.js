import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCart2, BsPersonCircle } from "react-icons/bs"
import AuthContext from "../../context/AuthContext";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";

const NavBar = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    return (
        <header>
            <nav className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/"><img src={logo} alt="logo" /><span>Readwell</span></Link>
                </div>
                <div className="navbar-search">
                    <button
                        onClick={(e) => {
                            navigate(`/search?searchFor=${query}`);
                        }}
                    >
                        <img src={search} alt="search-icon" />
                    </button>
                    <input
                        type="text"
                        placeholder="Search here..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        onKeyDown={e => { if(e.key === 'Enter') { navigate(`/search?searchFor=${query}`); } } }
                    />
                </div>

                {user ? (
                    <div className="navbar-sign">
                        <div className="navbar-sign-item">
                            <Link to="/about">About</Link>
                        </div>
                        <div className="navbar-sign-item">
                            <Link to="/cart"><span className="navbar-icon"><BsCart2 /></span></Link>
                        </div>
                        <div className="navbar-sign-item">
                            <Link to="/user"><span className="navbar-icon"><BsPersonCircle /></span></Link>
                        </div>
                    </div>
                ) : (
                    <div className="navbar-sign">
                        <div className="navbar-sign-item">
                            <Link to="/about">About</Link>
                        </div>
                        <div className="navbar-sign-item">
                            <Link to="/login">Sign In</Link>
                        </div>
                        <div className="navbar-sign-item navbar-sign-up">
                            <Link to="/register">Sign Up</Link>
                        </div>
                    </div>
                )}
            </nav>
        </header >
    );
};

export default NavBar;