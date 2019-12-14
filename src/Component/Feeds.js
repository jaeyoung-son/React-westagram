import React from 'react';
import Comment from './Comment'
import './Feeds.scss'

function Feeds() {
    return (
        <div className="feeds">
        <div className="article">
          <div className="article_top">
            <img className="profile_img" src="https://scontent-icn1-1.cdninstagram.com/vp/91a4a6cf425350138a196ba4df885b9b/5DFE2D10/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com" alt="."/>
            <p>wecode_bootcamp</p>
            <img className="dot_img" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" alt="."/>
          </div>
          <img className="main_img" src=" https://scontent-gmp1-1.cdninstagram.com/vp/7dd7d8e61047035d530ec7b8785e0e28/5E2E6E48/t51.2885-15/e35/69366856_2154583161509048_6271804732968189983_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=1" alt="."/>
          <div className="article_bot">
            <div className="bot_img">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="."/>
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" alt="."/>
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" alt="."/>
              <img className="img_right" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" alt="."/>
            </div>
            <div className="bot_like">
              <img src="https://scontent-icn1-1.cdninstagram.com/vp/fe72f0704a8e80eab0e1040e42a4b465/5E0DD110/t51.2885-19/s320x320/67879165_662272640917279_8881524564585086976_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com" alt="."/>
              <span>Looper님 외 10명이 좋아합니다</span>
            </div>
            <Comment />
          </div>
          </div>
        </div>
    )
}

export default Feeds