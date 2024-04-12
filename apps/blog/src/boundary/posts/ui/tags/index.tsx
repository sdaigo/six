import { getAllTags } from "@/boundary/posts/action/tags";
import Tag from "./item";

import * as styles from "./styles";

export default function Tags() {
  const tags = getAllTags();
  return (
    <div className={styles.tags}>
      <h5 className={styles.title}>Topics</h5>
      {tags.map(tag => (
        <Tag key={tag} label={tag} />
      ))}
    </div>
  );
}
