# Pizzería Mamma Mia

Proyecto desarrollado con React y Vite como parte del Módulo 5 de Desafío Latam.

## Descripción

Pizzería Mamma Mia es una aplicación web desarrollada en React que permite visualizar diferentes pizzas, sus ingredientes y precios.

El proyecto busca aplicar los principales conceptos trabajados durante el módulo, utilizando componentes reutilizables y una estructura organizada.

## Tecnologías utilizadas

* React
* Vite
* JavaScript
* HTML5
* CSS3

## Funcionalidades

* Visualización de pizzas.
* Tarjetas reutilizables para cada pizza.
* Visualización de imágenes.
* Nombre, precio e ingredientes de cada producto.
* Navbar de navegación.
* Header principal.
* Footer.
* Diseño responsive.

## Estructura del proyecto

```text
pizzeria-mamma-mia/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CardPizza.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Instalación

Para ejecutar el proyecto localmente, primero se deben instalar las dependencias:

```bash
npm install
```

Luego iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en la dirección local indicada por Vite.

## Build de producción

Para generar la versión de producción:

```bash
npm run build
```

## Autor

Alexandra Correa

Proyecto realizado como parte del programa de formación de Desafío Latam.
