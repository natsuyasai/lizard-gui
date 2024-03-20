import { Language, Format } from '../renderer/src/components/types'

const LANGUAGE_TO_OPTIONSTR = new Map<Language, string>([
  [Language.AUTO, ''],
  [Language.C, 'c'],
  [Language.CPP, 'cpp'],
  [Language.JAVA, 'java'],
  [Language.CSHARP, 'csharp'],
  [Language.JS, 'javascript'],
  [Language.TS, 'typescript'],
  [Language.OBJECTIVE_C, 'objective-c'],
  [Language.SWIFT, 'swift'],
  [Language.PYTHON, 'python'],
  [Language.RUBY, 'ruby'],
  [Language.TTCN_3, 'ttcn'],
  [Language.PHP, 'php'],
  [Language.SCALA, 'scala'],
  [Language.GDSCRIPT, 'GDScript'],
  [Language.GO, 'go'],
  [Language.LUA, 'lua'],
  [Language.RUST, 'rust'],
  [Language.FORTRAN, 'fortran'],
  [Language.KOTLIN, 'kotlin'],
  [Language.SOLIDITY, 'solidity'],
  [Language.ERLANG, 'erlang']
])

const FORMAT_TO_OPTIONSTR = new Map<Format, string>([
  [Format.HTML, 'html'],
  [Format.CSV, 'csv'],
  [Format.XML, 'xml']
])

export class LizardCommandCreator {
  constructor(
    private readonly folderPath: string,
    private readonly language: Language,
    private readonly format: Format,
    private readonly fileName: string,
    private readonly moreParameters: string
  ) {}

  public getOptions(): string {
    let retOptionsStr = `${this.folderPath} `
    const formatOpt = this.convertOptionForFormat()
    let extension = '.txt'
    if (formatOpt !== '') {
      retOptionsStr += `--${formatOpt}`
      extension = `.${formatOpt}`
    }
    const langOpt = this.convertOptionForLanguage()
    if (langOpt !== '') {
      retOptionsStr += ` -l ${langOpt}`
    }
    if (this.fileName !== '') {
      retOptionsStr += ` -o ${this.fileName}${extension}`
    }
    if (this.moreParameters !== '') {
      retOptionsStr += ` ${this.moreParameters}`
    }
    return retOptionsStr
  }

  private convertOptionForLanguage(): string {
    const optionstr = LANGUAGE_TO_OPTIONSTR.get(this.language)
    return optionstr ?? ''
  }

  private convertOptionForFormat(): string {
    const optionstr = FORMAT_TO_OPTIONSTR.get(this.format)
    return optionstr ?? ''
  }
}
