import { TargetPath } from './components/TargetPath'
import { LanguageSelect } from './components/LanguageSelect'
import { FormatSelect } from './components/FormatSelect'
import { OutputFileName } from './components/OutputFileName'
import { ParameterInput } from './components/ParameterInput'
import { Action } from './components/Action'

function App(): JSX.Element {
  return (
    <>
      <div>
        <TargetPath></TargetPath>
        <LanguageSelect></LanguageSelect>
        <FormatSelect></FormatSelect>
        <OutputFileName></OutputFileName>
        <ParameterInput></ParameterInput>
      </div>
      <hr className="separator"></hr>
      <div>
        <Action></Action>
      </div>
    </>
  )
}

export default App