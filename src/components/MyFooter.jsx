import React from "react"
import './MyFooter.css'

const MyFooter = () => { 
return (
    <div className="footer fixed-bottom">
        <div className="sb_footer section_padding">
            <div className="sb_footer-links">
                <div className="sb_footer-links-div">
                    <h4>For Business</h4>
                    <a href="#">
                        <p>Employer</p>
                    </a>
                    <a href="#">
                        <p>Individual</p>
                    </a>
                </div>
                <div className="sb_footer-links-div">
                <h4>For Business</h4>
                    <a href="#">
                        <p>Employer</p>
                    </a>
                    <a href="#">
                        <p>Individual</p>
                    </a>
                </div>
                <div className="sb_footer-links-div">
                <h4>For Business</h4>
                    <a href="#">
                        <p>Employer</p>
                    </a>
                    <a href="#">
                        <p>Individual</p>
                    </a>
                </div>
                <hr />
                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} CodingTemple. All rights reserved.
                        </p>
                    </div>
                    <div className="sb_footer-below-links">
                        <a href="#"><div><p>Terms & Conditions</p></div></a>
                        <a href="#"><div><p>Privacy</p></div></a>
                        <a href="#"><div><p>Security</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}

export default MyFooter;