import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Marcador } from 'src/app/classes/marcador.class';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  marcadores: Marcador[] = [];
  lat = 51.678418;
  lng = 7.809007;

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores')!);
    }
  }

  ngOnInit(): void {}

  agregarMarcador(evento: any) {
    const coords: { lat: number; lng: number } = evento.coords;

    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);

    this.guardarStorage();

    this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 2500 });
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  borrarMarcador(index: number) {
    this.marcadores.splice(index, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar', { duration: 2500 });
  }

  editarMarcador(marcador: Marcador) {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: { titulo: marcador.titulo, descripcion: marcador.descripcion },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }
      marcador.titulo = result.titulo;
      marcador.descripcion = result.descripcion;

      this.guardarStorage();
      this.snackBar.open('Marcador actualizado', 'Cerrar', { duration: 2500 });
    });
  }
}
