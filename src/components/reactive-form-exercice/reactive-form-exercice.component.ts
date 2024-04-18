import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';


type Experience = FormGroup<{
  companyName : FormControl<string>,
  duration: FormControl<string>
}>;

type Form = FormGroup<{
  candidate: FormGroup<{
    lastName: FormControl<string>;
    firstName: FormControl<string>;
    age: FormControl<string>;
    experience : FormArray<Experience>
  }>;
}>;

@Component({
  selector: 'app-reactive-form-exercice',
  templateUrl: './reactive-form-exercice.component.html',
  styleUrls: ['./reactive-form-exercice.component.css']
})
export class ReactiveFormExerciceComponent {

  private fb = inject(NonNullableFormBuilder);

  myForm: Form = this.fb.group({
    candidate : this.fb.group({
      lastName: [''],
      firstName: [''],
      age: [''],
      experience: this.fb.array([this.generateExperience()])
    })
  });

  generateExperience():Experience {
    return this.fb.group({
      companyName: '',
      duration: ''
    })
  };

  addExperience() {
    this.myForm.controls.candidate.controls.experience.push(this.generateExperience())
  }

  removeExperience(index: any) {
    this.myForm.controls.candidate.controls.experience.removeAt(index)
  }

  onSubmit() {
    console.log(this.myForm.getRawValue())
  }

}
