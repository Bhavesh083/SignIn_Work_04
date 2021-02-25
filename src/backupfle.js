 
function App() {
    return (       <img src='/static/images/modal-logo.svg' /> 
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
                   
                    <label>Your Email Address</label>
                    <input placeholder='Enter Email Address' type='text' name='email' value="" />
                   
                    <label>Password</label>
                    <input placeholder='Enter Password' type='password' value=""/>
                    <img className='MuiSvgIcon-root visiblity' src='/static/images/Google-logo.png' />
                   
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
<img src='/static/images/modal-logo.svg' alt='logo' /> 
                    <div className='m-content'>
                        <p className='m-welcome'>Welcome Back</p>
                        <p className='m-signin'>Sign in to continue</p>
                    </div>
                </div>
                <div className='m-sec2'>
                   <svg  className="MuiSvgIcon-root" >
                        <path d="M18.3 5.71a.9959.9959 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
                     </svg>
                        <div className='m-content2'>
                            <div className='g-login'>
                             <img src='/static/images/Google-logo.png' alt='gl'/>
                                <p>Continue with Google</p>
                            </div>
                            <div className='m-seperator'>
                                <hr></hr>
                                <p>or</p>
                                <hr></hr>
                            </div>
                            <div className='home-mat'>
                                <form className='mod-form'>
                                    <label>Your Full Name</label>
                                    <input placeholder='Enter Your Full Name' type='text' name='fullName' value="" />
                                   
                                    <label>Your Email Address</label>
                                    <input placeholder='Enter Email Address' type='text' name='email' value="" />
                                   
                                    <label>Password</label>
                                    <input placeholder='Enter Password' type='password' value=""/>
                                    <svg class="MuiSvgIcon-root visiblity" ><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></svg>
                                   
                                    <button className='home-login' type='submit'>Next</button>
                                </form>
                            </div>
                        </div>
                        <div className='m-contentbottom'>
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
    );
  }
  
  export default App;