import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-exercice',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form-exercice.component.html',
  styleUrls: ['./reactive-form-exercice.component.css'],
})
export class ReactiveFormExerciceComponent {
  private fb = inject(NonNullableFormBuilder);

  myForm = this.fb.group({
    candidate: this.fb.group({
      lastName: [''],
      firstName: [''],
      age: [''],
      experience: this.fb.array([this.generateExperience()]),
    }),
  });

  generateExperience() {
    return this.fb.group({
      companyName: '',
      duration: '',
    });
  }

  addExperience() {
    this.myForm.controls.candidate.controls.experience.push(
      this.generateExperience()
    );
  }

  removeExperience(index: any) {
    this.myForm.controls.candidate.controls.experience.removeAt(index);
  }

  onSubmit() {
    console.log(this.myForm.getRawValue());
  }
}
