# Pizzería Mamma Mia

Proyecto desarrollado con React y Vite como parte del Módulo 5 de Desafío Latam.

## Aplicación publicada

[Ver Pizzería Mamma Mia en GitHub Pages](https://alexandra-correa.github.io/pizzeria-mamma-mia/)

## Descripción

Pizzería Mamma Mia es una aplicación web desarrollada con React que permite visualizar diferentes pizzas, sus imágenes, ingredientes y precios.

El proyecto aplica los conceptos trabajados durante el Módulo 5, utilizando componentes reutilizables, manejo de estados y consumo de una API para obtener la información de las pizzas.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- HTML5
- CSS3
- Fetch API

## Funcionalidades

- Visualización de las pizzas disponibles.
- Obtención de información desde una API mediante fetch.
- Uso de useEffect para cargar los datos.
- Tarjetas reutilizables para mostrar cada pizza.
- Visualización de imágenes, nombres, precios e ingredientes.
- Componente para mostrar el detalle de una pizza.
- Navbar de navegación.
- Encabezado y pie de página.
- Diseño adaptable a distintos tamaños de pantalla.

## Estructura del proyecto

```text
pizzeria-mamma-mia/
├── public/
│   └── img/
│       ├── p001.jpg
│       ├── p002.jpg
│       ├── p003.jpg
│       ├── p004.jpg
│       ├── p005.jpg
│       └── p006.jpg
├── src/
│   ├── components/
│   │   ├── CardPizza.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   └── Pizza.jsx
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

Es necesario tener Node.js y npm instalados.

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite indicará la dirección local para abrir la aplicación en el navegador.

## API

La aplicación obtiene los datos de las pizzas desde los siguientes endpoints:

- Listado de pizzas: http://localhost:5000/api/pizzas
- Detalle de pizza: http://localhost:5000/api/pizzas/p001

Para utilizar la API localmente, es necesario iniciar el backend correspondiente en el puerto 5000.

## Construcción de producción

Para generar los archivos de producción:

```bash
npm run build
```

## Despliegue

El proyecto está publicado mediante GitHub Pages.

[Acceder a la aplicación publicada](https://alexandra-correa.github.io/pizzeria-mamma-mia/)

## Repositorio

[Ver código fuente en GitHub](https://github.com/alexandra-correa/pizzeria-mamma-mia)

## Autora

Alexandra Correa

Proyecto realizado como parte del programa de formación de Desafío Latam.
