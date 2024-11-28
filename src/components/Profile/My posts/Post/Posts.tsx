import React from 'react';
import s from'./Posts.module.css';

type PropsType={
  message:string
  LikesCount:number
}
const Post: React.FC<PropsType>= (props) => {
    return (
      
        
            <div className ={s.item}>
              <img src='https://avatars.mds.yandex.net/i?id=52240bacda679e53d72a7c9501b781dae3626eab-13079178-images-thumbs&n=13'/>
               {props.message}
              <div>
              <span>Like</span> {props.LikesCount}
              </div>
            </div>
            
     
    );
}  

export default Post;