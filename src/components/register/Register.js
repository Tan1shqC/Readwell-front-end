import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import './register.css';
import loginImg from "../../assets/login-sideimg.png";
import logo from "../../assets/logo.png";

const Register = () => {
    const [name, setName] = useState("");
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const { setUser: setUserGlobal } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            /* const res = */ await axios.post("/register", { user, pwd }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

            // add login tokens later
            setUserGlobal(user);

            setName("");
            setUser("");
            setPwd("");
            navigate("/");
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="register-container">
            <div className="register">
                <div className="login-logo">
                    <Link to="/"><img src={logo} alt="logo" /><span>Readwell</span></Link>
                </div>
                <section className="register-main">
                    <h2>REGISTER</h2>
                    <div className="register-divider"></div>
                    <form onSubmit={handleSubmit}>
                        <div>
                        <input type='text' placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div>
                        <input type='text' placeholder="Username" value={user} onChange={e => setUser(e.target.value)} />
                        </div>
                        <div>
                        <input type='password' placeholder="Password" value={pwd} onChange={e => setPwd(e.target.value)} />
                        </div>
                        <button>Register</button>
                    </form>
                </section>
                <p>
                    Already Registered?<br />
                    <div className="register-redirect"><Link to="/login">Sing In</Link></div>
                </p>
            </div>
            <img src={loginImg} alt="sideimg" />
        </div>
    );
};

{/* 
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
<p>
    New User?<br />
    <div className="login-redirect"><Link to="/register">Sign Up</Link></div>
</p>
</div>
<img src={loginImg} alt="sideimg" />
</div>
*/}

export default Register;

