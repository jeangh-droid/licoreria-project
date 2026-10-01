# Dosis 24/7 — Tu Licorería Online & Delivery

> *"Tu sed no conoce de horarios. Nosotros tampoco."*

**Dosis 24/7** es una aplicación web moderna, reactiva y optimizada para la venta y delivery nocturno de licores, combos promocionales y complementos. Diseñada con enfoque **Mobile-First** y alta tasa de conversión, permite a los usuarios explorar el catálogo, armar su carrito de compras y formalizar su pedido directamente a través de **WhatsApp** en cuestión de segundos.

---

## Vista Previa de la Aplicación

> *Demostración interactiva del funcionamiento y la experiencia de usuario (UI/UX) en dispositivos móviles y de escritorio:*

![Demostración de la Aplicación Dosis 24/7](/src/assets/licoreria.gif)

---

## Características Principales

### 1. Catálogo Completo y Organizado
- **PRODUCTOS SOLOS**: Selección de bebidas como Pisco, Ron, Vodka y Whisky.
- **PROMOS (Combos Flash)**: Packs listos para la fiesta (botellas + gaseosas/complementos + hielo) con etiquetas de oferta (*Más Vendido*, *Popular*).
- **COMPLEMENTOS**: Categoría para insumos indispensables (RTD - Ready to Drink, Cigarros, Bebidas gasificadas y Snacks).

### 2. Filtros y Búsqueda Avanzada
- **Búsqueda en tiempo real** por nombre o descripción del producto.
- **Filtrado por subcategorías** dentro de cada sección.
- **Rango de precios interactivo** con actualización instantánea.
- **Ordenamiento flexible**: Por popularidad, precio (menor a mayor / mayor a menor) y alfabético (A-Z).
- **Paginación dinámica** adaptada a la cantidad de resultados encontrados.

### 3. Carrito de Compras & Checkout por WhatsApp
- **Carrito lateral (Drawer)** interactivo:
  - Adición rápida de productos.
  - Modificación de cantidades y eliminación de ítems.
  - Cálculo automático del monto subtotal y total.
  - Información de zonas de cobertura inmediata.
- **Checkout automatizado**: Genera un mensaje preformateado con la lista de productos, cantidades, precios y total a pagar, abriendo la conversación directamente con el WhatsApp oficial del negocio.

### 4. Optimización Móvil & Rendimiento
- **Diseño Ultra Rápido**: Animaciones con aceleración por hardware (`will-change`, CSS cubic-bezier).
- **Carga fluida**: Adaptación para dispositivos móviles reduciendo tiempos de renderizado y eliminando filtros pesados en smartphones.
- **Navegación fluida**: Transiciones suaves entre la vista de Inicio, Catálogo general y Detalle de producto.

### 5. Secciones de Conversión y Confianza
- **Banner Hero** con promociones dinámicas y botones de acción inmediata (CTA).
- **Promociones Flash** en cuadrícula destacada con acceso rápido a detalles y carrito.
- **Reseñas y Experiencias**: Testimonios de clientes en eventos y fiestas privadas.
- **Zonas de Cobertura**: Indicadores claros para zonas de servicio y alrededores.
- **Botón Flotante de WhatsApp**: Asistencia rápida y atención personalizada siempre visible.

---

## Tecnologías Utilizadas

- **Frontend**: [React 19](https://react.dev/)
- **Empaquetador**: [Vite](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Iconografía**: [Lucide React](https://lucide.dev/)
- **Tipografía**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Google Fonts)
- **Lenguaje**: JavaScript (JSX) / TypeScript

---

## Estructura del Proyecto

```text
├── index.html                 # Entry point HTML con tipografía y estilos globales
├── index.jsx                  # Punto de entrada de React en el DOM
├── App.jsx                    # Componente raíz y enrutador de vistas (Home, Catálogo, Detalle)
├── constants.jsx              # Datos maestros: Productos, Combos, Categorías, Zonas y Teléfono
├── types.ts                   # Definiciones de tipos TypeScript
├── package.json               # Dependencias y scripts del proyecto
├── vite.config.ts             # Configuración de Vite
├── components/
│   ├── Header.jsx             # Barra de navegación, logo corporativo y badge de carrito
│   ├── Hero.jsx               # Portada principal con animación optimizada y CTAs
│   ├── PromotionsGrid.jsx     # Cuadrícula de Promociones Flash
│   ├── CatalogSection.jsx     # Acceso rápido a las categorías principales
│   ├── ExploreCatalog.jsx     # Catálogo extendido con sidebar de filtros y paginación
│   ├── ProductDetail.jsx      # Ficha individual con selector de cantidades y compra directa
│   ├── CartDrawer.jsx         # Panel lateral del carrito de compras y botón WhatsApp
│   ├── Reviews.jsx            # Sección de reseñas y testimonios
│   ├── FloatingWhatsApp.jsx   # Botón flotante para contacto directo
│   ├── ImageWithSkeleton.jsx  # Componente de imagen con efecto de carga (skeleton)
│   └── Footer.jsx             # Pie de página con enlaces, frase corporativa y copyright
```

---

## Instalación y Puesta en Marcha

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd dosis-24-7---tu-licoreria-online
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:3000` (o el puerto asignado por Vite).

### 4. Compilar para producción
```bash
npm run build
```
Los archivos optimizados para despliegue se generarán en la carpeta `dist/`.

---

## Personalización y Configuración

Toda la información del negocio se centraliza en `constants.jsx` para facilitar cambios sin tocar la lógica de los componentes:

1. **Número de WhatsApp de Pedidos**:
   ```javascript
   export const WHATSAPP_NUMBER = "519XXXXXXXX"; // Configurar número de contacto comercial
   ```
2. **Zonas de Cobertura**:
   ```javascript
   export const COVERAGE_AREAS = [
     'Zona Norte',
     'Zona Sur',
     'Zona Centro'
   ];
   ```
3. **Catálogo de Combos y Productos Solos**:
   - Edita los arreglos `COMBOS` y `CATALOG_PRODUCTS` para actualizar nombres, precios, imágenes, descripciones y categorías.
4. **Grupos y Subcategorías**:
   - Modifica `CATEGORIES_GROUPS` para agregar o quitar secciones del menú de filtros.

---

## Paleta de Color y Estilo Visual

- **Color de fondo principal**: `#ffff93` (Amarillo vibrante característico)
- **Contraste y tipografía**: Negro `#000000` y escala de grises oscuros
- **Acentos y alertas**: Naranja `#f97316` / `#ea580c`
- **Estilo**: Dinámico, audaz, moderno y enfocado en conversión nocturna.

---

## Licencia

Este proyecto es privado y de uso exclusivo para **Dosis 24/7**. Todos los derechos reservados.