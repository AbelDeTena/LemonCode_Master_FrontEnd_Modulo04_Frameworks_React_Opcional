import { MockData } from "../../../data";
import {MapperKitties} from "./index"

export const miKittiesList = MockData.kitties.map((kittie)=>MapperKitties(kittie));