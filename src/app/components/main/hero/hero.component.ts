import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  // documentoguardado = new Array
  // subirCv(){
  //   const archivo=document.getElementById('cv') as HTMLInputElement;
    
  //   if (archivo) {
  //     archivo.click();
  //   }
  //   if (archivo!=null) {
  //     const documento = archivo.files?.[0]
  //     this.documentoguardado.push(documento)
  //     console.log("cv cargado exitosamente")

  //   }
    
  // }
  documentoguardado: File[] = [];

  subirCV() {
    const archivo = document.getElementById('cv') as HTMLInputElement;
    if (archivo) {
      archivo.click();
    }
    archivo.onchange = () => {
      if(archivo.files && archivo.files.length > 0 && 
        ((archivo.files[0].type === 'application/pdf') 
        || (archivo.files[0].type === 'application/msword'))) {
        console.log('Archivo seleccionado:', archivo.files[0].name);
        this.documentoguardado.push(archivo.files[0]);
        alert('Archivo subido exitosamente');
      }else{
        alert('Por favor, selecciona un archivo PDF o Word válido.');
      }
    }
  }
  

}
