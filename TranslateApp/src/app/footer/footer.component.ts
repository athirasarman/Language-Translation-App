import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  copyRight="@2021. All Rights Reserved.";
  constructor() { }

  ngOnInit(): void {
  }

}
