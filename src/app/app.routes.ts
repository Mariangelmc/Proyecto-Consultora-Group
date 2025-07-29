import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroEmpresaComponent } from './components/registro-empresa/registro-empresa.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { ClientesComponent } from './components/clientes/clientes.component';

export const routes: Routes = [
    {path:'main', component:MainComponent},
    {path:'login', component:LoginComponent},
    {path:'registro-empresa', component:RegistroEmpresaComponent},
    {path:'listado-clientes', component:ClientesComponent},
    {path:'registro-usuario', component:RegistroUsuarioComponent},
    {path:'**', pathMatch:'full', redirectTo:'main'},
];
