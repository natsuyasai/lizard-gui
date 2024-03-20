import { ElectronAPI } from '@electron-toolkit/preload'

export interface DialogAPI {
  showOpenDialog: (options: OpenDialogOptions) => Promise<Electron.OpenDialogReturnValue>
  showModalMessageBox: (options: MessageBoxOptions) => Promise<Electron.MessageBoxOptions>
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    dialogAPI: DialogAPI
  }
}
