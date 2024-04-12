import type { Post } from "@/contentlayer/generated";
import { Container, Divider } from "@/styled-system/jsx";
import { O, type Option } from "@mobily/ts-belt";
import * as styles from "./styles";

export default function FeaturedPost({ post }: { post: Option<Post> }) {
  if (O.isNone(post)) return null;

  return (
    <section>
      <Container className={styles.container}>
        <figure className={styles.figure}>...</figure>
        <div className={styles.summary}>
          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.description}>{post.description}</p>
          <Divider my={2} className={styles.divider} />
          <p className={styles.footer}>
            <small>{post.date}</small>
            <small>•</small>
            <small>{post.author}</small>
          </p>
        </div>
      </Container>
    </section>
  );
}
