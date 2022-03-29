import { CLOUD_NAME, NAMESPACE } from "~/utils/cloudinary";

interface Props {
  path: string;
  id: string;
  quality?: number;
  width?: number;
  height?: number;
  dpr?: string;
}

export const useCloudinary = ({
  path,
  id,
  quality,
  width,
  height,
  dpr,
}: Props): string => {
  const [fileName, extension] = path.split(".");
  const q = quality ? `,q_${quality}` : "";
  const w = width ? `,w_${width}` : "";
  const h = height ? `,h_${height}` : "";
  const d = dpr ? `,dpr_${dpr}` : "";
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/c_scale${
    q + w + h + d
  }/v1636657520/${NAMESPACE}/${fileName}_${id}.${extension}`;
};
