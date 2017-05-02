import { Component } from '@angular/core';

export class Fruit {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TITLE';

  fruit: Fruit = {
    id: 1,
    name: 'Melon'
  };

}
