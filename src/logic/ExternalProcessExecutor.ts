export interface ExternalProcessExecutor {
  exec(terminal: string, terminalOption: string, execFileName: string, option: string): boolean
  cancel(): void
}
