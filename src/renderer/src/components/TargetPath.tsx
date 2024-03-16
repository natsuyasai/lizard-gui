import { FC, useState } from 'react'
import styles from './TargetPath.module.scss'
import path from 'path'

export const TargetPath: FC = () => {
  const [targetPath, setTargetPath] = useState('')

  function selectFiles(event: React.ChangeEvent<HTMLInputElement>): void {
    const files = event.currentTarget.files
    if (!files || files.length === 0) {
      return
    }
    const file = files[0]
    const isDir = files.length > 2
    if (isDir) {
      const dirpath = path.dirname(file.path)
      setTargetPath(dirpath)
    } else {
      setTargetPath(file.path)
    }
  }
  return (
    <>
      <div className={styles.root}>
        <div>TargetPath</div>
        <input readOnly={true} className={styles.input} value={targetPath}></input>
        <input
          type="file"
          directory=""
          webkitdirectory=""
          id="file-input"
          onChange={selectFiles}
        ></input>
        <label htmlFor="file-input" className={styles.label}>
          Select
        </label>
      </div>
    </>
  )
}
