import { Checkbox, Typography } from "@mui/material";
import { FromApiToVm } from "../../pods/kitties/component";
import * as classes from "./list.style";

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
    <div className={classes.container}>
      <Typography variant="h4">Choose your new friend:</Typography>
      <div className={classes.petsContainer}>
        {details.map((detail) => (
          <div className={classes.pet} key={detail.id}>
            <picture className={classes.img}>
              <img className={classes.img} src={detail.picUrl} alt={detail.title} />
            </picture>
            <Typography variant="h6">{detail.title}</Typography>
            <div>
              <span>Add to Cart</span>
              <Checkbox
                name={detail.title}
                id={detail.id.toString()}
                checked={detail.selected}
                onChange={() => {
                  handleCheckboxChange(detail.id, detail.selected);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
