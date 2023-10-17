import { PictureInfo } from "../../data/index";
import { Picture } from "../../common/index";

interface ListProps {
  details: PictureInfo[];
}

export function List({ details }: ListProps) {
  return (
    <>
      <h2>Select your favorites</h2>
      <div className="pictures-list">
        {details.map((detail) => (
          <Picture pictureInfo={detail} />
        ))}
      </div>
    </>
  );
}
