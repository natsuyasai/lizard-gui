import { ExternalProcessExecutor } from './ExternalProcessExecutor'
import { LizardCommandCreator } from './LizardCommandCreator'
import { isLinux, isMac, isWindows } from './util/PlatformUtil'

export class LizardCommandExecutor {
  private readonly processExecutor: ExternalProcessExecutor
  private readonly commandCreator: LizardCommandCreator

  private readonly execFileNameForWindows = 'resources\\command\\basecommand.bat'
  private readonly execFileNameForLinux = 'resources/command/basecommand.sh'

  constructor(processExecutor: ExternalProcessExecutor, commandCreator: LizardCommandCreator) {
    this.processExecutor = processExecutor
    this.commandCreator = commandCreator
  }

  public exec(): Promise<boolean> {
    return this.processExecutor.exec(
      this.getTerminal(),
      this.getTerminalOption(),
      this.getExecFileName(),
      this.commandCreator.getOptions()
    )
  }

  public cancel(): void {
    this.processExecutor.cancel()
  }

  private getTerminal(): string {
    if (isWindows()) {
      return 'cmd'
    }
    if (isLinux() || isMac()) {
      return ''
    }
    return 'cmd'
  }
  private getTerminalOption(): string {
    if (isWindows()) {
      return '/c'
    }
    if (isLinux() || isMac()) {
      return ''
    }
    return '/c'
  }
  private getExecFileName(): string {
    if (isWindows()) {
      return this.execFileNameForWindows
    }
    if (isLinux() || isMac()) {
      return this.execFileNameForLinux
    }
    return this.execFileNameForWindows
  }
}
