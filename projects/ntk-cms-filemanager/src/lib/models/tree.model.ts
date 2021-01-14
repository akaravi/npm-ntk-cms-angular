import { NodeInterface } from '../interfaces/node.interface';
import { ConfigInterface } from '../interfaces/config.interface';
import { DownloadModeEnum } from '../enums/download-mode.enum';

export class TreeModel {
  private _currentPath: number;
  private _nodes: NodeInterface;
  private _selectedNodeId: number;
  public config: ConfigInterface;
  private configDefault: ConfigInterface = {
    baseURL: 'https://apicms.ir/api/v1/',
    baseUploadURL: 'https://apifile.ir/api/v1/',
    api: {
      listFile: 'FileContent/GetAll',
      listFolder: 'FileCategory/GetAll',
      uploadFile: 'upload',
      downloadFile: 'download',
      deleteFile: 'FileContent',
      deleteFolder: 'FileCategory',
      createFolder: 'FileCategory',
      createFile: 'FileContent',
      getOneFile: 'FileContent',
      getOneFolder: 'FileCategory',
      renameFile: 'FileContent',
      renameFolder: 'FileCategory',
      searchFiles: 'FileCategory/GetAll',
    },
    options: {
      title: 'Select File',
      allowFolderDownload: DownloadModeEnum.DOWNLOAD_FILES,
      showFilesInsideTree: false,
      showSelectFile: true,
      showSelectFileType: [],
      showSelectFolder: false,
    },
  };
  constructor(config: ConfigInterface = null) {
    this._currentPath = 0;
    this.config = config;
    if (!this.config || this.config == null) {
      this.config = this.configDefault;
    }
    if (!this.config.api) {
      this.config.api = this.configDefault.api;
    }
    if (!this.config.baseURL || this.config.baseURL.length === 0) {
      this.config.baseURL = this.configDefault.baseURL;
    }
    if (!this.config.baseUploadURL || this.config.baseUploadURL.length === 0) {
      this.config.baseUploadURL = this.configDefault.baseUploadURL;
    }
    this.nodes = {
      id: 0,
      isFolder: true,
      isExpanded: true,
      stayOpen: true,
      name: '...',
      children: [],
      isRoot: true,
      CreatedDate: null,
      UpdatedDate: null,
      downloadLinksrc: '',
      parentId: null,
      size : null,
      type : '',
    };
  }

  get currentPath(): number {
    return this._currentPath;
  }

  set currentPath(value: number) {
    this._currentPath = value;
  }

  get nodes(): NodeInterface {
    return this._nodes;
  }

  set nodes(value: NodeInterface) {
    this._nodes = value;
  }

  get selectedNodeId(): number {
    return this._selectedNodeId;
  }

  set selectedNodeId(value: number) {
    this._selectedNodeId = value;
  }

}
