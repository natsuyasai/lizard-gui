import { ExternalProcessExecutor } from './ExternalProcessExecutor'
import { LizardCommandCreator } from './LizardCommandCreator'
import { isLinux, isMac, isWindows } from './util/PlatformUtil'

export class LizardCommandExecutor {
  private readonly processExecutor: ExternalProcessExecutor
  private readonly commandCreator: LizardCommandCreator
  private readonly commandBase: string

  constructor(
    processExecutor: ExternalProcessExecutor,
    commandCreator: LizardCommandCreator,
    commandBase: string
  ) {
    this.processExecutor = processExecutor
    this.commandCreator = commandCreator
    this.commandBase = commandBase
  }

  public exec(): Promise<boolean> {
    return this.processExecutor.exec(
      this.getTerminal(),
      this.getTerminalOption(),
      this.commandBase,
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
}
