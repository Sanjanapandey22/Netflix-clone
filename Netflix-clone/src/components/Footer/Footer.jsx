import React from "react";
import './Footer.css'

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-icons">
                <img src="facebook_icon.png" alt=""/>
                <img src="instagram_icon.png" alt=""/>
                <img src="twitter_icon.png" alt=""/>
                <img src="facebook_icon.png" alt=""/>
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Gift Cards</li>
                <li>Media Center</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Cookie Preferences</li>
                <li>Corporate Information</li>
                <li>Contact Us</li>  
            </ul>
            <p className="copyright-text">© 1997-2025 Netflix, Inc. All rights reserved.</p>
        </div>
    )
}