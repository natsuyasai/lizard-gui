import { FC, useState } from 'react'
import styles from './ParameterInput.module.scss'

export const ParameterInput: FC = () => {
  const [filename, setFilename] = useState('')

  return (
    <>
      <div className={styles.root}>
        <div>ParameterInput</div>
        <input
          className={styles.input}
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
        ></input>
      </div>
    </>
  )
}
