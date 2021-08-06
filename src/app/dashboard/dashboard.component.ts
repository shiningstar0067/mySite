import { Component, OnInit } from '@angular/core';
import { StartupService } from '../services/startup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'My Site';
  navItems: Array<String> = ["Dashboard", "Settings"];
  currentUser = "TestUser";  

  constructor(private service: StartupService, private router: Router) { }

  ngOnInit(): void {
    if(!sessionStorage.getItem('isActive')){
      this.router.navigate(['login'])
    }
    //this.currentUser = this.service.data.username;
  }

  fnLogout(){
    sessionStorage.removeItem('isActive');
    sessionStorage.clear();
  }
}
