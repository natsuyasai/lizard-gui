export enum Language {
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

export enum Format {
  HTML = 'HTML',
  CSV = 'CSV',
  XML = 'XML'
}

export interface LizardParameter {
  targetPath: string
  language: Language
  format: Format
  outputFileName: string
  addParameter: string
}
