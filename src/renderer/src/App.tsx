import { TargetPath } from './components/TargetPath'
import { LanguageSelect } from './components/LanguageSelect'
import { FormatSelect } from './components/FormatSelect'
import { OutputFileName } from './components/OutputFileName'
import { ParameterInput } from './components/ParameterInput'
import { Action } from './components/Action'
import styles from './App.module.scss'
import { useState } from 'react'
import { Format, Language, LizardParameter } from './components/types'

function App(): JSX.Element {
  const initParam: LizardParameter = {
    targetPath: '',
    language: Language.AUTO,
    format: Format.HTML,
    outputFileName: 'output',
    addParameter: ''
  }
  const [parameter, setParameter] = useState(initParam)

  const [enableExecute, setEnableExecute] = useState(false)
  const [enableCancel, setEnableCancel] = useState(false)

  function execute() {
    setEnableCancel(true)
    setEnableExecute(false)
  }

  function cancel() {
    setEnableCancel(false)
    setEnableExecute(true)
  }

  function updateTargetPath(targetPath: string) {
    setParameter({ ...parameter, ...{ targetPath } })
    const canExecute = targetPath !== ''
    setEnableExecute(canExecute)
  }

  return (
    <>
      <div className={styles.app_root}>
        {/* 入力 */}
        <div className={styles.contents}>
          <TargetPath
            targetPath={parameter.targetPath}
            setTargetPath={(targetPath) => updateTargetPath(targetPath)}
          ></TargetPath>
          <LanguageSelect
            selectedItem={parameter.language}
            setSelectedItem={(language) => setParameter({ ...parameter, ...{ language } })}
          ></LanguageSelect>
          <FormatSelect
            format={parameter.format}
            setFormat={(format) => setParameter({ ...parameter, ...{ format } })}
          ></FormatSelect>
          <OutputFileName
            filename={parameter.outputFileName}
            setFilename={(outputFileName) => setParameter({ ...parameter, ...{ outputFileName } })}
          ></OutputFileName>
          <ParameterInput
            parameter={parameter.addParameter}
            setParameter={(addParameter) => setParameter({ ...parameter, ...{ addParameter } })}
          ></ParameterInput>
        </div>
        {/* 実行 */}
        <div className={styles.bottom}>
          <hr className="separator"></hr>
          <div className={styles.action_root}>
            <Action
              enableExecute={enableExecute}
              enableCancel={enableCancel}
              onExecute={execute}
              onCancel={cancel}
            ></Action>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
