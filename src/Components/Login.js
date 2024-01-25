import React from "react";
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import google from '../assets/google.png'
import { Button, Form, FormGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faAt} from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () =>{
    return(
        <>
        <div className="text-center mt-5">
         <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} fill="none"><path fill="#003CDF" d="m22.375 1.023-4.008 35.32c-.062.36-.258.555-.586.587l-4.828.164c-.344 0-.515-.149-.515-.446l1.734-15.398-5.953.21L6.53 36.345c-.047.375-.25.57-.61.586l-4.827.164c-.344 0-.516-.149-.516-.446L4.61 1.188c.063-.329.266-.508.61-.54l4.71-.187c.407.016.61.203.61.562l-1.71 14.93 5.976-.21 1.64-14.555c.047-.344.258-.524.633-.54l4.688-.187c.406.016.609.203.609.562Zm23.25 8.25L32.102 47.641c-.125.39-.352.593-.68.609l-4.711.164c-.344-.016-.516-.172-.516-.469l4.032-11.367L26.57 9.391c0-.36.196-.547.586-.563l4.617-.164c.36.016.555.219.586.61l1.782 19.71 5.695-19.593c.094-.36.297-.547.61-.563l4.593-.164c.39.031.586.234.586.61Zm17.555 5.368-2.508-.258c-2.031 0-3.734.406-5.11 1.219l-2.32 20.671c-.062.391-.258.602-.586.633l-4.734.188c-.344-.032-.516-.18-.516-.446L50.5 9.391c.063-.344.258-.532.586-.563l4.57-.164c.422.016.633.219.633.61l-.281 2.414c1-1.016 1.969-1.805 2.906-2.368.938-.578 1.875-.867 2.813-.867.953 0 1.68.04 2.18.117.327.063.491.282.491.657 0 1.078-.18 2.68-.539 4.804-.078.406-.304.61-.68.61Zm18.61 0-2.509-.258c-2.031 0-3.734.406-5.11 1.219l-2.32 20.671c-.062.391-.257.602-.585.633l-4.735.188c-.344-.032-.515-.18-.515-.446l3.093-27.257c.063-.344.258-.532.586-.563l4.57-.164c.422.016.633.219.633.61l-.28 2.414c1-1.016 1.968-1.805 2.905-2.368.938-.578 1.875-.867 2.813-.867.953 0 1.68.04 2.18.117.328.063.492.282.492.657 0 1.078-.18 2.68-.54 4.804-.077.406-.304.61-.679.61Z"></path></svg>
         </div>
        <Container className="container">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="FormLabelColor">E-mail</Form.Label>
          <div className="input-group">
            <div className="CustomFormControl">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faAt} style={{color:'grey'}} />
              </span>
            </div>
            <Form.Control
              className="CustomFormControl"
              type="text"
              placeholder="Enter your E-mail"
            />
          </div>
        </Form.Group>
   

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="FormLabelColor">Password</Form.Label>
          <div className="input-group">
            <div className="CustomFormControl">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faEyeSlash} style={{color:'grey'}}/>
              </span>
            </div>
            <Form.Control
              className="CustomFormControl"
              type="text"
              placeholder="Enter your phone Number"
            />
            </div>
            </Form.Group>
   <Form.Group className=" mb-3" controlId="exampleForm.ControlTextarea1">
       <Button type="submit" className=" btn button CustomFormButton text-white w-100">Login</Button>
   
      </Form.Group>
     
      <FormGroup>
      <div className="text-center" style={{fontSize:'13px',paddingTop:'3%',paddingBottom:'1%',fontFamily:'poppins'}}>Already have an account?  <Link to='/'  ><span style={{color:'Blue',fontWeight:'500',fontFamily:'poppins'}}>Sign up</span></Link>
      <p style={{color:'grey'}}>Or continue with</p>
  <p>
  <Link to='https://support.google.com/accounts/answer/27441?hl=en'><img src={google} style={{width:'30px',height:'30px'}}/></Link> </p> </div>
  </FormGroup>
            </Container></>
    )
}
export default Login;