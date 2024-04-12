import Archives from "@/boundary/posts/ui/archives";
import FeaturedPost from "@/boundary/posts/ui/featured";
import { allPosts } from "@/contentlayer/generated";
import { Divider } from "@/styled-system/jsx";
import { A, pipe } from "@mobily/ts-belt";

export default function Home() {
  const latestPost = pipe(allPosts, A.head);

  return (
    <main>
      <section>
        <FeaturedPost post={latestPost} />
      </section>
      <Divider my={4} />
      <section>
        <Archives />
      </section>
    </main>
  );
}
