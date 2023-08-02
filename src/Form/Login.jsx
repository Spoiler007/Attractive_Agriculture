import React from 'react'
import { useState } from 'react';
import './login.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

const Login = (props) => {

    const [inpval, setinpval] = useState({
        name: " ",
        email: " ",
        password: " ",
        confirmpassword: " "

    })
     console.log(inpval)
    const getdata = (e) => {

        // console.log(e.target.value)

        const { value, name } = e.target;
        console.log(value, name)
        setinpval((preval) => {
            return {
                ...inpval,
                [name]: value
            }

        })

    }


    const addData = (e) => {
        e.preventDefault();
        console.log(inpval)

        const { name, email, password, confirmpassword } = inpval;
        if(name === ""){
            alert("Enter your name")
        }
        else if(email === "" || !email.includes("@")){
            alert("Enter valid email")
        }
        else if(password === "" || password.length < 6){
            alert("password length greater than 6")
          
        }
        else if(confirmpassword === "" || confirmpassword !== password){
            alert("password not match")
        }
        else{
            alert("Form submitted")
        }

    }


    const forms = document.querySelector(".forms"),
        links = document.querySelectorAll(".link");

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
    }
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }


    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault(); //preventing form submit
            forms.classList.toggle("show-signup");
        })
    })


    return (
        <>
            <section className="c
            
            ontainer forms">
                <div className="form login">
                    <div className="form-content">
                        <header>Login</header>
                        <form action="#">
                            <div className="field input-field">
                                <input type="email" placeholder="Email" className="input" />
                            </div>

                            <div className="field input-field">
                                <input type={passwordType} placeholder="Confirm password" className="password" onChange={handlePasswordChange} value={passwordInput} name='password' />

                                <div onClick={togglePassword}>
                                    {passwordType === "password" ?
                                        <i className="bx bx-hide eye-icon"></i> : <i className="bx bx-show eye-icon"></i>
                                    }
                                </div>
                            </div>

                            <div className="field button-field">
                                <button onClick={addData}>Login</button>
                            </div>
                        </form>

                        <div className="form-link">
                            <span>Don't have an account ?<a href="#" className="link signup-link" onClick={() => props.onFormSwitch("signup")}>Signup</a></span>
                            <br/>
                            <span className='forgot-password' >
                            <a href='#'>Forgot Password ?</a>
                            </span>
                        </div>
                    </div>

                    <div className="line"></div>

                    <div className="media-options">
                        <a href="#" class="field facebook">
                            <i className='bx bxl-facebook facebook-icon'></i>
                            <span>Login with Facebook</span>
                        </a>
                    </div>

                    <div className="media-options">
                        {/* <a href="#" className="field-google">
                            <img src="https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png"
                                alt="" className="bx bxl-google"/>
                                <span>Login with Google</span>
                        </a> */}

                        <div className="field-google">
                            <GoogleOAuthProvider clientId="219542876451-3starvu1ighngogfmn78dljfvpjkbvp1.apps.googleusercontent.com">

                                <GoogleLogin
                                    onSuccess={credentialResponse => {
                                        const details = jwt_decode(credentialResponse.credential);
                                        console.log(details)   
                                        console.log(credentialResponse);
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                />

                            </GoogleOAuthProvider>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
export default Login;
