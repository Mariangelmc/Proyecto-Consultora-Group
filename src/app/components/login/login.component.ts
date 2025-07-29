import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userDefault = "admin"
  passwordDefault = "admin"
  usuario!:string
  contrasenia!:string
  constructor() {
    // console.log(this.usuario)
    // console.log(this.contrasenia)

  } 

  login() {
    if (this.usuario == this.userDefault && this.contrasenia == this.passwordDefault) {
      console.log("usuario logueado correctamente")
    } else {
      console.log("no se encontro usuario")
    }

  }

}
