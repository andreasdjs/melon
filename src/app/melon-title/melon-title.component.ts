import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'melon-title',
  templateUrl: './melon-title.component.html',
  styleUrls: ['./melon-title.component.scss']
})
export class MelonTitleComponent implements OnInit {
  melonTitle = "TITLE";

  constructor() { }

  ngOnInit() {
  }

}
