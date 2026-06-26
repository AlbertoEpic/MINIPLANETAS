console.log("=== INICIANDO SCRIPT DE OPTIMIZACIÓN ===");

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Rutas base
const srcDir = path.join(__dirname, '../src/assets/planets');
const responsiveDir = path.join(__dirname, '../public/planets-responsive');
const shareDirs = [
  path.join(__dirname, '../public/planets-share'),
  path.join(__dirname, '../src/assets/planets-share'),
];

// Configuración de optimización
const responsiveWidths = [480, 768, 1024, 1400];
const allowedExtensions = new Set(['.jpg', '.jpeg', '.png']);
const responsiveQualityByWidth = {
  480: { jpg: 64, webp: 60 },
  768: { jpg: 68, webp: 64 },
  1024: { jpg: 74, webp: 70 },
  1400: { jpg: 80, webp: 76 },
};

function getResponsiveQuality(width, format) {
  const fallback = format === 'webp' ? 72 : 76;
  return responsiveQualityByWidth[width]?.[format] ?? fallback;
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function getSafeBaseName(fileName) {
  return path.parse(fileName).name;
}

async function writeResponsiveVariants(srcPath, fileName) {
  const baseName = getSafeBaseName(fileName);

  for (const width of responsiveWidths) {
    const jpgOutput = path.join(responsiveDir, `${baseName}-${width}.jpg`);
    const webpOutput = path.join(responsiveDir, `${baseName}-${width}.webp`);
    const jpgQuality = getResponsiveQuality(width, 'jpg');
    const webpQuality = getResponsiveQuality(width, 'webp');

    await Promise.all([
      sharp(srcPath)
        .rotate()
        .resize({ width, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: jpgQuality, mozjpeg: true })
        .toFile(jpgOutput),
      sharp(srcPath)
        .rotate()
        .resize({ width, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: webpQuality })
        .toFile(webpOutput),
    ]);
  }
}

async function writeShareImages(srcPath, fileName, ext) {
  const jobs = shareDirs.map((destDir) => {
    const outputPath = path.join(destDir, fileName);
    const pipeline = sharp(srcPath)
      .rotate()
      .resize({
        width: 1200,
        height: 1200,
        fit: 'inside',
        withoutEnlargement: true,
      });

    if (ext === '.png') {
      return pipeline.png({ compressionLevel: 9 }).toFile(outputPath);
    }

    return pipeline.jpeg({ quality: 80, mozjpeg: true }).toFile(outputPath);
  });

  await Promise.all(jobs);
}

async function main() {
  ensureDir(responsiveDir);
  shareDirs.forEach(ensureDir);

  const argumentoImagen = process.argv[2];
  let files = [];

  if (argumentoImagen) {
    // Normalizamos barras de Windows y extraemos solo el nombre del archivo
    const rutaNormalizada = argumentoImagen.replace(/\\/g, '/');
    const fileName = path.basename(rutaNormalizada);
    const ext = path.extname(fileName).toLowerCase();
    
    if (!allowedExtensions.has(ext)) {
      console.error(`❌ Error: El formato ${ext} no está permitido.`);
      return;
    }
    
    const rutaDestinoValidar = path.join(srcDir, fileName);
    if (!fs.existsSync(rutaDestinoValidar)) {
      console.error(`❌ Error: No se encuentra la imagen "${fileName}" en la carpeta de origen:\n   ${srcDir}`);
      return;
    }
    
    files = [fileName];
    console.log(`🎯 Procesando únicamente la imagen: ${fileName}\n`);
  } else {
    // Si no hay argumentos, procesa toda la carpeta
    files = fs.readdirSync(srcDir).filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return allowedExtensions.has(ext);
    });
    console.log(`📁 Procesando todas las imágenes de la carpeta (${files.length} encontradas)\n`);
  }

  if (files.length === 0) {
    console.log('⚠️ No hay imágenes válidas para procesar.');
    return;
  }

  let ok = 0;
  let failed = 0;

  for (const fileName of files) {
    const ext = path.extname(fileName).toLowerCase();
    const srcPath = path.join(srcDir, fileName);

    try {
      await writeResponsiveVariants(srcPath, fileName);
      await writeShareImages(srcPath, fileName, ext);
      ok += 1;
      console.log(`✅ OK: ${fileName}`);
    } catch (error) {
      failed += 1;
      console.error(`❌ ERROR: ${fileName}`);
      console.error(error.message || error);
    }
  }

  console.log('\n---');
  console.log(`Procesadas correctamente: ${ok}`);
  console.log(`Con error: ${failed}`);
  console.log('Salidas generadas en public/planets-responsive y planets-share.');
}

main().catch((error) => {
  console.error('❌ Fallo general en optimizacion de imagenes.');
  console.error(error.message || error);
  process.exit(1);
});