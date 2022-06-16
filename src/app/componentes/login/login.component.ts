import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:FormGroup;
  constructor(private fb: FormBuilder) {
    this.login = this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  log(){
    console.log(this.login);

    const usuario: User={
      usuario: this.login.value.usuario,
      contraseña: this.login.value.password,
      perfil: "adminSis || vendedor || adminTienda"
    }
    console.log(usuario)

  }

}
