import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-switch-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch-demo.component.html',
  styleUrl: './switch-demo.component.css'
})

export class SwitchDemoComponent {

  constructor() { }

  public day = new Date().getDay()

  ngOnInit(): void {

  }


}
