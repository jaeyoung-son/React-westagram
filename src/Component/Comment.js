import React, { Component } from 'react';
import './Comment.scss'

class Comment extends Component {
    constructor(props) {
        super(props)
        this.state= {
            message: '',
            more: '더 보기',
            comment: [],
            key:[]
        }
    }

    changeHandle = (e) => {
        this.setState({message: e.target.value})
    }

    insertHandle = () => {
        this.setState({
            comment: this.state.comment.concat(this.state.message),
            message: ''
        })
    }


    

    render() {
        const commenInsert = this.state.comment.map( 
                    (message, index) => (<p key={index}>wecode_bootcamp<span>{this.state.comment[index]}</span>
                    <button onClick={ () => {
                        const newArr = Array.from(this.state.comment)
                        newArr.splice(index, 1)
                        this.setState({
                            comment: newArr
                        })
                    }}>
                    X</button></p>)
                )
        const keyEv = (e) => {
            if( e.keyCode === 13) {
                this.setState({
                    comment: this.state.comment.concat(this.state.message),
                    message: ''
                })
            }
        }
                
        return (
            <div className="comment">
              <div className="input">
                 <p>canon_mj<span>안녕하세요~~ ...</span><span className="gray">{this.state.more}</span></p>
                 <p>neceosecius<span>반가워요~~</span></p>
                 {commenInsert}
              </div>
                <p className="gray">42분 전</p>
            <div className="comment_input">
              <input 
                className="input_comment" 
                placeholder="댓글 달기..."
                value={this.state.message}
                onChange={this.changeHandle}
                onKeyDown={keyEv}
                />
              <button 
              type="submit"
              onClick={this.insertHandle}>
                  게시</button>
                </div>
            </div>
        )
    }
}

export default Comment;