// ============================================================
// portfolioData.ts  –  Single Source of Truth
// Toda la información del portafolio de Kevin Guzmán.
// ============================================================

import type { PortfolioData } from '@/types/portfolio.types';

export const portfolioData: PortfolioData = {
  // ──────────────────────────────
  // PERFIL
  // ──────────────────────────────
  profile: {
    name: 'Kevin Guzmán',
    role: 'Ingeniero de Software Full Stack',
    subtitle: 'Magíster en Experiencia de Usuario (UX)',
    bio: '5 años creando soluciones empresariales de alto impacto en Ecuador, Panamá y República Dominicana. Combino ingeniería de software robusta con diseño centrado en el usuario para construir productos que escalan y que las personas realmente disfrutan usar.',
    location: 'Quito, Ecuador',
    email: 'g.kevin27@gmail.com',
    linkedin: 'https://www.linkedin.com/in/kevinguzmanayala',
    github: 'https://github.com/Guambi',
    cvFilename: 'cv-kevin-guzman.pdf',
    yearsOfExperience: 5,
    countries: ['Ecuador', 'Panamá', 'República Dominicana'],
  },

  // ──────────────────────────────
  // PROYECTOS / CASOS DE ESTUDIO
  // ──────────────────────────────
  projects: [
    {
      id: 'waopos',
      title: 'WaoPOS',
      client: 'WebPOS S.A. — Panamá y República Dominicana',
      period: '2023 – 2026',
      description:
        'POS móvil y multiplataforma con facturación electrónica, impresión térmica y sincronización en segundo plano para comercios en Panamá y República Dominicana.',
      challenge:
        'Construir un sistema POS robusto que opere sin conexión, soporte facturación electrónica conforme a regulaciones locales de dos países distintos, imprima en periféricos térmicos Bluetooth y sincronice datos con el servidor cuando se restaure la conectividad.',
      solution:
        'Arquitectura MVVM con Repository Pattern y caché local SQLite para operación offline-first, integración de APIs de facturación electrónica de Panamá y Rep. Dominicana, módulo de impresión térmica desacoplado vía Messenger pattern, y sincronización en segundo plano mediante .NET MAUI Background Services.',
      architectures: {
        mobile: ['MVVM', 'Repository Pattern con caché (SQLite)', 'Dependency Injection', 'Messenger Pattern'],
        backend: ['Monolítico Modular', 'Service Layer Pattern', 'Proxy Pattern'],
        frontend: ['Redux Pattern', 'Feature-Driven Architecture'],
      },
      technologies: [
        'C#', '.NET 8', 'Angular', '.NET MAUI (Android/iOS)',
        'SQL Server', 'MySQL', 'SQLite', 'Firebase', 'REST', 'Webhooks',
      ],
      type: 'privado',
    },
    {
      id: 'telemtry-work-system',
      title: 'Sistema de telemetría',
      client: 'WebPOS S.A. — Interno',
      period: '2025 – 2026',
      description:
        'Sistema de control de jornada laboral, asistencia, actividad y teletrabajo en tiempo real cumpliendo privacidad legal.',
      challenge:
        'Desarrollar una plataforma que monitoree la actividad laboral en tiempo real sin vulnerar la privacidad de los empleados, con soporte multiplataforma (web + móvil + Windows service) y comunicación en tiempo real entre el agente de escritorio y el dashboard del manager.',
      solution:
        'Windows Service con patrón Producer-Consumer y Poller para captura de datos de actividad, Clean Architecture en backend con CQRS para separar comandos y consultas, SignalR para actualizaciones en tiempo real en el dashboard React, y app MAUI para registro móvil. Todo con cumplimiento de marcos legales de privacidad laboral.',
      architectures: {
        backend: ['Clean Architecture', 'CQRS', 'Monolítico Modular'],
        windowsService: ['Producer-Consumer Pattern', 'Poller Pattern', 'Clean Architecture'],
        frontend: ['React Hooks Pattern', 'Feature-Driven Architecture'],
        mobile: ['MAUI MVVM'],
      },
      technologies: [
        'C#', '.NET 10', 'React', '.NET MAUI',
        'SignalR', 'MySQL', 'SQLite', 'REST',
      ],
      type: 'privado',
    },
    {
      id: 'toolkits-corporativos',
      title: 'Toolkits Corporativos Privados',
      client: 'WebPOS S.A.',
      period: '2024 – 2026',
      description:
        'Creación de librerías transversales y paquetes privados en NuGet y NPM con CI/CD para estandarizar desarrollos internos.',
      challenge:
        'Eliminar código duplicado entre múltiples proyectos y equipos, estandarizar componentes UI y utilidades de negocio en librerías versionadas que puedan distribuirse de forma segura y con CI/CD automatizado.',
      solution:
        'Diseño y publicación de paquetes NuGet privados para lógica compartida en .NET y paquetes NPM privados para componentes React/Angular reutilizables, con pipelines de CI/CD que validan, versión y publican automáticamente al repositorio corporativo.',
      architectures: {
        backend: ['Library Design Pattern', 'Semantic Versioning', 'CI/CD Pipeline'],
        frontend: ['Component Library Architecture', 'Monorepo Pattern'],
      },
      technologies: [
        'C#', '.NET 8/.NET 10', 'TypeScript', 'React', 'Angular',
        'NuGet (privado)', 'NPM (privado)', 'CI/CD',
      ],
      type: 'privado',
    },
    {
      id: 'udla-plus',
      title: 'UDLA+',
      client: 'Universidad de las Américas',
      period: '2021 – 2023',
      description:
        'Aplicación móvil para la Universidad, que permite a los estudiantes acceder a su información académica, como notas, horarios, información de cursos, notificaciones críticas del campus, entre otros.',
      challenge:
        'Consolidar información proveniente de sistemas heterogéneos y ERP en una experiencia móvil fluida y responsiva, garantizando alta disponibilidad y tiempos de respuesta mínimos durante picos masivos de consulta (matrículas y entrega de notas).',
      solution:
        'Desarrollo de la app móvil con Xamarin.Forms bajo patrones MVP y MVVM para máxima reactividad, desacople de backend mediante capa intermedia de microservicios REST, e integración con Firebase Cloud Messaging para alertas push en tiempo real.',
      architectures: {
        mobile: ['MVP Pattern', 'Xamarin.Forms MVVM', 'Repository Pattern'],
        backend: ['Microservicios', 'RESTful APIs', 'MVC'],
      },
      technologies: [
        'C#', '.NET 5', '.NET Framework 4.8', 'Xamarin.Forms',
        'SQL Server', 'Firebase', 'REST',
      ],
      type: 'privado',
    },
    {
      id: 'udla-academic',
      title: 'Ecosistema Académico',
      client: 'Universidad de las Américas',
      period: '2021 – 2022',
      description:
        'Middleware transaccional para la sincronización automatizada de actas de notas con el ERP académico institucional, y plataforma web para la gestión curricular de sílabos universitarios.',
      challenge:
        'Automatizar la conciliación de calificaciones entre aulas virtuales y el core académico institucional sin riesgo de inconsistencias, orquestando servicios SOAP/WCF con tolerancia a fallos, concurrencia y auditoría estricta.',
      solution:
        'Arquitectura de microservicios implementando Clean Architecture con procesamiento por lotes, políticas de reintentos y validaciones de integridad de datos para la ingesta en ERP académico institucional, junto con un aplicativo web MVC para el ciclo de vida de los sílabos.',
      architectures: {
        backend: ['Clean Architecture', 'Microservicios', 'Batch Processing & Retries', 'MVC'],
      },
      technologies: [
        'C#', '.NET Framework 4.8',
        'WCF / SOAP', 'SQL Server', 'REST',
      ],
      type: 'privado',
    },
  ],

  // ──────────────────────────────
  // SKILLS MATRIX
  // ──────────────────────────────
  skillCategories: [
    {
      categoryName: 'Backend & Lenguajes',
      icon: 'Code2',
      skills: [
        { name: 'C#', years: 5, level: 'Experto' },
        { name: 'JavaScript', years: 5, level: 'Experto' },
        { name: 'TypeScript', years: 2, level: 'Avanzado' },
        { name: 'SQL Server', years: 5, level: 'Experto' },
        { name: 'MySQL', years: 2, level: 'Avanzado' },
        { name: 'PostgreSQL', years: 1, level: 'Intermedio' },
      ],
    },
    {
      categoryName: 'Frontend & Mobile',
      icon: 'Monitor',
      skills: [
        { name: 'Angular', years: 2, level: 'Avanzado' },
        { name: 'React', years: 1, level: 'Intermedio' },
        { name: '.NET MAUI', years: 4, level: 'Experto' },
        { name: 'Xamarin.Forms', years: 2, level: 'Avanzado' },
      ],
    },
    {
      categoryName: 'Frameworks & Plataformas',
      icon: 'Layers',
      skills: [
        { name: '.NET 8 / .NET 10', years: 3, level: 'Experto' },
        { name: 'SignalR', years: 1, level: 'Intermedio' },
        { name: 'Firebase', years: 3, level: 'Avanzado' },
        { name: 'SQLite', years: 3, level: 'Avanzado' },
      ],
    },
    {
      categoryName: 'Arquitectura & Diseño',
      icon: 'GitBranch',
      skills: [
        { name: 'Clean Architecture', years: 3, level: 'Avanzado' },
        { name: 'MVVM', years: 4, level: 'Experto' },
        { name: 'CQRS', years: 1, level: 'Intermedio' },
        { name: 'Microservicios', years: 2, level: 'Avanzado' },
        { name: 'UX Design', years: 2, level: 'Intermedio' },
        { name: 'Scrum', years: 5, level: 'Experto' },
      ],
    },
  ],

  // ──────────────────────────────
  // EXPERIENCIA & EDUCACIÓN
  // ──────────────────────────────
  experience: [
    // ── TRABAJO ──
    {
      id: 'docente-udla-2025',
      type: 'work',
      role: 'Docente Universitario',
      company: 'Universidad de las Américas (UDLA)',
      period: 'Sep 2025 – Presente',
      location: 'Quito, Ecuador',
      current: true,
      highlights: [
        'Dictado de cátedras de Programación, Algoritmos y Experiencia de Usuario (UX).',
        'Diseño de currícula práctica orientada a proyectos reales.',
        'Mentoría a estudiantes en desarrollo de software y diseño centrado en el usuario.',
      ],
    },
    {
      id: 'webpos-dev-2023',
      type: 'work',
      role: 'Desarrollador de Software',
      company: 'WebPOS S.A.',
      period: 'Oct 2023 – Sep 2026',
      location: 'Quito, Ecuador (remoto Panamá / Rep. Dominicana)',
      current: false,
      highlights: [
        'Desarrollo del POS móvil WaoPOS para Panamá y República Dominicana (.NET MAUI + Angular + .NET 8).',
        'Diseño e implementación de sistema corporativo de telemetría y control laboral en tiempo real (React + SignalR + .NET 10).',
        'Creación de toolkits corporativos privados (NuGet y NPM) con CI/CD para estandarizar el desarrollo interno.',
        'Arquitecturas MVVM, Clean Architecture, CQRS y patrones Producer-Consumer para Windows Services.',
      ],
    },
    {
      id: 'udla-analista-2021',
      type: 'work',
      role: 'Analista Jr. de Sistemas',
      company: 'Universidad de las Américas (UDLA)',
      period: 'Mar 2021 – Sep 2023',
      location: 'Quito, Ecuador',
      current: false,
      highlights: [
        'Desarrollo de la app móvil universitaria UDLA+ con Xamarin.Forms y Firebase.',
        'Implementación del sincronizador de notas entre ERP académico institucional y aulas virtuales (WCF/SOAP → .NET 5).',
        'Desarrollo del sistema de gestión curricular de sílabos universitarios con Clean Architecture y MVC.',
        'Migración de sistemas legacy .NET Framework 4.8 a arquitecturas modernas con microservicios.',
      ],
    },
    // ── EDUCACIÓN ──
    {
      id: 'master-ux-2024',
      type: 'education',
      role: 'Magíster en Experiencia de Usuario (UX)',
      company: 'Universidad de las Américas (UDLA)',
      period: '2024 – 2025',
      location: 'Quito, Ecuador',
      gpa: 'PGA 9.4',
      highlights: [
        'Investigación en diseño centrado en el usuario y metodologías de evaluación de usabilidad.',
        'Proyectos de rediseño de sistemas empresariales aplicando Design Thinking y Lean UX.',
      ],
    },
    {
      id: 'diplomado-apps-2025',
      type: 'education',
      role: 'Diplomado en Diseño y Programación de Apps',
      company: 'Universidad Anáhuac / UDLA',
      period: '2025 – 2026',
      location: 'México / Ecuador',
      highlights: [
        'Especialización en desarrollo multiplataforma y patrones de diseño para aplicaciones móviles.',
      ],
    },
    {
      id: 'ingenieria-software-2022',
      type: 'education',
      role: 'Ingeniero de Software',
      company: 'Universidad de las Américas (UDLA)',
      period: '2017 – 2022',
      location: 'Quito, Ecuador',
      gpa: 'PGA 9.0',
      highlights: [
        'Formación integral en ingeniería de software, estructuras de datos, bases de datos y arquitecturas.',
        'Proyecto de tesis enfocado en desarrollo de aplicaciones móviles empresariales.',
      ],
    },
  ],
};
