import React from 'react'
import style from '../style/PhoneConfirm.module.css'
import {Link} from 'react-router-dom'
function CodeConfirm() {
    return (
        <div className={style.phoneConfirmContainer}>
            <Link className={style.btnBack} exact to="/invite">
                <img src="/images/arrow.png" alt=""/>
            </Link>
            <div className="text-center">
                <h1 style={{width: '100%', maxWidth:'20em'}}>Enter the code we just texted you</h1>
                <input type="text" style={{width:'100%', border:"none", textAlign:'center', outline:'none'}}></input>
                <p>Didn't receive it? <span>Tap to resend.</span></p>
            </div>
            <Link exact to ="/code_confirm" className="primaryBtn d-flex align-items-center">
                Next  <img src="/images/nextArrowIcon.svg" alt=""/>
            </Link>
        </div>
    )
}

export default CodeConfirm
