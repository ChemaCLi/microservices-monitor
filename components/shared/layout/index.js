import { useState } from "react"
import { Button, Container, Loading } from "@nextui-org/react";
import styles from  "./Layout.module.css"

export const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false)

  const refresh = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        setLoading(false)
        resolve()
      }, 1_000)
    })
  }

  const onRefresh = () => {
    setLoading(true)
    refresh()
  }

  return (
    <div>
      <div className={styles.toolbar}>
        <div>
          {loading
            ? <Loading
              size="xs"
              color="currentColor" />
            : <Button
              auto
              size="xs"
              bordered
              color="success"
              onClick={onRefresh}>
              Actualizar
            </Button>}
        </div>
      </div>
      <div className={styles.layoutMainContainer}>
        <div className={styles.sidebar}>
          Layout options
        </div>
        <Container className={styles.container}>
          {children}
        </Container>
      </div>
    </div>
  )
}
