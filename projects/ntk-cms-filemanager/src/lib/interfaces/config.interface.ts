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
    createFile: string;
    getOneFile: string;
    getOneFolder: string;
    renameFile: string;
    renameFolder: string;
    searchFiles: string;
  };
  options: {
    title: string;
    allowFolderDownload: DownloadModeEnum;
    showFilesInsideTree: boolean;
    showSelectFile: boolean;
    showSelectFolder: boolean;
    fileUplodMaxCount:number;
    fileUplodTypeAccept:string;
    fileUplodExtensions: string[];
  }
}
