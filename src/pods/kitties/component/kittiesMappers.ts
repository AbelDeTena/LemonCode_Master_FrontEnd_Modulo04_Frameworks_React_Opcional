import { PictureInfo } from "../../../data";
import { FromApiToVm } from "./index";

export const MapperKitties = (prop:PictureInfo):FromApiToVm => ({
...prop,
selected: false,
});
