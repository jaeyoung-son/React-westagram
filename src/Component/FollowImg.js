import React from 'react';

function FollowImg(props) {
    return (
        <div className="follow_main">
            <div className="follow_left">
                <img src={props.src} alt="."/>
            </div>
            <div className="follow_center">
                <p>{props.name}</p><p className="gray">{props.other}</p>
            </div>
            <div className="follow_right">
                <p>팔로우</p>
            </div>
        </div>
    )
}

export default FollowImg