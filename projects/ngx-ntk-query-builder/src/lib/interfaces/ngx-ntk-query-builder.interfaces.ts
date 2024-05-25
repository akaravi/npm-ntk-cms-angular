export interface QueryBuilderFieldMap {
  [key: string]: QueryField;
}

export interface QueryBuilderSettings {
  allowRuleSets?: boolean;
}

export interface QueryRule {
  field: string;
  type: string;
  operator: string;
  value?: any;
}

export interface QueryRuleSet {
  condition: string;
  rules: Array<QueryRuleSet | QueryRule>;
}

export interface QueryField {
  name: string;
  type: string;
  value?: string;
  options?: SelectOption[];
  settings?: QueryFieldSettings;
}

export interface QueryFieldSettings {
  nullableOperators?: boolean;
  emptyOperators?: boolean;
}

export interface SelectOption {
  name: string;
  value: any;
}

