import { Component } from '@angular/core';
import data from "../assets/shipements.json";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  test: any = data;
}
