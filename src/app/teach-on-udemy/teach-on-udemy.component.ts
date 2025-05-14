import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // <-- Import CommonModule

@Component({
  selector: 'app-teach-on-udemy',
  standalone: true, // <-- If using standalone components
  imports: [CommonModule], // <-- Add CommonModule here
  templateUrl: './teach-on-udemy.component.html',
  styleUrls: ['./teach-on-udemy.component.css']
})
export class TeachOnUdemyComponent implements OnInit {
  activeTab: string = 'plan';

  constructor() {}

  ngOnInit(): void {}

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
