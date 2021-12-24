import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'lbk-inbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form [formGroup]="formGroup" (ngSubmit)="onSubmit()">
      <!-- email form -->
      <div class="flex gap-4 justify-between items-start">
        <div class="grow">
          <input
            formControlName="email"
            class="w-full py-3 pl-6 text-sm rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Updates in your inbox..."
          />

          <!-- errors -->
          <div class="ml-2 mt-2 text-sm text-red-600">
            <p *ngIf="isEmailInvalid">Email invalid.</p>
            <p *ngIf="isEmailRequired">Email is required.</p>
          </div>
          <!-- end errors -->
        </div>

        <!-- submit button -->
        <button
          [disabled]="hasErrors"
          class="text-xs shadow-lg btn btn-primary px-7"
        >
          GO
        </button>
        <!-- end submit button -->
      </div>
      <!-- end email form -->
    </form>
  `,
})
export class InboxComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private readonly _fb: FormBuilder) {}
  ngOnInit(): void {
    this.formGroup = this._fb.group({
      email: ['', [Validators.email, Validators.required]],
    });
  }
  onSubmit() {
    alert('Thank for submitted');
  }

  get email(): FormControl {
    return this.formGroup.get('email') as FormControl;
  }

  get hasErrors(): boolean {
    return this.formGroup.invalid;
  }

  get isEmailInvalid(): boolean {
    return this.email.touched && this.email.hasError('email');
  }

  get isEmailRequired(): boolean {
    return this.email.touched && this.email.hasError('required');
  }
}
