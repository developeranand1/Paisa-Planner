import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-tools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-tools.component.html',
  styleUrl: './our-tools.component.scss'
})
export class OurToolsComponent {
  toolList:any=[
    {
      website:"https://daily-expenses-1.netlify.app/",
      image:"assets/images/tool/expense.png",
      title:"Daily Expenses",
      use:"Track, manage, and analyze spending.",
    },
    {
      website:"https://money-split-iota.vercel.app/",
      image:"assets/images/tool/split.png",
      title:"Split Money",
      use:"Share and split expenses effortlessly.",
    },
    {
      website:"https://todowithap.netlify.app/",
      image:"assets/images/tool/todo.png",
      title:"I-Task",
      use:"Organize and track daily tasks.",
    },
    {
      website:"https://developeranand1.github.io/pass_op/",
      image:"assets/images/tool/password.png",
      title:"Pass OP",
      use:"Store and secure passwords safely",
    },
  ]
}
