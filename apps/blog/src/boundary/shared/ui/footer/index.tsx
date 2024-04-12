import { Container, VStack } from "@/styled-system/jsx";

import * as styles from "./styles";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <VStack>
          <small className={styles.copyright}>&copy; {new Date().getFullYear()} </small>
        </VStack>
      </Container>
    </footer>
  );
}
