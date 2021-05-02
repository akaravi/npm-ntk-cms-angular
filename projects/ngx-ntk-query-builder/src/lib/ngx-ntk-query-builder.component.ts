import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {Field, QueryBuilderFieldMap, Rule, RuleSet, QueryBuilderSettings} from './interfaces/ngx-ntk-query-builder.interfaces';
import {OperatorsService} from './services/operators.service';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ngx-ntk-query-builder',
  templateUrl: './ngx-ntk-query-builder.component.html',
  styleUrls: ['./ngx-ntk-query-builder.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgxQueryBuilderComponent),
    multi: true
  }]
})
export class NgxQueryBuilderComponent implements OnInit, ControlValueAccessor {

  @Input() fieldMap: QueryBuilderFieldMap = {};
  @Input() settings: QueryBuilderSettings = {};
  @Input() disabled = false;

  @Input() data: RuleSet = this.getEmptyRuleSetData();
  @Input() parent: RuleSet;
  @Input() index: number;

  constructor(
    public operatorsService: OperatorsService
  ) { }

  ngOnInit() {
    if (typeof this.fieldMap !== 'object') {
      throw new Error('fieldMap must be an object');
    }

    if (typeof this.settings !== 'object') {
      throw new Error('settings must be an object');
    }
  }

  /**** ControlValueAccessor START ****/

  onChange = (data: RuleSet) => {};
  onTouched = () => {};

  writeValue(data: any): void {
    this.data = data || this.getEmptyRuleSetData();
  }

  registerOnChange(fn: (data: RuleSet) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /**** ControlValueAccessor END ****/

  addRule(): void {
    if (this.disabled) {
      return;
    }

    this.data.rules.push({
      field: this.getFields()[0].value,
      type: this.getFields()[0].type,
      operator: this.operatorsService.getDefaultOperator()
    });

    this.onChange(this.data);
    this.onTouched();
  }

  removeRule(index: number): void {
    if (this.disabled) {
      return;
    }

    this.data.rules.splice(index, 1);

    this.onChange(this.data);
    this.onTouched();
  }

  addRuleSet(): void {
    if (this.disabled) {
      return;
    }

    this.data.rules.push(this.getEmptyRuleSetData());

    this.onChange(this.data);
    this.onTouched();
  }

  removeRuleSet(index: number): void {
    if (this.disabled) {
      return;
    }

    if (this.hasParentRuleSet()) {
      this.parent.rules.splice(index, 1);
    }

    this.onChange(this.data);
    this.onTouched();
  }

  changeCondition(value: string): void {
    if (this.disabled) {
      return;
    }

    this.data.condition = value;

    this.onChange(this.data);
    this.onTouched();
  }

  changeField(rule: Rule, index: number) {
    (this.data.rules[index] as Rule).type = this.fieldMap[rule.field].type;
    (this.data.rules[index] as Rule).operator = this.operatorsService.getDefaultOperator();
    (this.data.rules[index] as Rule).value = undefined;

    this.onChange(this.data);
    this.onTouched();
  }


  hasParentRuleSet(): boolean {
    return !!this.parent;
  }

  getEmptyRuleSetData(): RuleSet {
    return { condition: 'and', rules: [] };
  }

  getFields(): Field[] {
    return Object.keys(this.fieldMap).map((value) => {
      const field = this.fieldMap[value];
      field.value = value;
      return field;
    });
  }

  getInputType(rule: Rule) {

    if (!this.fieldMap[rule.field]) {
      throw new Error(`No configuration for field '${rule.field}' was found!`);
    }

    const type = this.fieldMap[rule.field].type;

    if (this.operatorsService.getOperatorsWithoutInput().includes(rule.operator)) {
      return null; // No displayed input
    }

    if (this.operatorsService.MULTI_SELECT_OPERATORS.includes(rule.operator)) {
      return (type === this.operatorsService.INPUT_TYPE_SELECT) ? this.operatorsService.INPUT_TYPE_MULTI_SELECT : type;
    }

    return type;
  }

  getRuleOptions(rule: Rule) {
    return this.fieldMap[rule.field].options ? this.fieldMap[rule.field].options : [];
  }

}
