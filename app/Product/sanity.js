import { createClient } from "@sanity/client";

console.log("Sanity Dataset:", process.env.NEXT_PUBLIC_SANITY_DATASET);
console.log("Sanity Project ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-01-01",
  useCdn: true, 
});

export default sanityClient;


sanityClient
  .fetch('*[_type == "post"][0..1] { title, _id }')
  .then((data) => console.log("Sanity Data:", data))
  .catch((error) => console.error("Sanity Error:", error));
