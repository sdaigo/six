import type { Post } from "@/contentlayer/generated";
import { A, flow } from "@mobily/ts-belt";

export interface Tag {
  name: string;
  count: number;
}

export const extractTags = flow(
  A.map<Post, string[]>(post => post.tags),
  A.flat,
  A.uniq,
);
