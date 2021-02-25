import React from 'react';
import './styles/Main.css';
import './styles/xxx.css';
//import './styles/HomeComponent-new.css';
//import './styles/Events.css';
import './styles/ModalForm.css';
import './styles/Discover.css';
import './styles/dashboard.css';

function Signup() { 
    return (    
     <div className='main-root-one  main'>
         <div className='m-root-main'>
          <div className='rad-main-box  m-s-box1'>
           <div className='mp-main-one-box md-p md-p-sp  md-p-fs'>
            <div className='main-box'>
                <div className='left-sec'>
                <img src='/static/images/modal-logo.svg' /> 
                    <div className='left-content'>
                        <p className='left-content-welcome'>Welcome Back</p>
                        <p className='left-content-signin'>Sign in to continue</p>
                    </div>
                </div>
                <div className='right-sec'>
                   <svg  className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.3 5.71a.9959.9959 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
                     </svg>
                        <div className='right-sec-main-content'>
                            <div className='r-s-google'>
                             <img src='/static/images/Google-logo.png' />
                                <p>Continue with Google</p>
                            </div>
                            <div className='sec-seperator'>
                                <hr></hr>
                                <p>or</p>
                                <hr></hr>
                            </div>
                            <div className='right-form'>
                                <form className='right-form-body'>
                                    <label>Your Full Name</label>
                                    <input placeholder='Enter Your Full Name' type='text' name='fullName' value="" />
                                    <p className='modal__errors'>
                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                        Full Name is required
                                    </p>
                                    <label>Your Email Address</label>
                                    <input placeholder='Enter Email Address' type='text' name='email' value="" />
                                    <p className='modal__errors'>
                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                        Email is required
                                    </p>
                                    <label>Password</label>
                                    <input placeholder='Enter Password' type='password' value=""/>
                                    <svg class="MuiSvgIcon-root visiblity" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>
                                    <p className='modal__errors dec-pad'>
                                        <svg class="MuiSvgIcon-root " focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                        Please enter your password
                                    </p>
                                    <button className='r-f-b-button'>Next</button>
                                </form>
                            </div>
                        </div>
                        <div className='info-box-body'>
                        <hr></hr>
                        <p>By signing up, you're agreeing to our <span>Terms of Use</span></p>
                        <p>Already have an account?<span>Log In</span></p>
                        </div>
              </div>
             </div>
           </div>
          </div>
         </div>
         </div>    
    )
}

export default Signup;
