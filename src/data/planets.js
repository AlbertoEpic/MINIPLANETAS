const basePlanetData = [
  {
    slug: 'planeta-la-raca',
    name: 'Planeta La Raca',
    image: '../../assets/planets/Planeta_LaRaca.jpg',
    description: 'El potente telescopio espectrográfico de SQLP, monitorizando la evolución del planeta L4-R4C4 en la constelación Astúnis, ha revelado un hallazgo extraordinario. En la escasa superficie lisa de este mundo helado, se distingue lo que parece ser una nave espacial posada, rodeada de una serie de antenas alienígenas. Estos artefactos, orientados hacia el firmamento, sugieren la presencia de una civilización interestelar capaz de comunicarse a través de los confines del universo. El descubrimiento ha desatado una ola de asombro entre los astrónomos, que ahora contemplan la posibilidad de que La Raca sea el enclave secreto de viajeros cósmicos, portadores de tecnología y misterios aún por descifrar.',
    nombreCientifico: 'L4-R4C4',
    location: 'La Raca, Astún',
    coordinates: "42°47'38.1\"N 0°30'16.5\"W",
    discoveryDate: '18 marzo 2026',
    equipment: 'DJI Mini 5 Pro'
  },
  {
    slug: 'planeta-albero-alto',
    name: 'Planeta Albero Alto',
    image: '../../assets/planets/Planeta_AlberoAlto.jpg',
    image360: '/pano360/PANO-DRONE_AlberoAlto.jpg',
    description: 'Durante años, este planeta cercano de nuestra propia galaxia pasó desapercibido en los mapas de observación de corto alcance. Sin embargo, en el último repaso de nuestro sistema estelar próximo, la nueva generación de cámaras de altísima resolución ha revelado un hallazgo extraordinario: señales inequívocas de civilización avanzada en una superficie completamente transformada de forma artificial. En la imagen principal se distingue con claridad una estructura aeroespacial de gran tamaño, un extraño cohete en posición de despegue, sorprendentemente similar a la Starship de SpaceX en la Tierra. Este indicio sugiere que sus habitantes ya han alcanzado la capacidad tecnológica para abandonar su mundo natal. Aún desconocemos si se trata de su primer intento de vuelo orbital o si, por el contrario, ya han realizado misiones previas fuera del planeta. Seguiremos monitorizando su evolución en próximas campañas de observación.',
    nombreCientifico: '4LB3R0 4L70',
    location: 'Albero Alto, galaxia H0Y4-D3-HV35C4',
    coordinates: '42°03\'00.4"N 0°20\'12.3"W',
    discoveryDate: '2026-05-09',
    equipment: 'DJI Mini 5 Pro'
  },
  {
    slug: 'planeta-alquezar',
    name: 'Planeta Alquézar',
    image: '../../assets/planets/Planeta_Alquézar.jpg',
    image360: '/pano360/PANO_SanMiguel-Alquézar.jpg',
    description: 'Planeta con claros indicios de albergar una desarrollada civilización. No está claro todavía si perdura o la vida se extinguió hace no muchos siglos. Lo que está claro que los habitantes de este pequeño asteriode dejaron su rastro en él, con construcciones de diversa índole.',
    nombreCientifico: '4LQUÉZ3R',
    location: 'Alquézar, España',
    coordinates: '42.1728, -0.0239',
    discoveryDate: '2025-04-07',
    equipment: 'Olympus OM-1 sobre trípode con cabezal panorámico Nodal Ninja 5'
  },
  {
    slug: 'planeta-anciles',
    name: 'Planeta Anciles',
    image: '../../assets/planets/Planeta_Anciles.jpg',
    image360: '/pano360/PANO-DRONE_Anciles.jpg',
    description: 'Este pequeño planeta se distingue por su carácter bucólico y señorial. Su superficie está dominada por una extensa pradera circular de tonos verdes y ocres, que sirve de núcleo a un asentamiento de arquitectura tradicional en piedra y pizarra. Las edificaciones, coronadas por chimeneas y torres puntiagudas, parecen brotar de la tierra con la misma naturalidad que los árboles que las rodean. La geología de este astro es amable; laderas suaves cubiertas de vegetación caducifolia que protegen el núcleo habitado del vacío circundante. La atmósfera es de una claridad cristalina, con nubes algodonosas que orbitan a baja altura, creando un juego de sombras sobre los muros de piedra centenarios. No se percibe el ruido de la tecnología moderna; es un planeta-jardín, un refugio donde el tiempo parece medirse por el ciclo de las estaciones y donde la herencia de los antiguos constructores se mantiene intacta bajo un cielo azul infinito.',
    nombreCientifico: '4ZC1L3S',
    location: 'Anciles',
    coordinates: '42°35\'23.7"N 0°30\'34.3"E',
    discoveryDate: '2026-03-08',
    equipment: 'DJI Mini 5 Pro'
  },
  {
    slug: 'planeta-bejenado',
    name: 'Planeta Bejenado',
    image: '../../assets/planets/Planeta_Bejenado.jpg',
    image360: '/pano360/PANO_Bejenado.jpg',
    description: 'Relieve volcánico con energía ascendente, ideal para conceptos que requieren impulso.',
    nombreCientifico: 'B3J3Z4D0',
    location: 'La Palma, España',
    coordinates: '28.6905, -17.8567',
    discoveryDate: '2022-08-29',
    equipment: 'Panasonic Lumix DC-GX9'
  },
  {
    slug: 'planeta-castillosaumur',
    name: 'Planeta Castillo Saumur',
    image: '../../assets/planets/Planeta_CastilloSaumur.jpg',
    image360: '/pano360/PANO_Castillo-De-Saumur.jpg',
    description: 'Arquitectura fluvial y elegancia de piedra para narrativas clásicas y claras.',
    nombreCientifico: 'C4ST1LL0 S4UMUR',
    location: 'Saumur, Francia',
    coordinates: '47.2597, -0.0786',
    discoveryDate: '2021-08-26',
    equipment: 'GoPro Hero 7 Black'
  },
  {
    slug: 'planeta-castilloloarre',
    name: 'Planeta Castillo Loarre',
    image: '../../assets/planets/Planeta_CastilloLoarre.jpg',
    image360: '/pano360/PANO-DRONE_CastilloLoarre.jpg',
    description: 'Fortificación pétrea sobre relieve alto, ideal para conceptos sólidos y monumentales.',
    nombreCientifico: 'C4ST1LL0 L04RR3',
    location: 'Loarre, España',
    coordinates: '42.3247, -0.6247',
    discoveryDate: '2026-02-18',
    equipment: 'DJI Mini 5 Pro'
  },
  {
    slug: 'planeta-castillo-de-montearagon',
    name: 'Planeta Castillo de Montearagón',
    image: '../../assets/planets/Planeta_Montearagón.jpg',
    imageFull: '/planets-full/Planeta_Montearagón.jpg',
    image360: '/pano360/PANO-DRONE_Montearagón.jpg',
    description: 'Tras semanas de observación con los nuevos telescopios de largo alcance y altísima resolución del consorcio SQLP, por fin hemos obtenido imágenes nítidas de este célebre mundo fronterizo. Lo que en expediciones anteriores parecían simples irregularidades del relieve se revela ahora como una red de asentamientos y trazas arquitectónicas repartidas por toda su superficie: la existencia de civilización inteligente queda demostrada sin margen de duda. En el sector central distinguimos con claridad los restos de una gran fortaleza pétrea, erigida -según nuestros analistas- para dominar las extensas llanuras fértiles del planeta, allí donde más prolifera la vida. Sin embargo, su estado actual, parcialmente destruido y marcado por cicatrices de colapso y asedio, sugiere un pasado de confrontaciones brutales. La presencia de ese bastión arruinado nos ofrece un diagnóstico inquietante: los habitantes de este astro no solo conocen la guerra, sino que arrastran un lamentable carácter belicista que aún deja huella en su paisaje.',
    nombreCientifico: 'C45T1II0 D3 M0Z734R46ÓZ',
    location: 'Castillo de Montearagón, Huesca',
    coordinates: '42°09\'10.5"N 0°20\'42.6"W',
    discoveryDate: '28 abril 2026',
    equipment: 'DJI Mini 5 Pro'
  },
  {
    slug: 'planeta-collarada',
    name: 'Planeta Collarada',
    image: '../../assets/planets/Planeta_Collarada.jpg',
    imageFull: '/planets-full/Planeta_Collarada.jpg',
    image360: '/pano360/PANO_Collarada.jpg',
    description: 'Seguimos con la ronda de exploraciones por la galaxia Oscam Pyrenum y regresamos al planeta C0II4R4D4; gracias a los nuevos sensores de mayor precisión, obtenemos datos revolucionarios. Al igual que en el planeta 45P3, descubrimos a un ejemplar de la esquiva Myrium Pomensis: se confirma así que se trata de una especie interplanetaria. No descartamos hallarla en más mundos a lo largo de nuestra travesía galáctica. C0II4R4D4 alberga vida, no hay duda: se observan zonas de vegetación y señales de una remota civilización. Esta teoría se refuerza con la existencia de grandes reservas de agua en estado sólido en más del 50% de su superficie.',
    nombreCientifico: 'C0II4R4D4',
    location: 'Macizo de Collarada, Valle del Aragón',
    coordinates: '42°42\'51.0"N 0°28\'12.8"W',
    discoveryDate: '2026-04-12',
    equipment: 'DJI Osmo Action 5 Pro'
  },
  {
    slug: 'planeta-comodoto',
    name: 'Planeta Comodoto',
    image: '../../assets/planets/Planeta_Comodoto.jpg',
    image360: '/pano360/PANO_Comodoto.jpg',
    description: 'Textura tropical y ritmo cálido, pensado para proyectos de alto contraste.',
    nombreCientifico: 'C0M0D0T0',
    location: 'Comodoto',
    coordinates: '42.763800, -0.565887',
    discoveryDate: '',
  },
  {
    slug: 'planeta-pacino',
    name: 'Planeta Pacino',
    image: '../../assets/planets/Planeta_Pacino.jpg',
    image360: '/pano360/PANO_Pacino.jpg',
    description: `Tras el cierre de la última campaña de exploración galáctica, los analistas de la factoría SQLP hemos tenido acceso a un intrigante y revolucionario descubrimiento. En esta ocasión, nuestra sonda espacial fue enviada en una audaz misión de reconocimiento hacia los dominios de la cercana galaxia Sallentis-d-Gallegus.

  Al establecer órbita sobre el enigmático Planeta Pacino, los sensores ópticos de última generación capturaron una serie de fotografías de altísima resolución. Entre el material recibido, una imagen en particular ha desatado el caos y alborotado a toda la comunidad científica.

  La Revelación de una Civilización Oculta
  Hasta el día de hoy, la existencia de formas de vida en Pacino era un hecho constatado, pero la comunidad astronómica sospechaba muy poco de su verdadero potencial. Debido a su accidentada, abrupta y colosal orografía, los informes sugerían que se trataba de una civilización ancestral, aislada por el relieve y poco evolucionada tecnológicamente.

  Pero los datos de alta resolución han destrozado esa teoría.

  Oculta en los pliegues del terreno, la sonda ha descubierto una majestuosa base secreta de lanzamiento intergaláctico. Perfectamente mimetizada con el entorno natural para burlar las miradas del cosmos, la instalación albergaba en su centro un imponente cohete espacial. Los sistemas de la factoría estiman que la captura fue realizada en un instante crítico: ¡apenas unos momentos antes de su inminente lanzamiento hacia las estrellas!

  Pacino ya no es un mundo del pasado; es una potencia silenciosa que vigila el espacio.`,
    nombreCientifico: 'Planeta P4C1Z0',
    location: 'Nebulosa de Sallentis-d-Gallegus',
    coordinates: "42°45'36.6\"N 0°20'41.2\"W",
    discoveryDate: '24-05-2026',
    equipment: 'DJI Mini 5 Pro'
  },
  {
    slug: 'planeta-dunedupilat',
    name: 'Planeta Dune du Pilat',
    image: '../../assets/planets/Planeta_DuneDuPilat.jpg',
    image360: '/pano360/PANO_DunaPilat.jpg',
    description: 'Dunas doradas y horizonte abierto; perfecto para propuestas expansivas.',
    nombreCientifico: 'DUZ3 DU P1L4T',
    location: 'La Teste-de-Buch (Francia)',
    coordinates: '44°35\'18.7"N 1°12\'45.3"W',
    discoveryDate: '2021-08-24',
    equipment: 'GoPro Hero 7 Black'
  },
  {
    slug: 'planeta-eriste',
    name: 'Planeta Eriste',
    image: '../../assets/planets/Planeta_Eriste.jpg',
    image360: '/pano360/PANO-DRONE_Eriste.jpg',
    description: 'Aire frío y claridad alpina para sistemas precisos y calmados.',
    nombreCientifico: '3R1ST3',
    location: 'Eriste',
    coordinates: '42°35\'01.4"N 0°29\'10.0"E',
    discoveryDate: '2025-10-19',
    equipment: 'DJI Mini 5 Pro'
  },
  {
    slug: 'planeta-porron-1',
    name: 'Planeta Porrón I',
    image: '../../assets/planets/Planeta-Porrón.jpg',
    image360: '/pano360/PANO_Porrón.jpg',
    description: 'Este pequeño planeta está dominado por una protuberancia granítica de una verticalidad extrema. Su superficie no busca la horizontalidad; es una sucesión de aristas y placas de roca desnuda que convergen en una cima estrecha, como un colmillo mineral que perfora la atmósfera superior. La geología aquí es severa y monocromática, con predominio de grises profundos y texturas rugosas que delatan siglos de erosión por vientos de alta montaña. No hay rastro de hidrosfera superficial, aunque las manchas de nieve perpetua en las grietas de su cara oculta sugieren una reserva de humedad congelada. La vida es inexistente en este monolito espacial, un mundo que parece haber sido despojado de todo lo superfluo para quedar reducido a su esqueleto de piedra más resistente.',
    nombreCientifico: 'P0RRÓZ 1',
    location: 'Tramacastilla de Tena',
    coordinates: '42°44\'13.2"N 0°25\'48.5"W',
    discoveryDate: '2025-07-10',
    equipment: 'DJI mini 3 Pro'
  },
  {
    slug: 'planeta-porron-2',
    name: 'Planeta Porrón II',
    image: '../../assets/planets/Planeta-Porrón.jpg',
    image360: '/pano360/PANO_Porrón.jpg',
    description: 'Este pequeño planeta está dominado por una protuberancia granítica de una verticalidad extrema. Su superficie no busca la horizontalidad; es una sucesión de aristas y placas de roca desnuda que convergen en una cima estrecha, como un colmillo mineral que perfora la atmósfera superior. La geología aquí es severa y monocromática, con predominio de grises profundos y texturas rugosas que delatan siglos de erosión por vientos de alta montaña. No hay rastro de hidrosfera superficial, aunque las manchas de nieve perpetua en las grietas de su cara oculta sugieren una reserva de humedad congelada. La vida es inexistente en este monolito espacial, un mundo que parece haber sido despojado de todo lo superfluo para quedar reducido a su esqueleto de piedra más resistente.',
    nombreCientifico: 'P0RRÓZ 11',
    location: 'Tramacastilla de Tena',
    coordinates: '42°44\'13.1\"N 0°25\'48.5\"W',
    discoveryDate: '2021-09-19',
    equipment: 'DJI mini 3 Pro'
  },
    {
    slug: 'planeta-espelunciecha',
    name: 'Planeta Espelunciecha',
    image: '../../assets/planets/Planeta_Espelunciecha.jpg',
    image360: '/pano360/PANO-DRONE_Espelunciecha.jpg',
    description: 'Profundidades calcáreas y ecos suaves; un planeta para ideas introspectivas.',
    nombreCientifico: 'ESP3LUZC13CH4',
    location: 'Formigal',
    coordinates: '42°46\'53.5"N 0°26\'14.9"W',
    discoveryDate: '2025-12-13',
    equipment: 'DJI Mini 5 Pro'
  },
  {
    slug: 'planeta-fiordo-de-montearagon',
    name: 'Planeta Fiordo de Montearagón',
    image: '../../assets/planets/Planeta_Fiordo-de-Montearagón.jpg',
    description: 'Cauce profundo y reflejos oscuros, perfecto para proyectos con misterio.',
    nombreCientifico: 'F1 0RD0 D3 M0ZT3 4R4GÓZ',
    location: 'Fornillos, Huesca',
    coordinates: '42°11\'29.7"N 0°22\'12.7"W',
    discoveryDate: '2025-10-28',
    equipment: 'DJI Mini 5 Pro'
  },
  {
    slug: 'planeta-fenias',
    name: 'Planeta Feniás',
    image: '../../assets/planets/Planeta_Fenias2.jpg',
    imageFull: '/planets-full/Planeta_Fenias2.jpg',
    image360: '/pano360/PANO-DRONE_Fenias.jpg',
    description: 'Nuestros exploradores intergalácticos han puesto por fin el pie sobre el planeta F3ZI45, y los primeros informes describen un mundo de una ferocidad geológica casi indomable. Su superficie presenta una orografía muy accidentada: una sucesión de crestas abruptas, laderas quebradas y enormes grietas que desgarran la corteza del astro como cicatrices abiertas hacia su núcleo. La climatología extrema no ha impedido, sin embargo, que este cuerpo conserve inmensas reservas de agua en los tres estados de la materia. Se han identificado masas sólidas aferradas a las umbrías, corrientes líquidas ocultas en sectores resguardados y densas formaciones de vapor ascendiendo desde las fracturas más profundas, como si el propio planeta respirara a través de ellas. Lo más inquietante y fascinante del hallazgo ha llegado al descender la mirada hacia esos abismos: en el fondo de las grandes grietas, allí donde el clima parece menos hostil y la violencia atmosférica pierde intensidad, los sensores han detectado claros indicios de civilización. Estructuras, trazas y patrones imposibles de atribuir al azar sugieren que Feniás no es solo un mundo salvaje, sino también un refugio oculto donde una inteligencia antigua podría haber aprendido a sobrevivir bajo la roca.',
    nombreCientifico: 'F3ZI45',
    location: 'Nebulosa Beta de Panticosa',
    coordinates: '42°45\'46.7"N 0°16\'30.4"W',
    discoveryDate: '2026-04-17',
    equipment: 'DJI Mini 5 Pro'
  },
  {
    slug: 'planeta-frankfurt',
    name: 'Planeta Frankfurt',
    image: '../../assets/planets/Planeta_Frankfurt.jpg',
    image360: '/pano360/PANO_Frankfurt.webp',
    description: 'Navegando por los confines del ciberespacio, salimos al encuentro del cibernauta Mathias Weil. Llegado desde la remota galaxia 63RM4N1C4, Weil comparte un material espectacular de su mundo natal. A la espera de poder enviar a aquel lejano confín una misión propia, equipada con los sensores de última tecnología de la factoría SQLP, nos conformamos con esta imagen que, aun a baja resolución, resulta imponente y sobrecogedora. \n\n El documento nos descubre el Planeta Frankfurt en mitad de su noche orbital, un ciclo de oscuridad absoluta que se prolonga durante 17 meses. Lejos de detenerse, una próspera y avanzada civilización ocupa la totalidad de la superficie, perfectamente adaptada a las sombras. \n\n Bajo esta megaciudad global, el planeta late con furia: un núcleo incandescente de magma a altísimas temperaturas asoma de forma amenazante a través de una corteza resquebrajada. Un resplandor misterioso recorre las grietas en plena noche, sugiriendo una intensa actividad radioactiva. Por encima de este infierno de fuego y tecnología, se extiende una atmósfera limpia y cristalina, coronada por la silueta solitaria de su luna.',
    nombreCientifico: 'FR4NKFURT',
    location: 'Alemania',
    coordinates: '50°1\'47.0"N 8°41\'0.0"E',
    discoveryDate: '2026-05-18',
    equipment: 'DJI Mavic 3 Pro'
  },
  {
    slug: 'planeta-garmo-negro',
    name: 'Planeta Garmo Negro',
    image: '../../assets/planets/Planeta_GarmoNegro.jpg',
    image360: '/pano360/PANO-DRONE_GarmoNegro.jpg',
    description: 'En la misma Nebulosa que el planeta F3ZI45, nuestros cartógrafos estelares han descubierto un nuevo mundo que irradia señales claras de vida inteligente: el enigmático G4RM0 Z36R0. Su orografía es feroz, una corona de crestas quebradas, barrancos imposibles y placas de roca negra donde el equilibrio parece una leyenda; aun así, los sensores confirman vastas reservas de agua en estado sólido aferradas a sus umbrías. En mitad de este paisaje indómito se produjo el hallazgo que ya sacude todos los archivos de la exploración intergaláctica: un ejemplar del apreciado Susanitas Autóctonus viviendo en libertad en su hábitat natural. Es la primera confirmación real de esta especie, hasta ahora únicamente catalogada en los cuadernos de vitácora de legendarios viajeros interestelares. La misión se tornó aún más inquietante cuando nuestro satélite explorador fue detectado por los seres presentes en este asteroide; lo deducimos al observar que uno de ellos intenta comunicarse con nosotros por gestos, en una forma de lenguaje ancestral tan básico como inequívoco. La atmósfera de Garmo Negro, sin embargo, sigue siendo su mayor enigma: extrema, tormentosa y dramática, envuelta en densos velos que podrían ser vapores de agua... o señales de contaminación. Falta investigar más, pero todo indica que este planeta no solo guarda vida: guarda historia.',
    nombreCientifico: '64RM0 Z36R0',
    location: 'Nebulosa Beta de Panticosa',
    coordinates: '42°46\'17.0"N 0°15\'46.8"W',
    discoveryDate: '21 abril 2026',
    equipment: 'DJI Mini 5 Pro'
  },
  {
    slug: 'planeta-gracionepel',
    name: 'Planeta Gracionepel',
    image: '../../assets/planets/Planeta_Gracionepel.jpg',
    description: 'Relieve sereno y vegetación tenue, equilibrado para identidades suaves.',
    nombreCientifico: 'GR4C1 0Z3P3L',
    location: '',
    coordinates: '',
    discoveryDate: '',
    equipment: ''
  },
  {
    slug: 'planeta-houratatere',
    name: 'Planeta Houratatere',
    image: '../../assets/planets/Planeta_Houratatere.jpg',
    image360: '/pano360/PANO_Houratatere.jpg',
    description: 'Tonos cálidos y respiración lenta, pensado para experiencias contemplativas.',
    nombreCientifico: 'H 0UR4T4T3R3',
    location: 'Laruns, Francia',
    coordinates: '42°52\'58.8"N 0°27\'15.8"W',
    discoveryDate: '2023-05-01',
    equipment: 'DJI Mini 3 Pro'
  },
  {
    slug: 'planeta-la-concha-san-sebastian',
    name: 'Planeta La Concha, San Sebastián',
    image: '../../assets/planets/Planeta_La-Concha---San-Sebastián.jpg',
    description: 'Este pequeño planeta presenta una hidrografía semicircular perfecta, definida por una bahía de aguas serenas que ocupa el centro de su hemisferio visible. La geología costera ha sido domesticada por una avanzada red urbana que bordea el litoral con una elegancia arquitectónica notable, destacando una barandilla blanca que actúa como frontera entre el orden ciudadano y la naturaleza marina. En el centro de la masa líquida emerge una isla-fortaleza, un pequeño núcleo de roca y vegetación que sirve como eje visual de la cuenca. El terreno se eleva abruptamente en los extremos, formando promontorios boscosos que protegen la bahía de los vientos espaciales. La atmósfera es luminosa y parece cargada de salinidad, sugiriendo un clima templado donde la civilización ha prosperado gracias a un diseño urbano que abraza el mar en lugar de luchar contra él.',
    nombreCientifico: 'L4 C0ZCH4, S4Z S3B4ST1ÁZ',
    location: 'San Sebastián',
    coordinates: '43°19\'13.3"N 2°00\'17.3"W',
    discoveryDate: '2026-01-01',
    equipment: 'GoPro Hero 7 Black'
  },
  {
    slug: 'planeta-lacristalliere',
    name: 'Planeta La Cristallière',
    image: '../../assets/planets/Planeta_LaCristallière.jpg',
    image360: '/pano360/PANO_LaCristallière.jpg',
    description: 'Este planetoide es una oda a la geología del frío. Su superficie está compuesta por una sucesión de aristas de granito oscuro que contrastan violentamente con extensos mantos de nieve virgen. La luz estelar incide sobre las laderas con una intensidad tal que la nieve adquiere un brillo mineral, casi vítreo, justificando el nombre de este sector galáctico. No existen rastros de asentamientos biológicos; la atmósfera parece ser demasiado rala para sostener vida compleja, dejando el protagonismo a una orografía de crestas afiladas y circos glaciares en formación. Es un mundo que parece suspendido en un estado de congelación eterna, donde el único cambio visible es el avance lento de las sombras sobre sus abismos de roca desnuda. La pureza de su composición sugiere un origen en las regiones más gélidas de la nebulosa original.',
    nombreCientifico: 'L4 CR1ST4LL13R3',
    location: 'Urdos, Francia',
    coordinates: '42°51\'16.3"N 0°34\'32.6"W',
    discoveryDate: '2021-09-12',
    equipment: 'DJI Mini 3 Pro'
  },
  {
    slug: 'planeta-maladeta-oriental',
    name: 'Planeta Maladeta Oriental',
    image: '../../assets/planets/Planeta_Maladeta-Oriental.jpg',
    image360: '/pano360/PANO_Maladeta-Oriental.jpg',
    description: 'Este pequeño planeta es una exhibición de fuerza geológica pura. Su superficie está dominada por una inmensa mole de granito que se eleva hacia el cenit, formando una pirámide natural de aristas vivas y paredes de una verticalidad desafiante. Se trata de un mundo de orogenia masiva, donde la corteza parece haber sido empujada por presiones internas colosales hasta romper la atmósfera rala. La nieve se aferra únicamente a las fisuras y pequeños nichos de su cara norte, mientras que el resto del astro muestra una textura mineral desnuda, pulida por milenios de vientos estelares. No hay rastros de actividad orgánica ni artificial; es un monolito planetario que sirve como punto de referencia en la navegación de este sector. La luz se quiebra en sus mil facetas pétreas, otorgándole un brillo plateado que lo hace visible desde grandes distancias, como un faro silencioso de roca y hielo.',
    nombreCientifico: 'M4L4D3T4 0R13ZT4L',
    location: 'Benasque',
    coordinates: '42°38\'47.3"N 0°38\'25.9"E',
    discoveryDate: '2022-04-30',
    equipment: 'GoPro Hero 7 Black'
  },
  {
    slug: 'planeta-mallos-de-riglos',
    name: 'Planeta Mallos de Riglos',
    image: '../../assets/planets/Planeta_MallosDeRiglos.jpg',
    imageFull: '/planets-full/Planeta_MallosDeRiglos.jpg',
    image360: '/pano360/PANO-DRONE_MallosDeRiglos.jpg',
    description: 'Los observatorios del sistema han enviado recientemente un satélite de exploración a este célebre planeta, y su misión ha revelado datos tan extraordinarios que han sacudido a toda la cartografía galáctica. Gracias a imágenes de una calidad jamás alcanzada, se ha descubierto la verdadera magnitud de sus colosales formaciones rocosas: agujas titánicas de piedra roja que se alzan hacia el cielo como los restos petrificados de antiguos dioses. A los pies de estas moles imposibles, los sensores han detectado inequívocas señales de una civilización ancestral alienígena, dispersas entre relieves y construcciones que parecían simples sombras hasta ahora. La imagen más valiosa de la expedición fue obtenida en el instante sublime en que la estrella del planeta se ocultaba en el horizonte, envolviendo los mallos en un resplandor dorado y crepuscular que confirmó que este mundo no solo es monumental, sino también legendario.',
    nombreCientifico: 'M4II05-D3-R16I05',
    location: 'Riglos, Huesca.',
    coordinates: '42°20\'15.5"N 0°42\'18.3"W',
    discoveryDate: '2026-04-07',
    equipment: 'DJI Mini 5 Pro'
  },
  {
    slug: 'planeta-peine-del-viento-san-sebastian',
    name: 'Planeta Peine del Viento, San Sebastián',
    image: '/planets/Planeta_Peine-del-Viento---San-Sebastián.jpg',
    description: 'Este pequeño cuerpo celeste es un testimonio de la resistencia frente al caos. Su superficie está compuesta por estratos de roca sedimentaria que emergen del océano en ángulos imposibles, formando un espigón natural que desafía el embate constante de una hidrosfera brava. Lo más fascinante de este astro es la presencia de estructuras ferrosas ancladas directamente en la piedra viva. Estos artefactos, de apariencia orgánica pero origen artificial, parecen haber sido diseñados para \'peinar\' las corrientes de aire y agua, extrayendo una energía invisible o quizás actuando como receptores de señales cósmicas. La civilización que habitó este lugar no construyó refugios, sino que dejó su huella en forma de esculturas tectónicas que vibran con cada golpe de mar. Es un planeta de una belleza severa, donde el sonido del viento silbando entre el metal y el rugido del agua forman la única banda sonora de su existencia.',
    nombreCientifico: 'P31Z3 D3L V13ZT0, S4Z S3B4ST1ÁZ',
    location: 'San Sebastián',
    coordinates: '43°19\'13.3"N 2°00\'17.3"W',
    discoveryDate: '2026-01-01',
    equipment: 'GoPro Hero 7 Black'
  },
  {
    slug: 'planeta-pena-medio',
    name: 'Planeta Peña Medio',
    image: '../../assets/planets/Planeta_Peña-Medio.jpg',
    description: 'Este pequeño cuerpo celeste es un ejemplo de aislamiento geológico extremo. Su superficie está dominada por una imponente formación caliza que se proyecta verticalmente, actuando como un pilar natural que atraviesa la densa capa de nubes del hemisferio inferior. La geología de este astro es rugosa y fracturada, con una cresta somital que ofrece una visión panorámica del vacío circundante. La vegetación es mínima, reducida a líquenes y pequeñas plantas de roca que sobreviven a la exposición constante de la radiación estelar y los vientos de altura. No se detectan huellas de civilización permanente, lo que sugiere que es un punto de observación soberbio o un refugio natural para especies migratorias que buscan las cumbres más puras del sistema. La atmósfera superior es extremadamente límpida, lo que permite que la roca brille con un tono gris plateado bajo la luz directa de su estrella.',
    nombreCientifico: 'P3Ñ4 M3D1 0',
    location: '',
    coordinates: '',
    discoveryDate: '',
    equipment: ''
  },
    // ...existing code...
    // El objeto del planeta Aspe se mueve al final del array para evitar problemas de duplicidad de slugs
    {
      slug: 'planeta-aspe',
      name: 'Planeta Aspe',
      image: '../../assets/planets/Planeta_Aspe.jpg',
      image360: '/pano360/PANO_Aspe.jpg',
      description: 'En las cumbres indómitas de Aspe, donde las montañas se alzan como colosos de hielo bajo un cielo cristalino, la vida desafía lo imposible. Entre ventiscas eternas y valles esculpidos por el frío, los exploradores han logrado captar, por primera vez, un ejemplar de la esquiva Myrium Pomensis en su hábitat natural: una criatura legendaria que se oculta entre los riscos y glaciares. El clima extremo mantiene el agua en perpetuo estado sólido, envolviendo el paisaje en un manto blanco y azul. La atmósfera, pura y limpia, permite que la luz de las estrellas bañe el planeta con un fulgor sobrenatural, haciendo de Aspe un mundo tan bello como implacable, donde solo los más audaces se atreven a soñar.',
      nombreCientifico: '45P3',
      location: 'Aspe',
      coordinates: "42°45'49.9\"N 0°33'57.2\"W",
      discoveryDate: '24 marzo 2026',
      equipment: 'DJI Osmo Action 5 Pro'
    },
  {
    slug: 'planeta-penanevera',
    name: 'Planeta Peña Nevera',
    image: '../../assets/planets/Planeta_PeñaNevera.jpg',
    image360: '/pano360/PANO-DRONE_PeñaNevera.jpg',
    description: 'Este planetoide se distingue por una fisionomía sedimentaria muy marcada. Su superficie no es una masa uniforme, sino un complejo sistema de terrazas y escarpes donde los tonos ocres y rojizos de la tierra se entrelazan con el gris ceniza de la roca madre. La característica más notable de este mundo es su dualidad biológica: mientras que una vertiente aparece castigada por la erosión y el sol, mostrando una desnudez mineral casi absoluta, la otra cara alberga pequeñas cuencas de vegetación persistente que aprovechan la sombra de los grandes bloques erráticos. No se detectan estructuras artificiales, pero la disposición de sus crestas sugiere un mundo en constante reajuste tectónico, donde el hielo estacional (que da nombre al sector) actúa como el principal arquitecto, fracturando la piedra y creando refugios naturales en sus fisuras más profundas.',
    nombreCientifico: 'P3Ñ4 Z3V3R4',
    location: 'Villanúa',
    coordinates: '42°42\'30.3"N 0°27\'03.6"W',
    discoveryDate: '2025-09-27',
    equipment: 'DJI Mini 5 Pro'
  },
    {
    slug: 'planeta-piedra-cobertera',
    name: 'Planeta Piedra Cobertera',
    image: '../../assets/planets/Planeta_Piedra-Cobertera.jpg',
    image360: '/pano360/PANO_Piedra-Cobertera.jpg',
    description: 'Este planetoide es un desafío a las leyes de la estática. Su característica más fascinante es una gigantesca losa de roca que descansa en un equilibrio casi imposible sobre un pedestal natural, como si una mano gigante la hubiera colocado allí para proteger el núcleo del astro. La geología de este mundo es de una austeridad absoluta: una extensión de roca caliza grisácea, fracturada por el tiempo y la erosión, donde apenas unas briznas de vegetación amarillenta logran sobrevivir. No hay señales de hidrosfera ni de atmósfera densa; es un entorno de pureza mineral donde el silencio espacial se siente pesado. La estructura que da nombre al planeta actúa como un refugio natural contra la radiación estelar, creando una zona de sombra perpetua que es el único rincón habitable de esta solitaria roca errante.',
    nombreCientifico: 'P13DR4 C0B3RT3R4',
    location: 'Mirador de los Buitres, Riglos.',
    coordinates: '42°20\'15.5"N 0°42\'18.3"W',
    discoveryDate: '2020-01-02',
    equipment: 'GoPro Hero 7 Black'
  },
  {
    slug: 'planeta-pico-de-la-garganta',
    name: 'Planeta Pico de la Garganta',
    image: '../../assets/planets/Planeta_Pico-de-la-Garganta.jpg',
    imageFull: '/planets-full/Planeta_Pico-de-la-Garganta.jpg',
    image360: '/pano360/PANO-DRONE_Pico-de-la-Garganta.jpg',
    description: 'Cuando nuestra nave de exploración inició la maniobra de aproximación hacia este nuevo asteroide inexplorado, todo hacía pensar que nos hallábamos ante otro mundo silencioso de roca, hielo y vacío. Sin embargo, al descender sobre su superficie, los sensores revelaron una sorpresa extraordinaria: en este remoto rincón del sistema existe vida inteligente. Han sido localizadas al menos tres formas de vida basadas en el carbono, reunidas en un pequeño oasis de vegetación escasa que resiste, casi milagrosamente, en medio de un inmenso desierto de agua en estado sólido. Lo más inquietante y fascinante del descubrimiento es que una de esas criaturas parece habernos detectado; desde la distancia, alza sus extremidades y ensaya algún tipo de comunicación primitiva, como si intentara responder al saludo de los viajeros estelares. Pico de la Garganta queda así registrado como un enclave legendario: un mundo helado y desolado en apariencia, pero portador del milagro imposible de la conciencia.',
    nombreCientifico: 'P1C0-D3-I4-64R64ZT4',
    location: 'Pico de la Garganta',
    coordinates: '42°46\'33.9"N 0°25\'36.5"W',
    discoveryDate: '2026-04-08',
    equipment: 'DJI Mini 5 Pro'
  },
  {
    slug: 'planeta-pelopin',
    name: 'Planeta Pelopín',
    image: '../../assets/planets/Planeta_Pelopin.jpg',
    image360: '/pano360/PANO_Pelopin.jpg',
    description: 'Esta misma mañana, los vigías del sistema han reportado un hallazgo imposible sobre el asteroide P3L0P1N: una fatbike reposando en la cresta helada como si fuera una reliquia sagrada dejada por antiguos viajeros de las cumbres. Su sola presencia constituye la primera prueba de vida inteligente... ¿o, al menos, de una civilización lo bastante sabia como para dominar el noble arte de construir máquinas de hacer felicidad? La superficie de este mundo es abrupta, salvaje y muy accidentada, surcada por lomas quebradas, barrancos y abundantes reservas de agua en estado sólido que relucen como cristales bajo la luz del alba. Su atmósfera, ligeramente contaminada por gases de composición aún desconocida, añade a Pelopín un velo de misterio que lo convierte en uno de los enclaves más fascinantes y legendarios del sistema.',
    nombreCientifico: 'P3L0P1Z',
    location: 'Pico Pelopín',
    coordinates: '42°35\'49.7"N 0°11\'22.9"W',
    discoveryDate: '2026-02-24',
    equipment: 'DJI Mini 5 Pro'
  },
  {
    slug: 'planeta-pineta-120m',
    name: 'Planeta Pineta 120 m',
    image: '../../assets/planets/Planeta_Pineta120m.jpg',
    image360: '/pano360/PANO-DRONE_Pineta.jpg',
    description: 'Este planetoide destaca por una geometría en forma de \'U\' perfecta, una cicatriz glacial de proporciones épicas que divide el astro en dos hemisferios de roca vertical. La observación a 120 metros de altura permite apreciar un fondo de valle tapizado por un manto de praderas alpinas y bosques de coníferas que parecen diminutos musgos frente a las paredes de caliza que los custodian. La geología aquí es una exhibición de estratificación masiva. Las nubes se quedan atrapadas en la cuenca inferior, creando un mar de vapor que choca contra el circo de cumbres nevadas del fondo. No se detectan núcleos urbanos, solo una estrecha arteria de tránsito que serpentea por el fondo del valle, sugiriendo que este mundo es un santuario natural protegido por su propia magnitud. La atmósfera es densa y rica en oxígeno en las zonas bajas, mientras que en las crestas superiores el aire se vuelve tan fino y frío que solo el granito puro puede resistir la exposición al vacío.',
    nombreCientifico: 'P1T3T4 12 0 M',
    location: '',
    coordinates: '',
    discoveryDate: '',
    equipment: ''
  },
  {
    slug: 'planeta-pineta-500m',
    name: 'Planeta Pineta 500 m',
    image: '../../assets/planets/Planeta_Pineta500m.jpg',
    image360: '/pano360/PANO-DRONE_Pineta.jpg',
    description: 'A esta altitud, el planetoide revela su verdadera naturaleza como un anfiteatro colosal de roca. La perspectiva de 500 metros permite apreciar la curvatura perfecta del valle, donde las paredes de caliza grisácea se elevan como murallas infranqueables que protegen un núcleo de biodiversidad confinada. La geología en este nivel muestra una estratificación horizontal casi perfecta, con franjas de sedimentos que narran eras de compresión tectónica. En el fondo del abismo, el curso de un río de deshielo aparece como una fina vena de plata que serpentea entre densos bosques de hayas y abetos, los cuales, desde esta distancia, parecen una alfombra de musgo esmeralda. La atmósfera superior es gélida y volátil, con jirones de nubes que se aferran a las crestas como si intentaran no caer al vacío del valle. No hay rastro de tecnología, solo la majestuosidad del relieve en su estado más puro y sobrecogedor.',
    nombreCientifico: 'P1T3T4 5 00 M',
    location: '',
    coordinates: '',
    discoveryDate: '',
    equipment: ''
  },
  {
    slug: 'planeta-punta-cochaldo',
    name: 'Planeta Punta Cochaldo',
    image: '../../assets/planets/Planeta_Punta-Cochaldo.jpg',
    image360: '/pano360/PANO-DRONE_PuntaCochaldo.jpg',
    description: 'Este pequeño planeta destaca por su geometría piramidal, una formación de roca caliza que se proyecta hacia el espacio con una precisión casi arquitectónica. Su superficie está dominada por una cresta vertebral que divide el astro en dos vertientes de inclinación vertiginosa. La geología aquí es de una textura fragmentada y grisácea, con canchales de piedra suelta que se deslizan por las laderas como ríos minerales detenidos en el tiempo. La atmósfera es extremadamente tenue, permitiendo que la luz estelar perfile cada arista y cada fisura de la piedra con una claridad quirúrgica. No se detectan formas de vida ni hidrosfera líquida, solo pequeños depósitos de nieve cristalizada en las umbrías, lo que refuerza su imagen de atalaya solitaria y eterna en los confines del sistema.',
    nombreCientifico: 'PUZT4 C0CH4LD0',
    location: '',
    coordinates: '',
    discoveryDate: '',
    equipment: ''
  },
  {
    slug: 'planeta-puntadelacuta',
    name: 'Planeta Punta de la Cuta',
    image: '../../assets/planets/Planeta_PuntadelaCuta.jpg',
    image360: '/pano360/PANO_PuntadelaCuta.jpg',
    description: 'Este pequeño planeta se caracteriza por su geografía de contraste radical. Mientras que su superficie superior presenta una loma de vegetación resistente y pastos alpinos, su perímetro se rompe abruptamente en precipicios de una verticalidad absoluta. Es un mundo de \'borde\', donde la estabilidad de la meseta superior se encuentra cara a cara con el abismo. La geología aquí revela una estratificación sedimentaria muy clara en las paredes del acantilado, mostrando la historia geológica del astro en capas de roca caliza. La atmósfera en este punto es vibrante; desde su cumbre se pueden observar las corrientes de nubes fluyendo por los valles inferiores como ríos de vapor. No se detectan asentamientos, lo que sugiere que este planeta es utilizado principalmente como un punto de vigilancia estratégica o un nodo de observación meteorológica debido a su posición dominante sobre el resto de los cuerpos celestes circundantes.',
    nombreCientifico: 'PUZT4 D3 L4 CUT4',
    location: '',
    coordinates: '',
    discoveryDate: '',
    equipment: ''
  },
  {
    slug: 'planeta-puntarbenuso',
    name: 'Planeta Punta Arbenuso',
    image: '../../assets/planets/Planeta_PuntArbenuso.jpg',
    image360: '/pano360/PANO_PuntArbenuso.jpg',
    description: 'Este pequeño planeta se distingue por una geografía de aristas suaves pero persistentes. Su superficie está cubierta por un manto de nieve que suaviza los contornos de la roca madre, creando una textura visual que recuerda al terciopelo blanco sobre un núcleo de granito oscuro. La geología aquí es de transición: amplias laderas de nieve acumulada que desembocan en espolones rocosos donde el viento estelar ha barrido cualquier rastro de humedad. La atmósfera es gélida y extremadamente pura, permitiendo una visibilidad perfecta de las cordilleras vecinas que orbitan en el mismo sector. No se detectan huellas de actividad biológica, solo la soledad majestuosa de una cumbre que parece diseñada para observar el tránsito de los cometas. Es un mundo de silencio absoluto, donde la luz se refleja con tal intensidad en las laderas nevadas que el planeta brilla con luz propia en la oscuridad del vacío.',
    nombreCientifico: 'PUZT4 4RB3ZUS0',
    location: '',
    coordinates: '',
    discoveryDate: '',
    equipment: ''
  },
  {
    slug: 'planeta-riglos',
    name: 'Planeta Riglos',
    image: '../../assets/planets/Planeta_Riglos.jpg',
    image360: '/pano360/PANO-DRONE_Riglos.jpg',
    description: 'Este pequeño planeta es una exhibición de monolitos sedimentarios sin parangón. Su superficie está dominada por gigantescas torres de conglomerado rojizo, cuyas paredes caen en vertical formando cilindros de roca que parecen sostener el firmamento. La textura de estas formaciones es rugosa, compuesta por guijarros cementados durante eones de presión planetaria. La vida en este astro se concentra en la base de estas murallas naturales, donde un pequeño asentamiento de casas blancas se agrupa buscando la protección de los gigantes de piedra. La atmósfera es cálida y luminosa, lo que resalta el color bermellón de la roca frente al azul profundo del espacio circundante. Es un mundo de una verticalidad absoluta, donde la civilización local ha aprendido a vivir a la sombra de estas estructuras colosales que parecen dedos brotando del núcleo mismo del planeta.',
    nombreCientifico: 'R1GL0S',
    location: '',
    coordinates: '',
    discoveryDate: '',
    equipment: ''
  },
  {
    slug: 'planeta-tierz-niebla',
    name: 'Planeta Tierz Niebla',
    image: '../../assets/planets/Planeta_Tierz_niebla.jpg',
    description: 'Este pequeño planeta presenta un fenómeno meteorológico permanente de inversión térmica extrema. Su superficie no es visible en su totalidad; en su lugar, emerge un conjunto de lomas y relieves suaves de tierras arcillosas que actúan como islas en un mar de nubes densas y blancas. La geología aquí es de formas redondeadas y erosión suave, con tonos ocres y marrones que delatan una composición de sedimentos fértiles. La atmósfera inferior es un manto impenetrable de niebla que oculta los valles, mientras que la atmósfera superior es de una claridad absoluta, permitiendo que la luz estelar bañe las cimas con una calidez dorada. No se detectan grandes infraestructuras, salvo pequeños senderos que recorren las crestas, sugiriendo un mundo de tránsito silencioso donde la civilización vive por encima de las nubes, en un estado de aislamiento contemplativo y paz profunda.',
    nombreCientifico: 'T13RZ Z13B4',
    location: '',
    coordinates: '',
    discoveryDate: '',
    equipment: ''
  },
  {
    slug: 'planeta-tierz-nieve',
    name: 'Planeta Tierz Nieve',
    image: '../../assets/planets/Planeta_Tierz_nieve.jpg',
    description: 'En este estado orbital, el planetoide ha sido cubierto por una capa de nieve inmaculada que unifica su relieve. La geografía de suaves lomas arcillosas que veíamos anteriormente ha quedado suavizada bajo un manto blanco, convirtiendo el terreno en una sucesión de ondas níveas que reflejan la luz estelar con una pureza cegadora. La geología de este mundo se intuye a través de las crestas y las pequeñas depresiones donde la nieve no ha logrado ocultar del todo los tonos ocres de la tierra. La atmósfera, a diferencia del sector de niebla, es aquí de una transparencia absoluta, permitiendo ver el horizonte infinito donde la curvatura del planeta se funde con el azul profundo del espacio. No hay rastro de vida activa ni de estructuras artificiales visibles; es un mundo de silencio mineral y frío estático, donde el tiempo parece haberse detenido bajo el peso del invierno planetario.',
    nombreCientifico: 'T13RZ Z13V3',
    location: '',
    coordinates: '',
    discoveryDate: '',
    equipment: ''
  },
    {
    slug: 'planeta-toronzue',
    name: 'Planeta Toronzue',
    image: '../../assets/planets/Planeta_Toronzue.jpg',
    description: 'Este pequeño planeta destaca por su geografía cóncava y majestuosa. Su superficie está dominada por una inmensa cuenca natural, un circo glaciar cuyas paredes de roca caliza y esquisto se elevan formando un anillo protector de cumbres afiladas. La geología aquí es una lección de erosión y resistencia. Mientras que las zonas altas muestran el esqueleto desnudo del astro en tonos grises y ocres, las laderas medias están tapizadas por un manto de vegetación alpina que desciende hacia el fondo del valle. La atmósfera es extremadamente limpia, lo que permite observar cómo la luz del sistema recorta cada espolón y cada canal de nieve persistente. No se detectan centros urbanos, lo que sugiere que es un santuario de biodiversidad de altura, un mundo donde el silencio solo se rompe por el movimiento de las masas de aire que fluyen entre sus picos.',
    nombreCientifico: 'T0R0ZZU3',
    location: '',
    coordinates: '',
    discoveryDate: '',
    equipment: ''
  },
  {
    slug: 'planeta-torrazaescuer',
    name: 'Planeta Torraza Escuer',
    image: '../../assets/planets/Planeta_TorrazaEscuer.jpg',
    description: 'Este pequeño planeta se caracteriza por una geografía de lomas suaves y vegetación densa, pero su rasgo más distintivo es una estructura megalítica cuadrangular que corona su punto más alto. Esta torre de piedra, de origen antiguo, parece ser el eje gravitatorio de toda la civilización que una vez habitó este sector. La geología aquí es de tonos cálidos y texturas orgánicas; los bosques de pinos y arbustos cubren gran parte del hemisferio visible, rodeando la base de la fortaleza natural sobre la que se asienta la torre. La atmósfera es límpida y serena, permitiendo que la construcción destaque como un faro de piedra contra el horizonte. No se percibe actividad tecnológica actual, lo que sugiere que este astro es un mundo-monumento, un testimonio de la arquitectura defensiva que ha resistido el paso de los eones, manteniendo su orgullo mineral frente a la inmensidad del espacio.',
    nombreCientifico: 'T0RR4Z4 3SCU3R',
    location: '',
    coordinates: '',
    discoveryDate: '',
    equipment: ''
  },
  {
    slug: 'planeta-torre-vigilancia-saso',
    name: 'Planeta Torre Vigilancia Saso',
    image: '../../assets/planets/Planeta_TorreSasoTierz.jpg',
    image360: '/pano360/PANO-DRONE_TorreSasoTierz.jpg',
    description: 'Impresionante descubrimiento en este cercano planeta: durante siglos fue catalogado como un astro yermo, sin rastro de vida inteligente, hasta que nuestros observatorios detectaron en su hemisferio norte una nave espacial posada sobre la superficie. Su tecnología es inequívocamente extraterrestre, probablemente impulsada por velas de viento solar o por algún principio aún desconocido para la ciencia humana. La estructura, etérea y estilizada, carece de depósitos de combustible y de motores del formato que conocemos; parece más una aguja cósmica que un cohete convencional. Una larga antena, elevada como un mástil ritual, la mantendría enlazada con su base intergaláctica a través del vacío. Todo indica que los alienígenas se nos han adelantado en la conquista de este mundo. La atmósfera del planeta es feroz y tormentosa, un océano de turbulencias que azota sus relieves, y en el hemisferio sur se adivinan señales de una civilización agrícola menos desarrollada, silenciosa y ausente durante el aterrizaje de la nave en el norte, como si dos eras distintas coexistieran en un mismo horizonte estelar.',
    nombreCientifico: '70RR3 V161l4ZC14 5450',
    location: 'Saso de Tierz, Nebulosa de la H0Y4',
    coordinates: '42°07\'16.1"N 0°20\'29.8"W',
    discoveryDate: '2 mayo 2026',
    equipment: 'DJI Mini 5 Pro'
  },
  {
    slug: 'planeta-tournelon-blanc',
    name: 'Planeta Tournelon Blanc',
    image: '../../assets/planets/Planeta_Tournelon-Blanc.jpg',
    image360: '/pano360/PANO_TournelonBlanc.jpg',
    description: 'Este pequeño planeta es una exhibición de glaciología masiva. Su superficie está casi totalmente cubierta por un manto de nieve y hielo de un blanco cegador, que se adapta a las formas redondeadas de su núcleo rocoso. Es un mundo de geometría suave y orgánica, donde las aristas de piedra apenas logran asomar entre las capas acumuladas de precipitación sólida. La característica más fascinante de este astro es su luminosidad extrema. La luz estelar se refleja en el hielo con tal intensidad que el planeta parece emitir su propio brillo interno, justificando el nombre de este sector. No se detectan rastros de hidrosfera líquida ni de actividad biológica; es un desierto de cristal en estado de quietud absoluta. La atmósfera es extremadamente fina y fría, lo que mantiene las estructuras de hielo intactas frente a la erosión, convirtiendo a este mundo en una cápsula del tiempo criogénica que preserva la historia climática de la nebulosa.',
    nombreCientifico: 'T0URZ3L0Z BL4ZC',
    location: '',
    coordinates: '',
    discoveryDate: '',
    equipment: ''
  },
  {
    slug: 'planeta-tozal-de-las-comas-bike',
    name: 'Planeta Tozal de las Comas Bike',
    image: '../../assets/planets/Planeta_Tozal-de-Las-Comas-Bike.jpg',
    description: 'Este pequeño planeta se presenta como un baluarte de tierra y matorral, donde la orografía se suaviza en una loma que sirve de mirador hacia los sectores más profundos del sistema. Su superficie está dominada por una vegetación xerófila y resistente, adaptada a la exposición solar constante y a la escasez de hidrosfera superficial. La característica más relevante de este mundo es su función como nodo de observación. En su punto más alto, tenemos una prueba inequívoca de vida inteligente ¿?, un ser a bordo de lo que hemos llamado \'máquina de hacer felicidad\'. Desde esta posición, se tiene una vista privilegiada de las megaturbulencias atmosféricas (nubes) que fluyen por los valles inferiores, creando un mar blanco que choca contra las costas minerales de los planetas vecinos. Es un mundo de soledad estratégica, un punto de calma donde la atmósfera es tan pura que permite observar el tránsito de otros cuerpos celestes con una nitidez absoluta.',
    nombreCientifico: 'T0Z4L D3 L4S C0M4S B1K3',
    location: '',
    coordinates: '',
    discoveryDate: '',
    equipment: ''
  },
  {
    slug: 'planeta-tozal-de-las-comas',
    name: 'Planeta Tozal de las Comas',
    image: '../../assets/planets/Planeta_Tozal-de-Las-Comas.jpg',
    image360: '/pano360/PANO_TozalDeLasComas.jpg',
    description: 'Este pequeño planeta destaca por una orografía ondulada y fluida, diseñada casi por ingeniería natural para el tránsito rápido. Su superficie no es de roca agresiva, sino de una tierra compacta y cobriza que serpentea entre formaciones de vegetación baja y arbustiva. La característica más fascinante es la presencia de una infraestructura lineal orgánica: un sendero perfectamente definido que recorre la cresta del astro como una columna vertebral. La atmósfera es cálida y está cargada de partículas de polvo en suspensión, lo que sugiere una actividad cinemática constante. No se detectan grandes ciudades, solo la presencia de exploradores solitarios que utilizan la gravedad moderada de este mundo para alcanzar velocidades de descenso vertiginosas. Es un planeta-pista, un santuario para los amantes del movimiento que buscan el equilibrio perfecto entre la inercia y el relieve mineral.',
    nombreCientifico: 'T0Z4L D3 L4S C0M4S',
    location: '',
    coordinates: '',
    discoveryDate: '',
    equipment: ''
  },
  {
    slug: 'planeta-vadiello',
    name: 'Planeta Vadiello',
    image: '../../assets/planets/Planeta_Vadiello.jpg',
    image360: '/pano360/PANO_Vadiello.jpg',
    description: 'Este pequeño planeta destaca por una configuración hidrológica espectacular. Su núcleo está dominado por una inmensa masa de agua de un azul turquesa profundo, contenida por una barrera artificial de ingeniería masiva que regula el flujo del sistema. La geología de este astro es de una agresividad vertical fascinante. Está rodeado por mallo de conglomerado rojizo, gigantescas torres de piedra que se elevan como colmillos hacia el espacio. Estas formaciones muestran una erosión alveolar característica, con oquedades y nichos donde se refugian las especies aladas del sector. La atmósfera es fresca y húmeda en las capas bajas, cargada con el aroma de los pinos y el romero que tapizan las laderas menos expuestas. No se detectan grandes núcleos urbanos, lo que sugiere que este mundo es un punto de gestión de recursos hídricos vital para el sistema, un oasis de frescura donde el silencio solo es interrumpido por el eco del viento entre las canales de roca.',
    nombreCientifico: 'V4D13LL0',
    location: 'Vadiello, Huesca.',
    coordinates: '42°14\'28.3"N 0°17\'06.1"W',
    discoveryDate: '2021-01-24',
    equipment: 'GoPro Hero Black 7'
  },
  {
    slug: 'planeta-trollfjordvatnet',
    name: 'Planeta Trollfjordvatnet',
    image: '../../assets/planets/Planeta_Trollfjordvatnet.jpg',
    image360: '/pano360/PANO_Trollfjordvatnet.jpg',
    description: 'Planeta de aguas profundas y entorno glaciar, situado en las Islas Lofoten, Noruega. Su superficie refleja la luz polar y está rodeada de montañas abruptas que emergen directamente del fiordo. La atmósfera es fría y cristalina, ideal para observadores de auroras y exploradores de paisajes extremos.',
    nombreCientifico: 'TROLLFJ1 0RDV4TZ3T',
    location: 'Islas Lofoten (Noruega)',
    coordinates: "68°21'55.2\"N 14°51'48.3\"E",
    discoveryDate: '2024-04-02',
    equipment: 'DJI Mini 3 Pro'
  },
  {
    slug: 'planeta-valle-de-tena',
    name: 'Planeta Valle de Tena',
    image: '../../assets/planets/Planeta_Valle de Tena.jpg',
    image360: '/pano360/PANO-DRONE_Valle-de-Tena_Cucuraza.jpg',
    description: 'Este pequeño planeta destaca por ser un centro neurálgico de actividad. Su superficie no es solo roca y nieve, sino un tapiz de infraestructuras que se adaptan a una orografía de valles profundos y cumbres afiladas. Es un mundo donde la ingeniería civil ha aprendido a convivir con la escala alpina. La geología aquí es de una diversidad cromática asombrosa: desde los grises de las paredes calizas hasta el verde intenso de los bosques que rodean el gran núcleo hídrico central. La característica más notable es la presencia de un asentamiento urbano consolidado en la base del valle, cuyas luces y tejados se agrupan buscando la protección de las montañas. La atmósfera es dinámica, con nubes que se desplazan rápidamente entre los picos, sugiriendo un sistema climático muy activo. Es un planeta-refugio, un nodo de servicios y descanso para los viajeros espaciales que cruzan el sistema pirenaico.',
    nombreCientifico: 'V4LL3 D3 T3Z4',
    location: 'Inmediaciones de la Punta Cucuraza, Panticosa.',
    coordinates: '42°43\'57.5"N 0°17\'21.9"W',
    discoveryDate: '2025-11-05',
    equipment: 'DJI Mini 5 Pro'
  },
  {
    slug: 'planeta-catedral-huesca',
    name: 'Planeta Catedral de Huesca',
    image: '../../assets/planets/Planeta_Catedral-Huesca.jpg',
    image360: '/pano360/PANO_Catedral-Huesca.jpg',
    description: 'En el corazón de la galaxia, entre nebulosas doradas y corrientes de energía ancestral, surge el Planeta Catedral de Huesca. Su núcleo urbano vibra con la presencia de una civilización recién descubierta, cuyos habitantes han erigido una catedral monumental que se alza como faro intergaláctico. Las plazas abiertas son portales de encuentro entre viajeros estelares y sabios locales, y la piedra dorada de sus muros resplandece bajo la luz de dos soles. En cada rincón, la arquitectura histórica revela inscripciones y símbolos de una cultura que ha aprendido a canalizar la energía cósmica, abriendo puertas a dimensiones desconocidas. La atmósfera es serena y luminosa, pero en el aire flota el misterio de un legado milenario: la catedral es el epicentro de rituales que conectan el planeta con el resto del universo, invitando a exploradores y soñadores a descifrar los secretos de una civilización que acaba de despertar al contacto galáctico.',
    nombreCientifico: 'C4T3DR4L D3 HU3SC4',
    location: 'Plaza de la catedral, Huesca',
    coordinates: "42°08'25.4\"N 0°24'31.6\"W",
    discoveryDate: '2018-11-09',
    equipment: 'GoPro Hero 7 Black'
  },
  {
    slug: 'planeta-holmvassfjellet',
    name: 'Planeta Holmvassfjellet',
    image: '../../assets/planets/Planeta_Holmvassfjellet.jpg',
    image360: '/pano360/PANO_Holmvassfjellet.jpg',
    description: 'Continuando con el estudio sistemático de las galaxias más remotas del universo conocido, los telescopios del consorcio SQLP han vuelto a posarse sobre el lejano H0LMV455FJ3LL3T, y los datos recibidos han sacudido a toda la comunidad científica intergaláctica. Un dron de exploración silencioso, operando a gran altitud para no perturbar el entorno, capturó mediante teleobjetivo de alta precisión lo que puede ser el hallazgo biológico de la década: un ejemplar en estado salvaje de la especie Chelitas Pacus-Valoris, que se creía extinguida desde hacía varios ciclos estelares. La criatura se mostró esquiva y claramente ajena a ser observada, lo que otorga un valor excepcional a las imágenes obtenidas. En ellas se la puede contemplar inmóvil, ensimismada en sus propios pensamientos, con la mirada fija en el horizonte como si aguardara con infinita paciencia la aparición de alguna presa incauta. El hallazgo confirma de manera definitiva la existencia de vida en este mundo lejano. H0LMV455FJ3LL3T presenta en su polo sur una vasta reserva de agua en estado líquido, una orografía de una accidentada brutalidad que desafía cualquier cartografía convencional, y una atmósfera permanentemente borrascosa que envuelve el planeta en un manto de nubes densas y vientos furiosos, como si el propio astro tratara de proteger sus secretos de los ojos del universo.',
    nombreCientifico: 'H0LMV455FJ3LL3T',
    location: 'Nebulosa Lofoten, galaxia Z0RV364',
    coordinates: "69°18'03.0\"N 19°26'16.7\"E",
    discoveryDate: '2018-11-09',
    equipment: 'Panasonic Lumix GX9'
  },  
  {
    slug: 'planeta-venecia',
    name: 'Planeta Venecia',
    image: '../../assets/planets/Planeta_SanMarcoVenecia.jpg',
    image360: '/pano360/PANO_SanMarcoVenecia.jpg',
    description: `A las terminales de la factoría nos ha llegado un extraordinario reporte de un explorador intergaláctico, confirmando el hallazgo de un nuevo mundo desbordante de vida. Enclavado en los confines del cosmos, el Planeta Venecia se presenta ante nosotros como un milagro de la arquitectura y la creatividad. Una civilización increíblemente numerosa y cohesionada ha tomado las riendas de este mundo, transformando por completo la fisonomía de su superficie para adaptarla a su singular modo de existencia. 
    
    Al analizar las lecturas, los expertos se han topado con una sorprendente anomalía evolutiva. A diferencia de otras potencias de la galaxia, los habitantes de Venecia no parecen orientar sus esfuerzos hacia el desarrollo tecnológico, la cibernética o la conquista del firmamento; su evolución camina hacia cumbres más sutiles y elevadas: las vertientes artísticas. Allí, la cultura no es un mero pasatiempo, sino el motor vital que hace girar al planeta.
    
    El paisaje veneciano está salpicado por una inmensidad de monumentos colosales y estructuras de sobrecogedora belleza. Sin embargo, estas obras magnas no han sido erigidas para albergar astropuertos ni radares de exploración espacial; sus agujas y cúpulas parecen destinadas por entero al Culto Cósmico y a la veneración de sus misteriosos dioses. Venecia se erige así como un planeta museo, un bastión de fe, arte y belleza que desafía la fría lógica de la tecnología intergaláctica. `,
    nombreCientifico: '54Z-M4RC0-V3N3C14',
    location: 'Galaxia Italica',
    coordinates: "45°26'03.1\"N 12°20'18.1\"E",
    discoveryDate: '2026-05-29',
    equipment: 'Google Street View'
  },
  {
    slug: 'planeta-rapitan',
    name: 'Planeta Rapitán',
    image: '../../assets/planets/Planeta_Rapitan.jpg',
    image360: '/pano360/PANO_Rapitan.jpg',
    description: `Enclavado en la nebulosa J4C4, el Planeta Rapitán emerge del vacío cósmico como un mundo forjado en el fuego de la batalla. Recientes análisis geológicos de la factoría SQLP han confirmado lo que los sensores orbitales ya intuían: Rapitán es un planeta marcado por un pasado bélico reciente, un mundo que apenas ha comenzado a sanar.

El verdadero enigma de este mundo se halla en su hemisferio sur. Allí, en una inmensa depresión geográfica cercana al abismo legendario del Cráter 0R013L (un impacto titánico que domina el polo sur), nuestros exploradores han localizado un asentamiento permanente de seres. Pero es el monumento que domina este paisaje el que paraliza el aliento.

La Fortaleza del Recuerdo Bélico
Erigiéndose como un centinela de piedra sobre el horizonte, una edificación colosal, imponente y brutal, domina la zona. Este impresionante fuerte militar, perfectamente datado por nuestros sistemas entre los últimos 10.000 a 5.000 años estelares, se alza no como una defensa activa, sino como un austero monumento en recuerdo de las recientes contiendas bélicas que asolaron el planeta.

El Misterio de la Escala: ¿Gigantes Cósmicos?
El descubrimiento más sobrecogedor, sin embargo, ha llegado a través de una imagen capturada por la factoría SQLP. Nuestros analistas han estudiado detenidamente una toma crucial en la que aparece nuestro Rover Albertonety, enviado el año pasado a estudiar la geología local. La imagen muestra al pequeño rover tomando muestras del terreno en un claro de la depresión.

Pero junto al Rover Albertonety se halla el indicio más inquietante de vida inteligente jamás registrado: ¡UN BANCO! de dimensiones colosales. Este objeto, de escala x3 respecto a una proporción humanoide estándar, sugiere una verdad ineludible. Rapitán no está habitado por simples supervivientes; es el hogar de una raza de envergadura monstruosa, de alrededor de 5 metros de altura.

Rapitán es un enigma de piedra y guerra, un bastión de colosos que aguarda silencioso nuestro próximo paso en la exploración cósmica. `,
    nombreCientifico: 'R4P1T4Z',
    location: 'Nebulosa J4C4',
    coordinates: "42°35'18.9\"N 0°32'10.8\"W",
    discoveryDate: '2026-05-30',
    equipment: 'dji mIni 5 pro'
  },
  {
    slug: 'planeta-arguis',
    name: 'Planeta Arguis',
    image: '../../assets/planets/Planeta_Arguis.jpg',
    image360: '/pano360/PANO_Arguis.jpg',
    description: `En las fronteras de nuestros mapas estelares se alza el Planeta Arguis, un mundo que ha encendido las alarmas de la factoría SQLP tras detectarse en él claros e inequívocos signos de vida inteligente. Al descender los sensores sobre su geografía, nos encontramos ante un fascinante cuadro evolutivo: un pequeño y concentrado núcleo poblacional que parece dar sus primeros y titubeantes pasos en los albores de su desarrollo civilizatorio.

La estructura de este asentamiento responde a una jerarquía arcaica. Todo el entramado urbano gira en torno a una única y monumental construcción principal. Según los principales especialistas en xenocultura, esta majestuosa edificación funcionaría como una especie de templo sagrado para rendir culto al más allá. Estas costumbres místicas y espirituales vendrían a confirmar que los habitantes de Arguis aún no forman una sociedad de carácter interestelar, prefiriendo mirar al cielo con devoción antes que con ansias de conquista.

El Enigma de la Atmósfera
Sin embargo, el verdadero misterio de Arguis se despliega al alzar la vista. Una descomunal cantidad de siluetas voladoras pululan y surcan su atmósfera en un baile incesante. Ante este fenómeno, la comunidad científica de la factoría se debate entre dos teorías fascinantes:

La Hipótesis Orgánica: Para algunos, se trata de una rica biodiversidad de especies voladoras autóctonas, lo que confirmaría que esta joven sociedad ha sabido prosperar sin dañar el ecosistema de su planeta natal.

La Hipótesis Autómata: Una corriente más inquietante afirma que estas siluetas no son criaturas biológicas, sino enjambres de drones de vigilancia avanzados, centinelas implacables programados para mantener la ley y el orden en este extraño mundo.

¿Es Arguis un edén primitivo o un planeta bajo una silenciosa tutela tecnológica? El enigma queda suspendido en sus cielos cristalinos. `,
    nombreCientifico: '4R6V1S',
    location: 'Galaxia M0ZR3P05',
    coordinates: "42°18'52.1\"N 0°26'19.3\"W",
    discoveryDate: '2026-06-01',
    equipment: 'dji mIni 5 pro'
  },

  {
    slug: 'planeta-peña-sabocos',
    name: 'Planeta Peña Sabocos',
    image: '../../assets/planets/Planeta_Sabocos.jpg',
    image360: '/pano360/PANO_Sabocos.jpg',
    description: `El Guardián del Abismo
A su regreso de la exitosa misión en el remoto planeta Garmo Negro, la sonda espacial de la factoría SQLP interceptó de forma imprevista la órbita de este enigmático mundo. A pesar de su asombrosa cercanía a nuestro propio sistema solar, Peña Sabocos sigue siendo un territorio apenas visitado y envuelto en el misterio.

A primera vista, sus sensores detectaron una atmósfera totalmente limpia y cristalina que, según los manuales estelares, indicaría una absoluta ausencia de vida. Sin embargo, un análisis más detallado ha revelado dos anomalías que han desconcertado a nuestros analistas:

El Centinela Cósmico: Una extraña e imponente forma de vida ha sido localizada en la superficie, apostada como un guardián impasible sobre un gran bastión de roca. Los sistemas de la sonda sugieren que el ser parece intentar comunicarse con nosotros mediante un código de señales completamente desconocido.

Las Cicatrices del Pasado: En las profundidades de las colosales fallas que agrietan la corteza del planeta, los escáneres han adivinado alteraciones artificiales en el terreno; obras de ingeniería sin duda producidas por una civilización ancestral.

En general, Peña Sabocos se presenta como un mundo de orografía traumática, extremadamente accidentada y hostil en su hemisferio sur, mientras que el norte ofrece un relieve algo más suave y domesticado. Un titán de piedra que aguarda en silencio a las puertas de nuestro sistema. `,
    nombreCientifico: 'P3Ñ4 54B0C05',
    location: 'Nebulosa de Panticous',
    coordinates: "42°40'45.4\"N 0°15'06.5\"W",
    discoveryDate: '2026-06-03',
    equipment: 'dji mIni 5 pro'
  },

  {
    slug: 'planeta-pantano-de-arguis',
    name: 'Planeta Pantano de Arguis',
    image: '../../assets/planets/Planeta_Arguis-pantano.jpg',
    image360: '/pano360/PANO_Arguis-pantano.jpg',
    description: `El Oasis Fluvial
En los registros estelares de la factoría SQLP, este pequeño mundo fue catalogado originalmente como una simple luna en órbita del imponente Planeta Arguis. Sin embargo, los últimos datos recopilados por nuestras sondas de reconocimiento han obligado a los astrofísicos a mirarlo con ojos completamente nuevos, transformando este satélite en uno de los objetivos más codiciados de la exploración espacial.

El motivo de tal asombro es tan simple como revolucionario: sus cuencas brillan con una inmensa cantidad de agua líquida en superficie. Este vital elemento, que fluye libremente bajo la mirada de su planeta madre, rompe la tónica de los mundos áridos de la región y enciende en la comunidad científica las más firmes esperanzas de hallar nuevas y fascinantes formas de vida en su interior.

El Pantano de Arguis ha dejado de ser una mera sombra orbital para convertirse en el oasis del sistema; un reducto acuático cuyas profundidades aguardan el momento de revelar sus secretos biológicos a nuestros sensores. `,
    nombreCientifico: 'P4Z74Z0 D3 4R6V15',
    location: 'Galaxia M0ZR3P05',
    coordinates: "42°18'21.5\"N 0°25'50.6\"W",
    discoveryDate: '2026-06-01',
    equipment: 'dji mIni 5 pro'
  },

  {
    slug: 'planeta-quinzano',
    name: 'Planeta Quinzano',
    image: '../../assets/planets/Planeta_Quinzano.jpg',
    image360: '/pano360/PANO-DRONE_Quinzano.jpg',
    description: `Durante el viaje de regreso a la sede central de la factoría SQLP, tras concluir la gran expedición interestelar al remoto planeta M4II05-D3-R16I05, nuestra tripulación realizó una escala imprevista en este pequeño y recóndito satélite. Lo que a primera vista parecía un páramo olvidado resultó ser un crisol de vida: un reducto fronterizo donde, a duras penas, sobrevive una singular colonia compuesta por todo tipo de seres y viajeros errantes de las estrellas.

Este puesto de avanzada, bautizado formalmente como La Colonia 15, es el corazón latente que da nombre al propio Planeta Quinzano. En este rincón del cosmos, la vida no es fácil; la colonia resiste y prospera gracias al incesante intercambio comercial con los viajeros intergalácticos que cruzan la ruta, complementado con una agricultura de subsistencia muy básica que desafía las condiciones del terreno.

Geográficamente, Quinzano es un mundo de grandes contrastes:

El Hemisferio Sur: Una llanura infinita y despejada, un horizonte llano que sirve de pista de aterrizaje natural para las naves cansadas que buscan refugio.

El Hemisferio Norte: Un territorio escarpado y fuertemente montañoso, cuyas cumbres protegen la colonia de los vientos cósmicos.

Quinzano no busca la conquista del espacio, sino ser el último faro de hospitalidad para quienes navegan por el vacío. `,
    nombreCientifico: 'QV1NZ4N0',
    location: 'Nebulosa de la H0Y4',
    coordinates: "42°14'40.0\"N 0°36'34.8\"W",
    discoveryDate: '2026-06-11',
    equipment: 'dji mIni 5 pro'
  }    
];
  

export const planetData = basePlanetData.map((planet) => ({
  ...planet,
  image360: planet.image360 ?? planet.image,
  nombreCientifico: planet.nombreCientifico,
}));

