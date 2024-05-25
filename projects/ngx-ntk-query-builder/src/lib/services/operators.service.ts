import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { QueryBuilderFieldMap, QueryRule } from '../interfaces/ngx-ntk-query-builder.interfaces';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {

  readonly INPUT_TYPE_STRING = 'string';
  readonly INPUT_TYPE_INTEGER = 'integer';
  readonly INPUT_TYPE_DOUBLE = 'double';
  readonly INPUT_TYPE_TIME = 'time';
  readonly INPUT_TYPE_DATE = 'date';
  readonly INPUT_TYPE_SELECT = 'select';
  readonly INPUT_TYPE_BOOLEAN = 'boolean';

  readonly INPUT_TYPE_MULTI_SELECT = 'multi_select';

  readonly NULLABLE_OPERATORS = ['is_null', 'is_not_null'];
  readonly EMPTY_OPERATORS = ['is_empty', 'is_not_empty'];
  readonly MULTI_SELECT_OPERATORS = ['in', 'not_in'];

  private readonly defaultOperator = 'equal';

  private readonly operatorsMap: { [key: string]: string[] } = {
    string: ['equal', 'not_equal', 'contains', 'not_contains', 'begins_with', 'not_begins_with', 'ends_with', 'not_ends_with'],
    integer: ['equal', 'not_equal', 'greater', 'greater_or_equal', 'less', 'less_or_equal'],
    double: ['equal', 'not_equal', 'greater', 'greater_or_equal', 'less', 'less_or_equal'],
    time: ['equal', 'not_equal', 'greater', 'greater_or_equal', 'less', 'less_or_equal'],
    date: ['equal', 'not_equal', 'greater', 'greater_or_equal', 'less', 'less_or_equal'],
    select: ['equal', 'not_equal', ...this.MULTI_SELECT_OPERATORS],
    boolean: ['equal'],
  };

  private readonly operatorsDisplayNames: { [key: string]: string } = {
    equal: 'querybuilder.equal',
    not_equal: 'querybuilder.not_equal',
    contains: 'querybuilder.contains',
    not_contains: 'querybuilder.not_contains',
    begins_with: 'querybuilder.begins_with',
    not_begins_with: 'querybuilder.not_begins_with',
    ends_with: 'querybuilder.ends_with',
    not_ends_with: 'querybuilder.not_ends_with',
    greater: 'querybuilder.greater',
    greater_or_equal: 'querybuilder.greater_or_equal',
    less: 'querybuilder.less',
    less_or_equal: 'querybuilder.less_or_equal',
    is_null: 'querybuilder.is_null',
    is_not_null: 'querybuilder.is_not_null',
    is_empty: 'querybuilder.is_empty',
    is_not_empty: 'querybuilder.is_not_empty',
    in: 'querybuilder.in',
    not_in: 'querybuilder.not_in'
  };
  private readonly operatorsDisplayNames___old: { [key: string]: string } = {
    equal: 'Equals',
    not_equal: 'Does not equal',
    contains: 'Contains',
    not_contains: 'Does not contain',
    begins_with: 'Begins with',
    not_begins_with: 'Does not begins with',
    ends_with: 'Ends with',
    not_ends_with: 'Does not end with',
    greater: 'Greater than',
    greater_or_equal: 'Greater than or equal',
    less: 'Less than',
    less_or_equal: 'Less than or equal',
    is_null: 'Is null',
    is_not_null: 'Is not null',
    is_empty: 'Is empty',
    is_not_empty: 'Is not empty',
    in: 'In',
    not_in: 'Not in'
  };
  constructor(private translate: TranslateService,
  ) { }

  getOperators(rule: QueryRule, fieldMap: QueryBuilderFieldMap): string[] {

    if (!this.getAvailableTypes().includes(rule.type)) {
      console.error('Type of rule is not valid. Please use one of the following types: ' + this.getAvailableTypes().join(', '));
    }

    let operators = this.operatorsMap[rule.type];

    // allow nullable
    if (fieldMap[rule.field].settings && fieldMap[rule.field].settings.nullableOperators) {
      operators = [...operators, ...this.NULLABLE_OPERATORS];
    }

    // allow empty
    if (fieldMap[rule.field].settings && fieldMap[rule.field].settings.emptyOperators) {
      operators = [...operators, ...this.EMPTY_OPERATORS];
    }

    return operators;
  }

  getDefaultOperator(): string {
    return this.defaultOperator;
  }

  getOperatorsWithoutInput(): string[] {
    return [...this.NULLABLE_OPERATORS, ...this.EMPTY_OPERATORS];
  }

  getOperatorDisplayName(operator: string): string {
    if (this.operatorsDisplayNames[operator]) {
      return this.operatorsDisplayNames[operator];
    }
    return operator;
  }

  private getAvailableTypes(): string[] {
    return [
      this.INPUT_TYPE_STRING,
      this.INPUT_TYPE_INTEGER,
      this.INPUT_TYPE_DOUBLE,
      this.INPUT_TYPE_TIME,
      this.INPUT_TYPE_DATE,
      this.INPUT_TYPE_SELECT,
      this.INPUT_TYPE_BOOLEAN
    ];
  }
}
