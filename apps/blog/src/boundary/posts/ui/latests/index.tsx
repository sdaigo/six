import { allPosts } from "@/contentlayer/generated";
import Item from "./item";

import { grid } from "./styles";

export default function LatestPosts() {
  const posts = allPosts.slice(1);
  return (
    <div className={grid}>
      {posts.map(post => (
        <Item key={post._id} post={post} />
      ))}
    </div>
  );
}
