import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tgt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // exemplo de um input para um componente mais generico
  @Input()
  title = 'Target';

  constructor() { }

  ngOnInit(): void {
  }

  goTo(){
    window.open('https://www.linkedin.com/in/victor-perigo-1a28581b0/', '_blank');
  }
}
