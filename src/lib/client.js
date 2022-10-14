import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "xepsiw63",
  dataset: "production",
  apiVersion: "2022-09-14",
  useCdn: true,
});
