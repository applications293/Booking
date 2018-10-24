import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  Name: "";
  Surname: "";
  Email: "";
  StartDate: Date;
  EndDate: Date;

  constructor(private router: Router) { }

  ngOnInit() {
  }

onSubmit(){
  
  this.router.navigate(['/display'], {queryParams: {Name: this.Name, Surname: this.Surname, Email: this.Email, StartDate: this.StartDate, EndDate: this.EndDate}})

}

}
