import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddMember implements OnInit{

  forms!: FormGroup;
  error: boolean = false;
  errorMessages: string[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.forms = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      semester: ['', [Validators.required]],
      career: ['', [Validators.required]],
    });
  }

  async onSubmit(){
    if (this.forms.invalid) return;

    try{
      this.error = false;
      this.errorMessages = [];

      console.log('Integrante añadido');
      this.router.navigateByUrl('/members');

    }catch(error:any){

      if (error.status === 0){
        this.error = true;
        this.errorMessages.push('Error en la conexión con el servidor');
        return;
      }
      console.log('Error en el login', error);
      this.error = true;
      this.errorMessages.push(error.error);
    } finally {
      console.log('Petición finalizada');
      this.forms.reset();
    }
  }

  get emailInvalid(){
    return this.forms.get('email')?.invalid && this.forms.get('email')?.touched;
  }

  get nameInvalid(){
    return this.forms.get('name')?.invalid && this.forms.get('name')?.touched;
  }

  get semesterInvalid(){
    return this.forms.get('semester')?.invalid && this.forms.get('semester')?.touched;
  }

  get careerInvalid(){
    return this.forms.get('career')?.invalid && this.forms.get('career')?.touched;
  }
}