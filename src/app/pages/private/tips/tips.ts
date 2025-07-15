import { Component } from '@angular/core';
import { Tip } from '../../../services/tip-services';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-tips',
  imports: [ RouterLink ],
  templateUrl: './tips.html',
  styleUrl: './tips.css'
})
export class Tips {
  tips: any = []

  constructor( private tipService: Tip  ){}

//Usamos este ciclo de vida para obtener los datos en el momento que se inicializa el componente

  ngOnInit() {
    this.onLoadData()
  }

  onLoadData(){
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

  onDelete ( id: string )  { 
    console.log( id )
    this.tipService.deleteTip( id ).subscribe ({
      next:( data ) => {
        console.log( data )
        this.onLoadData()
      },
      error: (error) => {
        console.error( error )
      },
      complete: () => {}
    })
  }

  onHandleDelete( event: KeyboardEvent, id: string ){
    if ( event.key ==='Enter' || event.key === ' '){
      event.preventDefault(),
      this.onDelete( id )
    }
  }

}
  