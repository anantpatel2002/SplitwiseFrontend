import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-list',
  imports: [],
  templateUrl: './feature-list.component.html',
  styleUrl: './feature-list.component.css'
})
export class FeatureListComponent {

  featureList : string[][] = [
    ['Add groups and friends','core'],
    ['Cloud sync','core'],
    ['Currency conversion','pro'],
    ['Split expenses, record debts','core'],
    ['Spending totals','core'],
    ['Receipt scanning','pro'],
    ['Equal or unequal splits','core'],
    ['Categorize expenses','core'],
    ['Itemization','pro'],
    ['Split by % or shares','core'],
    ['7+ languages','core'],
    ['Charts and graphs','pro'],
    ['Calculate total balances','core'],
    ['100+ currencies','core'],
    ['Expense search','pro'],
    ['Simplify debts','core'],
    ['Payment integrations','core'],
    ['Save default splits','pro'],
    ['Recurring expenses','core'],
    ['Unlimited expenses','pro'],
    ['A totally ad-free experience','pro'],
    ['Offline mode','core'],
    ['Transaction import','pro'],
    ['Early access to new features','pro']
  ]

}
