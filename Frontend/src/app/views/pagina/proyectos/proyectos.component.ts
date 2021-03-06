import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../services/alert.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent implements OnInit {

    public proyectos:any = [];
    public buscador:any = '';
    public loading = false;

    constructor(private apiService: ApiService, private alertService: AlertService) { }

    ngOnInit() {
        this.loadAll();
    }

    public loadAll() {
        this.loading = true;
        this.apiService.getAll('proyectos').subscribe(proyectos => { 
            this.proyectos = proyectos;
            this.loading = false;
        }, error => {this.alertService.error(error); this.loading = false;});
    }

    public delete(proyecto) {
        if (confirm('¿Desea eliminar el Registro?')) {
            this.apiService.delete('proyecto/', proyecto) .subscribe(data => {
                for (let i = 0; i < this.proyectos['data'].length; i++) { 
                    if (this.proyectos['data'][i].id == data.id )
                        this.proyectos['data'].splice(i, 1);
                }
            }, error => {this.alertService.error(error); });
                   
        }

    }

    public search(){
        if(this.buscador && this.buscador.length > 2) {
            this.loading = true;
            this.apiService.read('proyectos/buscar/', this.buscador).subscribe(proyectos => { 
                this.proyectos = proyectos;
                this.loading = false;
            }, error => {this.alertService.error(error); this.loading = false;});
        }
    }

    public setEstado(proyecto:any, estado:string){
        proyecto.estado = estado;
        this.apiService.store('proyecto', proyecto).subscribe(proyecto => { 
            this.alertService.success('Actualizado');
        }, error => {this.alertService.error(error); });
    }

    public setPagination(event):void{
        this.loading = true;
        this.apiService.paginate(this.proyectos.path + '?page='+ event.page).subscribe(proyectos => { 
            this.proyectos = proyectos;
            this.loading = false;
        }, error => {this.alertService.error(error); this.loading = false;});
    }


}

