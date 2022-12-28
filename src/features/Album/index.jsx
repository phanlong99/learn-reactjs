import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc Cho Thứ Tư",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/c/b/2/0cb28e7b639001227ac05519290de3a6.jpg",
    },
    {
      id: 2,
      name: "Kai Đinh's The First Story",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/1/9/2/b1926d09a8ef05f2e15801047398aff3.jpg",
    },
    {
      id: 3,
      name: "Today's V-Pop Hits",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/9/8/6/1986dd3a4b63b84a465c769d85e36a8d.jpg",
    },
  ];
  return (
    <div>
      <h2>Chút nhạc chill chill</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
