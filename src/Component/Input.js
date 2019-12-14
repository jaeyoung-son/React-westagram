import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            id: '',
            pw: '',
            class: 'button'
        }
    }


     idHandle= (e) => {
        this.setState({
            id: e.target.value
        })
    }

    pwHandle = (e) => {
        this.setState({
            pw: e.target.value
        })
    }

    render () {
        return (
            <div className="log_in">
                <input 
                    className="logV" 
                    type="text" 
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                    value={this.state.id}
                    onChange={this.idHandle}
                />
                <input 
                    className="pwV" 
                    type="password" 
                    placeholder="비밀번호"
                    value={this.state.pw}
                    onChange={this.pwHandle}
                />
                <button className={this.state.id.length >= 1 ? (this.state.pw.length >= 1 ? 'blue' : 'button') : 'button'}>로그인</button>
            </div>
        )
    }
}

export default Input;