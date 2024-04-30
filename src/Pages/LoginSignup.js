import React, { useState } from "react";
import './LoginSignup.css';
import user_icon from '../Components/Assets/person.png';
import email_icon from '../Components/Assets/email.png';
import password_icon from '../Components/Assets/password.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");
    // State to manage checkbox values for signup
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [receiveNewsletter, setReceiveNewsletter] = useState(false);

    return (
        <div className='container'>
            <div className="announcement">
                <h2>Announcements</h2>
                <p>No new announcements at the moment.</p>
            </div>
            <div className='login-box'>
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action === "Sign Up" && (
                        <>
                            <div className="input">
                                <img src={user_icon} alt="" />
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="input">
                                <img src={email_icon} alt="" />
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input">
                                <img src={password_icon} alt="" />
                                <input type="password" placeholder="Password" />
                            </div>
                            <div className="checkbox-container">
                                <div>
                                    <input
                                        type="checkbox"
                                        id="acceptTerms"
                                        checked={acceptTerms}
                                        onChange={() => setAcceptTerms(!acceptTerms)}
                                    />
                                    <label htmlFor="acceptTerms">I have read the terms of KVKK and I accept it.</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="newsletter"
                                        checked={receiveNewsletter}
                                        onChange={() => setReceiveNewsletter(!receiveNewsletter)}
                                    />
                                    <label htmlFor="newsletter">I allow my data to be transfered to UBYS.</label>
                                </div>
                            </div>
                        </>
                    )}
                    {action === "Login" && (
                        <>
                            <div className="input">
                                <img src={email_icon} alt="" />
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input">
                                <img src={password_icon} alt="" />
                                <input type="password" placeholder="Password" />
                            </div>
                            <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
                        </>
                    )}
                </div>
                <div className="submit-container">
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Signup</div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
