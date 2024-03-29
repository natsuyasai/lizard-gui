import { ExternalProcessExecutor } from './ExternalProcessExecutor'
import { LizardCommandCreator } from './LizardCommandCreator'
import { isLinux, isMac, isWindows } from './util/PlatformUtil'

export class LizardCommandExecutor {
  private readonly processExecutor: ExternalProcessExecutor
  private readonly commandCreator: LizardCommandCreator

  constructor(processExecutor: ExternalProcessExecutor, commandCreator: LizardCommandCreator) {
    this.processExecutor = processExecutor
    this.commandCreator = commandCreator
  }

  public exec(): Promise<boolean> {
    return this.processExecutor.exec(
      this.getTerminal(),
      this.getTerminalOption(),
      this.getExecBaseCommand(),
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
  private getExecBaseCommand(): string {
    const windows = 'python -m lizard '
    if (isWindows()) {
      return windows
    }
    if (isLinux() || isMac()) {
      return 'python3 -m lizard '
    }
    return windows
  }
}
