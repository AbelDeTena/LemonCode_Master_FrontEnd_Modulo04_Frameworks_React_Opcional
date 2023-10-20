import { MockData } from "../../../data";
import {MapperPuppies} from "./index"

export const miPuppiesList = MockData.puppies.map((puppie)=>MapperPuppies(puppie));