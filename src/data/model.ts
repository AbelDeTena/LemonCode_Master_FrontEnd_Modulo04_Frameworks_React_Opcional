export interface PictureInfo {
    id: string;
    picUrl: string;
    title: string;
   }

export interface Data {
    kitties: {
        id: string;
        picUrl: string;
        title: string;
    }[];
    puppies: {
        id: string;
        picUrl: string;
        title: string;
    }[];
  }
  