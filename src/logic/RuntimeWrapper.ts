import { ChildProcess, exec } from 'child_process'
import { ExternalProcessExecutor } from './ExternalProcessExecutor'

export class RuntimeWrapper implements ExternalProcessExecutor {
  private isCancel: boolean = false

  public exec(
    terminal: string,
    terminalOption: string,
    execFileName: string,
    option: string
  ): boolean {
    try {
      const options = option.split(' ')
      const execCommand = [terminal, terminalOption, execFileName, ...options].filter(
        (item) => item !== ''
      )
      const childProcess = exec(execCommand.join(' '))
      childProcess.stdout?.on('end', () => {})

      this.wait(childProcess)
      this.killProcess(childProcess)
      return true
    } catch (error) {
      console.error(error)
      return true
    }
  }

  public cancel(): void {
    this.isCancel = true
  }

  private wait(childProcess: ChildProcess): number | null {
    let exitCode: number | null = null
    do {
      exitCode = childProcess.exitCode
    } while (!this.isCancel && exitCode === null)
    return exitCode
  }

  private killProcess(childProcess: ChildProcess): void {
    if (childProcess.pid) {
      process.kill(childProcess.pid)
    }
    childProcess.kill()
  }
}
