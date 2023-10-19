import React from "react";
import { FromApiToVm } from "../../pods/kitties/component/index";

interface PictureProps {
  pictureInfo: FromApiToVm;
}

export const Picture: React.FC<PictureProps> = ({ pictureInfo }) => {
  return (
    <div className="picture-container">
      <picture>
        <img src={pictureInfo.picUrl} alt={pictureInfo.title} />
      </picture>
      <h2>{pictureInfo.title}</h2>
      <input type="checkbox" name={pictureInfo.title} id={pictureInfo.id} checked={pictureInfo.selected}/>
    </div>
  );
};
