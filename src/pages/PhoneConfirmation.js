import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";
import style from "../style/PhoneConfirm.module.css";

function PhoneConfirmation() {
  const [ value, setValue ] = useState();

  return (
    <div className={style.phoneConfirmContainer}>
      <Link exact to ="/" className={style.btnBack}>
        <img src="/images/arrow.png" alt="" />
      </Link>
      <h1>Enter your phone</h1>
      <PhoneInput 
        international 
        defaultCountry="US" 
        value={value} 
        onChange={setValue} />
      <p>
        By entering your number, you're agreeing to our
        <span> Term of Service and Privacy Policy.</span>
        Thanks!
      </p>

      <Link exact to ="/code_confirm" className="primaryBtn d-flex align-items-center">
        Next  <img src="/images/nextArrowIcon.svg" alt=""/>
      </Link>
    </div>
  );
}

export default PhoneConfirmation;
