import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IParticlesProps,
  NgParticlesService,
  NgxParticlesComponent,
  NgxParticlesModule,
} from '@tsparticles/angular';
import {
  ClickMode,
  HoverMode,
  MoveDirection,
  OutMode,
} from 'tsparticles-engine';
import { Container, tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { HomeBaseComponent } from '../home-base/home-base.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxParticlesModule, HomeBaseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  id = 'tsparticles';
  /* or the classic JavaScript object */
  particlesOptions: IParticlesProps = {
    fullScreen: {
      enable: false,
    },
    background: {
      image: '../../assets/img/background.jpg',
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.repulse,
        },
        onHover: {
          enable: true,
          mode: HoverMode.bounce,
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };
  constructor(
    private router: Router,
    private readonly ngParticlesService: NgParticlesService
  ) {}
  ngOnInit(): void {
    this.ngParticlesService.init(async () => {
      await loadSlim(tsParticles);
    });
  }

  onCallToAction() {
    this.router.navigate(['/products']);
  }

  particlesLoaded(container: Container): void {}
}
