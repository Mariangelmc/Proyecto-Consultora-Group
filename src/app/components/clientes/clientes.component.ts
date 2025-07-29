import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-clientes',
  imports: [NgFor],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  clientes:Array<Cliente>=[]

  
  constructor(private clienteService:ClienteService){
    this.clientes=new Array<Cliente>()
  }

  mostrarClientes(){
    this.clienteService.getClientes().subscribe({
      next:(resultado)=>{
        console.log(resultado)
        this.clientes = resultado
      },
      error:(error:any)=>{
        console.error("error al mostrar clientes",error)
      }
    })
  }

}
