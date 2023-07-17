import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import './MyLogin.css'

const MyLogin = () => {
    return (
      <body>
        <div>
          <div className="row pads Tpad">
            <div className="col-3"></div>
            <div className="col-6 justify-content-center mainCon">
              <div className="signIn">Sign In</div>
              <div>
                <label for="exampleFormControlInput1" className="form-label">Email(phone or mobile accounts)</label>
              </div>
              <div>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email Address"
                />
              </div>
              <div className="row pads">
                <div className="col-1"></div>
                <div className="col-5">Password</div>
                <div className="col-5"><Link href="#">Forgot Password</Link></div>
                <div className="col-1"></div>
              </div>
              <div className=''>
                <input
                  type="password"
                  id="inputPassword5"
                  className="form-control"
                  aria-labelledby="passwordHelpBlock"
                  placeholder="Password"
                />
              </div>
              <div className='pads'>
                <Button variant='warning'className="continue container text-center but" href="/MyShop">Continue</Button>
              </div>
              <div className='create'>
                <Link href="#"><li className='pads'>Need Help?</li></Link>
              </div>
            </div>
            <div className="create"></div>
            <div className="">
              <div className=" ">

                <div className="create pads">New To Our Family?</div>
                  <Button href="/MySignup" variant="light" className='create but'>Create Your Amazon Account</Button>
              </div>
            </div>
          </div>
        </div>
      </body>
    )
};

export default MyLogin;