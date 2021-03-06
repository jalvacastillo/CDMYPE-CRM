import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TooltipModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { SharedModule } from '../../shared/shared.module';

import { EquiposComponent } from './equipo/equipos.component';
import { EquipoComponent } from './equipo/equipo/equipo.component';
import { EquipoInfoComponent } from './equipo/equipo/info/equipo-info.component';
import { EquipoCuentaComponent } from './equipo/equipo/cuenta/equipo-cuenta.component';

import { ServiciosComponent } from './servicios/servicios.component';
import { ServicioComponent } from './servicios/servicio/servicio.component';

import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaComponent } from './noticias/noticia/noticia.component';

import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyectoComponent } from './proyectos/proyecto/proyecto.component';

import { ActividadesComponent } from './actividades/actividades.component';
import { ActividadComponent } from './actividades/actividad/actividad.component';
import { ActividadInfoComponent } from './actividades/actividad/info/actividad-info.component';
import { ActividadAplicacionesComponent } from './actividades/actividad/aplicaciones/actividad-aplicaciones.component';

import { ResultadosComponent } from './resultados/resultados.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { TestimonioComponent } from './testimonios/testimonio/testimonio.component';

import { DiagnosticosComponent } from './diagnosticos/diagnosticos.component';
import { DiagnosticoComponent } from './diagnosticos/diagnostico/diagnostico.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    SharedModule,
    PopoverModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [
    EquiposComponent,
    EquipoComponent,
    EquipoInfoComponent,
    EquipoCuentaComponent,
    ServiciosComponent,
    ServicioComponent,
    NoticiasComponent,
    NoticiaComponent,
    ProyectosComponent,
  	ProyectoComponent,
    ActividadesComponent,
    ActividadComponent,
    ActividadInfoComponent,
    ActividadAplicacionesComponent,
    ResultadosComponent,
    TestimoniosComponent,
    TestimonioComponent,
    DiagnosticosComponent,
    DiagnosticoComponent
  ],
  exports: [
    EquiposComponent,
    EquipoComponent,
    EquipoInfoComponent,
    EquipoCuentaComponent,
    ServiciosComponent,
    ServicioComponent,
    NoticiasComponent,
    NoticiaComponent,
    ProyectosComponent,
  	ProyectoComponent,
    ActividadesComponent,
    ActividadComponent,
    ActividadInfoComponent,
    ActividadAplicacionesComponent,
    ResultadosComponent,
    TestimoniosComponent,
    TestimonioComponent,
    DiagnosticosComponent,
    DiagnosticoComponent
  ]
})
export class PaginaModule { }
