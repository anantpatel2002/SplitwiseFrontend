import { Component } from '@angular/core';
import { FacetsComponent } from "./facets/facets.component";
import { FeaturesComponent } from "./features/features.component";
import { FeatureListComponent } from "./feature-list/feature-list.component";
import { ReviewsComponent } from "./reviews/reviews.component";
@Component({
  selector: 'app-homepage',
  imports: [FacetsComponent, FeaturesComponent, FeatureListComponent, ReviewsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
