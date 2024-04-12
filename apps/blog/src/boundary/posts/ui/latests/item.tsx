import type { Post } from "@/contentlayer/generated";
import { Divider } from "@/styled-system/jsx";

import Link from "next/link";
import { formatDate } from "../../presenter/post";
import * as styles from "./styles";

export default function Item({ post }: { post: Post }) {
  return (
    <article>
      <Link href={`/posts/${post.slugAsParams}`} className={styles.linkWrapper}>
        <figure>
          <picture>...</picture>
        </figure>
        <div>
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.description}>{post.description}</p>
          <Divider my={2} className={styles.divider} />
          <small className={styles.footnote}>
            {formatDate(post.date)} • {post.author}
          </small>
        </div>
      </Link>
    </article>
  );
}
