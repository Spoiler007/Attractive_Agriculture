import React from 'react'
import { useState } from 'react';
import './registration.css'



export const Signup = (props) => {



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

    // validation
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

            <section className="container forms">
                <div className="form signup">
                    <div className="form-content">
                        <header>Signup</header>
                        <form action="#">

                            <div className="field input-field">
                                <input type="text" placeholder="UserName" name='name' className="name" onChange={getdata} />
                            </div>

                            <div className="field input-field">
                                <input type="email" placeholder="Email" name='email' className="input" onChange={getdata} />
                            </div>

                            <div className="field input-field">
                                <input type="password" placeholder="Create password" name='password' className="password" onChange={getdata} />
                            </div>

                            <div className="field input-field">
                                <input type={passwordType} placeholder="Confirm password" name='confirmpassword' className="password" onChange={handlePasswordChange} value={passwordInput} />

                                <div onClick={togglePassword}>
                                    {passwordType === "password" ?
                                        <i className="bx bx-hide eye-icon"></i> : <i className="bx bx-show eye-icon"></i>
                                    }
                                </div>


                            </div>

                            <div className="field button-field">
                                <button onClick={addData}>Signup</button>
                            </div>
                        </form>

                        <div className="form-link">
                            <span>Already have an account? <a href="#" class="link login-link" onClick={()=> props.onFormSwitch("login")}>Login</a></span>
                        </div> 
                    </div>

                    <div className="line"></div>

                    <div className="media-options">
                        <a href="#" className="field facebook">
                            <i className='bx bxl-facebook-circle'></i>
                            <span>Login with Facebook</span>
                        </a>
                    </div>

                    <div className="media-options">
                        <a href="#" className="field-google">
                            <img src="https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png"
                                alt="" className="bx bxl-google" />
                            <span>Login with Google</span>
                        </a>
                    </div>

                </div>
            </section>
        </>
    )

};
