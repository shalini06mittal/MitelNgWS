import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public us:UsersService){}
}
