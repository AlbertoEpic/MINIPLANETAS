import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(__dirname, '..');
const PLANETS_DATA_PATH = path.join(ROOT_DIR, 'src/data/planets.js');
const ASSETS_DIR = path.join(ROOT_DIR, 'src/assets/planets');

/**
 * Script para automatizar la adición de un nuevo planeta al proyecto MiniPlanetas.
 * Uso: node scripts/add-planet.mjs "Nombre del Planeta" "ruta/a/la/imagen.jpg" "Descripción..." [otros campos]
 */

async function addPlanet() {
  const args = process.argv.slice(2);
  if (args.length < 3) {
    console.log(`
Uso: node scripts/add-planet.mjs <nombre> <ruta_imagen> <descripcion> [opciones]

Opciones (en formato clave=valor):
  location="Sitio, País"
  coordinates="42.123, -0.456"
  date="2026-01-11"
  equipment="DJI Mini 5 Pro"
  slug="planeta-personalizado"
  image360="/pano360/nombre.jpg"
    `);
    process.exit(1);
  }

  const [name, imagePath, description, ...extraArgs] = args;
  
  // Procesar opciones extra
  const options = {
    location: '',
    coordinates: '',
    date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
    equipment: '',
    slug: name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[^\w-]/g, ''),
    image360: ''
  };

  extraArgs.forEach(arg => {
    const [key, value] = arg.split('=');
    if (options.hasOwnProperty(key)) {
      options[key] = value;
    }
  });

  const fileName = path.basename(imagePath);
  const destImagePath = path.join(ASSETS_DIR, fileName);

  console.log(`🚀 Iniciando proceso para: ${name}`);

  // 1. Copiar imagen si no está ya en el destino
  if (path.resolve(imagePath) !== path.resolve(destImagePath)) {
    console.log(`📸 Copiando imagen a ${destImagePath}...`);
    fs.copyFileSync(imagePath, destImagePath);
  }

  // 2. Ejecutar script de optimización
  console.log(`⚙️ Optimizando imágenes...`);
  try {
    execSync(`node scripts/optimize_images_web.cjs "${fileName}"`, { stdio: 'inherit', cwd: ROOT_DIR });
  } catch (error) {
    console.error('❌ Error optimizando imágenes:', error.message);
    process.exit(1);
  }

  // 3. Actualizar src/data/planets.js
  console.log(`📝 Actualizando base de datos de planetas...`);
  let content = fs.readFileSync(PLANETS_DATA_PATH, 'utf-8');
  
  const newPlanetEntry = `  {
    slug: '${options.slug}',
    name: '${name}',
    image: '../../assets/planets/${fileName}',
    ${options.image360 ? `image360: '${options.image360}',` : ''}
    description: '${description.replace(/'/g, "\\'")}',
    nombreCientifico: '${name.toUpperCase().replace(/[AEIOU]/g, (m) => ({'A':'4','E':'3','I':'1','O':'0','U':'V'}[m] || m))}',
    location: '${options.location}',
    coordinates: '${options.coordinates}',
    discoveryDate: '${options.date}',
    equipment: '${options.equipment}'
  },
];`;

  // Insertar antes del cierre del array (asumiendo que termina en ];)
  // Buscamos el último ]; y lo reemplazamos
  if (content.trim().endsWith('];')) {
    content = content.trim().replace(/\];$/, newPlanetEntry);
  } else {
    // Si hay espacios al final
    content = content.replace(/\s*\];\s*$/, `\n${newPlanetEntry}`);
  }

  fs.writeFileSync(PLANETS_DATA_PATH, content, 'utf-8');
  console.log(`✅ ¡Planeta "${name}" añadido con éxito!`);
}

addPlanet();
