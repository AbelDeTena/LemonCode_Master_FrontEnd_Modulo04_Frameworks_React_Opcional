import { FromApiToVm } from "../../pods/kitties/component";

interface ListProps {
  details: FromApiToVm[];
  addId: (id: number) => void;
  removeId: (id: number) => void;
}

export function List({ details, addId, removeId }: ListProps) {
  const handleCheckboxChange = (id: number, isChecked: boolean) => {
    if (isChecked) {
      removeId(id);
    } else {
      addId(id);
    }
  };

  return (
    <>
      <h2>Select your favorites</h2>
      <div className="pictures-list">
        {details.map((detail) => (
          <div className="picture-container" key={detail.id}>
            <picture>
              <img src={detail.picUrl} alt={detail.title} />
            </picture>
            <h2>{detail.title}</h2>
            <input
              type="checkbox"
              name={detail.title}
              id={detail.id.toString()}
              checked={detail.selected}
              //error en el parametro e.target.checked - detail.selected
              onChange={() => {
                handleCheckboxChange(detail.id, detail.selected);              
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
