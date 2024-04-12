import { TITLE } from "@/boundary/shared/consts";
import { Container, HStack } from "@/styled-system/jsx";

import { Search } from "lucide-react";
import * as styles from "./styles";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div />
        <h1 className={styles.title}>ACME {TITLE}</h1>
        <nav>
          <HStack gap={4}>
            <button type="button">
              <Search size={18} />
            </button>
          </HStack>
        </nav>
      </Container>
    </header>
  );
}
