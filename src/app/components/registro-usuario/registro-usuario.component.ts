import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [FormsModule, HttpClientModule],

  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent {
  cliente!:Cliente
  constructor(private clienteServices:ClienteService) {
    this.cliente = new Cliente(0,"", "", "", "")
  }

  crearCliente() {
    this.clienteServices.crearCliente(this.cliente).subscribe({
      next: () => console.log("Cliente creado"),
      error: err => console.error("Error al crear cliente", err)
    });
  }
  }


