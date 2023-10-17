import { PictureInfo } from "../../data/index";

interface ListProps {
  details: PictureInfo[];
}

export function List({ details }: ListProps) {
  return (
    <div>
      <h2>Select your favorites</h2>
      <ul>
        {details.map((detail) => (
          <li key={detail.id}>
            {detail.title}
            <img src={detail.picUrl} alt="laksd" />
          </li>
        ))}
      </ul>
    </div>
  );
}
