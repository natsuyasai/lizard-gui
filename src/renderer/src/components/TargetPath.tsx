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

  const selectDirectory = async () => {
    const result = await window.dialogAPI.showOpenDialog({
      properties: ['openDirectory'],
      title: 'select directory'
    })
    if (result.filePaths.length === 0) {
      return
    }
    setTargetPath(result.filePaths[0])
  }

  const selectFile = async () => {
    const result = await window.dialogAPI.showOpenDialog({
      properties: ['openFile'],
      title: 'select directory'
    })
    if (result.filePaths.length === 0) {
      return
    }
    setTargetPath(result.filePaths[0])
  }

  return (
    <>
      <div className={styles.root}>
        <div>TargetPath</div>
        <input readOnly={true} className={styles.input} value={targetPath}></input>
        <button className="execbutton" onClick={selectDirectory}>
          Dir
        </button>
        <button className="execbutton" onClick={selectFile}>
          File
        </button>
      </div>
    </>
  )
}
