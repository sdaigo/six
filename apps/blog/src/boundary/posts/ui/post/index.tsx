import { formatDate } from "@/boundary/posts/presenter/post";
import { Mdx } from "@/boundary/shared/ui/mdx/mdx-component";
import type { Post } from "@/contentlayer/generated";
import { Container } from "@/styled-system/jsx";
import * as styles from "./styles";

export default function Single({ post }: { post: Post }) {
  return (
    <Container className={styles.container}>
      <article>
        <header className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
          {post.description && <p className={styles.description}>{post.description}</p>}
          <div className={styles.meta}>
            <small>{post.author}</small>
            <small>{formatDate(post.date)}</small>
          </div>
        </header>
        <Mdx code={post.body.code} />
      </article>
    </Container>
  );
}
