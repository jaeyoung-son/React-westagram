import React from 'react';
import RightProfile from './RightProfile'
import Story from './Story'
import RightFollow from './RightFollow'
import RightBottom from './RightBottom'
import './MainRight.scss'

function MainRight() {
    return (
        <div className="main_right">
            <RightProfile className="right_profile"/>
            <Story className='story'/>
            <RightFollow className="right_follow"/>
            <RightBottom className="right-bottom gray"/>
        </div>
    )
}

export default MainRight