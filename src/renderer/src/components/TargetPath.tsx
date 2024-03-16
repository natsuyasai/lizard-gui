import { FC, useState } from 'react'
import styles from './TargetPath.module.scss'

export const TargetPath: FC = () => {
  const [path, setPath] = useState('')

  function selectFiles(event: React.ChangeEvent<HTMLInputElement>): void {
    const files = event.currentTarget.files
    if (!files || files.length === 0) {
      return
    }
    setPath(files[0].path)
  }
  return (
    <>
      <div className={styles.root}>
        <div>TargetPath</div>
        <input readOnly={true} className={styles.input} value={path}></input>
        <input type="file" id="file-input" onChange={selectFiles}></input>
        <label htmlFor="file-input" className={styles.label}>
          Select
        </label>
      </div>
    </>
  )
}
