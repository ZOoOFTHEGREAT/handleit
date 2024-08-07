import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loadingspinner',
  templateUrl: './loadingspinner.component.html',
  styleUrl: './loadingspinner.component.css'
})
export class LoadingspinnerComponent {
  @Input() show: boolean = false;
}
