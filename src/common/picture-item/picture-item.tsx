import React from "react"; 
import {PictureInfo} from "../../data/index"


interface PictureProps {
  pictureInfo: PictureInfo;
}

export const Picture: React.FC<PictureProps> = ({ pictureInfo }) => {
  return (
    <div className="picture-container">
      <picture>
        <img src={pictureInfo.picUrl} alt={pictureInfo.title} />
      </picture>
        <h2>{pictureInfo.title}</h2>
        <input type="checkbox" name={pictureInfo.title} id={pictureInfo.id} />
    </div>
  );
}


