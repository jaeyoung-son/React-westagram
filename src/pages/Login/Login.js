import React from 'react';
import Input from '../../Component/Input'
import LogoText from '../../images/LogoText.png'
import './Login.scss'

function Login() {
  return (
    <div>
      <div className="whole">
        <div className="main_container">
          <div className="img">
            <img src={LogoText} alt='.'/>
          </div>
          <Input/>
        <div className="para">
          <p>비밀번호를 잊으셨나요?</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Login;
