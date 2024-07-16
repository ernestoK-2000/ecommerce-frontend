import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {matMenu, matClose} from '@ng-icons/material-icons/baseline'

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [NgIcon, CommonModule, RouterModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  viewProviders: [provideIcons({matMenu, matClose})]
})
export class ToolbarComponent {
  sideMenu!: HTMLElement;

  ngAfterViewInit(): void {
    this.sideMenu = document.getElementById('sideMenu')!;
  }

  onOpenMenu() {
    this.sideMenu.style.right = '0';
  }

  onCloseMenu() {
    this.sideMenu.style.right = '-242px';
  }
}
