import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  Name: "";
  Surname: "";
  Email: "";
  StartDate: Date;
  EndDate: Date;

  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.Name = params['Name'];
      this.Surname = params['Surname'];
      this.Email = params['Email'];
      this.StartDate= params['StartDate'];
      this.EndDate= params['EndDate'];

      console.log(this.Name);
      console.log(this.Surname);
      console.log(this.Email);
      console.log(this.StartDate);
      console.log(this.EndDate);

    });

  }
  onReview(){
    this.router.navigate(['/review'], {queryParams: {Name: this.Name, Surname: this.Surname, Email: this.Email, StartDate: this.StartDate, EndDate: this.EndDate}})

  }

}
