import { Cloudinary } from "@cloudinary/url-gen";

const client = new Cloudinary({
  cloud: {
    cloudName: "af68d22a-2043-4078-857c-f2db1a1406ec",
  },
  url: {
    secure: true,
    shorten: true,
  },
});

const namespace: string = "Portfolio";

export { client, namespace };
