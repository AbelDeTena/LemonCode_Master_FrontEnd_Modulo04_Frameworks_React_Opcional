import { FromApiToVm } from "../../pods/kitties/component/index";
import { Picture } from "../index";

interface ListProps {
  details: FromApiToVm [],  
}

export function List({ details }: ListProps) {
  return (
    <>
      <h2>Select your favorites</h2>
      <div className="pictures-list">
        {details.map((detail) => (
          <Picture key={detail.id} pictureInfo={detail} />
        ))}
      </div>
    </>
  );
}
