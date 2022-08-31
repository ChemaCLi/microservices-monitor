import { Container } from "@nextui-org/react";
import styles from  "./Layout.module.css"

export const Layout = ({ children }) => {
  return (
    <div className={styles.layoutMainContainer}>
      <div className={styles.sidebar}>
        Layout options
      </div>
      <Container>
        {children}
      </Container>
    </div>
  )
}
