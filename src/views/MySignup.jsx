import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import './MySignup.css'

const MySignup = () => {
    return (
      <body>
        <div>
          <div className="row pads Tpad">
            <div className="col-3"></div>
            <div className="col-6 justify-content-center mainCon">
              <div className="signIn"></div>
              <div>
                <label for="exampleFormControlInput1" className="form-label">Fill out the information below</label>
              </div>
              <div>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=" Enter Email Address or (Phone #)"
                />
              </div>
              <div className="row pads">
                <div className="col-1"></div>
                <div className="col-5"></div>
                <div className="col-5"><Link href="#"></Link></div>
                <div className="col-1"></div>
              </div>
              <div className=''>
                <input
                  type="password"
                  id="inputPassword5"
                  className="form-control"
                  aria-labelledby="passwordHelpBlock"
                  placeholder="Enter Password"
                />
              </div>
              <div className='pads'>
                <Button variant='warning'className="continue container text-center but">Sign Up</Button>
              </div>
              <div className='create'>
                <Link href="#"><li className='pads'>Need Help?</li></Link>
              </div>
            </div>
            <div className="create"></div>
            <div className="">
              <div className=" ">

                <div className="create pads"></div>
                  <Button variant="light" className='create but'>Return to Login</Button>
              </div>
            </div>
          </div>
        </div>
      </body>
    )
};

export default MySignup;