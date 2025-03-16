import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanityClient"; // Adjust path as needed

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  if (!source) {
    console.warn("Warning: Attempting to resolve an undefined image URL");
    return "/images/placeholder.png"; // Fallback image
  }
  return builder.image(source).url();
}
