import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanityClient"; 

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  if (!source) {
    console.warn("Warning: Attempting to resolve an undefined image URL");
    return "/images/placeholder.png"; 
  }
  return builder.image(source).url();
}
