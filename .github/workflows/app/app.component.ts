import { Component, OnInit } from '@angular/core';
import { Komunikat } from './komunikat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  name = 'Ala ma kota';
  komunikaty: Komunikat[];
  pokazKomunikaty = true;


  ngOnInit() {
    this.komunikaty = [
     new Komunikat('Treść pierwszego komunikatu', new Date(), false),
     new Komunikat('Treść drugiego komunikatu', new Date(), true),
     new Komunikat('Treść trzeciego komunikatu', new Date(), true)
    
    ];
   

  }
}
