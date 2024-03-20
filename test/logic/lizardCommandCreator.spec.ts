import { describe, expect, test } from 'vitest'
import { LizardCommandCreator } from '@/logic/LizardCommandCreator'
import { Format, Language } from '@/types/types'

describe('入力情報からコマンドを生成', () => {
  test.each([
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.AUTO,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.AUTO,
      Format.CSV,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --csv -o result.csv'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.AUTO,
      Format.XML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --xml -o result.xml'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.C,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -l c -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.CPP,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -l cpp -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.JAVA,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -l java -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.CSHARP,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -l csharp -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.JS,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -l javascript -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.TS,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -l typescript -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.OBJECTIVE_C,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -l objective-c -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.SWIFT,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -l swift -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.PYTHON,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -l python -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.RUBY,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -l ruby -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.TTCN_3,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -l ttcn -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.PHP,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -l php -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.SCALA,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -l scala -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.GDSCRIPT,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -l GDScript -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.GO,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -l go -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.LUA,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -l lua -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.RUST,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -l rust -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.FORTRAN,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -l fortran -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.KOTLIN,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -l kotlin -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.SOLIDITY,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -l solidity -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.ERLANG,
      Format.HTML,
      'result',
      '',
      'C:\\Users\\user\\Desktop\\Src --html -l erlang -o result.html'
    ],
    [
      'C:\\Users\\user\\Desktop\\Src',
      Language.AUTO,
      Format.HTML,
      'result',
      '-C 10',
      'C:\\Users\\user\\Desktop\\Src --html -o result.html -C 10'
    ]
  ])(
    'コマンドが生成されること(path: %s, language: %s, format: %s, filename: %s, addParam: %s)',
    (
      folderPath: string,
      language: Language,
      format: Format,
      fileName: string,
      moreParameter: string,
      expected: string
    ) => {
      const target = new LizardCommandCreator(folderPath, language, format, fileName, moreParameter)

      const result = target.getOptions()
      expect(result).toBe(expected)
    }
  )
})
