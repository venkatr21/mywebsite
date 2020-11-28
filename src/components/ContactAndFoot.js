import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
function ContactFoot(props){
  return(
    <div>
    <div id="contact">
        <center><h2 className="heading"><span>Contact Me</span></h2></center>
        <center><p class='lead'><span><i className="fa fa-envelope-square" aria-hidden="true"></i> mail2venkat21@gmail.com</span></p></center>
        <center><p class='lead'><span><i className="fa fa-phone-square" aria-hidden="true"></i> +91 9962722146</span></p></center>
    </div>
    <footer>
      <div align='center' id='page-ender'>
        <span>
          <a href='#leadp'><i class='fa fa-chevron-up' aria-hidden='true'></i></a>
        </span>
      </div>
    </footer>
    </div>
  );
}
export default ContactFoot;
