import { FC, useState } from 'react'
import styles from './LanguageSelect.module.scss'

enum Language {
  AUTO = 'Auto',
  C = 'C',
  CPP = 'C++',
  JAVA = 'Java',
  CSHARP = 'C#',
  JS = 'JavaScript',
  TS = 'TypeScript',
  OBJECTIVE_C = 'Objective-C',
  SWIFT = 'Swift',
  PYTHON = 'Python',
  RUBY = 'Ruby',
  TTCN_3 = 'TTCN-3',
  PHP = 'PHP',
  SCALA = 'Scala',
  GDSCRIPT = 'GDScript',
  GO = 'Golang',
  LUA = 'Lua',
  RUST = 'Rust',
  FORTRAN = 'Fortran',
  KOTLIN = 'Kotlin',
  SOLIDITY = 'Solidity',
  ERLANG = 'Erlang'
}

export const LanguageSelect: FC = () => {
  const [selectedItem, setSelectedItem] = useState(Language.AUTO)
  return (
    <>
      <div className={styles.root}>
        <div>LanguageSelect</div>
        <select
          className={styles.select}
          value={selectedItem}
          onChange={(e) => setSelectedItem(e.target.value as Language)}
        >
          {Object.entries(Language).map(([key, value]) => {
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
