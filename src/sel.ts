import { Component } from '@angular/core';

@Component({
  selector: 'app-dual-select',
  template: `
    <div class="dual-select-container">
      <div class="list-box">
        <h4>Available Items</h4>
        <div *ngFor="let item of availableItems">
          <input type="checkbox" [value]="item" [(ngModel)]="item.selected" />
          {{ item.label }}
        </div>
      </div>

      <div class="buttons">
        <button (click)="addSelected()">Add Selected →</button>
        <button (click)="addAll()">Add All →</button>
        <button (click)="clearAll()">← Clear All</button>
      </div>

      <div class="list-box">
        <h4>Selected Items</h4>
        <ul>
          <li *ngFor="let item of selectedItems">{{ item.label }}</li>
        </ul>
      </div>
    </div>
  `,
  styles: [
    `
    .dual-select-container {
      display: flex;
      gap: 30px;
      font-family: Arial, sans-serif;
      align-items: flex-start;
    }

    .list-box {
      border: 1px solid #ccc;
      padding: 12px;
      width: 200px;
      min-height: 200px;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
    }

    button {
      padding: 6px 12px;
      cursor: pointer;
    }
  `,
  ],
})
export class DualSelectComponent {
  availableItems = [
    { label: 'Item 1', selected: false },
    { label: 'Item 2', selected: false },
    { label: 'Item 3', selected: false },
    { label: 'Item 4', selected: false },
  ];

  selectedItems: { label: string }[] = [];

  addSelected() {
    const selected = this.availableItems.filter((i) => i.selected);
    this.selectedItems.push(...selected.map((i) => ({ label: i.label })));
    this.availableItems = this.availableItems.filter((i) => !i.selected);
  }

  addAll() {
    this.selectedItems.push(
      ...this.availableItems.map((i) => ({ label: i.label }))
    );
    this.availableItems = [];
  }

  clearAll() {
    this.availableItems.push(
      ...this.selectedItems.map((i) => ({ label: i.label, selected: false }))
    );
    this.selectedItems = [];
  }
}
