import { Component, OnInit } from '@angular/core';
import { UserResult } from 'src/app/interfaces/userAPI';
import { UsersService } from 'src/app/users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service.UsersService) { }
  users:UsersResult;
  
  ngOnInit(): void {
    this.service.getUsers().subscribe((result.UserResult) => {
      this:this.users = result,
      console.log(result);
  });
  }

}
