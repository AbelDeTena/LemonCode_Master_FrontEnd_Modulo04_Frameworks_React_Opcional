import { PictureInfo } from "../../../data";
import { FromApiToVm } from "./index";

export const MapperPuppies = (prop:PictureInfo):FromApiToVm => ({
...prop,
id: Number(prop.id),
selected: false,
});
