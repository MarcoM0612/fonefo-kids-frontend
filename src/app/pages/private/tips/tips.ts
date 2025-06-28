import { Component } from '@angular/core';
import { Tip } from '../../../services/tip';



@Component({
  selector: 'app-tips',
  imports: [],
  templateUrl: './tips.html',
  styleUrl: './tips.css'
})
export class Tips {
  tips: any = []

  constructor( private tipService: Tip  ){}

//Usamos este ciclo de vida para obtener los datos en el momento que se inicializa el componente

  ngOnInit() {
    this.tipService.getTips().subscribe({
      next: ( data ) => {
        console.log( data )
        this.tips = data
      },
      error: ( error ) => {
        console.error ( error )
      },
      complete: () => {
        console.log( 'complete')
      }
    })
  }


}
