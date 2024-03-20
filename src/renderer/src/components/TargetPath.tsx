import { FC } from 'react'
import styles from './TargetPath.module.scss'

interface Props {
  targetPath: string
  setTargetPath: (value: string) => void
}

export const TargetPath: FC<Props> = ({ targetPath, setTargetPath }) => {
  async function selectDirectory() {
    const result = await window.dialogAPI.showOpenDialog({
      properties: ['openDirectory'],
      title: 'select directory'
    })
    if (result.filePaths.length === 0) {
      return
    }
    setTargetPath(result.filePaths[0])
  }

  async function selectFile() {
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
        <button className={`${styles.dirbutton} execbutton`} onClick={selectDirectory}>
          Dir
        </button>
        <button className="execbutton" onClick={selectFile}>
          File
        </button>
      </div>
    </>
  )
}
