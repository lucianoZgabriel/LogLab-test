import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-component',
  templateUrl: './meu-component.component.html',
  styleUrls: ['./meu-component.component.css']
})
export class MeuComponentComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {
    
  }

  mostrarAlerta(): void {
    alert("Botão foi clicado!")
  }
}
