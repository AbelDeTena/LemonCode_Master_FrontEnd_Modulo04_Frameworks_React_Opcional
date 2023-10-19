import { PictureInfo } from "../../../data";
import { FromApiToVm } from "./index";

export const MapperKitties = (prop:PictureInfo):FromApiToVm => ({
...prop,
id: Number(prop.id),
selected: false,
});
