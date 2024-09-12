import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {
  techList:any[]=[
    {
      image:"assets/images/teck stack/html.png",
      title:"HTML",
    },
    {
      image:"assets/images/teck stack/css.png",
      title:"CSS",
    },
    {
      image:"assets/images/teck stack/typescript.png",
      title:"TypeScript",
    },
    {
      image:"assets/images/teck stack/programing.png",
      title:"Angular",
    },
    {
      image:"assets/images/teck stack/bootstrap.png",
      title:"Bootstrap",
    },
    {
      image:"assets/images/teck stack/node.png",
      title:"Node JS",
    }

  ]
}
