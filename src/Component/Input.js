import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

    

class Input extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            id: '',
            pw: '',
            class: 'button'
        }
    }

    goToMain() {
        this.props.history.push('/Main')
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
                <button 
                    className={(this.state.id  && this.state.pw)  ? 'blue' : 'button'}
                    onClick={this.goToMain.bind(this)}
                    >로그인
                </button>
            </div>
        )
    }
}

export default withRouter(Input);