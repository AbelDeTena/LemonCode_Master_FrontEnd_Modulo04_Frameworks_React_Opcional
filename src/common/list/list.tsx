import { Checkbox, Container, Typography } from "@mui/material";
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
    <Container>
      <Typography variant="h4">Select your favorites</Typography>
      <div className="pictures-list">
        {details.map((detail) => (
          <div className="picture-container" key={detail.id}>
            <picture>
              <img src={detail.picUrl} alt={detail.title} />
            </picture>
            <Typography variant="h6">{detail.title}</Typography>
            <Checkbox
              name={detail.title}
              id={detail.id.toString()}
              checked={detail.selected}
              onChange={() => {
                handleCheckboxChange(detail.id, detail.selected);
              }}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
