import React,{useState} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import { accAdd } from './action/formaction'
import './styles/Main.css';
import './styles/disp.css';
import './styles/HomeComponent-new.css';
import './styles/ModalForm.css';
import './styles/Discover.css';
import './styles/dashboard.css';
import './styles/secpart.css'; 

function Signup() { 


    const [comp, setComp] = useState(true);
    const dispatch = useDispatch();
    const {register,handleSubmit,watch,errors} = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
        dispatch(accAdd(data.fullname,data.email,data.password));
        setComp(false);
    }
    




    return (    
    <div className='main-root-one  main'>
        <div className='m-root-main'>
           <div className='rad-main-box  m-s-box1'>
               <div className='mp-main-one-box md-p md-p-sp  md-p-fs'>
                    <div className='main-box'>
                        <div className='left-sec'>
                            <img src='https://raw.githubusercontent.com/Bhavesh083/SignIn_Work_04/c762b8b2d187a1321ea6b5cfe7cc60b2fd47e9c9/src/images/modal-logo.svg' /> 
                            <div className='left-content'>
                                <p className='left-content-welcome'>Welcome Back</p>
                                <p className='left-content-signin'>Sign in to continue</p>
                            </div>
                        </div>
                        <div className='right-sec'>
                             <svg  className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                             <path d="M18.3 5.71a.9959.9959 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
                             </svg>
                          {comp?  <div> 
                            <div className='right-sec-main-content'>
                                    <div className='r-s-google'>
                                    <img src='https://github.com/Bhavesh083/SignIn_Work_04/blob/main/src/images/Google-logo.png?raw=true'/>
                                    <p>Continue with Google</p>
                                    </div>
                                    <div className='sec-seperator'>
                                    <hr></hr>
                                    <p>or</p>
                                    <hr></hr>
                                    </div>
                                    <div className='right-form'>
                                        <form className='right-form-body' onSubmit={handleSubmit(onSubmit)} >
                                             <label>Your Full Name</label>
                                             <input name='fullname' placeholder='Enter Your Full Name' type='text'  ref={register({required:true})} />
                                             {errors.fullname && <p className='modal__errors'>
                                                 <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 Full Name is required</p>}
                                             <label>Your Email Address</label>
                                             <input name='email' placeholder='Enter Email Address' type='email'  ref={register({required:true})}   />
                                             {errors.email && <p className='modal__errors'>
                                                 <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 Email is required
                                             </p>}
                                             <label>Password</label>
                                             <input name='password'  placeholder='Enter Password' type='password' ref={register({required:true})} />
                                             <svg  className="MuiSvgIcon-root visiblity" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>
                                             {errors.password && <p className='modal__errors dec-pad'>
                                                 <svg className="MuiSvgIcon-root " focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 Please enter your password
                                             </p>}
                                             <button  className='r-f-b-button'>Next</button>
                                        </form>
                                    </div>
                                </div>
                                <div className='info-box-body'>
                                 <hr></hr>
                                 <p>By signing up, you're agreeing to our <span>Terms of Use</span></p>
                                 <p>Already have an account?<span>Log In</span></p>
                                </div> 
                          </div>

                           :


                            <div className='modal__content3'>
                                <form className='modal__form form2'>
                                    <label className='newLabel'>College</label>
                                    <input className='college_field' placeholder='Enter Colege Name' type='text' name='college' />
                                    <p className='modal__errors'>
                                                 <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 Full Name is required</p>
                                    <div className='yearDegree'>
                                        <div>
                                            <label className='newLabel'>Graduation Year</label>
                                            <select placeholder='Select Year' className='signupDropdown2' type='text' name='date'>
                                                <option className='option__heading disabled'>Graduation Year</option>
                                                <option className='signupOption' value='Fall 2024'>Fall 2024</option>
                                                <option className='signupOption' value='Fall 2024'>Spring 2024</option>
                                                <option className='signupOption' value='Fall 2023'>Fall 2023</option>
                                                <option className='signupOption' value='Fall 2023'>Spring 2023</option>
                                                <option className='signupOption' value='Fall 2022'>Fall 2022</option>
                                                <option className='signupOption' value='Fall 2022'>Spring 2022</option>
                                                <option className='signupOption' value='Fall 2021'>Fall 2021</option>
                                                <option className='signupOption' value='Fall 2021'>Spring 2021</option>
                                                <option className='signupOption' value='Fall 2020'>Fall 2020</option>
                                                <option className='signupOption' value='Fall 2020'>Spring 2020</option>
                                                <option className='signupOption' value='Fall 2019'>2019</option>
                                                <option className='signupOption' value='Fall 2018'>2018</option>
                                            </select>
                                            <p className='modal__errors'>
                                                 <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 Full Name is required</p>
                                        </div>
                                        <div className='degreeContainer'>
                                            <label className='newLabel'>Degree</label>
                                            <select className='Degree' placeholder='Enter Degree Name' type='text' name='degree'  > 
                                                <option className='option__heading disabled'>Select Degree Name</option>
                                                <option className='signupOption' value='BTech'>BTech</option>
                                                <option className='signupOption' value='BSc'>BSc</option>
                                                <option className='signupOption' value='BBA'>BBA</option>
                                                <option className='signupOption' value='BA'>BA</option>
                                                <option className='signupOption' value='Bcom'>Bcom</option>
                                                <option className='signupOption' value='BCA'>BCA</option>
                                                <option className='signupOption' value='BFA'>BFA</option>
                                                <option className='signupOption' value='BE'>BE</option>
                                            </select>
                                            <p className='modal__errors'>
                                                 <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 Full Name is required</p>
                                        </div>
                                    </div> 
                                    <label className='newLabel'>Major</label>
                                    <input placeholder='Enter Major Name' type="text" name='major' />
                                    <p className='modal__errors'>
                                                 <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                                 Full Name is required</p>
                                    <div className="buttons">
                                        <button className='signupButton2' type='button'  >Back</button>
                                        <button className='signupButton' type='submit'>Signup</button>
                                    </div>
                                </form>
                            </div>



                        }
                        </div>
                    </div>
               </div>
            </div> 
        </div>
    </div>
    )
}

export default Signup;
