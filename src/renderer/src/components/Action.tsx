import { FC } from 'react'
import styles from './Action.module.scss'

export const Action: FC = () => {
  return (
    <>
      <button className={styles.cahcel}>Cancel</button>
      <button className={`${styles.exec} execbutton`}>Execute</button>
    </>
  )
}
