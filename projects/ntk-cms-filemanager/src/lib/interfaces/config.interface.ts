import {DownloadModeEnum} from '../enums/download-mode.enum';

export interface ConfigInterface {
  baseURL: string;
  baseUploadURL: string;
  // startingFolder?: string; // todo implement
  // offlineMode: boolean; // todo implement
  api: {
    listFile: string;
    listFolder: string;
    uploadFile: string;
    downloadFile: string;
    deleteFile: string;
    deleteFolder: string;
    createFolder: string;
    getOneFile: string;
    getOneFolder: string;
    renameFile: string;
    renameFolder: string;
    searchFiles: string;
  };
  options: {
    allowFolderDownload: DownloadModeEnum;
    showFilesInsideTree: boolean;
  }
}
