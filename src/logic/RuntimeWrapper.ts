import { ExternalProcessExecutor } from './ExternalProcessExecutor'

export class RuntimeWrapper implements ExternalProcessExecutor {
  private isCancel: boolean = false

  public exec() // terminal: string,
  // terminalOption: string,
  // execFileName: string,
  // option: string
  : boolean {
    // try {
    //     const options = option.split(" ")
    //     const execCommand = (arrayListOf(terminal, terminalOption, execFileName) + options).filter { it.isNotEmpty() }
    //     const processBuilder = ProcessBuilder(execCommand)
    //     processBuilder.redirectError(ProcessBuilder.Redirect.DISCARD)
    //     processBuilder.redirectOutput(ProcessBuilder.Redirect.DISCARD)
    //     const process = processBuilder.start()
    //     const exitedProcess = this.wait(process)
    //     if(!exitedProcess) {
    //         this.killProcess(process)
    //     }
    //     process.destroy()
    //     process.exitValue() <= 0
    // } catch (error) {
    //     console.error(error)
    //     return true
    // }
    return true
  }

  public cancel(): void {
    this.isCancel = true
  }

  // private wait(process: Process): boolean {
  //     let exited: boolean
  //     do {
  //         exited = process.waitFor(5, TimeUnit.SECONDS)
  //     } while (!this.isCancel && !exited)
  //     return exited
  // }

  // private killProcess(process: Process) {
  //     process.descendants().forEach (processHandler => processHandler.destroy())
  // }
}
