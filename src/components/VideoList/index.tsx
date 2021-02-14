import React,{useEffect} from 'react';
import style from './style.module.css'
import Video from "../Video";
import {useDispatch} from 'react-redux'
import { getViewCount } from "./../../redux/actions/videoAction";

function Videolist({view,video}:any) {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    const videoId = video.map((item: any, index: number) => {
      return item.id.videoId;
    });
    const videoIDString = videoId.join(",");
    dispatch(getViewCount(videoIDString));
  },[])
  return (
    <div className={view === "wrap" ? style.listWrap : style.listList}>
        {video.map((item: any, index: number) => {
          return (
            <a href={`https://youtu.be/${item.id.videoId}`}>
              <Video
                key={index}
                data={item}
                view={view === "wrap" ? "wrap" : "list"}
              />
            </a>
          );
        })}
      </div>
  );
}

export default Videolist;