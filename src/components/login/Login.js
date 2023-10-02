import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import axios from "../../api/axios";
import "./Login.css";
import loginImg from "../../assets/login-sideimg.png";
import logo from "../../assets/logo.png";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Login = () => {
    const userNameRef = useRef(null);

    const [userName, setUserName] = useState("");
    const [validUserName, setValidUserName] = useState(false);
    const [focusUserName, setFocusUserName] = useState(false);

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [focusPwd, setFocusPwd] = useState(false);

    const { setUser, setAccessToken } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        userNameRef.current.focus();
    }, []);

    useEffect(() => {
        const status = USER_REGEX.test(userName);
        // console.log(userName);
        // console.log(status);
        if (status) {
            setValidUserName(true);
        }
        else {
            setValidUserName(false);
        }
    }, [userName]);

    useEffect(() => {
        const status = PWD_REGEX.test(pwd);
        // console.log(pwd);
        // console.log(status);
        if (status) {
            setValidPwd(true);
        }
        else {
            setValidPwd(false);
        }
    }, [pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('/auth', JSON.stringify({
                user: userName,
                pwd: pwd
            }), {
                headers: {
                    "Content-Type": "application/json"
                },
            });
            console.log(res);
            setUser(userName);
            setAccessToken(1);
            setUserName("");
            setPwd("");
            navigate(from, { replace: true });
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="login-container">
            <div className="login">
                <div className="login-logo">
                    <Link to="/"><img src={logo} alt="logo" /><span>Readwell</span></Link>
                </div>
                <section className="login-main">
                    <h2>Sign In</h2>
                    <div className="login-divider"></div>
                    <form onSubmit={handleSubmit}>
                        <div>
                        <input
                            type="text"
                            id="userName"
                            ref={userNameRef}
                            value={userName}
                            autoComplete="off"
                            placeholder="Enter Your Username"
                            required
                            onChange={(e) => { setUserName(e.target.value) }}
                            onFocus={(e) => { setFocusUserName(true) }}
                            onBlur={(e) => { setFocusUserName(false) }}
                        />
                        {focusUserName && userName && !validUserName && <p>Invalid UserName</p>}
                        </div>

                        <div>
                        <input
                            type="password"
                            id="pwd"
                            value={pwd}
                            required
                            placeholder="Enter Your Password"
                            onChange={(e) => { setPwd(e.target.value) }}
                            onFocus={(e) => { setFocusPwd(true) }}
                            onBlur={(e) => { setFocusPwd(false) }}
                        />
                        {focusPwd && pwd && !validPwd && <p>Invalid Password</p>}
                        </div>

                        <button disabled={(!validUserName || !validPwd) ? true : false}>
                            LOG IN
                        </button>
                    </form>
                </section>
                <div>
                    New User?<br />
                    <div className="login-redirect"><Link to="/register">Sign Up</Link></div>
                </div>
            </div>
            <img src={loginImg} alt="sideimg" />
        </div>
    );
};

export default Login;
