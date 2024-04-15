export interface ExternalProcessExecutor {
  exec(execFileName: string, option: string): Promise<boolean>
  cancel(): void
}
