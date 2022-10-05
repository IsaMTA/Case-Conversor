import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { snakeCase, capitalCase, pathCase, camelCase} from 'change-case';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'case-conversor';

  caseForm = new FormGroup({
    stringInput: new FormControl()
  });

  caseInput = '';

  getString() {
    if (this.caseForm.invalid) {
      return;
    }

    this.caseInput = this.caseForm.get('stringInput')?.value;
  }

  clearString() {
    this.caseInput = '';
    this.caseForm.setValue({'stringInput': ''});
  }

  get toSnakeCase() {
    return camelCase(this.caseInput);
  }
  get toPathCase() {
    return pathCase(this.caseInput);
  }
  get toUpperCase() {
    return capitalCase(this.caseInput);
  }
}
