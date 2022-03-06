import { client, namespace } from "~/utils/cloudinary";
import { Resize } from "@cloudinary/url-gen/actions/resize";

interface Props {
  path: string;
  id: string;
  quality?: number;
  width?: number;
  height?: number;
}

export const useCloudinary = ({ path, id, quality, width, height }: Props) => {
  const [fileName, extension] = path.split(".");
  const image = client.image(`${namespace}/${fileName}_${id}.${extension}`);
  if (quality) {
    image.quality(quality);
  }
  if (width || height) {
    const scale = Resize.scale();
    if (width) {
      scale.width(width);
    }
    if (height) {
      scale.height(height);
    }
    image.resize(scale);
  }
  return image.toURL();
};
