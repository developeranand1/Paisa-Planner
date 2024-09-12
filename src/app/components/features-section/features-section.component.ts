import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.scss'
})
export class FeaturesSectionComponent {
  featureList:any=[
    {
      icons:"monitoring",
      heading:"Attractive Dashboard",
      about:"Visualize your finances at a glance"
    },
    {
      icons:"manage_search",
      heading:"Easy Expense Management",
      about:"Track and categorize your spending effortlessly"
    },
    {
      icons:"payments",
      heading:"Financial Tracking",
      about:"Keep a close eye on your financial health"
    },
    {
      icons:"card_membership",
      heading:"Subscription Management",
      about:"Never forget a subscription payment again"
    }
  ]
}
