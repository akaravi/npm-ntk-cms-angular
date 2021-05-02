export interface QueryBuilderFieldMap {
  [key: string]: Field;
}

export interface QueryBuilderSettings {
  allowRuleSets?: boolean;
}

export interface Rule {
  field: string;
  type: string;
  operator: string;
  value?: any;
}

export interface RuleSet {
  condition: string;
  rules: Array<RuleSet | Rule>;
}

export interface Field {
  name: string;
  type: string;
  value?: string;
  options?: SelectOption[];
  settings?: FieldSettings;
}

export interface FieldSettings {
  nullableOperators?: boolean;
  emptyOperators?: boolean;
}

export interface SelectOption {
  name: string;
  value: any;
}

