import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "7vgn5wgc",
  dataset: "production",
  apiVersion: "2023-02-15",
  useCdn: true,
  token: 'sktE2Li2gosVEaMIAvXWVSfjq1mZBivVVa8WjgQt5barXSNrzTc7W2yxsmEhxP6apoCDfSAGhJlLglpdJ2T7QrrsVlLvDRz8gzLGOI3iZkMiEkUuKwwpswibv1xIYnghYEa4dgNszkLX9LS2Yt2IRBlwP92nQKCvnSfwsz5qibKvNUlE3y74',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);