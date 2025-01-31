import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FacetsComponent } from "./facets/facets.component";
import { FeaturesComponent } from "./features/features.component";
import { FeatureListComponent } from "./feature-list/feature-list.component";
import { ReviewsComponent } from "./reviews/reviews.component";

@Component({
  selector: 'app-homepage',
  imports: [HeaderComponent, FacetsComponent, FeaturesComponent, FeatureListComponent, ReviewsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
