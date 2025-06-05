import { Component } from '@angular/core';

@Component({
  selector: 'app-time-period-selector',
  standalone: true,
  template: `
    <div class="time-period-container">
      <h3>2. Select Time Period</h3>
      <p>Define date range for item identification</p>
      <div class="date-inputs">
        <label>
          From:
          <input type="date" [(ngModel)]="fromDate" (change)="onDateChange()" />
        </label>
        <label>
          To:
          <input type="date" [(ngModel)]="toDate" (change)="onDateChange()" />
        </label>
      </div>
    </div>
  `,
  styles: [`
    .time-period-container {
      border: 1px solid #ccc;
      padding: 16px;
      width: fit-content;
      font-family: Arial, sans-serif;
    }

    .date-inputs {
      display: flex;
      gap: 20px;
      margin-top: 10px;
    }

    label {
      display: flex;
      flex-direction: column;
      font-weight: bold;
    }

    input[type="date"] {
      padding: 6px;
      margin-top: 4px;
      border: 1px solid #aaa;
      border-radius: 4px;
    }
  `],
  imports: [],
})
export class TimePeriodSelectorComponent {
  fromDate: string = '';
  toDate: string = '';

  onDateChange() {
    console.log('From:', this.fromDate);
    console.log('To:', this.toDate);
  }
}
