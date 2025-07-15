import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Users } from '../../../../services/users';
import { Tip } from '../../../../services/tip-services';
import { Router} from '@angular/router';



@Component({
  selector: 'app-new-form',
  imports: [ ReactiveFormsModule ],
  templateUrl: './new-form.html',
  styleUrl: './new-form.css'
})
export class tipNewForm {
  formData!: FormGroup;
  users: any = [];

  constructor( 
    private userServices: Users,
    private tipService: Tip, 
    private router: Router
  ) {
    this.formData = new FormGroup({
      titulo: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50) ]),
      contenido: new FormControl('', [ Validators.required, Validators.minLength(5) ]),
      tipo: new FormControl('', [Validators.required]),
      state: new FormControl( true, [Validators.required])
    });
  }
  onSubmit () {
    console.log(
      this.formData.valid,
      this.formData.invalid,
      this.formData.pristine,
      this.formData.dirty,
      this.formData.touched
    );

    if ( this.formData.valid ) {
      console.log(this.formData.value);
      this.tipService.registerTip( this.formData.value ).subscribe({
        next: ( data ) => {
          console.log( data )
          this.router.navigate (['admin', 'tips']) 
        },
        error: ( error ) => {
          console.error ( error )
        },
        complete: () => {
          this.formData.reset()  // limpia los datos del  formulario
        }
      })
    }
    this.formData.reset();
  }
  
  
  // ngOnInit() {
  //   this.userServices.getUsers().subscribe({
  //     next: ( data ) => {
  //       console.log (data);
  //       this.users = data;
  //     },
  //     error: ( error ) => {
  //       console.error( error )
  //     },
  //     complete: () => {
  //       console.log( 'complete')
  //     }
  //   })
  // }
  
  ngOnDestroy() {
    console.log( 'ngOnDestroy' );
  }

}
