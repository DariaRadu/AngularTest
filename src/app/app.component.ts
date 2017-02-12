import { Component } from '@angular/core';


@Component({
  selector: 'todo-root',
  template: `
     <todo-list-manager class="todo-app"></todo-list-manager>

    `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  constructor() {
  }

  ngOnInit() {

  }
}
