import { ChildProcess, exec } from 'child_process'
import { ExternalProcessExecutor } from './ExternalProcessExecutor'

export class RuntimeWrapper implements ExternalProcessExecutor {
  private isCancel: boolean = false

  public async exec(
    terminal: string,
    terminalOption: string,
    execFileName: string,
    option: string
  ): Promise<boolean> {
    try {
      const options = option.split(' ')
      const execCommand = [terminal, terminalOption, execFileName, ...options].filter(
        (item) => item !== ''
      )
      const childProcess = exec(execCommand.join(' '))
      childProcess.stdout?.on('end', () => {})

      await this.wait(childProcess)
      this.killProcess(childProcess)
      return true
    } catch (error) {
      // TODO: Code 126が返却されたら、pythonの環境が整っていない可能性があるためメッセージ表示
      console.error(error)
      return true
    }
  }

  public cancel(): void {
    this.isCancel = true
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  private async wait(childProcess: ChildProcess): Promise<number | null> {
    let exitCode: number | null = null
    do {
      await this.sleep(500)
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
