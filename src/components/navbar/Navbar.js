import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCart2, BsPersonCircle } from "react-icons/bs"
import { RiCloseLine, RiMenuFill } from "react-icons/ri"
import AuthContext from "../../context/AuthContext";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";

const NavBar = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header>
            <nav className="navbar">
                <Link className="navbar__logo" to="/">
                    <img src={logo} alt="logo" />
                    <span>Readwell</span>
                </Link>
                <div className="navbar__search">
                    <button
                        className="navbar__search-button"
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
                        className="navbar__search-query"
                        onChange={e => setQuery(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter') { navigate(`/search?searchFor=${query}`); } }}
                    />
                </div>

                {user ? (
                    <div className="navbar__right-container">
                        <div className="navbar__about navbar__right--default">
                            <Link to="/about">About</Link>
                        </div>
                        <div className="navbar__cart navbar__right--default">
                            <Link to="/cart"><span className="navbar__right--icon"><BsCart2 /></span></Link>
                        </div>
                        <div className="navbar__user-profile navbar__right--default">
                            <Link to="/user"><span className="navbar__right--icon"><BsPersonCircle /></span></Link>
                        </div>
                    </div>
                ) : (
                    <div className="navbar__right-container">
                        <Link className="navbar__about navbar__right--default" to="/about">About</Link>
                        <Link className="navbar__sign-in navbar__right--default" to="/login">Sign In</Link>
                        <Link className="navbar__sign-up navbar__right--default" to="/register">Sign Up</Link>
                    </div>
                )}

                <div className="navbar__menu-container">
                    {toggleMenu ? (
                        <>
                            <RiCloseLine onClick={() => setToggleMenu(false)} />
                            {user ? (
                                <div className="navbar__menu">
                                    <div className="navbar__about navbar__menu--default">
                                        <Link to="/about">About</Link>
                                    </div>
                                    <div className="navbar__cart navbar__menu--default">
                                        <Link to="/cart"><span className="navbar__right--icon"><BsCart2 /></span></Link>
                                    </div>
                                    <div className="navbar__user-profile navbar__menu--default">
                                        <Link to="/user"><span className="navbar__right--icon"><BsPersonCircle /></span></Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="navbar__menu">
                                    <Link className="navbar__about navbar__menu--default" to="/about">About</Link>
                                    <Link className="navbar__sign-in navbar__menu--default" to="/login">Sign In</Link>
                                    <Link className="navbar__sign-up navbar__menu--default" to="/register">Sign Up</Link>
                                </div>
                            )}
                        </>
                    ) : (
                        <RiMenuFill onClick={() => setToggleMenu(true)} />
                    )}
                </div>
            </nav>
        </header >
    );
};

export default NavBar;