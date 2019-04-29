export interface FormCells{
  formName: string;
  fieldName: string;
  displayName: string;
  url?: string;
  validationMessage?: string;
  isEditable?: boolean;
  isHidden?: boolean;
  isMandatory?: boolean;
  isValidationRequired?: boolean;
  createby?: string;
  createDate?: string;
  modifiedBy?: string;
  modifiedDate?: string;
}