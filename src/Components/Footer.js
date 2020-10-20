import React from 'react';
import './Footer.css';

const Footer = () => {
     return (
         <footer>
             <div className="text">
                 <p >We're all about good recipes,
                 and quality home cooking that everyone can enjoy
                 . Wheather you are looking for some healthy inspiration
                 or learning how to cook a decadent dessert,we've trustworthy
                 guidance for all your foodie needs.</p>
                 </div>
             <div className="social">
                 <p className="fa fa-facebook"></p>

                 <p className="fa fa-instagram"></p>
                 <p className="fa fa-twitter"></p>
                 <p className="fa fa-youtube"></p>
             </div>
             
             {/* <div class="white_line"></div> */}
             
             
         </footer>
     );
};
export default Footer;