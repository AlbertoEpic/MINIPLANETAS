# Guía para tontos: cómo añadir un planeta nuevo a mano

Esta guía explica, paso a paso y sin usar ningún agente de IA, cómo publicar un nuevo "mini planeta" en la web. Solo necesitas un editor de texto (VS Code) y una terminal.

No hace falta tocar HTML ni entender Astro: solo copiar archivos en carpetas y rellenar un bloque de texto.

---

## 0. Lo que vas a necesitar antes de empezar

- La **foto principal** del planeta (la imagen "planeta" ya recortada en círculo/esfera, en `.jpg` o `.png`).
- Opcional: una **foto panorámica 360°** del mismo sitio (si tienes una).
- Los datos del planeta: nombre, descripción, ubicación, coordenadas GPS, fecha de "descubrimiento" y con qué cámara/dron se hizo la foto.

Elige un **nombre de archivo sin espacios raros ni caracteres especiales conflictivos**, con este patrón (es el que usa el resto del proyecto):

```
Planeta_NombreDelSitio.jpg
```

Ejemplo: `Planeta_ValleDeOrdesa.jpg`

> Puedes usar acentos (á, é, ñ...) porque ya hay ejemplos en el proyecto (`Planeta_Alquézar.jpg`), pero evita usarlos si puedes para ahorrarte problemas.

---

## 1. Copia la foto principal a la carpeta correcta

Abre el explorador de archivos y copia tu imagen dentro de:

```
src/assets/planets/
```

Por ejemplo, debería quedar en:

```
src/assets/planets/Planeta_ValleDeOrdesa.jpg
```

Esta es la **única carpeta** en la que tienes que meter la imagen a mano. El resto de tamaños y versiones se generan automáticamente en el siguiente paso.

---

## 2. Genera automáticamente las versiones optimizadas de la imagen

La web necesita varias versiones de cada foto (distintos tamaños para móvil/tablet/escritorio, formato `.webp`, versión para compartir, etc.). Hay un script que las crea todas por ti.

1. Abre una terminal en la carpeta del proyecto (en VS Code: menú **Terminal > Nueva terminal**).
2. Ejecuta este comando, sustituyendo el nombre por el de tu archivo:

   ```powershell
   node scripts/optimize_images_web.cjs Planeta_ValleDeOrdesa.jpg
   ```

   Si quieres regenerar las imágenes de **todos** los planetas (no hace falta normalmente), puedes ejecutar el script sin ningún nombre de archivo:

   ```powershell
   node scripts/optimize_images_web.cjs
   ```

3. Cuando termine, verás un mensaje `✅ OK: Planeta_ValleDeOrdesa.jpg`.

Esto genera automáticamente:

- `public/planets-responsive/Planeta_ValleDeOrdesa-480.jpg` / `.webp`
- `public/planets-responsive/Planeta_ValleDeOrdesa-768.jpg` / `.webp`
- `public/planets-responsive/Planeta_ValleDeOrdesa-1024.jpg` / `.webp`
- `public/planets-responsive/Planeta_ValleDeOrdesa-1400.jpg` / `.webp`
- `public/planets-share/Planeta_ValleDeOrdesa.jpg` (y una copia en `src/assets/planets-share/`)

No tienes que crear ni tocar nada de esto manualmente: si el script terminó con `✅ OK`, ya está hecho.

> Si nunca has instalado las dependencias del proyecto, antes de esto ejecuta una sola vez `pnpm install` en la raíz del proyecto.

---

## 3. (Opcional) Añade la foto panorámica 360°

Si tienes una imagen panorámica (equirectangular, tipo "360°") de ese planeta:

1. Cópiala dentro de estas dos carpetas (sí, en las dos, deben ser idénticas):
   ```
   public/pano360/
   src/assets/pano360/
   ```
2. Usa un nombre descriptivo, por ejemplo:
   ```
   PANO_ValleDeOrdesa.jpg
   ```
   o si la foto es de dron:
   ```
   PANO-DRONE_ValleDeOrdesa.jpg
   ```

Si no tienes foto 360°, simplemente sáltate este paso: el planeta funcionará igual, solo que no tendrá la opción de "aterrizar" en vista 360°.

---

## 4. (Opcional) Añade una versión a tamaño completo

Algunos planetas tienen una imagen extra a máxima resolución en `public/planets-full/`. Es un campo que ya casi no se usa en la web actual, así que **puedes saltarte este paso sin problema**. Si quieres añadirla de todos modos, copia la imagen dentro de:

```
public/planets-full/
```

con el mismo nombre que la imagen principal (`Planeta_ValleDeOrdesa.jpg`).

---

## 5. Añade los datos del planeta en `src/data/planets.js`

Este es el paso más importante: aquí es donde "das de alta" el planeta para que aparezca en el catálogo y tenga su propia página.

1. Abre el archivo:
   ```
   src/data/planets.js
   ```
2. Busca la línea que dice:
   ```js
   ];

   export const planetData = basePlanetData.map((planet) => ({
   ```
   Este es el final de la lista de planetas (la lista se llama `basePlanetData`).
