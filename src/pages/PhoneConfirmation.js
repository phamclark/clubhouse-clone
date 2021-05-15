import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import style from '../style/PhoneConfirm.module.css'


function PhoneConfirmation() {
    const {value, setValue} =useState();

    return (
        <div className={style.phoneConfirmContainer}>
            <h1>Enter your phone</h1>
            <p>By entering your number, you're agreeing to our  
                <span> Term of Service and Privacy Policy.</span>
                Thanks!
            </p>
        </div>
    )
}

export default PhoneConfirmation
