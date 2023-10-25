import { Data } from "../../../data";
import { MapperPuppies } from "./index";

export const myPuppieList = async (url: Data) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const { puppies } = url;

    const mappedPuppies = await Promise.all(
      puppies.map(async (puppy) => {
        await new Promise((resolve) => setTimeout(resolve, 50));
        return MapperPuppies(puppy);
      })
    );

    return mappedPuppies;
  } catch (error) {
    throw error;
  }
};
