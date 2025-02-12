import { Component, computed, inject, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  owedAmounts: {name:string, amount:number}[] = [{name:'Sumit', amount:220},{name:'Swayam', amount:140}, {name:'Sujitwa', amount:90},{name:'Anantwa', amount:330},{name:'Issue', amount:10}];
  dueAmounts: {name:string, amount:number}[] = [{name:'Shanti', amount:160},{name:'Chandan', amount:300}, {name:'Vivek', amount:50}];
  maxAmount = computed<number>(()=>{
     const max = this.owedAmounts.concat(this.dueAmounts).reduce((prev, curr) => prev.amount > curr.amount ? prev : curr, {name:'', amount:0});
     return max.amount;
  });

  oweWidth = (owedAmountsPassed: number) => computed<number>(() => {
    return 100*Math.pow(((owedAmountsPassed - 4) / (this.maxAmount() - 4)), 0.51);
  });
  
  asList = true;
  renderer = inject(Renderer2);

  toggleListView(view:string){
    
    if(this.asList && !view.includes('listView'))
    {
      this.renderer.removeClass(document.getElementById('listView'), 'active');
      this.renderer.addClass(document.getElementById('listView'), 'view-dues-button');
      this.renderer.addClass(document.getElementById('chartView'), 'active');
      this.renderer.removeClass(document.getElementById('chartView'), 'view-dues-button');
      this.renderer.addClass(document.getElementById('list'), 'hidden');
      this.renderer.removeClass(document.getElementById('chart'), 'hidden');
      this.asList=!this.asList;
    }else if(!this.asList && !view.includes('chartView')){
      this.renderer.removeClass(document.getElementById('chartView'), 'active');
      this.renderer.addClass(document.getElementById('chartView'), 'view-dues-button');
      this.renderer.addClass(document.getElementById('listView'), 'active');
      this.renderer.removeClass(document.getElementById('listView'), 'view-dues-button'); 
      this.renderer.addClass(document.getElementById('chart'), 'hidden');
      this.renderer.removeClass(document.getElementById('list'), 'hidden');
      this.asList=!this.asList;
    }
    
  }
}
