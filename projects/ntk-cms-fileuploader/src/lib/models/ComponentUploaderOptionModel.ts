export class ComponentUploaderOptionModel {
  onActions: ComponentOptionFileUploadActionsModel;
  methods: ComponentOptionFileUploadMethodsModel;
  data: ComponentOptionFileUploadDataModel;
}
export class ComponentOptionFileUploadActionsModel {
  onActionSelect: (x: any) => void;
}
export class ComponentOptionFileUploadMethodsModel {
  ActionReload: () => void;
}
export class ComponentOptionFileUploadDataModel {
  PathApiUpload: string;
  Select: any;
}
