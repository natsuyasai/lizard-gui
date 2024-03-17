import { FC, useState } from 'react'
import styles from './FormatSelect.module.scss'

enum Format {
  HTML = 'HTML',
  CSV = 'CSV',
  XML = 'XML'
}

export const FormatSelect: FC = () => {
  const [selectedItem, setSelectedItem] = useState(Format.HTML)
  return (
    <>
      <div className={styles.root}>
        <div>FormatSelect</div>
        <select
          className={styles.select}
          value={selectedItem}
          onChange={(e) => setSelectedItem(e.target.value as Format)}
        >
          {Object.entries(Format).map(([key, value]) => {
            return (
              <option key={key} value={key}>
                {value}
              </option>
            )
          })}
        </select>
      </div>
    </>
  )
}
