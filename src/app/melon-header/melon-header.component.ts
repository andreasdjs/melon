import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'melon-header',
  templateUrl: './melon-header.component.html',
  styleUrls: ['./melon-header.component.scss']
})


export class MelonHeaderComponent implements OnInit {
  headerTitle = "THIS IS THE HEADER";

  constructor() { }

  ngOnInit() {
  }

}
