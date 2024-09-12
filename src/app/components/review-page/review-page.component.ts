import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-review-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-page.component.html',
  styleUrl: './review-page.component.scss'
})
export class ReviewPageComponent {
  reviewList:any=[
    {
      i:1,
      user:"Rohit Kumar",
      image:"assets/images/review/rohit.jpeg",
      review:"Paisa Planner’s dashboard is visually stunning and simplifies expense tracking with ease. Highly effective tool!",
      link:"https://www.linkedin.com/in/rohit-kumar-a04939216/   ",
    },
    {
      i:2,
      user:"Kartikey Choudhary",
      image:"assets/images/review/kc.jpeg",
      review:"Visualizing my finances with Paisa Planner is straightforward and informative. It’s an essential budgeting tool.",
      link:"https://www.linkedin.com/in/kartikey4477/",
    },
    {
      i:3,
      user:"Vaibhav Srivastava ",
      image:"assets/images/review/vaibhav.jpeg",
      review:"Subscription management reminders are perfect. Paisa Planner makes keeping track of finances stress-free.",
      link:"https://www.linkedin.com/in/vaibhav-srivastava-a7b7a9216/",
    },
    {
      i:4,
      user:"Dilip Kumar",
      image:"assets/images/review/dilip.jpeg",
      review:"The financial health monitoring feature is fantastic. Paisa Planner offers clarity and organization in budgeting.",
      link:"https://www.linkedin.com/in/dilip-kumar-cse/",
    },
    {
      i:5,
      user:"Ayush Sharma",
      image:"assets/images/review/ayush.jpeg",
      review:"Paisa Planner’s user-friendly design and expense tracking have revolutionized my financial planning. Highly recommend!",
      link:"https://www.linkedin.com/in/ayush-sharma-cse/",
    },
    {
      i:6,
      user:"Vishal Singh",
      image:"assets/images/review/vishal.jpeg",
      review:"The intuitive dashboard provides clear financial visuals. Managing my spending has never been easier with Paisa Planner.",
      link:"https://www.linkedin.com/in/vishal-singh-4788b3203/",
    },
    {
      i:7,
      user:"Shivam Tiwari",
      image:"assets/images/review/shiwan.jpeg",
      review:"Never miss a subscription payment again. Paisa Planner keeps all my financial details organized seamlessly",
      link:"https://www.linkedin.com/in/shivam-tiwari-7653bb205/",
    },
    {
      i:8,
      user:"Indresh",
      image:"assets/images/review/indresh.jpeg",
      review:"Paisa Planner’s expense management tools are incredibly easy to use and very effective. Great financial ally!",
      link:"https://www.linkedin.com/in/indresh-bharati-24775a202/",
    },

    

  ]
}
