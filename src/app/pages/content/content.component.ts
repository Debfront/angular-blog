import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RxBhJI_GH6asXfjawFRUYiiLBU3MGmBcBA&usqp=CAU"
  contentTitle:string ="NOTICIA EXEMPLO"
  contentDescription:string ="lorem inpsum"
  constructor() { }

  ngOnInit(): void {
  }

}
