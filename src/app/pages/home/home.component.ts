import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { of, delay } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  // simulate API (replace later with service)
  private data$ = of({
    hero: {
      name: 'Nikhil Jose',
      role: 'Senior Flutter Developer · System Design · AI',
      location: 'Bengaluru, India',
      exp: '5+ Years',
      core: 'Flutter · Architecture · BLoC'
    },
    experience: [
      {
        company: 'CitiusTech',
        role: 'Sr. Flutter Developer',
        period: '2024 — 2025',
        desc: 'Healthcare middleware, reusable libraries, +30% performance'
      },
      {
        company: 'Cowdiar',
        role: 'Flutter Developer',
        period: '2021',
        desc: 'Modular apps, REST APIs, CI/CD'
      },
      {
        company: 'Chimple Learning',
        role: 'Software Developer',
        period: '2017 — 2020',
        desc: 'Learning app, OSM integration, interactive games'
      }
    ],
    projects: [
      {
        title: 'Typer Pro',
        desc: 'Typing speed + accuracy platform'
      },
      {
        title: 'Hand Gesture AI',
        desc: '95% accurate gesture recognition system'
      }
    ],
    skills: [
      'Flutter','Dart','BLoC','Clean Architecture',
      'Firebase','Angular','GraphQL','Machine Learning'
    ],
    contact: {
      email: 'nikhiljose47@gmail.com',
      phone: '+91 8848386668'
    }
  }).pipe(delay(600));

  // rxjs → signal (initial load control)
  private _data = toSignal(this.data$, { initialValue: null });

  // skeleton loader
  loading = computed(() => !this._data());

  // selectors
  hero = computed(() => this._data()?.hero);
  experience = computed(() => this._data()?.experience ?? []);
  projects = computed(() => this._data()?.projects ?? []);
  skills = computed(() => this._data()?.skills ?? []);
  contact = computed(() => this._data()?.contact);

}