3. Justo **antes** de ese `];` (es decir, después del último planeta de la lista, con una coma detrás de la llave anterior `}` ), pega un bloque nuevo con esta plantilla:

   ```js
   {
     slug: 'planeta-valle-de-ordesa',
     name: 'Planeta Valle de Ordesa',
     image: '../../assets/planets/Planeta_ValleDeOrdesa.jpg',
     image360: '/pano360/PANO_ValleDeOrdesa.jpg',
     description: 'Aquí va la descripción larga y "espacial" del planeta, en el tono de relato de ciencia ficción que usa el resto de la web.',
     nombreCientifico: 'V4LL3 D3 0RD354',
     location: 'Valle de Ordesa, Huesca',
     coordinates: '42°38\'22.0"N 0°02\'30.0"W',
     discoveryDate: '2026-09-30',
     equipment: 'DJI Mini 5 Pro'
   },
   ```

### Explicación de cada campo

| Campo | Obligatorio | Qué poner |
|---|---|---|
| `slug` | Sí | Identificador único para la URL. Solo minúsculas, sin espacios ni acentos, separado por guiones. Ejemplo: `planeta-valle-de-ordesa`. **No puede repetirse** con ningún otro planeta existente. |
| `name` | Sí | Nombre bonito que se muestra en la web. Ejemplo: `Planeta Valle de Ordesa`. |
| `image` | Sí | Ruta relativa a la imagen que copiaste en el paso 1: `'../../assets/planets/NOMBRE_DE_TU_ARCHIVO.jpg'`. |
| `image360` | No | Solo si hiciste el paso 3: `'/pano360/NOMBRE_DE_TU_PANO.jpg'`. Si no la pones, el sistema usará la imagen principal como sustituto. |
| `description` | Sí | El texto largo tipo "informe de descubrimiento espacial" que aparece en la ficha del planeta. Puede ser tan largo como quieras. |
| `nombreCientifico` | Sí | El "nombre en clave alienígena" del lugar (normalmente el nombre real escrito sustituyendo letras por números, al estilo "leet": a→4, e→3, i→1, o→0). |
| `location` | Sí (puede dejarse `''` si no lo sabes) | Ubicación real del lugar en la Tierra. |
| `coordinates` | Sí (puede dejarse `''`) | Coordenadas GPS, en formato grados/minutos/segundos o decimal, da igual, hay ejemplos de los dos estilos en el archivo. |
| `discoveryDate` | Sí (puede dejarse `''`) | Fecha en que se tomó la foto. Puedes escribirla como `'2026-09-30'` o como `'30 septiembre 2026'`, ambos formatos se usan en el archivo. |
| `equipment` | Sí (puede dejarse `''`) | Cámara o dron usado para la foto. |
| `imageFull` | No | Solo si hiciste el paso 4: `'/planets-full/NOMBRE_DE_TU_ARCHIVO.jpg'`. |

> **Importante:** cada bloque de planeta va entre llaves `{ }` y termina con una coma `,` antes del siguiente bloque (excepto el último de la lista, aunque dejar la coma tampoco rompe nada).

---

## 6. Comprueba que todo está bien escrito

Después de guardar el archivo `planets.js`, comprueba que no haya errores de sintaxis (una coma o comilla olvidada rompe toda la web). Puedes hacerlo de dos formas:

- **En VS Code:** mira si el archivo `src/data/planets.js` muestra alguna línea roja/subrayada de error.
- **Con el servidor de desarrollo:** ejecuta en la terminal:

  ```powershell
  pnpm run dev
  ```

  Y abre en el navegador la URL que te indique (normalmente `http://localhost:4321`). Ve a la página del **Catálogo** y comprueba que tu nuevo planeta aparece con su imagen. Después entra en su ficha (pincha en él) y revisa que:
  - La imagen principal se ve bien.
  - La descripción y los datos son correctos.
  - Si añadiste foto 360°, el botón de "aterrizar"/vista 360° funciona.

  Para parar el servidor de pruebas, pulsa `Ctrl + C` en la terminal.

---

## 7. Publica los cambios (build y despliegue)

Cuando todo se vea bien en local:

1. Genera la versión final de la web:
   ```powershell
   pnpm run build
   ```
   Esto debe terminar sin errores (si hay algún error, normalmente señala una comilla o coma mal puesta en `planets.js`).
2. Si el proyecto se publica con GitHub Pages mediante el script ya configurado, puedes desplegar con:
   ```powershell
   pnpm run deploy
   ```
3. Si el proyecto usa otro sistema de despliegue (por ejemplo, subir cambios a `git` y que se despliegue solo), simplemente confirma (`commit`) y sube (`push`) los cambios como haces normalmente.

---

## Resumen rápido (chuleta)

1. Copia la foto a `src/assets/planets/`.
2. Ejecuta `node scripts/optimize_images_web.cjs NombreDeLaFoto.jpg`.
3. (Opcional) Copia la foto 360° a `public/pano360/` y `src/assets/pano360/`.
4. Añade un bloque nuevo `{ slug, name, image, image360, description, nombreCientifico, location, coordinates, discoveryDate, equipment }` en `src/data/planets.js`, dentro de la lista `basePlanetData`.
5. Guarda, revisa con `pnpm run dev` que se ve bien.
6. `pnpm run build` y despliega.

¡Y ya tienes un planeta nuevo publicado!
