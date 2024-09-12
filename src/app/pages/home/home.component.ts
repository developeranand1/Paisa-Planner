import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { FeaturesSectionComponent } from "../../components/features-section/features-section.component";
import { CreateSectionComponent } from "../../components/create-section/create-section.component";
import { TechStackComponent } from "../../components/tech-stack/tech-stack.component";
import { HowUseComponent } from "../../components/how-use/how-use.component";

import { OpenSourceComponent } from "../../components/open-source/open-source.component";
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ContactComponent } from "../../components/contact/contact.component";
import { OurToolsComponent } from "../../components/our-tools/our-tools.component";
import { ReviewPageComponent } from "../../components/review-page/review-page.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, CommonModule,
    FooterComponent, HeroSectionComponent, FeaturesSectionComponent, CreateSectionComponent, TechStackComponent, HowUseComponent, OpenSourceComponent, ContactComponent, OurToolsComponent, ReviewPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
