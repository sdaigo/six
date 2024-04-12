import LatestPosts from "@/boundary/posts/ui/latests";
import Tags from "@/boundary/posts/ui/tags";

import * as styles from "./styles";

export default function Archives() {
  return (
    <section className={styles.section}>
      <div className={styles.layout}>
        <div className={styles.posts}>
          <LatestPosts />
        </div>
        <aside className={styles.aside}>
          <Tags />
        </aside>
      </div>
    </section>
  );
}
