import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Experience {
  role: string;
  company: string;
  client?: string;
  location: string;
  period: string;
  points: string[];
}

interface SkillGroup {
  label: string;
  items: string[];
}

interface Featured {
  title: string;
  subtitle: string;
  url: string;
  linkLabel: string;
  desc: string;
  icon: string;
}

interface Profile {
  label: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  readonly hero = {
    name: 'Nikhil Jose',
    role: 'Senior Flutter / Dart Mobile Developer',
    summary:
      'Senior Flutter / Dart Mobile Developer with 5+ years of experience designing, developing, and maintaining cross-platform Android and iOS applications. Proficient in Flutter widgets, reusable UI components, BLoC state management, Clean Architecture, REST API integration, and Firebase. Experienced in third-party SDK integration, real-time communication, offline-first applications, debugging, unit testing, and performance optimization. Skilled in Git, CI/CD pipelines, and delivering high-quality production mobile applications.',
    location: 'Bengaluru, Karnataka, India',
    email: 'nikhiljose47@gmail.com',
    phone: '+91 8848386668',
    resume:
      'https://drive.google.com/file/d/15ASUpbB_o9jLgMEx5OpCRg4ICyKWa7Po/view?usp=sharing'
  };

  readonly stats = [
    { value: '5+', label: 'Years of experience' },
    { value: '4.4+', label: 'Play Store rating' },
    { value: '~30%', label: 'Performance gain' },
    { value: 'Top 5', label: 'Global Learning XPRIZE' }
  ];

  readonly experience: Experience[] = [
    {
      role: 'Sr. Mobile Application Developer',
      company: 'Ekfrazo Technologies',
      client: 'eGov',
      location: 'Bengaluru, India',
      period: 'May 2026 – Present',
      points: [
        'Contributed to the development and maintenance of an in-progress Flutter mobile application, resolving critical implementation challenges and supporting successful project delivery.',
        'Implemented SQLite-based local storage, caching, and offline-first synchronization to ensure reliable functionality under limited network connectivity.',
        'Developed reusable, configuration-driven Flutter UI components using JSON-based configurations and BLoC state management to support dynamic campaign workflows.',
        'Integrated REST APIs with backend microservices, implementing authentication, asynchronous data handling, and error management; supported CI/CD deployments using Docker, Kubernetes, and GCP.'
      ]
    },
    {
      role: 'Sr. Software Developer',
      company: 'CitiusTech Healthcare Technology Pvt Ltd',
      client: 'GE Healthcare',
      location: 'Bengaluru, India',
      period: 'Oct 2024 – Nov 2025',
      points: [
        'Developed cross-platform Android and iOS middleware supporting 5+ healthcare application features, including real-time patient monitoring, charts, and alarm notifications.',
        'Built reusable application components using BLoC state management and reactive programming, improving application performance by approximately 30%.',
        'Implemented real-time WebSocket communication and asynchronous data processing using MVVM architecture to deliver continuous patient data updates.',
        'Performed debugging, unit testing, and integration testing while maintaining GitLab CI/CD pipelines to improve build reliability and release stability.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Independent Consultant – Cowdiar',
      location: 'Kochi, India',
      period: 'Dec 2020 – Nov 2021',
      points: [
        'Developed and maintained Flutter/Dart application components using Clean Architecture, reusable modules, and Firebase integration.',
        'Integrated RESTful APIs and JWT-based authentication, implementing JSON data handling, asynchronous communication, and structured error management.',
        'Integrated the Razorpay payment gateway as a third-party SDK to enable secure in-app payment workflows.',
        'Migrated existing Flutter application code to Dart null safety, improving type safety, maintainability, and SDK compatibility.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Chimple Learning',
      location: 'Bengaluru, India',
      period: 'Dec 2017 – Nov 2020',
      points: [
        'Developed and released a production Flutter mobile application, achieving a 4.4+ Google Play Store rating and recognition as a top-five finalist in the Global Learning XPRIZE competition.',
        'Designed reusable Flutter UI components and interactive features, including custom flood-fill rendering and geospatial maps using OpenStreetMap, markers, and interactive popups.',
        'Integrated native Android functionality using Kotlin and Flutter plugins, enabling platform-specific features and third-party service integration.',
        'Integrated Firebase Cloud Messaging (FCM) for learning reminders, Firebase Analytics to track lesson completion and engagement, and Crashlytics to identify and fix production crashes.'
      ]
    }
  ];

  readonly featured: Featured[] = [
    {
      title: 'Chimple Kids Learning',
      subtitle: 'Professional team project · Chimple Learning',
      url: 'https://play.google.com/store/apps/details?id=org.chimple.bahama&hl=en_IN',
      linkLabel: 'View on Google Play',
      desc: 'A Google Play education app with early-learning games for children. Rated 4.4+ and a top-five finalist in the Global Learning XPRIZE.',
      icon: 'bi-google-play'
    },
    {
      title: 'Scholo Learning',
      subtitle: 'Independent work · Cowdiar (Independent Consultant)',
      url: 'https://scholo.co.in/',
      linkLabel: 'Visit scholo.co.in',
      desc: 'A live learning platform with an existing user base, online classes, educational resources and guided practice.',
      icon: 'bi-mortarboard'
    }
  ];

  readonly otherProjects = [
    {
      title: 'Typer Pro',
      tag: 'Typing Speed Platform',
      desc: 'Real-time typing accuracy and speed evaluation with deploy-ready infrastructure.'
    },
    {
      title: 'Hand Gesture AI',
      tag: 'Deep Learning System',
      desc: '95% accurate gesture recognition using physiological sensors.'
    }
  ];

  readonly skills: SkillGroup[] = [
    {
      label: 'Mobile Development',
      items: ['Flutter', 'Dart', 'Android', 'iOS', 'Kotlin', 'Flutter Widgets', 'Reusable UI Components']
    },
    {
      label: 'Architecture',
      items: ['BLoC', 'Provider', 'Clean Architecture', 'MVVM', 'Repository Pattern', 'Dependency Injection', 'Reactive Programming']
    },
    {
      label: 'APIs & Data',
      items: ['REST APIs', 'JSON', 'WebSockets', 'Firebase', 'SQLite', 'GraphQL', 'JWT Authentication']
    },
    {
      label: 'Integrations',
      items: ['Razorpay Payment Gateway', 'OpenStreetMap', 'Native Android Plugins', 'Third-Party SDKs']
    },
    {
      label: 'Testing & Tools',
      items: ['Unit Testing', 'Integration Testing', 'Debugging', 'Performance Optimization', 'Git']
    },
    {
      label: 'DevOps',
      items: ['GitLab CI/CD', 'Docker', 'Kubernetes', 'Google Cloud Platform (GCP)']
    }
  ];

  readonly education = [
    {
      degree: 'Master of Technology in Computer Science & Engineering',
      school: 'National Institute of Technology Silchar',
      period: '2022 – 2024'
    },
    {
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      school: 'College of Engineering Kallooppara',
      period: '2013 – 2017'
    }
  ];

  readonly profiles: Profile[] = [
    { label: 'Personal Portfolio', url: 'https://portfolio.nikhiljose47.workers.dev/', icon: 'bi-globe2' },
    { label: 'GitHub', url: 'https://github.com/nikhiljose47', icon: 'bi-github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nikhiljose47/', icon: 'bi-linkedin' },
    { label: 'Stack Overflow', url: 'https://stackoverflow.com/users/10279514/nikhil', icon: 'bi-stack-overflow' }
  ];

  readonly year = new Date().getFullYear();
}
