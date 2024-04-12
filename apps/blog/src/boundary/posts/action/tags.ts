import { allPosts } from "@/contentlayer/generated";
import { extractTags } from "../presenter/tags";

export function getAllTags() {
  return extractTags(allPosts);
}
