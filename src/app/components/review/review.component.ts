import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  Name: "";
  Surname: "";
  Email: "";
  StartDate: Date;
  EndDate: Date;

  constructor(private route: ActivatedRoute) { }

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
  
}
