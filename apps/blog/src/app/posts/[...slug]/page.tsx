import { allPosts } from "@/contentlayer/generated";
import { O, pipe } from "@mobily/ts-belt";
import { notFound } from "next/navigation";

import Single from "@/boundary/posts/ui/post";
import type { Metadata } from "next";

interface PostProps {
  params: {
    slug: string[];
  };
}

function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  return O.fromNullable(allPosts.find(post => post.slugAsParams === slug));
}

export function generateMetadata({ params }: PostProps): Metadata {
  return pipe(
    O.fromNullable(getPostFromParams(params)),
    O.match(
      post => ({
        title: `${post.title} | Blog`,
        description: post.description,
      }),
      () => ({}),
    ),
  );
}

export function generateStaticParams(): PostProps["params"][] {
  return allPosts.map(post => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default function Page({ params }: PostProps) {
  const post = getPostFromParams(params);

  return pipe(
    post,
    O.match(
      post => <Single post={post} />,
      () => notFound(),
    ),
  );
}
