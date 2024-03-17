import { FC, useState } from 'react'
import styles from './OutputFileName.module.scss'

export const OutputFileName: FC = () => {
  const [filename, setFilename] = useState('output')

  return (
    <>
      <div className={styles.root}>
        <div>OutputFileName</div>
        <input
          className={styles.input}
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
        ></input>
      </div>
    </>
  )
}
