import { Data } from "../../../data";
import { MapperKitties } from "./index";

export const myKittieList = async (url: Data) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const { kitties } = url;

    const mappedKitties = await Promise.all(
        kitties.map(async (kittie) => {
        await new Promise((resolve) => setTimeout(resolve, 50));
        return MapperKitties(kittie);
      })
    );

    return mappedKitties;
  } catch (error) {
    throw error;
  }
};
