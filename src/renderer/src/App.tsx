import { TargetPath } from './components/TargetPath'
import { LanguageSelect } from './components/LanguageSelect'
import { FormatSelect } from './components/FormatSelect'
import { OutputFileName } from './components/OutputFileName'
import { ParameterInput } from './components/ParameterInput'
import { Action } from './components/Action'
import styles from './App.module.scss'

function App(): JSX.Element {
  return (
    <>
      <div className={styles.app_root}>
        <div className={styles.contents}>
          <TargetPath></TargetPath>
          <LanguageSelect></LanguageSelect>
          <FormatSelect></FormatSelect>
          <OutputFileName></OutputFileName>
          <ParameterInput></ParameterInput>
        </div>
        <div className={styles.bottom}>
          <hr className="separator"></hr>
          <div className={styles.action_root}>
            <Action></Action>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
