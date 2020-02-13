export interface IDataModel {
  documentName: string;
  documentNumber: string;
  documentOwner: string;
  enableDocumentName: boolean;
  enableDocumentNumber: boolean;
}

export interface IConfigItem {
  label: string;
  type: string;
  enable?: string | boolean;
  dataModelRef: string;
}
