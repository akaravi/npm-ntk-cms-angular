export enum EnumBuildStatusType {
  BuildOrder = 1,
  BuildMSMQAdd = 2,
  BuildMSMQAddError = 3,
  BuildMSMQRead = 4,
  BuildMSMQRun = 5,
  BuildError = 6,
  BuildSuccessfully = 7,
  BuildUnsuccessfully = 8,
  BuildMSMQRunNowBuildTempPathCreate = 9,
  BuildMSMQRunNowFiledownloaded = 10,
  BuildMSMQRunNowGitPull = 11,

  BuildMSMQRunNowBuildStart = 12,

  BuildMSMQRunNowBuildEnd = 12,

  BuildMSMQRunNowFileCopy = 13,
  CopyAppReleaseToExportApplication,
  BuildMSMQRunNowBuildDownloadFiles,
  BuildGitError,
  BuildUnsuccessfullyButFileNotExist,
  BuildSuccessfullyAndCopyAppReleaseToExportApplicationfully = 20,
}
