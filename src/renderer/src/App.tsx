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
  return (
    <>
      <div className={styles.app_root}>
        <div className={styles.contents}>
          <TargetPath
            targetPath={parameter.targetPath}
            setTargetPath={(targetPath) => setParameter({ ...parameter, ...{ targetPath } })}
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
