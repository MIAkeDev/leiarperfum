// Datos de productos (perfumes)
const perfumes = [
    
    {
        id: 1,
        name: "Club de nuit",
        category: "mujer",
        price: 155,
        description: "Elegante combinación de naranja, toronja (pomelo), bergamota y durazno",
        color: "#c44569",
        badge: "Más vendido",
        popularity: 98,
        details: "Club De Nuit de Armaf es una fragancia de la familia olfativa Floral Frutal para Mujeres. Las Notas de Salida son naranja, toronja (pomelo), bergamota y durazno (melocotón); las Notas de Corazón son rosa, geranio, jazmín y lichi; las Notas de Fondo son pachulí, vainilla, almizcle y vetiver.",
        image:"clubnuit.png"
    },
    {
        id: 2,
        name: "Club de Nuit Maleka",
        category: "mujer",
        price: 195,
        description: " Las Notas de Salida son lichi, bergamota y pimienta rosa",
        color: "#0c7b93",
        badge: "",
        popularity: 87,
        details: " Club De Nuit Maleka de Armaf es una fragancia de la familia olfativa Floral Frutal para Mujeres. Esta fragrancia es nueva. Club De Nuit Maleka se lanzó en 2025. La Nariz detrás de esta fragrancia es Olivier Cresp. Las Notas de Salida son lichi, bergamota y pimienta rosa; la Nota de Corazón es raíz de lirio; las Notas de Fondo son praliné, sándalo y ambroxan.",
        image:"maleka.png"
    },
    {
        id: 3,
        name: "Odyssey Candee",
        category: "mujer",
        price: 150,
        description: "Las Notas de Salida son fresa, frambuesa, geranio, durazno",
        color: "#b68973",
        badge: "Edición limitada",
        popularity: 92,
        details: "Odyssey Candee de Armaf es una fragancia de la familia olfativa para Mujeres. Esta fragrancia es nueva. Odyssey Candee se lanzó en 2024. Las Notas de Salida son fresa, frambuesa, geranio, durazno (melocotón) y bergamota; las Notas de Corazón son caramelo, jazmín y maracuyá (fruta de la pasión); las Notas de Fondo son pachulí, almizcle y ámbar.",
        image:"candee.png"
    },
    {
        id: 4,
        name: "Odyssey Marshmallow",
        category: "mujer",
        price: 183,
        description: "Las Notas de Salida son coco, manzana, limón (lima ácida), lirio de los valles (muguete) y peonía",
        color: "#2d4059",
        badge: "Edición limitada",
        popularity: 85,
        details: "Odyssey Marshmallow de Armaf es una fragancia de la familia olfativa Floral Frutal Gourmand para Hombres y Mujeres. Esta fragrancia es nueva. Odyssey Marshmallow se lanzó en 2025. Las Notas de Salida son coco, manzana, limón (lima ácida), lirio de los valles (muguete) y peonía; las Notas de Corazón son malvavisco (bombón), fresa, chabacano, durazno (melocotón), frambuesa y flor de azahar del naranjo; las Notas de Fondo son Queso mascarpone, praliné, vainilla, almizcle, haba tonka y ámbar.",
        image:"mashmallow.png"
    },
    {
        id: 5,
        name: "Odyssey black forest desert",
        category: "mujer",
        price: 190,
        description: " Las Notas de Salida son caramelo, cereza, canela, Lactonas y flores blancas; las Notas de Corazón son dátiles, miel y nuez moscada",
        color: "#e6b87d",
        badge: "Edición limitada",
        popularity: 90,
        details: "Odyssey Black Forest de Armaf es una fragancia de la familia olfativa Oriental Vainilla para Hombres y Mujeres. Esta fragrancia es nueva. Odyssey Black Forest se lanzó en 2025. Las Notas de Salida son caramelo, cereza, canela, Lactonas y flores blancas; las Notas de Corazón son dátiles, miel y nuez moscada; las Notas de Fondo son praliné, vainilla, haba tonka, almizcle y notas amaderadas.",
        image:"black.png"
    },
    {
        id: 6,
        name: "CDN Private key to my love",
        category: "mujer",
        price: 276,
        description: "Las Notas de Salida son durazno (melocotón), pera, casis (grosellero negro) y maracuyá (fruta de la pasión)",
        color: "#ffffffff",
        badge: "Nuevo",
        popularity: 88,
        details: "Private Key To My Love de Armaf es una fragancia de la familia olfativa para Hombres y Mujeres. Private Key To My Love se lanzó en 2023. La Nariz detrás de esta fragrancia es Ali Asgar Fakhruddin. Las Notas de Salida son durazno (melocotón), pera, casis (grosellero negro) y maracuyá (fruta de la pasión); las Notas de Corazón son lirio de los valles (muguete), madera blanca y Amberwood; las Notas de Fondo son almizcle, sándalo, pachulí y vainilla.",
        image:"cdn.png"
    },
    {
        id: 7,
        name: "Hawas Women",
        category: "mujer",
        price: 172,
        description: "Las Notas de Salida son granada, manzana y toronja (pomelo)",
        color: "#6a2c70",
        badge: "Nuevo",
        popularity: 96,
        details: "Hawas for Her de Rasasi es una fragancia de la familia olfativa Floral para Mujeres. Hawas for Her se lanzó en 2015. Las Notas de Salida son granada, manzana y toronja (pomelo); las Notas de Corazón son iris, jazmín sambac (sampaguita) y cítricos; las Notas de Fondo son praliné, pachulí y vetiver.",
        image:"hawas.png"
    },
    {
        id: 8,
        name: "Hawas Eclat",
        category: "mujer",
        price: 205,
        description: "Las Notas de Salida son lichi, pera, bergamota y pistacho",
        color: "#ffffffff",
        badge: "Nuevo",
        popularity: 96,
        details: "Hawas For Her Éclat de Rasasi es una fragancia de la familia olfativa Oriental Floral para Mujeres. Esta fragrancia es nueva. Hawas For Her Éclat se lanzó en 2025. La Nariz detrás de esta fragrancia es Amandine Galliano. Las Notas de Salida son lichi, pera, bergamota y pistacho (pistache); las Notas de Corazón son rosa y incienso; las Notas de Fondo son vainilla, almizcle, ámbar y notas amaderadas.",
        image:"eclat.png"
    },
    {
        id: 9,
        name: "Hawas Diva",
        category: "mujer",
        price: 220,
        description: "Las Notas de Salida son Frutas rojas, lichi y ruibarbo",
        color: "#ffffffff",
        badge: "Nuevo",
        popularity: 96,
        details: "Hawas Diva de Rasasi es una fragancia de la familia olfativa Oriental Floral para Mujeres. Esta fragrancia es nueva. Hawas Diva se lanzó en 2025. Las Notas de Salida son Frutas rojas, lichi y ruibarbo; las Notas de Corazón son rosa, Incienso y cedro; las Notas de Fondo son vainilla, almizcle y ámbar gris.",
        image:"diva.png"
    },
    {
        id: 10,
        name: "Teriaq",
        category: "mujer",
        price: 170,
        description: "Las Notas de Salida son caramelo, almendra amarga, chabacano y pimienta rosa;",
        color: "#ffffffff",
        badge: "Nuevo",
        popularity: 96,
        details: "Teriaq de Lattafa Perfumes es una fragancia de la familia olfativa para Hombres y Mujeres. Esta fragrancia es nueva. Teriaq se lanzó en 2024. La Nariz detrás de esta fragrancia es Quentin Bisch. Las Notas de Salida son caramelo, almendra amarga, chabacano y pimienta rosa; las Notas de Corazón son miel, ruibarbo, flores blancas y rosa; las Notas de Fondo son cuero, vainilla, almizcle, ládano y vetiver.",
        image:"teriaq.png"
    },
    {
        id: 11,
        name: "Game of Spades Queen Jo Milano Paris",
        category: "mujer",
        price: 280,
        description: "Las Notas de Salida son naranja tangerina y fresia; las Notas de Corazón son jazmín sambac (sampaguita), rosa y azucena",
        color: "#ffffffff",
        badge: "Nuevo",
        popularity: 96,
        details: "Game of Spades Queen de Jo Milano Paris es una fragancia de la familia olfativa Almizcle Floral Amaderado para Mujeres. Esta fragrancia es nueva. Game of Spades Queen se lanzó en 2025. Las Notas de Salida son naranja tangerina y fresia; las Notas de Corazón son jazmín sambac (sampaguita), rosa y azucena; las Notas de Fondo son almizcle, sándalo y ámbar.",
        image:"game.png"
    },
    {
        id: 12,
        name: "Game of Spades Opal",
        category: "mujer",
        price: 280,
        description: " Las Notas de Salida son bergamota, limón (lima ácida), frambuesa y pera;",
        color: "#ffffffff",
        badge: "Nuevo",
        popularity: 96,
        details: "Game of Spades Opal de Jo Milano Paris es una fragancia de la familia olfativa Floral Frutal para Hombres y Mujeres. Game of Spades Opal se lanzó durante la 2020's. Las Notas de Salida son bergamota, limón (lima ácida), frambuesa y pera; las Notas de Corazón son notas verdes, especias, jazmín, peonía y rosa; las Notas de Fondo son sándalo, cedro, ámbar y almizcle.",
        image:"opal.png"
    },
    {
        id: 13,
        name: "Rome Paradox",
        category: "mujer",
        price: 189,
        description: "El fondo de la fragancia te envuelve en un abrazo cálido y sensual de vainilla cremosa, almizcle y maderas suaves",
        color: "#ffffffff",
        badge: "Nuevo",
        popularity: 96,
        details: "Rome Paradox de Bharara mast perfume es una fragancia que encarna la dualidad de la mujer moderna: una mezcla de energía chispeante y gracia inmaculada. Como un paseo por las antiguas calles de Roma, donde la historia y la modernidad se encuentran, este perfume floral, frutal y gourmand es una celebración de la feminidad en su máxima expresión.",
        image:"paradox.png"
    },
    {
        id: 14,
        name: "Rome Yum Yum",
        category: "mujer",
        price: 189,
        description: "El perfume se asienta en una base deliciosa y cálida, con notas de vainilla cremosa, caramelo y maderas cálidas",
        color: "#ffffffff",
        badge: "Nuevo",
        popularity: 96,
        details: "Rome Yum Yum de Bharara es una fragancia para la mujer que irradia alegría y confianza. Este perfume es una celebración de lo lúdico y lo irresistible, una mezcla vibrante y seductora que te hará sentir radiante.",
        image:"yum.png"
    },
    {
        id: 15,
        name: "Rome Extradose",
        category: "mujer",
        price: 189,
        description: "El fondo se asienta con la riqueza profunda de las Notas Amaderadas, dejando una estela seductora, cálida e inolvidable.",
        color: "#ffffffff",
        badge: "Nuevo",
        popularity: 96,
        details: "Rome Extradose de Mast Perfume Bharara es más que una fragancia; es una armadura de sofisticación y un destello de carisma. Diseñada para la mujer que domina cualquier escenario con absoluta confianza, esta es una fragancia fougère ambarada potente y elegante.",
        image:"extradose.png"
    },
    {
        id: 16,
        name: "Yara Tous",
        category: "mujer",
        price: 140,
        description: " Las Notas de Salida son mango, coco y maracuyá",
        color: "#ffffffff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Yara Tous de Lattafa Perfumes es una fragancia de la familia olfativa para Mujeres. Yara Tous se lanzó en 2023. Las Notas de Salida son mango, coco y maracuyá (fruta de la pasión); las Notas de Corazón son jazmín, flor de azahar del naranjo y heliotropo; las Notas de Fondo son vainilla, almizcle y cachemira.",
        image:"tous.png"
    },
    {
        id: 17,
        name: "Yara Moi",
        category: "mujer",
        price: 140,
        description: " Las Notas de Salida son jazmín y durazno",
        color: "#ffffffff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Yara Moi de Lattafa Perfumes es una fragancia de la familia olfativa para Mujeres. Yara Moi se lanzó en 2022. Las Notas de Salida son jazmín y durazno (melocotón); las Notas de Corazón son caramelo y ámbar; las Notas de Fondo son pachulí y sándalo.",
        image:"moi.png"
    },
    {
        id: 18,
        name: "Yara Lattafa",
        category: "mujer",
        price: 140,
        description: "Las Notas de Salida son orquídea, heliotropo y naranja tangerina",
        color: "#ffffffff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Yara de Lattafa Perfumes es una fragancia de la familia olfativa Oriental Vainilla para Mujeres. Yara se lanzó en 2020. Las Notas de Salida son orquídea, heliotropo y naranja tangerina; las Notas de Corazón son Acorde goloso y frutas tropicales; las Notas de Fondo son vainilla, almizcle y sándalo.",
        image:"yara.png"
    },
    {
        id: 19,
        name: "Yara candy",
        category: "mujer",
        price: 140,
        description: " Las Notas de Salida son grosellas negras y Mandarina verde",
        color: "#ffffffff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Yara Candy de Lattafa Perfumes es una fragancia de la familia olfativa Floral Frutal Gourmand para Mujeres. Esta fragrancia es nueva. Yara Candy se lanzó en 2024. Las Notas de Salida son grosellas negras y Mandarina verde; las Notas de Corazón son Caramelo de fresa efervescente y gardenia; las Notas de Fondo son vainilla, almizcle, ámbar y sándalo.",
        image:"candy.png"
    },
    {
        id: 20,
        name: "Haya",
        category: "mujer",
        price: 155,
        description: " En las notas de salida podemos encontrar acordes frescos y dulces que luego se fusionan con las notas de corazón florales",
        color: "#ffffffff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Lattafa Haya es una fragancia femenina que crea una verdadera atmósfera de lujo. Este aroma es una combinación única de dulzura y frescura, que revela los principales acordes florales de la fragancia.",
        image:"haya.png"
    },
    {
        id: 21,
        name: "Eclaire",
        category: "mujer",
        price: 150,
        description: "Un perfume sofisticado que tienta los sentidos con una deliciosa mezcla de caramelo, leche y azúcar en la salida",
        color: "#ffffffff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Descubra el encanto de Eclaire, un perfume sofisticado que tienta los sentidos con una deliciosa mezcla de caramelo, leche y azúcar en la salida, envuelto por el delicado aroma de flores blancas y miel en su corazón. La experiencia se profundiza con una base cálida de vainilla, praliné y almizcle, lo que convierte a Eclaire en una opción irresistible para quienes aprecian un toque de dulzura en su aroma característico.",
        image:"eclaire.png"
    },
    {
        id: 22,
        name: "Nebras",
        category: "mujer",
        price: 175,
        description: "Fragancia gourmand oriental con notas de vainilla",
        color: "#ffffffff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Olvídate de las fronteras, las reglas y los límites. El eau de parfum Lattafa Pride Nebras, que puedes compartir con tu pareja, te hace destacar entre los demás. Déjate cautivar por la dulce fragancia de la cálida vainilla o el delicioso cacao, tiernamente acompañada por unas sensuales notas de rosa.",
        image:"nebras.png"
    },
    {
        id: 23,
        name: "Victoria For Everyone",
        category: "mujer",
        price: 185,
        description: "En el fondo, la suavidad envolvente de la vainilla cierra la experiencia con calidez y sensualidad.",
        color: "#ffffffff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Victoria de Lattafa Perfumes es una fragancia encantadora y deliciosa que combina dulzura, frescura y elegancia en una composición irresistible. Esta creación unisex, lanzada en 2025, pertenece a la familia Floral Frutal Gourmand y está diseñada para quienes aman los aromas alegres y con personalidad.",
        image:"victoria.png"
    },
    
    {
        id: 24,
        name: "Odyssey aoud",
        category: "hombre",
        price: 150,
        description: "El corazón de este perfume es una mezcla cálida de oud con notas de pachuli, almizcle y ambroxan. ",
        color: "#ffffffff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Armaf Odysey Aoud ofrece un aroma cautivador con notas de salida a lavanda, azafrán y nuez moscada. El corazón de este perfume es una mezcla cálida de oud con notas de pachuli, almizcle y ambroxan. Una mezcla fascinante que dura hasta 8 horas ó más.",
        image:"aoud.png"
    },
    {
        id: 25,
        name: "Odyssey aqua",
        category: "hombre",
        price: 150,
        description: "Notas de Salida: Pomelo, Naranja, Artemisia.",
        color: "#1166b1ff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "El perfume Odyssey Aqua para hombre de Armaf es una fragancia cautivadora y refrescante diseñada para el hombre moderno y dinámico. Una fragancia fresca y vibrante con notas acuáticas, frutales y frescas. Evoca un viaje emocionante y lleno de aventuras. Una elección perfecta para hombres modernos y enérgicos.",
        image:"aqua.png"
    },
    {
        id: 26,
        name: "Odyssey Spectra",
        category: "hombre",
        price: 150,
        description: "En el corazón, las notas de canela, lirio de los valles, flor de azahar del naranjo y lavanda aportan una mezcla floral y especiada que evoca elegancia y sofisticación.",
        color: "#f9f9f9ff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Odyssey Spectra de Armaf es una fragancia unisex que cautiva con su rica y compleja composición. Lanzada en 2024, esta fragancia de la familia olfativa Oriental Especiada comienza con una explosión de canela, bergamota y manzana, creando una apertura cálida y acogedora. ",
        image:"spectra.png"
    },
    {
        id: 27,
        name: "Amber Oud Aqua Dubai",
        category: "hombre",
        price: 230,
        description: "Las Notas de Salida son bergamota, notas verdes y mandarina; las Notas de Corazón son ámbar, melón, grosellas negras y piña",
        color: "#f9f9f9ff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Amber Oud Aqua Dubai de Al Haramain Perfumes es una fragancia de la familia olfativa Aromática Frutal para Hombres y Mujeres. Esta fragrancia es nueva. Amber Oud Aqua Dubai se lanzó en 2024. Las Notas de Salida son bergamota, notas verdes y mandarina; las Notas de Corazón son ámbar, melón, grosellas negras y piña; las Notas de Fondo son almizcle, petit grain, gálbano y vainilla.",
        image:"dubai.png"
    },
    {
        id: 28,
        name: "Amber Oud Black",
        category: "hombre",
        price: 230,
        description: "lo un perfume impresionante, es Amber Oud Black Edition de Al Haramain.",
        color: "#f9f9f9ff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Amber oud black edition es una fragancia sensual, coriácea, amaderada y floral. Tiene un aura familiar que es única para quien lo usa, con sus elementos de oud profundo, perdura y deja su huella en aquellos que experimentan su aroma.",
        image:"amberblack.png"
    },
    {
        id: 29,
        name: "Amber Oud Carbon",
        category: "hombre",
        price: 220,
        description: "Con notas de apertura de hierbas que consisten en lavanda, romero y toques de bergamota",
        color: "#f9f9f9ff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Amber Oud Carbon Edition Al Haramain, es el resultado de décadas de dedicación, Con notas de apertura de hierbas que consisten en lavanda, romero y toques de bergamota, este aroma natural de apertura rinde homenaje al mejor creador de fragancias; Madre naturaleza.",
        image:"carbon.png"
    },
    {
        id: 30,
        name: "Amber Oud Gold",
        category: "hombre",
        price: 250,
        description: "A medida que la fragancia se desarrolla, las notas de fondo revelan una rica mezcla de tonos amaderados",
        color: "#f9f9f9ff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Desde el primer rociado, Amber Oud Gold Edition te envuelve con una frescura revitalizante, gracias a sus notas verdes y una vibrante bergamota fresca. Este inicio refrescante da paso a un corazón aromático donde el melón y la piña se fusionan con un toque oriental de ámbar, creando una combinación exótica y seductora.",
        image:"goldoud.png"
    },
    {
        id: 31,
        name: "Odyssey Homme Black",
        category: "hombre",
        price: 155,
        description: "Ideal para las noches y los meses más fríos.",
        color: "#f9f9f9ff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Despierta al depredador nocturno que hay en ti y sigue tu instinto. El eau de parfum para hombre Armaf Odyssey Homme te aportará la dosis necesaria de confianza. La combinación sensual y embriagadora de cálida vainilla y notas orientales no dejará que pases desapercibido entre la multitud y resaltará maravillosamente tu carisma.",
        image:"homme.png"
    },
    {
        id: 32,
        name: "Odyssey Mandarin Sky",
        category: "hombre",
        price: 140,
        description: "Este perfume se encuentra inspirado en Jean Paul Gaultier Scandal Pour Homme",
        color: "#f9f9f9ff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Con notas de salida de bergamota, naranja y pomelo, esta fragancia te cautivará desde el primer momento. Las notas de corazón de jengibre, menta y pimienta negra agregan un toque especiado a la fragancia, mientras que las notas de fondo de madera de cedro y almizcle te dejan con un aroma duradero que se mantendrá contigo durante todo el día.",
        image:"mandarin.png"
    },
    {
        id: 33,
        name: "Odyssey Mandarin Sky Elixir",
        category: "hombre",
        price: 165,
        description: "Las notas de salida despliegan un cóctel cítrico luminoso de mandarina, naranja y bergamota",
        color: "#f9f9f9ff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Prepárate para ser transportado a un horizonte ilimitado con Odyssey Mandarin Sky Elixir de Armaf, la nueva y cautivadora fragancia oriental amaderada diseñada para hombres y mujeres, que se lanza en 2025. Este elixir es una sinfonía olfativa que combina la vibrante frescura de los cítricos con la calidez envolvente de las especias y las maderas, creando un aroma que es a la vez potente, sofisticado y deliciosamente adictivo.",
        image:"elixir.png"
    },
    {
        id: 34,
        name: "Al Qiam Silver",
        category: "hombre",
        price: 150,
        description: "Permanecerá en tu cuerpo durante todo el día y cada vez que te huelas te enamorarás una y otra vez.",
        color: "#f9f9f9ff",
        badge: "Nuevo",
        popularity: 96,
        details: "Esta fragancia proporciona una experiencia de amor a primera vista. La primera inhalación de esta fragancia te dará un fuerte toque cítrico seguido de un secado de dulces cítricos. Permanecerá en tu cuerpo durante todo el día y cada vez que te huelas te enamorarás una y otra vez.",
        image:"qiam.png"
    },
    {
        id: 35,
        name: "Art of universe",
        category: "hombre",
        price: 200,
        description: "Art Of Universe es ideal para el día a día, ocasiones informales o momentos en los que se busca proyectar frescura y vitalidad.",
        color: "#f9f9f9ff",
        badge: "Nuevo",
        popularity: 96,
        details: "Art Of Universe de Lattafa Perfumes es una fragancia unisex que celebra la frescura, la energía y la sofisticación. Perteneciente a la familia olfativa Cítrica Aromática, esta creación moderna y vibrante se lanza en 2025, marcando un hito en la perfumería contemporánea con su mezcla equilibrada de notas frescas, frutales y amaderadas.",
        image:"universe.png"
    },
    {
        id: 36,
        name: "Khamrah Lattafa",
        category: "hombre",
        price: 140,
        description: "Su atención se centra en los sorprendentemente dulces acordes de dátil, que se entremezclan con un embriagador y endulzado iris, un embriagador nardo y suntuosos pralinés. ",
        color: "#1a1a2e",
        badge: "Mas vendido",
        popularity: 96,
        details: "Fragancia pulsante y apasionante que ejemplifica el aroma amaderado aromático con notas de bergamota y nardos cremosos salpicados con maderas de ámbar para producir una estela intensa que pueden usar tanto hombres como mujeres.",
        image:"khamrah.png"
    },
    {
        id: 37,
        name: "Khamrah Qahwa",
        category: "hombre",
        price: 140,
        description: "Una fragancia que redefine la experiencia del café en el mundo de la perfumería.",
        color: "#f9f9f9ff",
        badge: "Mas vendido",
        popularity: 96,
        details: "Este perfume cautivador te sumerge en una atmósfera cálida y especiada, donde las notas dulces y avainilladas se entrelazan con la riqueza del café recién hecho. La presencia del ámbar añade una profundidad seductora a la composición, creando una estela embriagadora que perdura a lo largo del día.",
        image:"qahwa.png"
    },
    {
        id: 38,
        name: "Khamrah Dukhan",
        category: "hombre",
        price: 190,
        description: "En el corazón, el ládano y el incienso crean una profundidad ahumada y resinosa que evoca un aire de misterio y sofisticación. ",
        color: "#f9f9f9ff",
        badge: "Nuevo",
        popularity: 96,
        details: "La fragancia se abre con la intensidad ardiente del pimiento y las especias cálidas, creando instantáneamente un tono rico y exótico. La dulzura jugosa de la mandarina atraviesa el calor, ofreciendo una frescura chispeante que realza la intriga de la apertura picante.",
        image:"dukhan.png"
    },
    {
        id: 39,
        name: "Nautica Voyage",
        category: "hombre",
        price: 155,
        description: "Tu olfato disfrutará de una copa de mimosa con rocío, que en la composición aromática se completa con notas acuáticas de loto ",
        color: "#f9f9f9ff",
        badge: "Nuevo",
        popularity: 96,
        details: "Lánzate a la aventura. El eau de toilette para hombre Nautica Voyage te proporcionará todo el frescor y la determinación que necesitas en todos tus viajes. ¡Déjate llevar por el torrente cautivador de notas acuáticas allá donde quieras!",
        image:"voyage.png"
    },
    {
        id: 40,
        name: "Nautica Voyage Sport",
        category: "hombre",
        price: 155,
        description: "El fondo, con la calidez del almizcle, pachulí, vetiver y secuoya roja brasileña, deja una estela masculina y sofisticada.",
        color: "#f9f9f9ff",
        badge: "Nuevo",
        popularity: 96,
        details: "La fragancia se abre con una mezcla revitalizante de notas marinas, cítricos, sal de mar y cilantro, que evocan la brisa del mar y la adrenalina de la navegación. En el corazón, un toque vibrante de manzana, geranio, hojas de palmera y pimiento verde aporta frescura y vitalidad.",
        image:"sportnau.png"
    },
    {
        id: 41,
        name: "Nautica Pure Blue",
        category: "hombre",
        price: 155,
        description: "Ligero, fresco y, al mismo tiempo, inconfundible.",
        color: "#f9f9f9ff",
        badge: "Nuevo",
        popularity: 96,
        details: "Ligero, fresco y, al mismo tiempo, inconfundible. El eau de toilette para hombre Nautica Blue te conquistará con su suave y sofisticada composición aromática, perfecta para usar a diario.",
        image:"blue.png"
    },
    {
        id: 42,
        name: "Donna Born In Roma Intense",
        category: "premium",
        price: 534,
        description: "Desde el inicio, la vainilla Bourbon y el ámbar envuelven la piel en una dulzura profunda y adictiva.",
        color: "#f9f9f9ff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Valentino Donna Born In Roma Intense es una fragancia opulenta y seductora que eleva la feminidad a su máxima expresión. Lanzada en 2023 y creada por Amandine Clerc-Marie y Honorine Blanc, esta esencia floral oriental combina sensualidad, calidez y sofisticación.",
        image:"donna.png"
    },
    {
        id: 43,
        name: "Ladies Cloud",
        category: "premium",
        price: 270,
        description: "Fragancia gourmand dulce con notas florales y frutales",
        color: "#f9f9f9ff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Tus sentidos tocarán el séptimo cielo cuando el eau de parfum para mujer Ariana Grande Cloud se funda con tu piel. Esta fragancia de esponjosas nubes te llevará a unos lugares donde experimentarás una sensación de felicidad absoluta y donde reina una positividad infinita.",
        image:"ladies.png"
    },
    {
        id: 44,
        name: "Thank u Next",
        category: "premium",
        price: 270,
        description: "Ideal para los meses de primavera y verano",
        color: "#f9f9f9ff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Inspirador, energizante y descarado, así es el eau de parfum para mujer Ariana Grande Thank U Next. La fragancia representa el ascenso hacia la cima de Ariana. Se trata de salir y conseguir exactamente lo que quieres. Se trata de crecer aceptando el pasado, de vivir según tus propias reglas y no tener miedo a decir... Thank U, Next!",
        image:"thank.png"
    },
    {
        id: 45,
        name: "Good Girl",
        category: "premium",
        price: 420,
        description: "El eau de parfum Carolina Herrera Good Girl resalta siempre tu lado femenino.",
        color: "#f9f9f9ff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Tú sabes mejor que nadie cuándo llevar tacones altos y vestidos seductores y cuándo es el momento de las bailarinas y las faldas con volantes. El eau de parfum Carolina Herrera Good Girl resalta siempre tu lado femenino. El lado que tú quieras. El lado que te convenga en ese momento. -fragancia floral oriental para el día a día -expresa la dualidad del carácter de la mujer -exclusivo frasco en forma de zapato de tacón.",
        image:"girl.png"
    },
    {
        id: 46,
        name: "Good Girl Blush",
        category: "premium",
        price: 499,
        description: "La composición aromática con notas de corazón florales",
        color: "#f9f9f9ff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Expresa tu feminidad con una explosión floral de contrastes. El eau de parfum Carolina Herrera Good Girl Blush se inspira en un colorete en polvo para simbolizar a la mujer moderna, que es tierna y romántica, pero fuerte a la vez, porque la verdadera belleza reside precisamente en los contrastes.",
        image:"blush.png"
    },
    {
        id: 47,
        name: "Very Good Girl",
        category: "premium",
        price: 495,
        description: "Carolina Herrera es muy simbólico y representa la pasión, la sofisticación y la belleza.",
        color: "#f9f9f9ff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "El eau de parfum Carolina Herrera Good Girl Very Good Girl hará que todos tus movimientos sean aún más osados y divertidos que nunca. Y cómo no. El zapato de tacón negro es un claro símbolo de que quien lo lleva es una mujer moderna llena de contrastes y que disfruta de ello. De esta forma, será absolutamente irresistible.",
        image:"very.png"
    },
    {
        id: 48,
        name: "Le beau le parfum",
        category: "premium",
        price: 450,
        description: "sensual fragancia oriental amaderada",
        color: "#f9f9f9ff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "El eau de parfum para hombre Jean Paul Gaultier Le Beau Le Parfum tiene un frasco con forma de musculoso torso masculino cubierto tan solo con una hoja, como recién salido del paraíso. Pero en su caso no se trata de un fruto prohibido. Esta fragancia fresca y adictiva es una clara invitación para que cedas a la tentación.",
        image:"beau.png"
    },
    {
        id: 49,
        name: "le male le parfum",
        category: "premium",
        price: 434,
        description: "Una más en la colección de icónicas fragancias puramente masculinas",
        color: "#f9f9f9ff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Este aroma oriental y amaderado te envolverá en el aura de masculinidad que emana de los fuertes comandantes vestidos de uniforme.",
        image:"MALE.png"
    },
    {
        id: 50,
        name: "Le male elixir",
        category: "premium",
        price: 445,
        description: "Le Male Elixir Absolu es una fragancia intensa y magnética",
        color: "#f9f9f9ff",
        badge: "Edición Limitada",
        popularity: 96,
        details: "Le Male Elixir Absolu de Jean Paul Gaultier es una reinterpretación intensa y sofisticada del icónico Le Male, diseñada para el hombre moderno que busca una fragancia con carácter y profundidad. Creada por Quentin Bisch, esta composición fusiona sensualidad y elegancia en una mezcla envolvente y adictiva.",
        image:"maleelixir.png"
    },
];

