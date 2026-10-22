# Kevin Guzmán — Software Engineer & UX Portafolio

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black&style=flat-square)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white&style=flat-square)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=flat-square)](https://opensource.org/licenses/Apache-2.0)

Portafolio web profesional de **Kevin Guzmán**, Ingeniero de Software Full Stack y Magíster en Experiencia de Usuario (UX). Diseñado para presentar casos de estudio reales, arquitecturas de software empresariales, matriz de competencias técnicas y trayectoria profesional.

---

## ✨ Características Principales

* **Casos de Estudio con Desglose de Arquitectura:** Vista técnica en pestañas (*Reto*, *Solución* y *Arquitectura por Capas*) para proyectos empresariales multiplataforma.
* **Single Source of Truth:** Todo el contenido, métricas y trayectoria se gestionan de forma desacoplada y tipada en [`src/data/portafolioData.ts`](src/data/portafolioData.ts).
* **Arquitectura Modular (Feature-Driven):** Componentes desacoplados en carpetas funcionales (`hero`, `projects`, `skills`, `experience`, `layout`, `ui`).
* **Diseño Dark Moderno & Responsivo:** Construido con Tailwind CSS y tipografía optimizada (Inter y JetBrains Mono).
* **Accesibilidad & SEO:** Semántica HTML5 adecuada, metadatos Open Graph, navegación por teclado y soporte de descarga de CV optimizado.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnologías |
|---|---|
| **Core** | React 19, TypeScript, Vite |
| **Estilos & UI** | Tailwind CSS, Lucide React Icons |
| **Estructura** | Single Page Application (SPA), Clean UI Architecture |
| **Calidad de Código** | ESLint, TypeScript Strict Typing |

---

## 📂 Estructura del Proyecto

```text
portafolio/
├── public/
│   └── cv-kevin-guzman.pdf       # Currículum descargable optimizado
├── src/
│   ├── assets/                   # Recursos visuales y multimedia
│   ├── components/
│   │   ├── layout/               # Componentes estructurales (Navbar, Footer)
│   │   └── ui/                   # Componentes atómicos reutilizables (Badge, Icons, etc.)
│   ├── data/
│   │   └── portafolioData.ts     # Datos y contenidos del portafolio (SSOT)
│   ├── features/                 # Módulos por sección
│   │   ├── hero/                 # Sección principal / Presentación
│   │   ├── projects/             # Casos de estudio y tarjetas de arquitectura
│   │   ├── skills/               # Matriz de habilidades técnicas
│   │   └── experience/           # Timeline laboral y académico
│   ├── hooks/                    # Custom hooks (e.g., useCopyToClipboard)
│   ├── types/                    # Definiciones TypeScript de datos y dominio
│   ├── App.tsx                   # Ensamblador principal de la vista
│   ├── index.css                 # Estilos globales y tokens
│   └── main.tsx                  # Punto de entrada de la aplicación
├── .gitignore                    # Reglas de exclusión de Git
├── index.html                    # HTML base con meta tags SEO y Open Graph
├── package.json                  # Dependencias y scripts
├── tailwind.config.js            # Configuración de Tailwind CSS
└── vite.config.ts                # Configuración de empaquetado y plugins de Vite
```

---

## 👤 Contacto & Perfil

* **Autor:** Kevin Guzmán
* **Rol:** Ingeniero de Software Full Stack & Magíster en UX
* **Ubicación:** Quito, Ecuador
* **LinkedIn:** [linkedin.com/in/kevinguzmanayala](https://www.linkedin.com/in/kevinguzmanayala)
* **GitHub:** [@Guambi](https://github.com/Guambi)
* **Email:** [g.kevin27@gmail.com](mailto:g.kevin27@gmail.com)

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **Apache 2.0**.
