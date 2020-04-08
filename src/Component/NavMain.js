import React, { Component } from "react";
import LogoText from "../images/LogoText.png";
import { withRouter } from "react-router-dom";
import "./NavMain.scss";

class NavMain extends Component {
  goToLogin() {
    this.props.history.push("/");
  }

  render() {
    console.log("하이");
    console.log("하이");
    return (
      <nav>
        <div className="nav_main">
          <div className="left_main">
            <img
              className="camera"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
              alt="."
            />
            <img className="logo" src={LogoText} alt="." />
          </div>
          <div className="center_main">
            <input className="top" type="text" placeholder="검색" />
          </div>
          <div className="right_main">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="."
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="."
            />
            <img
              className="click"
              onClick={this.goToLogin.bind(this)}
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="."
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(NavMain);
