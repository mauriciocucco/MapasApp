export class Marcador {
  public titulo: string = 'Sin título';
  public descripcion: string = 'Sin descripción';

  constructor(public lat: number, public lng: number) {}
}

// ESTO ES LO MISMO QUE ESTÁ ARRIBA:
// export class Marcador {
//     public lat: number;
//     public lng: number;
//     public titulo: string = 'Sin título';
//     public descripcion: string = 'Sin descripción';

//     constructor(lat: number, lng: number) {
//         this.lat = lat;
//         this.lng = lng;
//     }
// }