// Variables globales
let cart = [];
let currentFilter = "all";
let currentSort = "popular";

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    renderPerfumes();
    setupEventListeners();
    updateCartCount();
});

// Renderizar los perfumes en la página
function renderPerfumes() {
    const container = document.querySelector('.perfumes-grid');
    if (!container) return;
    
    // Filtrar y ordenar los perfumes
    let filteredPerfumes = filterPerfumes(perfumes, currentFilter);
    filteredPerfumes = sortPerfumes(filteredPerfumes, currentSort);
    
    // Generar HTML para cada perfume
    const perfumesHTML = filteredPerfumes.map(perfume => `
        <div class="perfume-card" data-category="${perfume.category}">
            <div class="perfume-image">
                ${perfume.image ?
                    `<img src="img/${perfume.image}" alt="${perfume.name}" class="perfume-real-image">` :
                    `<div class="bottle" style="--perfume-color: ${perfume.color}"></div>`
                }
                ${perfume.badge ? `<span class="perfume-badge">${perfume.badge}</span>` : ''}
            </div>
            <div class="perfume-info">
                <p class="perfume-category">${getCategoryName(perfume.category)}</p>
                <h3 class="perfume-name">${perfume.name}</h3>
                <p class="perfume-description">${perfume.description}</p>
                <div class="perfume-price">S/${perfume.price.toFixed(2)}</div>
                <div class="perfume-actions">
                    <button class="whatsapp-btn" data-id="${perfume.id}">Consultar por WhatsApp</button>
                    <button class="view-details" data-id="${perfume.id}">Ver detalles</button>
                </div>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = perfumesHTML;
    
    // Añadir event listeners a los botones recién creados
    addProductEventListeners();
}

// Filtrar perfumes por categoría
function filterPerfumes(perfumesList, filter) {
    if (filter === "all") return perfumesList;
    return perfumesList.filter(perfume => perfume.category === filter);
}

// Ordenar perfumes
function sortPerfumes(perfumesList, sortType) {
    const sorted = [...perfumesList];
    
    switch(sortType) {
        case "price-asc":
            return sorted.sort((a, b) => a.price - b.price);
        case "price-desc":
            return sorted.sort((a, b) => b.price - a.price);
        case "name":
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case "popular":
        default:
            return sorted.sort((a, b) => b.popularity - a.popularity);
    }
}

// Obtener nombre de categoría para mostrar
function getCategoryName(category) {
    const categories = {
        "hombre": "Para Hombre",
        "mujer": "Para Mujer",
        "unisex": "Unisex",
        "premium": "Premium"
    };
    return categories[category] || category;
}
// Función para enviar mensaje a WhatsApp
function sendWhatsAppMessage(productId) {
    const product = perfumes.find(p => p.id === productId);
    if (!product) return;
    
    // Mensaje personalizado
    const message = `Hola, estoy interesado en el perfume:\n\n` +
                   `*${product.name}*\n` +
                   `Categoría: ${getCategoryName(product.category)}\n` +
                   `Precio: S/.${product.price.toFixed(2)}\n\n` +
                   `Me podrían dar más información, por favor.`;
    
    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Tu número de WhatsApp (cámbialo por el tuyo)
    const phoneNumber = '920632668'; // Reemplaza con tu número
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}
// Configurar event listeners
function setupEventListeners() {
    // Filtros
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir clase active al botón clickeado
            this.classList.add('active');
            // Actualizar filtro actual
            currentFilter = this.dataset.filter;
            // Renderizar perfumes con nuevo filtro
            renderPerfumes();
        });
    });
    
    // Ordenar
    const sortSelect = document.getElementById('sort');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            renderPerfumes();
        });
    }
    
    // Menú móvil
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navUl = document.querySelector('nav ul');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navUl.classList.toggle('active');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace (móvil)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navUl.classList.remove('active');
            }
        });
    });
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Aquí normalmente enviaríamos el email a un servidor
            alert(`¡Gracias por suscribirte con el email: ${email}! Te enviaremos nuestras novedades pronto.`);
            this.reset();
        });
    }
    
    // Cerrar modal
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            modalOverlay.classList.remove('active');
        });
    }
    
    // Cerrar modal al hacer clic fuera
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    }
    
    
    
}

// Añadir event listeners a los botones de producto
function addProductEventListeners() {
    // Botones "Añadir al carrito"
// Botones "Añadir al carrito" → "Consultar por WhatsApp"
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            sendWhatsAppMessage(productId);
    });
});
    
    // Botones "Ver detalles"
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            showProductDetails(productId);
        });
    });
}



// Mostrar detalles del producto en modal
function showProductDetails(productId) {
    const product = perfumes.find(p => p.id === productId);
    if (!product) return;
    
    const modalContent = document.querySelector('.modal-content');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    modalContent.innerHTML = `
        <div class="modal-product">
            <div class="modal-product-image" style="background-color: ${product.color};">
                ${product.image ? 
                    `<img src="img/${product.image}" alt="${product.name}" class="modal-real-image">` : 
                    `<div class="modal-bottle" style="background-color: ${product.color};"></div>`
                }
                ${product.badge ? `<span class="modal-badge">${product.badge}</span>` : ''}
            </div>
            <div class="modal-product-info">
                <p class="modal-category">${getCategoryName(product.category)}</p>
                <h2 class="modal-name">${product.name}</h2>
                <p class="modal-description">${product.details}</p>
                <div class="modal-price">S/${product.price.toFixed(2)}</div>
                <div class="modal-stats">
                    <div class="modal-stat">
                        <span class="stat-label">Popularidad:</span>
                        <div class="stat-bar">
                            <div class="stat-fill" style="width: ${product.popularity}%"></div>
                        </div>
                        <span class="stat-value">${product.popularity}%</span>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="modal-whatsapp-btn" data-id="${product.id}">Consultar por WhatsApp</button>
                    <button class="modal-close-btn">Seguir explorando</button>
                </div>
            </div>
        </div>
    `;
    const modalWhatsappBtn = modalContent.querySelector('.modal-whatsapp-btn');
    if (modalWhatsappBtn) {
        modalWhatsappBtn.addEventListener('click', function() {
            sendWhatsAppMessage(productId);
            modalOverlay.classList.remove('active');
        });
    }
    
    // Mostrar modal
    modalOverlay.classList.add('active');
    
    // Añadir event listener al botón del modal
    
    
    // Añadir event listener al botón cerrar del modal
    const modalCloseBtn = modalContent.querySelector('.modal-close-btn');
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', function() {
            modalOverlay.classList.remove('active');
        });
    }
}

// ... (aquí van todas tus otras funciones como renderPerfumes, filterPerfumes, etc.)

// Función para consultar por WhatsApp
function consultWhatsApp(productId) {
    const product = perfumes.find(p => p.id === productId);
    if (!product) return;
    
    // Mostrar feedback al usuario (opcional)
    const button = document.querySelector(`.whatsapp-btn[data-id="${productId}"]`);
    if (button) {
        const originalText = button.textContent;
        button.textContent = "✓ Redirigiendo...";
        button.style.backgroundColor = "#1da851";
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = "#25D366";
        }, 1500);
    }
    
    // Crear mensaje personalizado
    const message = `¡Hola! 👋\n\n` +
                   `Estoy interesado en el perfume:\n` +
                   `*${product.name}*\n\n` +
                   `📋 *Detalles:*\n` +
                   `• Categoría: ${getCategoryName(product.category)}\n` +
                   `• Precio: S/.${product.price.toFixed(2)}\n` +
                   `• Descripción: ${product.description}\n\n` +
                   `¿Podrían darme más información sobre disponibilidad, formas de pago y envío?\n\n` +
                   `¡Gracias!`;
    
    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // TU NÚMERO DE WHATSAPP - REEMPLAZA ESTO
    const phoneNumber = '920632668'; // Ejemplo: 51987654321
    
    // Abrir WhatsApp en nueva pestaña
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    
    // Mostrar notificación
    showNotification(`Redirigiendo a WhatsApp para consultar sobre ${product.name}`);
}

// ... (después pueden venir funciones como showNotification, etc.)


// Mostrar notificación
function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--black);
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        z-index: 3000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s;
        animation-fill-mode: forwards;
    `;
    
    // Añadir estilos de animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Eliminar notificación después de 3 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
// Añade esto a tu script.js
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function rotateCarousel() {
    if (slides.length > 0) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
}

// Inicia el carrusel si existe
if (slides.length > 0) {
    setInterval(rotateCarousel, 1500); // Cambia cada 3 segundos
}