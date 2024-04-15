import { ExternalProcessExecutor } from './ExternalProcessExecutor'
import { LizardCommandCreator } from './LizardCommandCreator'

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
    return this.processExecutor.exec(this.commandBase, this.commandCreator.getOptions())
  }

  public cancel(): void {
    this.processExecutor.cancel()
  }
}
