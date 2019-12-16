import React from 'react';
import FollowImg from './FollowImg'
import './RightFollow.scss'

function RightFollow() {
    return(
        <div className="right_follow">
          <div className="follow_top">
            <span>회원님을 위한 추천</span><span className="top_right">모두보기</span>
          </div>
            <FollowImg
              src="https://scontent-gmp1-1.cdninstagram.com/vp/1c3bad2017bf0f0bdf2d2fc4f002187c/5E7CA17B/t51.2885-19/s150x150/43913810_322671281898660_2157658734761869312_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com"
              name="jinsup9k"
              other="_legend_a님 외 2명이 ..."/>
            <FollowImg 
              src="https://scontent-icn1-1.cdninstagram.com/vp/498b30eefd592b4175873cd2bcdc5c21/5E695BF1/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
              name="donghoshin0"
              other="_ringo.inseoul님 외 12..."/>
        </div>
    )
}

export default RightFollow