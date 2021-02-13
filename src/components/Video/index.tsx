import React from 'react';
import Logo from './../../assets/img/logo.svg'
import {iVideoItem} from './../../typing/item'
import style from './style.module.css'

interface IVideo{
  data:iVideoItem,
  view:string
}

function Video({data,view}:IVideo) {
  return (
    <div className={view==='wrap'?style.video:style.videoList}>
      <img className={style.videoImg} src={data.snippet.thumbnails.high.url} alt="Logo"/>
      <div>
      <div>{data.snippet.title}</div>
      <div>{data.snippet.channelTitle}</div>
      <div>768 тыс. просмотров</div>
      </div>
    </div>
  );
}

export default Video;