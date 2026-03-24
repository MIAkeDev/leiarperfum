// Datos de productos (perfumes)
const perfumes = [
    
   
    
    {
        id: 1,
        name: "Yara Pink 100ML",
        category: "mujer",
        price: 99,
        description: "Una fragancia dulce y tropical",
        color: "#ffb6c1",
        badge: "Más vendido",
        popularity: 98,
        details: "Yara de Lattafa es una fragancia vibrante y dulce, con notas olfativas que combinan vainilla, orquídea y acordes tropicales. Ideal para mujeres que buscan frescura y elegancia.",
        image: "yara.png"
    },
    {
        id: 2,
        name: "Yara Candy 100ML",
        category: "mujer",
        price: 99,
        description: "Aroma acaramelado con toques frutales",
        color: "#f368e0",
        badge: "Nuevo",
        popularity: 90,
        details: "Variante de la línea Yara, enfocada en dulces azucarados, combinados con notas frutales rojas y una base de almizcle suave.",
        image: "yaracandy.png"
    },
    {
        id: 3,
        name: "Yara Tous 100ML",
        category: "mujer",
        price: 99,
        description: "Aroma tropical que destaca acordes de mango y coco",
        color: "#feca57",
        badge: "",
        popularity: 88,
        details: "Yara Tous se centra en las vibras veraniegas, con una salida prominente de mango, coco y maracuyá, sobre una base floral blanca reconfortante.",
        image: "yaratous.png"
    },
    {
        id: 4,
        name: "Yara Elixir 100ML",
        category: "mujer",
        price: 129,
        description: "Intensa y sofisticada, una versión premium del clásico",
        color: "#ff9ff3",
        badge: "Premium",
        popularity: 85,
        details: "Yara Elixir profundiza en las notas de la línea Yara con una concentración mayor, ofreciendo mayor longevidad y una estela más densa.",
        image: "yaraelixir.png"
    },
    {
        id: 5,
        name: "Asad Elixir 100ML",
        category: "hombre",
        price: 129,
        description: "Fragancia especiada y amaderada en concentración Elixir",
        color: "#2d3436",
        badge: "Nuevo",
        popularity: 92,
        details: "Una versión más rica y densa del clásico Asad, maximizando las notas especiadas, el ámbar y la vainilla oscura.",
        image: "asadelixir.png"
    },
    {
        id: 6,
        name: "Yara Moi 100ML",
        category: "mujer",
        price: 99,
        description: "Aroma de jazmín, melocotón y caramelo",
        color: "#f8c291",
        badge: "",
        popularity: 87,
        details: "Lattafa Yara Moi brilla con notas de salida de durazno y jazmín, envueltas en un corazón de caramelo y sándalo.",
        image: "yaramoi.png"
    },
    {
        id: 7,
        name: "Asad 100ML",
        category: "hombre",
        price: 109,
        description: "Fuerte y masculina con pimienta y vainilla",
        color: "#2f3542",
        badge: "Top Ventas",
        popularity: 97,
        details: "Asad de Lattafa es una fragancia especiada con notas de pimienta negra, tabaco, café y vainilla. Perfecta para el hombre moderno.",
        image: "asad.png"
    },
    {
        id: 8,
        name: "Asad Bourbon 100ML",
        category: "hombre",
        price: 115,
        description: "Acordes ricos de maderas y vainilla alicorada",
        color: "#b33939",
        badge: "",
        popularity: 89,
        details: "Asad Bourbon toma la herencia de Asad y le añade un toque profundo, ahumado y licoroso que la hace irresistible.",
        image: "asadbourbon.png"
    },
    {
        id: 9,
        name: "Asad Zanzibar 100ML",
        category: "hombre",
        price: 99,
        description: "Toque tropical y fresco a la elegancia masculina",
        color: "#0abde3",
        badge: "Nuevo",
        popularity: 88,
        details: "Un flanker fresco de Asad, mezclando toques acuáticos y exóticos con la característica base profunda amaderada.",
        image: "asadzanzibar.png"
    },
    {
        id: 10,
        name: "Mandarin Sky 100ML",
        category: "unisex",
        price: 119,
        description: "Refrescante explosión cítrica con notas dulces",
        color: "#ff9f43",
        badge: "",
        popularity: 85,
        details: "Armaf Odyssey Mandarin Sky resalta las facetas dulces de la mandarina en combinación con toques caramelizados y ambarinos.",
        image: "mandarin.png"
    },
    {
        id: 11,
        name: "Odyssey Aqua 100ML",
        category: "hombre",
        price: 119,
        description: "Aroma marino revitalizante",
        color: "#48dbfb",
        badge: "",
        popularity: 84,
        details: "Una fragancia súper fresca, azul y acuática ideal para días soleados y climas calurosos.",
        image: "odysseyaqua.png"
    },
    {
        id: 12,
        name: "Odyssey Limoni 100ML",
        category: "unisex",
        price: 115,
        description: "Chispeantes toques de limón fresco",
        color: "#fbc531",
        badge: "",
        popularity: 82,
        details: "Aroma cítrico radiante protagonizado por notas intensas y frescas de limón, perfecto para inyectar energía a tu rutina.",
        image: "odysseylimoni.png"
    },
    {
        id: 13,
        name: "Odyssey Homme Black 100ML",
        category: "hombre",
        price: 115,
        description: "Misterio y elegancia nocturna",
        color: "#1e272e",
        badge: "",
        popularity: 86,
        details: "Fragancia intensa con perfil nocturno, combinando especias oscuras y maderas nobles, ideal para eventos de noche.",
        image: "odysseyblack.png"
    },
    {
        id: 14,
        name: "Odyssey Mega 100ML",
        category: "hombre",
        price: 115,
        description: "Potencia y frescura aromática",
        color: "#576574",
        badge: "",
        popularity: 83,
        details: "Una fragancia sólida y versátil que mezcla maderas contemporáneas con notas frescas, perfecta como perfume de firma.",
        image: "odysseymega.png"
    },
    {
        id: 15,
        name: "Odyssey Spectra 100ML",
        category: "unisex",
        price: 115,
        description: "Dulce especiado y envolvente",
        color: "#9c88ff",
        badge: "",
        popularity: 81,
        details: "Una composición moderna de Armaf que juega con especias dulces y un toque exótico radiante.",
        image: "odysseyspectra.png"
    },
    {
        id: 16,
        name: "Odyssey Aristo 100ML",
        category: "hombre",
        price: 149,
        description: "Poderoso, amaderado y refinado",
        color: "#c23616",
        badge: "Premium",
        popularity: 84,
        details: "Odyssey Aristo ofrece una longevidad excepcional con acordes lujosos y elegantes enfocados en el público adulto.",
        image: "odysseyaristo.png"
    },
    {
        id: 17,
        name: "Mandarin Sky Elixir 100ML",
        category: "unisex",
        price: 149,
        description: "Mandarina dulce llevada al límite",
        color: "#e1b12c",
        badge: "Premium",
        popularity: 88,
        details: "Una mayor concentración de Mandarin Sky, volviendo la salida más densa, azucarada y con extra de rendimiento.",
        image: "elixir.png"
    },
    {
        id: 18,
        name: "Odyssey Homme White Edition 100ML",
        category: "hombre",
        price: 115,
        description: "Limpio, pulcro y atalcado",
        color: "#f5f6fa",
        badge: "",
        popularity: 85,
        details: "Presenta una combinación de almizcles blancos y flores suaves, evocando una profunda sensación de limpieza y frescura.",
        image: "odysseywhite.png"
    },
    {
        id: 19,
        name: "Odyssey Toffee Coffee 100ML",
        category: "unisex",
        price: 149,
        description: "Gourmand puro de caramelo y café",
        color: "#8c7ae6",
        badge: "Tendencia",
        popularity: 92,
        details: "Irresistible fragancia de Armaf que destila un aroma goloso a toffee derretido sobre café espresso recién preparado.",
        image: "toffeecoffee.png"
    },
    {
        id: 20,
        name: "Odyssey Candee 100ML",
        category: "mujer",
        price: 115,
        description: "Dulce como el algodón de azúcar",
        color: "#ff9ff3",
        badge: "",
        popularity: 86,
        details: "Odyssey Candee explora notas de chicle y frutos rojos dulces, ideal para personalidades jóvenes y divertidas.",
        image: "candee.png"
    },
    {
        id: 21,
        name: "Odyssey Go Mango 100ML",
        category: "unisex",
        price: 149,
        description: "Frutal jugoso y veraniego",
        color: "#fbc531",
        badge: "",
        popularity: 89,
        details: "Siente el verano con acordes prominentes de pulpa de mango tropical fresca, combinados con flores exóticas.",
        image: "gomango.png"
    },
    {
        id: 22,
        name: "Odyssey Black Forest 100ML",
        category: "unisex",
        price: 149,
        description: "Inspirada en el bosque negro y las cerezas",
        color: "#2f3640",
        badge: "",
        popularity: 87,
        details: "Combina acordes oscuros de maderas nobles, vainilla ahumada y un toque vibrante frutal profundo en el secado.",
        image: "blackforest.png"
    },
    {
        id: 23,
        name: "Odyssey Ba Ha Mas 100ML",
        category: "unisex",
        price: 149,
        description: "Paraíso frutal tropical en un frasco",
        color: "#0097e6",
        badge: "",
        popularity: 85,
        details: "Evoca las playas caribeñas con ricas notas frutales y un secado cálido almizclado perfecto para relajarse.",
        image: "bahamas.png"
    },
    {
        id: 24,
        name: "Odyssey Wild One 100ML",
        category: "hombre",
        price: 119,
        description: "Toques especiados y audaces para salir",
        color: "#dcdde1",
        badge: "",
        popularity: 83,
        details: "Destaca un aura juguetona, nocturna y atrevida con especias envolventes y un sutil dejo ahumado.",
        image: "wildone.png"
    },
    {
        id: 25,
        name: "Mandarin Sky Vintage Edition 100ML",
        category: "unisex",
        price: 149,
        description: "Clásica y refinada",
        color: "#e1b12c",
        badge: "Exclusivo",
        popularity: 84,
        details: "Una edición vintage de Mandarin Sky que acentúa las maderas y aminora la dulzura, haciéndola más sofisticada.",
        image: "mandarinskyvintage.png"
    },
    {
        id: 26,
        name: "Odyssey Tyrant 100ML",
        category: "hombre",
        price: 119,
        description: "Cítricos oscuros e imponentes",
        color: "#7f8fa6",
        badge: "",
        popularity: 81,
        details: "Tyrant proyecta autoridad y fuerza con maderas terrosas, musgo de roble y un destello de pomelo en la salida.",
        image: "tyrant.png"
    },
    {
        id: 27,
        name: "Odyssey Revolution Ultra 100ML",
        category: "hombre",
        price: 119,
        description: "Moderno, metálico y magnético",
        color: "#8c7ae6",
        badge: "",
        popularity: 82,
        details: "Fragancia audaz de Armaf, ideal para quienes buscan un aroma limpio pero distintivo para eventos casuales.",
        image: "revolutionultra.png"
    },
    {
        id: 28,
        name: "Hawas For Him 100ML",
        category: "hombre",
        price: 119,
        description: "Frescura acuática inigualable y ciruela dulce",
        color: "#5f27cd",
        badge: "Top Ventas",
        popularity: 99,
        details: "El best-seller de Rasasi. Combina canela, bergamota y ciruela sobre una base acuática brillante. Una bestia en rendimiento.",
        image: "hawashim.png"
    },
    {
        id: 29,
        name: "Hawas Ice 100ML",
        category: "hombre",
        price: 139,
        description: "Versión extra fría y revitalizante",
        color: "#48dbfb",
        badge: "Tendencia",
        popularity: 96,
        details: "Hawas Ice incorpora limón helado, anís estrellado y cardamomo frío, brindando muchísima frescura y estela brutal.",
        image: "hawasice.png"
    },
    {
        id: 30,
        name: "Hawas Tropical 100ML",
        category: "unisex",
        price: 159,
        description: "Explosión de frutas exóticas",
        color: "#1dd1a1",
        badge: "Nuevo",
        popularity: 88,
        details: "Rasasi lleva el ADN de Hawas a un perfil puramente tropical, súper frutal y optimista, perfecto para la playa.",
        image: "hawastropical.png"
    },
    {
        id: 31,
        name: "Hawas Black 100ML",
        category: "hombre",
        price: 119,
        description: "La variante nocturna y misteriosa",
        color: "#222f3e",
        badge: "",
        popularity: 89,
        details: "Añade notas amaderadas y ahumadas profundas al dulzor del clásico Hawas, creando un aura elegante.",
        image: "hawasblack.png"
    },
    {
        id: 32,
        name: "Hawas Malibu 100ML",
        category: "unisex",
        price: 159,
        description: "Cítrico costeño, acuático y relajado",
        color: "#0abde3",
        badge: "Nuevo",
        popularity: 86,
        details: "Inspirada en atardeceres de Malibú, es una fragancia con brisa oceánica y suaves cítricos resplandecientes.",
        image: "hawasmalibu.png"
    },
    {
        id: 33,
        name: "Hawas For Her 100ML",
        category: "mujer",
        price: 109,
        description: "Femenina, afrutada y elegante",
        color: "#ff6b6b",
        badge: "",
        popularity: 91,
        details: "Un perfume de Rasasi con salidas frutales de granada y un encantador corazón floral dulce.",
        image: "hawasher.png"
    },
    {
        id: 34,
        name: "Hawas Eclat 100ML",
        category: "mujer",
        price: 139,
        description: "Brillo floral con destellos afrutados",
        color: "#f8a5c2",
        badge: "",
        popularity: 84,
        details: "Una edición luminosa y alegre que resalta las notas de jazmín y frutas chispeantes.",
        image: "hawaseclat.png"
    },
    {
        id: 35,
        name: "Hawas Fire 100ML",
        category: "hombre",
        price: 169,
        description: "Intensidad abrasadora y pasión ambarina",
        color: "#ee5253",
        badge: "Premium",
        popularity: 85,
        details: "Notas especiadas ardientes combinadas con resinas profundas, diseñada para dejar una huella imborrable.",
        image: "hawasfire.png"
    },
    {
        id: 36,
        name: "Hawas Elixir 100ML",
        category: "hombre",
        price: 139,
        description: "Concentración extrema y rica",
        color: "#feca57",
        badge: "",
        popularity: 90,
        details: "Hawas Elixir toma la base icónica de Rasasi y la concentra aún más, dándole una proyección sin precedentes.",
        image: "hawaselixir.png"
    },
    {
        id: 37,
        name: "Khamrah 100ML",
        category: "unisex",
        price: 115,
        description: "Aroma a dátiles, canela y praliné",
        color: "#b33939",
        badge: "Top Ventas",
        popularity: 100,
        details: "Lattafa Khamrah es un deleite gourmand sumamente cálido y envolvente, famoso por su estela alicorada y dulce.",
        image: "khamrah.png"
    },
    {
        id: 38,
        name: "Khamrah Qahwa 100ML",
        category: "unisex",
        price: 115,
        description: "El dulzor de Khamrah con un shot de café",
        color: "#84817a",
        badge: "Popular",
        popularity: 96,
        details: "Añade notas robustas de café tostado a la famosa mezcla de dátiles, praliné y vainilla de Khamrah.",
        image: "qahwa.png"
    },
    {
        id: 39,
        name: "Afnan 9 PM 100ML",
        category: "hombre",
        price: 115,
        description: "El rey de la noche y las fiestas",
        color: "#222f3e",
        badge: "Más vendido",
        popularity: 98,
        details: "9 PM es famosa por su carácter fiestero, con notas prominentes de vainilla, manzana, lavanda y haba tonka.",
        image: "afnan9pm.png"
    },
    {
        id: 40,
        name: "Afnan 9 AM Dive 100ML",
        category: "unisex",
        price: 115,
        description: "Fresco, mentolado y acuático",
        color: "#0abde3",
        badge: "",
        popularity: 92,
        details: "Fragancia azul y súper limpia, con toques de manzana verde y menta que energizan para el día a día.",
        image: "afnan9amdive.png"
    },


    
    {
        id: 41,
        name: "Sublime 100ML",
        category: "unisex",
        price: 109,
        description: "Manzana dulce, lichi y rosa vibrante",
        color: "#ff4757",
        badge: "Popular",
        popularity: 93,
        details: "Lattafa Bade'e Al Oud Sublime es una fragancia jugosa y afrutada, con vibrantes notas de manzana roja, lichi y un fondo suave de musgo y vainilla.",
        image: "sublime.png"
    },
    {
        id: 42,
        name: "Honor & Glory 100ML",
        category: "unisex",
        price: 109,
        description: "Piña caramelizada y creme brulee",
        color: "#f9ca24",
        badge: "",
        popularity: 92,
        details: "Bade'e Al Oud Honor & Glory ofrece un corazón exótico de creme brulee, piña dulce asada y especias vibrantes que cautivan al instante.",
        image: "honorglory.png"
    },
    {
        id: 43,
        name: "Oud For Glory 100ML",
        category: "unisex",
        price: 109,
        description: "El misterio y opulencia del Oud ahumado",
        color: "#1e272e",
        badge: "Top Ventas",
        popularity: 89,
        details: "Con acordes de azafrán, nuez moscada y una rica madera de oud, es una de las referencias más lujosas e imponentes de la casa Lattafa.",
        image: "oudforglory.png"
    },
    {
        id: 44,
        name: "Amethyst 100ML",
        category: "mujer",
        price: 109,
        description: "Un viaje sensual de rosa turca y ámbar",
        color: "#6D214F",
        badge: "",
        popularity: 86,
        details: "Bade'e Al Oud Amethyst despliega flores exquisitas mezcladas con oud suave, vainilla dulce y toques de pimienta rosa.",
        image: "amethyst.png"
    },
    {
        id: 45,
        name: "Noble Blush 100ML",
        category: "mujer",
        price: 109,
        description: "Encanto floral aterciopelado",
        color: "#fda7df",
        badge: "Nuevo",
        popularity: 84,
        details: "Una propuesta delicada y muy femenina de Lattafa, donde las flores suaves se entrelazan con un fondo atalcado y almizclado.",
        image: "nobleblush.png"
    },
    {
        id: 46,
        name: "Nitro Red EDP 100ML",
        category: "hombre",
        price: 129,
        description: "Explosión de sandía, manzana y ámbar",
        color: "#eb2f06",
        badge: "Tendencia",
        popularity: 95,
        details: "Dumont Nitro Red es súper frutal y proyecta muchísimo. Destaca por su aroma a sandía dulce con un fondo masculino moderno.",
        image: "nitrored.png"
    },
    {
        id: 47,
        name: "Nitro White 100ML",
        category: "unisex",
        price: 129,
        description: "Elegancia pura con toques de vainilla",
        color: "#f5f6fa",
        badge: "",
        popularity: 88,
        details: "Un aroma limpio y luminoso de Dumont que resalta maderas blancas, almizcle y un sutil dulzor cremoso en su secado.",
        image: "nitrowhite.png"
    },
    {
        id: 48,
        name: "Nitro Platinum 100ML",
        category: "hombre",
        price: 129,
        description: "Metálico, amaderado y sumamente masculino",
        color: "#7f8fa6",
        badge: "",
        popularity: 85,
        details: "Una fragancia robusta y madura. Mezcla notas terrosas y metálicas con una base profunda y duradera ideal para la oficina.",
        image: "nitroplatinum.png"
    },
    {
        id: 49,
        name: "Nitro Black Intense 100ML",
        category: "hombre",
        price: 129,
        description: "Frutas oscuras, piña y ahumado",
        color: "#2f3640",
        badge: "Popular",
        popularity: 90,
        details: "Famoso por su perfil oscuro y misterioso, recordando a fragancias nicho cítrico-ahumadas con un rendimiento arrollador.",
        image: "nitroblack.png"
    },
    {
        id: 50,
        name: "Nitro Blue 100ML",
        category: "hombre",
        price: 129,
        description: "Fresco, azul y súper versátil",
        color: "#192a56",
        badge: "",
        popularity: 87,
        details: "Una fragancia todo terreno. Abre con cítricos jugosos y se asienta en un aroma amaderado limpio, perfecto para cualquier clima.",
        image: "nitroblue.png"
    },
    {
        id: 51,
        name: "Nitro Green 100ML",
        category: "hombre",
        price: 129,
        description: "Herbal, verde y energizante",
        color: "#44bd32",
        badge: "",
        popularity: 82,
        details: "Para los amantes de los aromas botánicos y frescos. Nitro Green es revitalizante y aporta una sensación de limpieza profunda.",
        image: "nitrogreen.png"
    },
    {
        id: 52,
        name: "Nitro Pour Homme 100ML",
        category: "hombre",
        price: 129,
        description: "El clásico magnético de Dumont",
        color: "#353b48",
        badge: "",
        popularity: 85,
        details: "Una composición sólida que equilibra maderas preciosas, especias suaves y un final almizclado ideal para uso diario.",
        image: "nitropourhomme.png"
    },
    {
        id: 53,
        name: "Nitro Elixir 100ML",
        category: "hombre",
        price: 169,
        description: "Densidad y opulencia amaderada",
        color: "#c23616",
        badge: "Premium",
        popularity: 91,
        details: "La versión Elixir lleva la línea Nitro a su máximo esplendor, con ingredientes altamente concentrados y resinas profundas.",
        image: "nitroelixir.png"
    },
    {
        id: 54,
        name: "Nitro Red Intensely 100ML",
        category: "hombre",
        price: 169,
        description: "El poder frutal llevado al extremo",
        color: "#e84118",
        badge: "Extremo",
        popularity: 94,
        details: "Redobla la apuesta del famoso Nitro Red. Más dulzor, más impacto frutal y una duración que supera las 12 horas en piel.",
        image: "nitroredintensely.png"
    },
    {
        id: 55,
        name: "Club de Nuit Woman 100ML",
        category: "mujer",
        price: 119,
        description: "Elegante mezcla de cítricos, rosa y pachulí",
        color: "#f8a5c2",
        badge: "Top Ventas",
        popularity: 92,
        details: "Un clásico de Armaf, sumamente sofisticado y maduro. Muy apreciado por su elegancia floral y su secado de vainilla y almizcle.",
        image: "cdnwoman.png"
    },
    {
        id: 56,
        name: "Club de Nuit Intense Man 105ML",
        category: "hombre",
        price: 119,
        description: "Limón, piña y abedul ahumado",
        color: "#2d3436",
        badge: "Más vendido",
        popularity: 100,
        details: "El ícono mundial de Armaf. Se destaca por una salida fuerte cítrica, desarrollándose hacia un secado de abedul ahumado muy masculino.",
        image: "cdnintense.png"
    },
    {
        id: 57,
        name: "Club de Nuit Urban Man Elixir 100ML",
        category: "hombre",
        price: 139,
        description: "Frescura picante y fondo dulce",
        color: "#576574",
        badge: "Popular",
        popularity: 96,
        details: "Una fusión magistral de especias frescas, ambroxan y un fondo dulce y atrayente que genera muchísimos cumplidos.",
        image: "cdnurbanelixir.png"
    },
    {
        id: 58,
        name: "Club de Nuit Blue Iconic 100ML",
        category: "hombre",
        price: 149,
        description: "Toronja incisiva, jengibre e incienso",
        color: "#0984e3",
        badge: "Premium",
        popularity: 94,
        details: "Fragancia azul ultra premium de Armaf. Cítricos vibrantes en la salida, acompañados de notas marinas, incienso y sándalo.",
        image: "cdniconic.png"
    },
    {
        id: 59,
        name: "Club de Nuit Untold 100ML",
        category: "unisex",
        price: 149,
        description: "Algodón de azúcar, azafrán y ámbar gris",
        color: "#ff7979",
        badge: "Tendencia",
        popularity: 97,
        details: "Untold brilla con su perfil dulce y medicinal de azafrán, jazmín y maderas ambarinas. Un aura seductora e irresistible.",
        image: "cdnuntold.png"
    },
    {
        id: 60,
        name: "Club de Nuit Sillage 100ML",
        category: "unisex",
        price: 139,
        description: "Metálico, floral y té negro helado",
        color: "#c7ecee",
        badge: "",
        popularity: 89,
        details: "Con notas punzantes de bergamota, grosellas negras y rosa, Sillage ofrece una sensación de agua helada y lujo súper moderno.",
        image: "cdnsillage.png"
    },
    {
        id: 61,
        name: "Club de Nuit Maleka 100ML",
        category: "mujer",
        price: 179,
        description: "Lichi, bergamota y praliné",
        color: "#0c7b93",
        badge: "Nuevo",
        popularity: 87,
        details: "Una joya exclusiva. Notas de salida de pimienta rosa y lichi, finalizando con un cremoso praliné, sándalo y ambroxan.",
        image: "cdnmaleka.png"
    },
    {
        id: 62,
        name: "Club de Nuit Precieux 55ML",
        category: "unisex",
        price: 159,
        description: "Concentración máxima de pura opulencia",
        color: "#1e272e",
        badge: "Exclusivo",
        popularity: 88,
        details: "Versión extracto que rinde homenaje a los aromas clásicos de la línea, pero con ingredientes más ricos y una duración nuclear.",
        image: "cdnprecieux.png"
    },
    {
        id: 63,
        name: "Club de Nuit Oud 105ML",
        category: "unisex",
        price: 199,
        description: "Frutas tropicales envolviendo madera de Oud",
        color: "#636e72",
        badge: "Nicho",
        popularity: 91,
        details: "Armaf nos trae un oud muy amigable y dulce. Abre con notas frutales intensas (melocotón, pera) descansando sobre un oud cremoso.",
        image: "cdnoud.png"
    },
    {
        id: 64,
        name: "Al Haramain L'Aventure Intense 100ML",
        category: "hombre",
        price: 139,
        description: "Cítrico ahumado con duración brutal",
        color: "#2c3e50",
        badge: "Top Ventas",
        popularity: 93,
        details: "Versión Intense del famoso L'Aventure. Su salida de elemí y limón es más rica y su secado amaderado proyecta por muchas horas.",
        image: "laventureintense.png"
    },
    {
        id: 65,
        name: "Al Haramain L'Aventure Ciel 100ML",
        category: "hombre",
        price: 139,
        description: "Frescura cítrica y aromática",
        color: "#74b9ff",
        badge: "",
        popularity: 86,
        details: "Una fragancia refrescante perfecta para el día. Sus notas florales ligeras y maderas claras la hacen muy fácil de llevar.",
        image: "laventureciel.png"
    },
    {
        id: 66,
        name: "Al Haramain L'Aventure Fraiche 100ML",
        category: "hombre",
        price: 139,
        description: "Explosión verde y muy limpia",
        color: "#55efc4",
        badge: "",
        popularity: 85,
        details: "Destaca por sus notas sumamente frescas y verdes, combinando cítricos brillantes ideales para altas temperaturas.",
        image: "laventurefraiche.png"
    },
    {
        id: 67,
        name: "Al Haramain Aqua Dubai 100ML",
        category: "unisex",
        price: 209,
        description: "Sofisticación acuática y lujosa",
        color: "#0abde3",
        badge: "Premium",
        popularity: 88,
        details: "Una fragancia que captura la esencia de la vida moderna y lujosa en Dubái, con toques minerales y maderas exquisitas.",
        image: "aquadubai.png"
    },
    {
        id: 68,
        name: "Amber Oud Gold Edition 120ML",
        category: "unisex",
        price: 199,
        description: "Melón dulce, vainilla y notas afrutadas",
        color: "#e1b12c",
        badge: "Más vendido",
        popularity: 98,
        details: "Una de las fragancias dulces más potentes del mercado. El melón, la piña y el almizcle dulce aseguran cumplidos y proyeccón en modo bestia.",
        image: "amberoudgold.png"
    },
    {
        id: 69,
        name: "Amber Oud Night Dubai 100ML",
        category: "unisex",
        price: 209,
        description: "La magia de la noche árabe",
        color: "#1e272e",
        badge: "Nuevo",
        popularity: 85,
        details: "Una versión más oscura, ambarina y profunda. Diseñada para climas fríos y eventos de gala con su rica base resinosa.",
        image: "amberoudnight.png"
    },
    {
        id: 70,
        name: "Amber Oud Ultra Violet 100ML",
        category: "mujer",
        price: 209,
        description: "Encanto floral y empolvado",
        color: "#8c7ae6",
        badge: "",
        popularity: 83,
        details: "Al Haramain propone un aroma sumamente romántico donde predominan las flores violetas suaves y toques almizclados femeninos.",
        image: "amberoudultraviolet.png"
    },
    {
        id: 71,
        name: "Amber Oud Rubi 100ML",
        category: "unisex",
        price: 209,
        description: "Almendra amarga y azafrán ardiente",
        color: "#c23616",
        badge: "Premium",
        popularity: 91,
        details: "Destaca por sus lujosas notas de almendra amarga, azafrán, cedro y ámbar gris, dando como resultado un aura magnética.",
        image: "amberoudrubi.png"
    },
    {
        id: 72,
        name: "Amber Oud Rouge 100ML",
        category: "unisex",
        price: 229,
        description: "Azafrán azucarado nivel nicho",
        color: "#b33939",
        badge: "Exclusivo",
        popularity: 93,
        details: "Famoso por su increíble calidad. Un aroma dulce a algodón de azúcar especiado, súper refinado y con fijación extraordinaria.",
        image: "amberoudrouge.png"
    },
    {
        id: 73,
        name: "Beach Party 100ML",
        category: "unisex",
        price: 149,
        description: "Aroma acuático y salado para vacaciones",
        color: "#48dbfb",
        badge: "Nuevo",
        popularity: 86,
        details: "Armaf Beach Party capta a la perfección un día bajo el sol: notas marinas saladas, cítricos relajantes y maderas flotantes.",
        image: "beachparty.png"
    },
    {
        id: 74,
        name: "Nautica Voyage EDT 100ML",
        category: "hombre",
        price: 99,
        description: "Fresco, frutal (manzana) y ultra versátil",
        color: "#54a0ff",
        badge: "Económico",
        popularity: 96,
        details: "Un clásico indiscutible. Hoja verde y manzana abren el paso a loto y mimosa. Perfecto para uso diario o el gimnasio por su extrema limpieza.",
        image: "nauticavoyage.png"
    },
    {
        id: 75,
        name: "Atlas Lattafa 55ML",
        category: "hombre",
        price: 129,
        description: "Acuático puro con toques minerales",
        color: "#0097e6",
        badge: "Tendencia",
        popularity: 92,
        details: "Una bomba oceánica y salada, con algas marinas y ambroxan. Destaca por su duración excepcional para ser un perfume fresco.",
        image: "atlas.png"
    },
    {
        id: 76,
        name: "Arabia Al Oud 100ML",
        category: "unisex",
        price: 99,
        description: "Oud cálido, oriental y clásico",
        color: "#84817a",
        badge: "",
        popularity: 81,
        details: "Le Chameau Arabia Al Oud ofrece un inicio rico en especias que rápidamente se funde en un oud dulce y llevadero.",
        image: "arabiaaloud.png"
    },
    {
        id: 77,
        name: "Arabia The Beauty 100ML",
        category: "mujer",
        price: 99,
        description: "Flores blancas y frutas suculentas",
        color: "#1dd1a1",
        badge: "",
        popularity: 84,
        details: "Una mezcla femenina y elegante que evoca jardines primaverales llenos de frescura y sutil dulzor.",
        image: "arabiabeauty.png"
    },
    {
        id: 78,
        name: "Arabia Hubbi Women 100ML",
        category: "mujer",
        price: 99,
        description: "Dulzor encantador y seductor",
        color: "#ee5253",
        badge: "",
        popularity: 83,
        details: "Un perfil pasional con vainilla, frutos rojos y un corazón empolvado, ideal para salidas románticas.",
        image: "arabiahubbi.png"
    },
    {
        id: 79,
        name: "Arabia Heroes 100ML",
        category: "hombre",
        price: 99,
        description: "Carácter masculino aromático",
        color: "#0984e3",
        badge: "",
        popularity: 82,
        details: "Fragancia de Le Chameau con presencia de lavanda, maderas y especias frescas, para el hombre decidido y audaz.",
        image: "arabiaheroes.png"
    },
    {
        id: 80,
        name: "Arabia Bon Voyage 100ML",
        category: "mujer",
        price: 99,
        description: "Aroma jovial y chispeante",
        color: "#ff9ff3",
        badge: "",
        popularity: 85,
        details: "Radiante y alegre, Bon Voyage mezcla cítricos vibrantes con notas florales de fondo, siendo excelente para cualquier aventura diaria.",
        image: "arabiabonvoyage.png"
    },
    
    {
        id: 81,
        name: "Qaed Al Fursan 90ML",
        category: "unisex",
        price: 99,
        description: "Piña asada dulce y madera de cedro",
        color: "#f1c40f",
        badge: "Más vendido",
        popularity: 96,
        details: "Lattafa Qaed Al Fursan es famosa por su apertura extremadamente jugosa a base de piña asada, acompañada por notas de azafrán, jazmín y toques amaderados profundos.",
        image: "qaedalfursan.png"
    },
    {
        id: 82,
        name: "Qaed Unlimited 90ML",
        category: "mujer",
        price: 99,
        description: "Coco cremoso, vainilla y flores blancas",
        color: "#ffffff",
        badge: "",
        popularity: 88,
        details: "Una fragancia suave y láctica. Resalta notas reconfortantes de coco, vainilla y almizcle blanco, creando un aura limpia y elegante para el día a día.",
        image: "qaedunlimited.png"
    },
    {
        id: 83,
        name: "Hayaati 100ML",
        category: "hombre",
        price: 99,
        description: "Fresco, afrutado y versátil",
        color: "#2f3640",
        badge: "Económico",
        popularity: 87,
        details: "Hayaati de Lattafa es una mezcla vibrante de manzana, bergamota, canela y almizcle. Ideal como fragancia firma por su gran versatilidad y rendimiento.",
        image: "hayaati.png"
    },
    {
        id: 84,
        name: "Rave Now Rouge 100ML",
        category: "mujer",
        price: 99,
        description: "Algodón de azúcar y resinas dulces",
        color: "#e84118",
        badge: "",
        popularity: 85,
        details: "Una explosión dulce que recuerda al algodón de azúcar caramelizado, mezclado con resinas y un fondo amaderado muy sensual.",
        image: "ravenowrouge.png"
    },
    {
        id: 85,
        name: "Al Noble Ameer 100ML",
        category: "unisex",
        price: 99,
        description: "Especiado cálido con un fondo terroso",
        color: "#192a56",
        badge: "",
        popularity: 82,
        details: "Una fragancia madura y sofisticada de Lattafa que combina maderas ricas, especias cálidas y un suave toque oriental.",
        image: "alnobleameer.png"
    },
    {
        id: 86,
        name: "Fabulous Life 80ML",
        category: "unisex",
        price: 99,
        description: "Cuero aromático con toques de lavanda y almendra",
        color: "#2c3e50",
        badge: "",
        popularity: 84,
        details: "Inspirado en perfiles olfativos de lujo nicho, ofrece un acorde distintivo de cuero, almendra amarga y haba tonka.",
        image: "fabulouslife.png"
    },
    {
        id: 87,
        name: "Rave Now 100ML",
        category: "hombre",
        price: 99,
        description: "Bomba frutal de piña intensa",
        color: "#222f3e",
        badge: "Top Ventas",
        popularity: 93,
        details: "Una fragancia sumamente popular por su potente nota de piña dulce, complementada con abedul y pachulí. Proyección y estela increíbles.",
        image: "ravenow.png"
    },
    {
        id: 88,
        name: "Now Women 100ML",
        category: "mujer",
        price: 99,
        description: "Dulce, avainillado y envolvente",
        color: "#f8a5c2",
        badge: "",
        popularity: 86,
        details: "La contraparte femenina de Rave Now. Un aura muy coqueta y dulce con prominentes notas de frutas rojas y vainilla esponjosa.",
        image: "nowwomen.png"
    },
    {
        id: 89,
        name: "Now White Rave 100ML",
        category: "unisex",
        price: 99,
        description: "Limpio, almizclado y frutal",
        color: "#f5f6fa",
        badge: "",
        popularity: 83,
        details: "Una variante pulcra y luminosa, centrada en cítricos blancos, frutas jugosas y una base de almizcle muy reconfortante.",
        image: "nowwhite.png"
    },
    {
        id: 90,
        name: "Khamrah Dukhan 100ML",
        category: "unisex",
        price: 129,
        description: "Dulzor gourmand con un giro ahumado",
        color: "#833471",
        badge: "Nuevo",
        popularity: 91,
        details: "Añade una faceta rica y ahumada al exitoso ADN de Khamrah, equilibrando el praliné y los dátiles con un toque de maderas oscuras.",
        image: "dukhan.png"
    },
    {
        id: 91,
        name: "The Kingdom 100ML",
        category: "hombre",
        price: 129,
        description: "Lujo oriental, especias y maderas",
        color: "#d4af37",
        badge: "Premium",
        popularity: 88,
        details: "Una fragancia imponente que proyecta poder y elegancia, combinando especias vibrantes, notas resinosas y madera noble.",
        image: "thekingdom.png"
    },
    {
        id: 92,
        name: "Sceptre Malachite 100ML",
        category: "unisex",
        price: 119,
        description: "Verde, frutal y exótico",
        color: "#009432",
        badge: "",
        popularity: 85,
        details: "Maison Alhambra nos trae un aroma vibrante, dulce y tropical con acordes de mango maduro, cítricos picantes y notas verdes vibrantes.",
        image: "sceptremalachite.png"
    },
    {
        id: 93,
        name: "French Avenue Meringue 100ML",
        category: "mujer",
        price: 149,
        description: "Postre de merengue, vainilla y limón",
        color: "#ffeaa7",
        badge: "Tendencia",
        popularity: 89,
        details: "Fragancia gourmand exquisita que huele exactamente a un postre de merengue de limón, con crema de vainilla y toques horneados.",
        image: "frenchavenuemeringue.png"
    },
    {
        id: 94,
        name: "Liquid Brun 100ML",
        category: "hombre",
        price: 149,
        description: "Licor, vainilla amaderada y elegancia",
        color: "#b71540",
        badge: "Popular",
        popularity: 94,
        details: "French Avenue Liquid Brun es una composición seductora para el clima frío. Despliega ricas notas alicoradas, vainilla y especias exóticas cálidas.",
        image: "liquidbrun.png"
    },
    {
        id: 95,
        name: "French Avenue Azzure 100ML",
        category: "hombre",
        price: 149,
        description: "Frescura oceánica y madera profunda",
        color: "#0984e3",
        badge: "",
        popularity: 86,
        details: "Un acuático amaderado sumamente sofisticado y masculino, diseñado para dejar una estela de limpieza y profesionalismo.",
        image: "frenchavenueazzure.png"
    },
    {
        id: 96,
        name: "Supremacy Not Only Intense EDP 100ML",
        category: "hombre",
        price: 149,
        description: "Musgo, manzana y frutos oscuros ahumados",
        color: "#353b48",
        badge: "Top Ventas",
        popularity: 96,
        details: "De Afnan. Una auténtica bestia en proyección. Abre con notas afrutadas muy jugosas y oscuras que secan en un musgo de roble terroso y masculino.",
        image: "supremacynoi.png"
    },
    {
        id: 97,
        name: "Supremacy Collector's Edition 100ML",
        category: "hombre",
        price: 149,
        description: "Equilibrio perfecto entre dulzor y maderas",
        color: "#718093",
        badge: "Exclusivo",
        popularity: 89,
        details: "Edición especial que refina el ADN clásico de Supremacy, aportando mayor cremosidad, maderas suavizadas y una presentación de lujo.",
        image: "supremacycollector.png"
    },
    {
        id: 98,
        name: "Supremacy Not Only Intense Extrait 150ML",
        category: "hombre",
        price: 149,
        description: "Concentración Extrait para duración nuclear",
        color: "#2f3640",
        badge: "Extremo",
        popularity: 92,
        details: "Presentación más grande y de mayor concentración del famoso NOI. Ideal para quienes exigen que el perfume dure más de 12 horas en piel.",
        image: "supremacynoiextrait.png"
    },
    {
        id: 99,
        name: "Tag Uomo Rosso 100ML",
        category: "hombre",
        price: 119,
        description: "Picante, atrevido y muy seductor",
        color: "#c23616",
        badge: "",
        popularity: 83,
        details: "Armaf Tag Uomo Rosso es una fragancia especiada con un fondo cálido, perfecta para citas y climas templados o fríos.",
        image: "taguomorosso.png"
    },
    {
        id: 100,
        name: "Tag Uomo Nero 100ML",
        category: "hombre",
        price: 119,
        description: "Nocturno, maderado y misterioso",
        color: "#1e272e",
        badge: "",
        popularity: 84,
        details: "Un aroma denso y elegante que destaca acordes de cuero ligero, incienso y especias sobre un fondo de cedro.",
        image: "taguomonero.png"
    },
    {
        id: 101,
        name: "Tag Donna Di Terra 100ML",
        category: "mujer",
        price: 119,
        description: "Elegancia floral y terrosa",
        color: "#e1b12c",
        badge: "",
        popularity: 80,
        details: "Una mezcla armoniosa de flores blancas y notas amaderadas sutiles, inspirada en la conexión con la naturaleza.",
        image: "tagdonnaditerra.png"
    },
    {
        id: 102,
        name: "Tag Donna Colorata 100ML",
        category: "mujer",
        price: 119,
        description: "Fresco, afrutado y muy alegre",
        color: "#ff7979",
        badge: "",
        popularity: 82,
        details: "Una fragancia juvenil y efervescente de Armaf, llena de acordes frutales chispeantes y una base suavemente endulzada.",
        image: "tagdonnacolorata.png"
    },
    {
        id: 103,
        name: "Rome Pour Homme 100ML",
        category: "hombre",
        price: 129,
        description: "Frescura italiana cítrica y aromática",
        color: "#7f8fa6",
        badge: "",
        popularity: 85,
        details: "Evoca las costas mediterráneas con una salida cítrica brillante y un secado aromático, clásico y muy masculino.",
        image: "romepourhomme.png"
    },
    {
        id: 104,
        name: "Rome Pour Femme 100ML",
        category: "mujer",
        price: 129,
        description: "Sofisticación pura, vainilla y flores",
        color: "#f8a5c2",
        badge: "",
        popularity: 84,
        details: "Fragancia encantadora y lujosa que equilibra hermosas flores primaverales con un cremoso fondo de vainilla y ámbar.",
        image: "romepourfemme.png"
    },
    {
        id: 105,
        name: "Rome Imagine 100ML",
        category: "unisex",
        price: 129,
        description: "Creativo, frutal y etéreo",
        color: "#9c88ff",
        badge: "",
        popularity: 81,
        details: "Una composición moderna y soñadora que juega con frutas jugosas y almizcles suaves, dejando una estela etérea.",
        image: "romeimagine.png"
    },
    {
        id: 106,
        name: "Rome Yum Yum 100ML",
        category: "mujer",
        price: 129,
        description: "Gourmand dulce de pistacho y caramelo",
        color: "#ffda79",
        badge: "Tendencia",
        popularity: 88,
        details: "Un deleite olfativo que da agua la boca. Rico en acordes dulces, cremosos y de frutos secos lactónicos.",
        image: "romeyumyum.png"
    },
    {
        id: 107,
        name: "Rome Paradox 100ML",
        category: "mujer",
        price: 129,
        description: "Floral blanco luminoso y ambarino",
        color: "#ff9ff3",
        badge: "",
        popularity: 86,
        details: "Brillante y duradera, destaca un corazón de jazmín y flor de azahar envuelto en una moderna base de ámbar.",
        image: "paradox.png"
    },
    {
        id: 108,
        name: "Afnan 9 PM Rebel 100ML",
        category: "hombre",
        price: 135,
        description: "Juventud, dulzor rebelde y manzana",
        color: "#34495e",
        badge: "Nuevo",
        popularity: 91,
        details: "El nuevo flanker de 9 PM. Añade un tono más atrevido y picante al clásico ADN nocturno, ideal para fiestas y vida nocturna.",
        image: "9pmrebel.png"
    },
    {
        id: 109,
        name: "Turathi Electric 90ML",
        category: "hombre",
        price: 149,
        description: "Cítricos vibrantes y energía pura",
        color: "#0abde3",
        badge: "",
        popularity: 87,
        details: "De Afnan. Una propuesta electrizante que potencia las notas frescas y cítricas a un nivel superior, súper refrescante.",
        image: "turathielectric.png"
    },
    {
        id: 110,
        name: "Afnan 9 PM Elixir 100ML",
        category: "hombre",
        price: 149,
        description: "El ADN de la fiesta concentrado al máximo",
        color: "#1e272e",
        badge: "Premium",
        popularity: 94,
        details: "Lleva la dulzura de la manzana y la vainilla de 9 PM a una concentración Elixir densa, rica y con una proyección inmensa.",
        image: "9pmelixir.png"
    },
    {
        id: 111,
        name: "Vulcan Feu 100ML",
        category: "hombre",
        price: 169,
        description: "Especiado ardiente y amaderado",
        color: "#eb2f06",
        badge: "",
        popularity: 82,
        details: "Una fragancia poderosa e imponente. Combina especias cálidas con un fondo de maderas tostadas y resinas profundas.",
        image: "vulcanfeu.png"
    },
    {
        id: 112,
        name: "Art Of Universe 100ML",
        category: "unisex",
        price: 169,
        description: "Exótico, oriental y opulento",
        color: "#2c2c54",
        badge: "",
        popularity: 80,
        details: "Fragancia de lujo oriental que evoca misterio y sofisticación, con ingredientes ricos y una mezcla muy bien equilibrada.",
        image: "universe.png"
    },
    {
        id: 113,
        name: "Bharara Rome Extradoose 100ML",
        category: "unisex",
        price: 129,
        description: "Cítrico extra potente y almizclado",
        color: "#ffb142",
        badge: "Popular",
        popularity: 89,
        details: "Conocido por su explosión frutal/cítrica y su tremenda longevidad en piel, un perfume que se hace notar fácilmente en la habitación.",
        image: "bharararome.png"
    },
    {
        id: 114,
        name: "Kismet Magic 100ML",
        category: "unisex",
        price: 99,
        description: "Cognac, canela, vainilla y praliné",
        color: "#b33939",
        badge: "Top Ventas",
        popularity: 96,
        details: "Maison Alhambra Kismet Magic (Kismet Angel) es una fragancia gourmand embriagadora y cálida, famosa por ser un deleite perfecto para el frío.",
        image: "kismetmagic.png"
    },
    {
        id: 115,
        name: "Nebras 100ML",
        category: "mujer",
        price: 119,
        description: "Cacao rico, vainilla y frutos rojos",
        color: "#ff5252",
        badge: "",
        popularity: 90,
        details: "Lattafa Nebras es un perfume puramente gourmand. Huele a chocolate con vainilla, súper cremoso, reconfortante y delicioso.",
        image: "nebras.png"
    },
    {
        id: 116,
        name: "Pisa 100ML",
        category: "unisex",
        price: 159,
        description: "Elegancia italiana, frutas y maderas blandas",
        color: "#d1ccc0",
        badge: "",
        popularity: 84,
        details: "Una mezcla refinada que rinde homenaje a la Toscana, aportando luminosidad, frutas frescas y maderas súper elegantes.",
        image: "pisa.png"
    },
    {
        id: 117,
        name: "Qimmah For Women 100ML",
        category: "mujer",
        price: 109,
        description: "Café suave, vainilla, cacao y nardos",
        color: "#218c74",
        badge: "",
        popularity: 87,
        details: "Lattafa Qimmah ofrece una combinación sumamente atractiva de café dulce y notas florales blancas, dando un aura sofisticada y cálida.",
        image: "qimmahwomen.png"
    },
    {
        id: 118,
        name: "Musamam White Intense 100ML",
        category: "mujer",
        price: 149,
        description: "Coco, sándalo cremoso y ámbar",
        color: "#f1f2f6",
        badge: "Premium",
        popularity: 91,
        details: "Una de las presentaciones más hermosas de Lattafa. Su aroma es un viaje tropical, lujoso y cremoso que irradia pura elegancia fina.",
        image: "musamamwhite.png"
    },
    {
        id: 119,
        name: "Eclair Affair 100ML",
        category: "mujer",
        price: 159,
        description: "Postre sublime y adictivo",
        color: "#ffda79",
        badge: "Nuevo",
        popularity: 88,
        details: "Fragancia de perfil intensamente dulce, evocando dulces de pastelería con crema, azúcar caramelizada y destellos suaves de flores.",
        image: "eclairaffair.png"
    },
    {
        id: 120,
        name: "Give Me Gourmand Whipped Pleasure 75ML",
        category: "mujer",
        price: 149,
        description: "Crema batida, azúcar y nubes esponjosas",
        color: "#ffb8b8",
        badge: "Tendencia",
        popularity: 89,
        details: "Parte de una deliciosa colección enfocada en los amantes de lo dulce. Huele a crema batida fresca y azucarada, perfecta para el uso diario.",
        image: "whippedpleasure.png"
    },
    
    {
        id: 121,
        name: "Give Me Gourmand Vanilla Freak 75ML",
        category: "mujer",
        price: 149,
        description: "Explosión intensa de vainilla pura",
        color: "#f5cd79",
        badge: "Tendencia",
        popularity: 88,
        details: "Una fragancia totalmente enfocada en las amantes de la vainilla. Ofrece una experiencia dulce, cálida y súper reconfortante como un postre recién horneado.",
        image: "vanillafreak.png"
    },
    {
        id: 122,
        name: "Give Me Gourmand Choco Overdose 75ML",
        category: "mujer",
        price: 149,
        description: "Adicción al chocolate oscuro y cremoso",
        color: "#596275",
        badge: "",
        popularity: 86,
        details: "Huele exactamente a una sobredosis de chocolate. Mezcla ricas notas de cacao amargo con crema y un fondo ligeramente atalcado.",
        image: "chocooverdose.png"
    },
    {
        id: 123,
        name: "Give Me Gourmand Mallow Madness 75ML",
        category: "mujer",
        price: 149,
        description: "Malvaviscos dulces y esponjosos",
        color: "#f8a5c2",
        badge: "",
        popularity: 85,
        details: "Captura el aroma de los malvaviscos tostados. Súper dulce, aireada y perfecta para quienes aman destacar con un aura tierna.",
        image: "mallowmadness.png"
    },
    {
        id: 124,
        name: "Give Me Gourmand Cookie Crave 75ML",
        category: "mujer",
        price: 149,
        description: "Galletas recién horneadas y mantequilla",
        color: "#e1b12c",
        badge: "Nuevo",
        popularity: 87,
        details: "Una fragancia cálida que te envuelve en un aura que evoca galletas de mantequilla y chispas de chocolate fundidas.",
        image: "cookiecrave.png"
    },
    {
        id: 125,
        name: "Give Me Gourmand Berry On Top 75ML",
        category: "mujer",
        price: 149,
        description: "Frutos rojos glaseados y crema",
        color: "#e84118",
        badge: "",
        popularity: 84,
        details: "El toque frutal de la colección. Destaca fresas y frambuesas dulces bañadas en una nube de crema batida.",
        image: "berryontop.png"
    },
    {
        id: 126,
        name: "Khadlaj Island 100ML",
        category: "unisex",
        price: 149,
        description: "Brisa tropical, coco y frutas exóticas",
        color: "#48dbfb",
        badge: "",
        popularity: 83,
        details: "Un viaje directo a una isla paradisíaca. Notas acuáticas mezcladas con frutas maduras y un coco muy cremoso en el secado.",
        image: "khadlajisland.png"
    },
    {
        id: 127,
        name: "Rayhaan Elixir 100ML",
        category: "hombre",
        price: 139,
        description: "Sofisticación oriental y especias oscuras",
        color: "#2f3640",
        badge: "",
        popularity: 81,
        details: "Una fragancia profunda y madura, centrada en maderas resinosas, especias picantes y un toque de cuero suave.",
        image: "rayhaanelixir.png"
    },
    {
        id: 128,
        name: "Philos Pura 100ML",
        category: "unisex",
        price: 99,
        description: "Clon de lujo frutal y almizclado",
        color: "#0abde3",
        badge: "Económico",
        popularity: 89,
        details: "Inspirada en las mejores fragancias nicho, ofrece una potente salida de cítricos y frutas dulces con una base de almizcle blanco muy duradera.",
        image: "philospura.png"
    },
    {
        id: 129,
        name: "Jean Lowe Azure 100ML",
        category: "hombre",
        price: 129,
        description: "Refrescante, marino y amaderado",
        color: "#0984e3",
        badge: "",
        popularity: 86,
        details: "Una propuesta cítrica y oceánica elegante de Maison Alhambra. Ideal para la oficina o el uso diario en climas cálidos.",
        image: "jeanloweazure.png"
    },
    {
        id: 130,
        name: "Jean Lowe Noir 100ML",
        category: "hombre",
        price: 119,
        description: "Madera oscura, cuero e incienso",
        color: "#1e272e",
        badge: "",
        popularity: 84,
        details: "Fragancia misteriosa y profunda, perfecta para la noche. Combina un rico oud domado con especias cálidas.",
        image: "jeanlowenoir.png"
    },
    {
        id: 131,
        name: "Jean Lowe Inmortel 100ML",
        category: "hombre",
        price: 119,
        description: "Jengibre cítrico y ámbar vibrante",
        color: "#e1b12c",
        badge: "Popular",
        popularity: 90,
        details: "Conocida por su frescura chispeante de jengibre y pomelo, que rápidamente evoluciona hacia un ámbar amaderado adictivo.",
        image: "jeanloweinmortel.png"
    },
    {
        id: 132,
        name: "Jean Lowe Vibe 100ML",
        category: "unisex",
        price: 129,
        description: "Elegancia contemporánea y floral suave",
        color: "#9c88ff",
        badge: "Nuevo",
        popularity: 82,
        details: "Una mezcla armoniosa que se adapta a cualquier situación, ofreciendo notas florales modernas y almizcles limpios.",
        image: "jeanlowevibe.png"
    },
    {
        id: 133,
        name: "Jean Lowe Matiere 100ML",
        category: "unisex",
        price: 119,
        description: "Maderas ricas, rosas y oud suave",
        color: "#b33939",
        badge: "",
        popularity: 85,
        details: "Inspirada en perfiles súper exclusivos. Destaca una combinación lujosa de flores oscuras, pachulí y madera de agar cremosa.",
        image: "jeanlowematiere.png"
    },
    {
        id: 134,
        name: "Jean Lowe Fraiche 100ML",
        category: "hombre",
        price: 119,
        description: "Cítricos limpios, acuáticos y revitalizantes",
        color: "#48dbfb",
        badge: "",
        popularity: 88,
        details: "La versión más fresca de la línea. Perfecta para el gimnasio o el calor extremo, destacando su extrema sensación de limpieza.",
        image: "jeanlowefraiche.png"
    },
    {
        id: 135,
        name: "Pharaoh Ramses II 100ML",
        category: "hombre",
        price: 349,
        description: "Opulencia amaderada y azafrán rey",
        color: "#d4af37",
        badge: "Premium",
        popularity: 89,
        details: "Una creación majestuosa de Bharara. Potente, lujosa y especiada, diseñada para impresionar con su estela kilométrica.",
        image: "pharaohramses2.png"
    },
    {
        id: 136,
        name: "Essence Bharara 100ML",
        category: "unisex",
        price: 209,
        description: "Elegancia pura con frutas y almizcle",
        color: "#f5f6fa",
        badge: "",
        popularity: 85,
        details: "Un perfume armonioso y versátil. Deja un aura afrutada muy sutil sobre una base de almizcle blanco impecable.",
        image: "essencebharara.png"
    },
    {
        id: 137,
        name: "Pharaoh Ramses 100ML",
        category: "hombre",
        price: 349,
        description: "Intensidad oriental y misterio ancestral",
        color: "#2f3640",
        badge: "Nicho",
        popularity: 87,
        details: "El antecesor de la línea, con un enfoque más ahumado y oscuro, integrando resinas preciosas e inciensos profundos.",
        image: "pharaohramses.png"
    },
    {
        id: 138,
        name: "Bharara Double Bleu 100ML",
        category: "hombre",
        price: 199,
        description: "Cítrico punzante, limpio y azul",
        color: "#0abde3",
        badge: "",
        popularity: 88,
        details: "La fragancia azul por excelencia de Bharara. Salida explosiva de bergamota y limón, secando en maderas suaves y ambroxan.",
        image: "bhararadoublebleu.png"
    },
    {
        id: 139,
        name: "Bharara King 100ML",
        category: "hombre",
        price: 279,
        description: "Rey de los cumplidos, dulce y frutal",
        color: "#f1c40f",
        badge: "Top Ventas",
        popularity: 97,
        details: "Famoso por su inmensa duración y proyección. Huele a frutas dulces, vainilla y un toque atalcado que atrae todas las miradas.",
        image: "bhararaking.png"
    },
    {
        id: 140,
        name: "Bharara King Gold Edition 100ML",
        category: "hombre",
        price: 239,
        description: "Versión más cálida, ambarina y lujosa",
        color: "#e1b12c",
        badge: "Premium",
        popularity: 92,
        details: "Toma el ADN exitoso de Bharara King y le añade un nivel extra de lujo con resinas doradas y maderas más pronunciadas.",
        image: "bhararakinggold.png"
    },
    {
        id: 141,
        name: "Bharara Onyx 100ML",
        category: "unisex",
        price: 259,
        description: "Misterio ahumado y afrutado oscuro",
        color: "#222f3e",
        badge: "",
        popularity: 86,
        details: "Una propuesta enigmática. Destaca por notas afrutadas densas que se mezclan con un ligero ahumado y maderas nobles.",
        image: "bhararaonyx.png"
    },
    {
        id: 142,
        name: "Bharara King Parfum 100ML",
        category: "hombre",
        price: 249,
        description: "El extracto más potente del Rey",
        color: "#353b48",
        badge: "Extremo",
        popularity: 94,
        details: "Concentración Parfum para quienes buscan rendimiento nuclear. Oscurece el dulzor frutal con toques más terrosos y masculinos.",
        image: "bhararakingparfum.png"
    },
    {
        id: 143,
        name: "Bharara Chocolate 100ML",
        category: "unisex",
        price: 249,
        description: "Chocolate con leche puro y reconfortante",
        color: "#833471",
        badge: "",
        popularity: 89,
        details: "Una joya gourmand. Literalmente huele a barra de chocolate con leche y toques de vainilla cremosa que duran todo el día.",
        image: "bhararachocolate.png"
    },
    {
        id: 144,
        name: "Afeef 100ML",
        category: "hombre",
        price: 149,
        description: "Herbal, amaderado y sumamente elegante",
        color: "#218c74",
        badge: "",
        popularity: 81,
        details: "Una fragancia formal y madura. Mezcla notas de lavanda fresca, maderas nobles y un suave toque especiado oriental.",
        image: "afeef.png"
    },
    {
        id: 145,
        name: "Emaan 100ML",
        category: "mujer",
        price: 119,
        description: "Flores blancas seductoras y nardos",
        color: "#4a69bd",
        badge: "",
        popularity: 84,
        details: "Lattafa Emaan es una fragancia floral opulenta, donde destacan los nardos cremosos, jazmín y un sutil fondo de vainilla.",
        image: "emaan.png"
    },
    {
        id: 146,
        name: "Haya 100ML",
        category: "mujer",
        price: 119,
        description: "Champán de fresa y rosas delicadas",
        color: "#f8a5c2",
        badge: "",
        popularity: 88,
        details: "Un perfume muy coqueto y femenino de Lattafa. Evoca la sensación de brindar con champán rosado y fresas dulces.",
        image: "haya.png"
    },
    {
        id: 147,
        name: "Eclaire Banoffi 100ML",
        category: "mujer",
        price: 149,
        description: "Postre dulce de plátano y caramelo",
        color: "#ffda79",
        badge: "Nuevo",
        popularity: 87,
        details: "La última locura gourmand de Lattafa. Recrea fielmente el aroma de una tarta banoffee, con plátano, crema y mucho caramelo.",
        image: "eclaire.png"
    },
    {
        id: 148,
        name: "Eclaire Lattafa 100ML",
        category: "mujer",
        price: 125,
        description: "Leche azucarada y almendras dulces",
        color: "#feca57",
        badge: "Tendencia",
        popularity: 95,
        details: "Famoso a nivel mundial por su aroma adictivo a leche caliente con miel, caramelo y almendras tiernas.",
        image: "eclairelattafa.png"
    },
    {
        id: 149,
        name: "Eclaire Pistache 100ML",
        category: "mujer",
        price: 149,
        description: "Helado cremoso de pistacho",
        color: "#78e08f",
        badge: "Nuevo",
        popularity: 90,
        details: "Variante que introduce un rico y cremoso acorde de pistacho tostado, combinado con helado de vainilla y praliné.",
        image: "eclairepistache.png"
    },
    {
        id: 150,
        name: "Mayar 100ML",
        category: "mujer",
        price: 119,
        description: "Lichi chispeante y rosa fresca",
        color: "#ff6b81",
        badge: "Popular",
        popularity: 89,
        details: "Una salida frutal vibrante protagonizada por lichi jugoso y frambuesas, ideal para climas cálidos y días soleados.",
        image: "mayar.png"
    },
    {
        id: 151,
        name: "Mayar Natural Intense 100ML",
        category: "mujer",
        price: 119,
        description: "Frescura verde, higo y agua de coco",
        color: "#7bed9f",
        badge: "",
        popularity: 86,
        details: "Una versión diferente del ADN Mayar. Más acuática, verde y exótica, con prominentes notas de higo fresco y sándalo.",
        image: "mayarnatural.png"
    },
    {
        id: 152,
        name: "Mayar Lattafa (Yum Yum) 100ML",
        category: "mujer",
        price: 159,
        description: "Explosión dulce y juvenil",
        color: "#ff7979",
        badge: "",
        popularity: 83,
        details: "Una presentación premium de la línea Mayar que potencia los acordes más dulces y golosos, haciéndola muy juguetona.",
        image: "mayaryumyum.png"
    },
    {
        id: 153,
        name: "Chaos Extrait 100ML",
        category: "unisex",
        price: 169,
        description: "Intensidad maderada e impredecible",
        color: "#353b48",
        badge: "Nicho",
        popularity: 82,
        details: "Una composición nicho atrevida. Combina maderas secas, notas ahumadas y un corazón especiado que rinde homenaje al misterio.",
        image: "chaosextrait.png"
    },
    {
        id: 154,
        name: "Atlantis Extrait 100ML",
        category: "unisex",
        price: 169,
        description: "Frescura oceánica en concentración extrema",
        color: "#0984e3",
        badge: "",
        popularity: 85,
        details: "Una bomba marina que, a pesar de ser fresca, cuenta con una duración abrumadora gracias a su alta concentración de aceites.",
        image: "atlantisextrait.png"
    },
    {
        id: 155,
        name: "Aether Extrait 100ML",
        category: "unisex",
        price: 169,
        description: "Aroma etéreo, limpio y almizclado",
        color: "#f5f6fa",
        badge: "",
        popularity: 84,
        details: "Evoca las nubes y el aire fresco. Muy atalcada, suave y elegante, con notas de almizcle blanco y flores ligeras.",
        image: "aetherextrait.png"
    },
    {
        id: 156,
        name: "Fakhar Extrait Gold 100ML",
        category: "hombre",
        price: 109,
        description: "Elegancia dorada, nardos y ámbar",
        color: "#f1c40f",
        badge: "Top Ventas",
        popularity: 91,
        details: "Clon muy famoso de Lattafa con un perfil floral masculino (nardos) combinado con maderas de cuero y ámbar salado.",
        image: "fakharextraitgold.png"
    },
    {
        id: 157,
        name: "Fakhar Black 100ML",
        category: "hombre",
        price: 109,
        description: "Manzana verde fresca y lavanda",
        color: "#2f3640",
        badge: "Popular",
        popularity: 93,
        details: "El rey del día a día de Lattafa. Fresco, versátil y aromático, mezclando manzana, lavanda y un fondo de haba tonka.",
        image: "fakharblack.png"
    },
    {
        id: 158,
        name: "Fakhar Rose 100ML",
        category: "mujer",
        price: 109,
        description: "Chicle de uva, flores blancas y nardos",
        color: "#e84393",
        badge: "",
        popularity: 90,
        details: "Una fragancia sumamente femenina y radiante. Abre con un dulzor afrutado similar a la uva y se asienta en flores blancas bellísimas.",
        image: "fakharrose.png"
    },
    {
        id: 159,
        name: "9 AM Unisex 100ML",
        category: "unisex",
        price: 119,
        description: "Cítricos luminosos y manzana verde",
        color: "#fbc531",
        badge: "",
        popularity: 86,
        details: "Afnan 9 AM es un perfume de día limpio, vibrante y muy pulcro, que te da un golpe de energía por la mañana.",
        image: "afnan9am.png"
    },
    {
        id: 160,
        name: "9 AM Pour Femme 100ML",
        category: "mujer",
        price: 119,
        description: "Flores suaves y frutas alegres",
        color: "#ff9ff3",
        badge: "",
        popularity: 84,
        details: "La versión femenina que añade peonías, rosas y un secado almizclado tierno a la frescura vibrante del ADN 9 AM.",
        image: "afnan9ampourfemme.png"
    },
    
    {
        id: 161,
        name: "9 PM Pour Femme 100ML",
        category: "mujer",
        price: 139,
        description: "Versión femenina, dulce y sofisticada",
        color: "#ff9ff3",
        badge: "",
        popularity: 87,
        details: "Afnan adapta el éxito de 9 PM para el público femenino. Un aroma nocturno, floral y con toques deliciosos de frutos rojos y vainilla.",
        image: "9pmpourfemme.png"
    },
    {
        id: 162,
        name: "Vintage Radio 100ML",
        category: "unisex",
        price: 129,
        description: "Ciruela suave, palo santo y madera",
        color: "#d1ccc0",
        badge: "Tendencia",
        popularity: 92,
        details: "De Lattafa. Una fragancia nicho en toda regla. Famosa por su nota relajante de ciruela mezclada con palo santo, creando un aura elegante y reconfortante.",
        image: "vintageradio.png"
    },
    {
        id: 163,
        name: "His Confession 100ML",
        category: "hombre",
        price: 139,
        description: "Masculinidad moderna y especiada",
        color: "#2f3640",
        badge: "Nuevo",
        popularity: 88,
        details: "Lattafa His Confession es una propuesta audaz, con un corazón rico en especias y un secado maderado denso para dejar una estela imponente.",
        image: "hisconfession.png"
    },
    {
        id: 164,
        name: "Liam Grey 100ML",
        category: "unisex",
        price: 119,
        description: "Té negro, higo y sándalo",
        color: "#718093",
        badge: "Popular",
        popularity: 90,
        details: "Inspirada en fragancias nicho, Liam Grey destaca por su aroma cálido a té negro cardamomo e higo fresco. Sumamente acogedora y versátil.",
        image: "liamgrey.png"
    },
    {
        id: 165,
        name: "Liam Blue Shine 100ML",
        category: "hombre",
        price: 119,
        description: "Frescura azul, romero y notas marinas",
        color: "#0abde3",
        badge: "",
        popularity: 85,
        details: "Una fragancia pulcra y vibrante. Salida marina y aromática que resulta excelente para el gimnasio o días de trabajo en la oficina.",
        image: "liamblueshine.png"
    },
    {
        id: 166,
        name: "Her Confession 100ML",
        category: "mujer",
        price: 159,
        description: "Flores intensas y encanto seductor",
        color: "#e84393",
        badge: "Nuevo",
        popularity: 89,
        details: "Compañera de His Confession. Un perfume cautivador con acordes dulces, vainilla y un bouquet floral que derrocha feminidad y seguridad.",
        image: "herconfession.png"
    },
    {
        id: 167,
        name: "Maahir Legacy 100ML",
        category: "hombre",
        price: 119,
        description: "Menta fría, lima y frescura efervescente",
        color: "#dcdde1",
        badge: "Top Ventas",
        popularity: 94,
        details: "Lattafa Maahir Legacy es un cóctel helado de menta, lima y lavanda. Tremendamente revitalizante e ideal para combatir el calor.",
        image: "maahirlegacy.png"
    },
    {
        id: 168,
        name: "Maahir Black Edition 100ML",
        category: "hombre",
        price: 109,
        description: "Ahumado, oscuro y sumamente rudo",
        color: "#1e272e",
        badge: "",
        popularity: 83,
        details: "No apto para débiles. Una bomba de humo, incienso, cuero y maderas oscuras que proyecta masculinidad misteriosa.",
        image: "maahirblack.png"
    },
    {
        id: 169,
        name: "Maahir EDP 100ML",
        category: "unisex",
        price: 109,
        description: "Oriental, floral y ligeramente dulce",
        color: "#e1b12c",
        badge: "",
        popularity: 82,
        details: "El clásico Maahir (dorado) abre con notas ricas de frutos rojos y azafrán, secando en un suave y lujoso sándalo oriental.",
        image: "maahiredp.png"
    },
    {
        id: 170,
        name: "Najdia Intense 100ML",
        category: "hombre",
        price: 179,
        description: "Acuático, hoja de canela y manzana",
        color: "#2bcbba",
        badge: "Premium",
        popularity: 86,
        details: "Una versión más intensa y concentrada de Najdia, famosa por su salida súper fresca que recuerda al olor del chicle o la manzana verde acuática.",
        image: "najdiaintense.png"
    },
    {
        id: 171,
        name: "Sehr Lattafa 100ML",
        category: "unisex",
        price: 149,
        description: "Vainilla oscura y almendra tostada",
        color: "#576574",
        badge: "Tendencia",
        popularity: 89,
        details: "Un lanzamiento que ha robado corazones. Aroma muy rico y licoroso a extracto de vainilla negra con un toque de almendra crujiente.",
        image: "sehrlattafa.png"
    },
    {
        id: 172,
        name: "Midnight Dubai Night 100ML",
        category: "unisex",
        price: 159,
        description: "Magia nocturna del medio oriente",
        color: "#2c2c54",
        badge: "",
        popularity: 84,
        details: "Composición exótica que recrea la sofisticación de Dubái de noche. Notas de Oud refinado, especias vibrantes y dulzor ambarino.",
        image: "midnightdubai.png"
    },
    {
        id: 173,
        name: "Veneno Scarlet 100ML",
        category: "mujer",
        price: 179,
        description: "Rosas rojas, misterio y sensualidad",
        color: "#c23616",
        badge: "",
        popularity: 85,
        details: "Una fragancia pasional y profunda, donde las rosas aterciopeladas se abrazan a especias y una base cálida muy adictiva.",
        image: "venenoscarlet.png"
    },
    {
        id: 174,
        name: "Veneno Black 100ML",
        category: "hombre",
        price: 179,
        description: "Fuerza, cuero y atracción magnética",
        color: "#111111",
        badge: "",
        popularity: 82,
        details: "Atrevida y dominante. Veneno Black deja una impresión inolvidable con sus acordes de cuero negro, maderas y resinas oscuras.",
        image: "venenoblack.png"
    },
    {
        id: 175,
        name: "Veneno Blanco 100ML",
        category: "unisex",
        price: 179,
        description: "Pura, almizclada y celestial",
        color: "#f5f6fa",
        badge: "",
        popularity: 81,
        details: "Elegancia en formato blanco. Destaca por su aroma pulcro y cremoso a flores blancas y almizcles esponjosos.",
        image: "venenoblanco.png"
    },
    {
        id: 176,
        name: "Glacier Le Noir 100ML",
        category: "hombre",
        price: 109,
        description: "Elegancia amaderada para la noche",
        color: "#2f3640",
        badge: "",
        popularity: 87,
        details: "Maison Alhambra Glacier Le Noir es un aroma rico y cálido, que evoca elegancia nocturna mediante cardamomo y maderas cremosas.",
        image: "glacierlenoir.png"
    },
    {
        id: 177,
        name: "Glacier Bold 100ML",
        category: "hombre",
        price: 109,
        description: "Fresco, coco y piña tropical",
        color: "#fbc531",
        badge: "Popular",
        popularity: 93,
        details: "Inspirada en el éxito nicho de coco y piña. Es una fragancia exquisita, juguetona y muy veraniega que atrae muchísimos cumplidos.",
        image: "glacierbold.png"
    },
    {
        id: 178,
        name: "Glacier Pour Homme 100ML",
        category: "hombre",
        price: 109,
        description: "Fresco, vigorizante y limpio",
        color: "#4cd137",
        badge: "",
        popularity: 85,
        details: "La versión verde de la línea Glacier, aportando frescura mentolada y cítrica muy revitalizante para el día a día.",
        image: "glacierpourhomme.png"
    },
    {
        id: 179,
        name: "Game Of Spades Bonus 100ML",
        category: "unisex",
        price: 259,
        description: "Frutas vibrantes y almizcle lujoso",
        color: "#3498db",
        badge: "Nicho",
        popularity: 88,
        details: "Una línea exclusiva de lujo. Bonus destaca por ser sumamente vibrante y luminosa, perfecta para destacar con clase.",
        image: "gameofspadesbonus.png"
    },
    {
        id: 180,
        name: "Game Of Spades Opal 100ML",
        category: "unisex",
        price: 249,
        description: "Ámbar empolvado y elegancia",
        color: "#bdc3c7",
        badge: "",
        popularity: 85,
        details: "Opal ofrece una experiencia olfativa delicada y atalcada, mezclando florales sutiles y maderas blancas reconfortantes.",
        image: "gameofspadesopal.png"
    },
    {
        id: 181,
        name: "Game Of Spades Rouge Extrait 100ML",
        category: "unisex",
        price: 239,
        description: "Azafrán, almendras y lujo extremo",
        color: "#e74c3c",
        badge: "Premium",
        popularity: 91,
        details: "Fragancia de nivel extracto sumamente potente, con el famoso ADN del algodón de azúcar, azafrán amargo y maderas resinosas.",
        image: "gameofspadesrouge.png"
    },
    {
        id: 182,
        name: "Game Of Spades Wildcard 100ML",
        category: "unisex",
        price: 239,
        description: "Impredecible, especiado y cautivador",
        color: "#f39c12",
        badge: "",
        popularity: 84,
        details: "Para personalidades audaces, Wildcard juega con notas picantes y un fondo amaderado que evoluciona constantemente en la piel.",
        image: "gameofspadeswildcard.png"
    },
    {
        id: 183,
        name: "Game Of Spades Emerald 90ML",
        category: "unisex",
        price: 259,
        description: "Verde exuberante y frescura aromática",
        color: "#2ecc71",
        badge: "",
        popularity: 86,
        details: "Se caracteriza por sus acordes herbales limpios y un toque de musgo blanco que proporciona una sensación de pureza absoluta.",
        image: "gameofspadesemerald.png"
    },
    {
        id: 184,
        name: "Game Of Spades Full House 100ML",
        category: "unisex",
        price: 249,
        description: "Complejidad oriental rica y ambarina",
        color: "#9b59b6",
        badge: "",
        popularity: 83,
        details: "Una mezcla ganadora de Oud domado, vainilla y especias dulces que envuelve al portador en un aura de éxito y riqueza.",
        image: "gameofspadesfullhouse.png"
    },
    {
        id: 185,
        name: "Game Of Spades Royale 100ML",
        category: "unisex",
        price: 239,
        description: "Regia, majestuosa y de enorme estela",
        color: "#c0392b",
        badge: "",
        popularity: 82,
        details: "Una fragancia digna de la realeza. Maderas, cuero y un toque floral profundo que proyecta un poder incuestionable.",
        image: "gameofspadesroyale.png"
    },
    {
        id: 186,
        name: "Game Of Spades Diamond 100ML",
        category: "unisex",
        price: 269,
        description: "Brillante, cítrica y cristalina",
        color: "#ecf0f1",
        badge: "Exclusivo",
        popularity: 87,
        details: "Transparente y lujosa. Diamond abre con cítricos punzantes y evoluciona a un corazón luminoso que dura largas horas.",
        image: "gameofspadesdiamond.png"
    },
    {
        id: 187,
        name: "Game Of Spades Jackpot 100ML",
        category: "unisex",
        price: 239,
        description: "Dulce, afrutada y adictiva",
        color: "#f1c40f",
        badge: "Popular",
        popularity: 89,
        details: "El premio mayor para quienes aman los perfumes llamativos. Dulce intenso con frutas tropicales y un secado cálido.",
        image: "gameofspadesjackpot.png"
    },
    {
        id: 188,
        name: "Game Of Spades No Limit 100ML",
        category: "unisex",
        price: 279,
        description: "Duración infinita y aura magnética",
        color: "#34495e",
        badge: "Extremo",
        popularity: 85,
        details: "Fiel a su nombre, esta fragancia posee una concentración altísima que fija el aroma amaderado en la ropa y piel por días.",
        image: "gameofspadesnolimit.png"
    },
    {
        id: 189,
        name: "Game Of Spades Bid 100ML",
        category: "unisex",
        price: 229,
        description: "Suave, cotidiana y elegante",
        color: "#e67e22",
        badge: "",
        popularity: 81,
        details: "Una apuesta segura para el día a día. Aromática y muy fácil de gustar, combinando notas equilibradas para toda ocasión.",
        image: "gameofspadesbid.png"
    },
    {
        id: 190,
        name: "Game Of Spades Ruby 100ML",
        category: "unisex",
        price: 259,
        description: "Rosas dulces y frutos rojos",
        color: "#e84118",
        badge: "",
        popularity: 84,
        details: "Una gema olfativa centrada en rosas frescas bañadas en jarabe de frutas rojas y una sutil capa de almizcle limpio.",
        image: "gameofspadesruby.png"
    },
    {
        id: 191,
        name: "Game Of Spades Double Bonus 100ML",
        category: "unisex",
        price: 259,
        description: "Extremadamente dulce y golosa",
        color: "#8c7ae6",
        badge: "",
        popularity: 82,
        details: "Redobla la intensidad de la línea. Aroma denso y dulce que cautiva especialmente en climas frescos o eventos nocturnos.",
        image: "gameofspadesdoublebonus.png"
    },
    {
        id: 192,
        name: "Game Of Spades Topaz 90ML",
        category: "unisex",
        price: 259,
        description: "Cálida, ambarina y misteriosa",
        color: "#d35400",
        badge: "",
        popularity: 80,
        details: "Evoca atardeceres otoñales con notas de ámbar profundo, especias doradas y un ligerísimo toque incensado.",
        image: "gameofspadestopaz.png"
    },
    {
        id: 193,
        name: "Game Of Spades Boston 100ML",
        category: "unisex",
        price: 249,
        description: "Sofisticación urbana y maderas",
        color: "#7f8c8d",
        badge: "",
        popularity: 83,
        details: "Inspirada en el estilo citadino y elegante, destaca un acorde de madera de sándalo pulida y lavanda moderna.",
        image: "gameofspadesboston.png"
    },
    {
        id: 194,
        name: "Game Of Spades High Roller 100ML",
        category: "unisex",
        price: 259,
        description: "Apuesta arriesgada y carismática",
        color: "#2c3e50",
        badge: "",
        popularity: 85,
        details: "Una combinación rica y potente que no pasa desapercibida, hecha para acaparar la atención en habitaciones grandes.",
        image: "gameofspadeshighroller.png"
    },
    {
        id: 195,
        name: "Game Of Spades King 100ML",
        category: "unisex",
        price: 269,
        description: "Opulencia pura, el rey de la colección",
        color: "#f39c12",
        badge: "Premium",
        popularity: 89,
        details: "El máximo estandarte de la casa. Mezcla magistral de maderas preciosas, resinas, cuero y un dulce frutal abrumador.",
        image: "gameofspadesking.png"
    },
    {
        id: 196,
        name: "Game Of Spades Moon 100ML",
        category: "unisex",
        price: 249,
        description: "Plácida, atalcada y soñadora",
        color: "#ecf0f1",
        badge: "",
        popularity: 81,
        details: "Como la luz de la luna, es una fragancia suave, reconfortante y atalcada, predominando almizcles blancos muy limpios.",
        image: "gameofspadesmoon.png"
    },
    {
        id: 197,
        name: "Arabia Sky 100ML",
        category: "unisex",
        price: 165,
        description: "Inmensidad azul y fresca brisa",
        color: "#0abde3",
        badge: "",
        popularity: 84,
        details: "Una fragancia refrescante de la línea Arabia que transmite la sensación de un cielo despejado, con brisa limpia y cítricos vibrantes.",
        image: "arabiasky.png"
    },
    {
        id: 198,
        name: "Island Vanilla Dunes 100ML",
        category: "unisex",
        price: 149,
        description: "Vainilla salada y arena cálida",
        color: "#f5cd79",
        badge: "Nuevo",
        popularity: 86,
        details: "Aroma sumamente original que combina la dulce vainilla con un toque mineral, evocando dunas de arena tibia en una isla.",
        image: "islandvanilladunes.png"
    },
    {
        id: 199,
        name: "Turathi Blue 100ML",
        category: "hombre",
        price: 129,
        description: "Pomelo jugoso y ámbar chispeante",
        color: "#3498db",
        badge: "Más vendido",
        popularity: 97,
        details: "De Afnan. Extraordinario perfume azul, muy elogiado por su salida a toronja (pomelo) chispeante, combinado con maderas de altísima calidad.",
        image: "turathiblue.png"
    },
    {
        id: 200,
        name: "Miss Armaf Chic 100ML",
        category: "mujer",
        price: 149,
        description: "Feminidad moderna, rosa y lichi",
        color: "#ffcccc",
        badge: "",
        popularity: 85,
        details: "Armaf trae una fragancia juvenil y sumamente chic, mezclando notas de lichi, rosa turca y un fondo de vainilla y almizcle.",
        image: "missarmafchic.png"
    },
    
    {
        id: 201,
        name: "Club de Nuit Intense Man EDP 200ML",
        category: "hombre",
        price: 189,
        description: "Versión gigante del rey de los cumplidos",
        color: "#2d3436",
        badge: "Tamaño Grande",
        popularity: 99,
        details: "El clásico aroma cítrico y ahumado de abedul de Armaf, ahora en una presentación de 200ml para que nunca te falte.",
        image: "cdnintense200.png"
    },
    {
        id: 202,
        name: "Afnan 9 PM 150ML",
        category: "hombre",
        price: 159,
        description: "La fiera nocturna en tamaño XL",
        color: "#222f3e",
        badge: "Tamaño Grande",
        popularity: 95,
        details: "Presentación de 150ml de la famosa fragancia avainillada y fiestera, ideal para uso constante.",
        image: "afnan9pm150.png"
    },
    {
        id: 203,
        name: "Bharara King 200ML",
        category: "hombre",
        price: 259,
        description: "El rey frutal y dulce al doble de tamaño",
        color: "#f1c40f",
        badge: "Tamaño Grande",
        popularity: 94,
        details: "Tremenda longevidad y estela en una botella imponente de 200ml para los verdaderos amantes de Bharara.",
        image: "bhararaking200.png"
    },
    {
        id: 204,
        name: "Set 3PCS Afnan 9 PM",
        category: "hombre",
        price: 169,
        description: "Cofre de regalo nocturno",
        color: "#34495e",
        badge: "Set / Cofre",
        popularity: 92,
        details: "Incluye la fragancia principal junto con desodorante y gel de ducha para potenciar la duración del aroma.",
        image: "set9pm.png"
    },
    {
        id: 205,
        name: "Set 3PCS Asad",
        category: "hombre",
        price: 149,
        description: "Cofre especiado y masculino",
        color: "#2f3542",
        badge: "Set / Cofre",
        popularity: 90,
        details: "El regalo perfecto para hombre. Contiene el perfume Asad de Lattafa acompañado de complementos aromáticos.",
        image: "setasad.png"
    },
    {
        id: 206,
        name: "Set Ariana Grande Cloud 3 PCS",
        category: "mujer",
        price: 249,
        description: "Cofre de nubes y crema batida",
        color: "#74b9ff",
        badge: "Set / Cofre",
        popularity: 93,
        details: "Un hermoso set que incluye la fragancia Cloud de 100ml junto con crema corporal y un perfumero de viaje.",
        image: "setcloud.png"
    },
    {
        id: 207,
        name: "Set Moschino Toy Boy 3 PCS",
        category: "hombre",
        price: 249,
        description: "Cofre floral y especiado único",
        color: "#2d3436",
        badge: "Set / Cofre",
        popularity: 88,
        details: "El icónico oso negro en un set espectacular que incluye la fragancia de 100ml y accesorios de la marca.",
        image: "settoyboy.png"
    },
    {
        id: 208,
        name: "Yves Saint Laurent Libre EDP 90ML",
        category: "mujer",
        price: 399,
        description: "Lavanda, flor de azahar y elegancia libre",
        color: "#e1b12c",
        badge: "Diseñador",
        popularity: 98,
        details: "Un perfume revolucionario que mezcla la lavanda francesa con la sensualidad de la flor de azahar marroquí.",
        image: "ysllibre.png"
    },
    {
        id: 209,
        name: "Yves Saint Laurent Y EDP 100ML",
        category: "hombre",
        price: 399,
        description: "Fresca manzana verde, salvia y haba tonka",
        color: "#3867d6",
        badge: "Diseñador",
        popularity: 97,
        details: "Representa el hombre moderno. Es afrutada, herbal y maderada en su base; perfecta para cualquier clima u ocasión.",
        image: "yslyedp.png"
    },
    {
        id: 210,
        name: "Yves Saint Laurent Y EDP Intense 100ML",
        category: "hombre",
        price: 389,
        description: "Maderas más profundas y enebro",
        color: "#273c75",
        badge: "Diseñador",
        popularity: 90,
        details: "Una versión que reduce la dulzura de la manzana e incrementa las notas amaderadas y aromáticas, haciéndola más madura.",
        image: "yslyintense.png"
    },
    {
        id: 211,
        name: "Azzaro The Most Wanted Parfum 100ML",
        category: "hombre",
        price: 299,
        description: "Vainilla intensa, jengibre y maderas oscuras",
        color: "#2f3640",
        badge: "Popular",
        popularity: 94,
        details: "Una fragancia sumamente adictiva y ardiente. Su salida picante de jengibre se funde en un corazón de vainilla que dura horas.",
        image: "azzaromostwantedparfum.png"
    },
    {
        id: 212,
        name: "Azzaro The Most Wanted Elixir 100ML",
        category: "hombre",
        price: 329,
        description: "Extrema calidez y licor de cereza",
        color: "#c23616",
        badge: "Premium",
        popularity: 91,
        details: "La versión Elixir ofrece un perfil olfativo profundo y goloso, ideal para llamar la atención en la vida nocturna.",
        image: "azzaromostwantedelixir.png"
    },
    {
        id: 213,
        name: "Azzaro Wanted By Night EDP 100ML",
        category: "hombre",
        price: 269,
        description: "Canela, tabaco y frutas especiadas",
        color: "#e67e22",
        badge: "",
        popularity: 92,
        details: "Un clásico para fiestas. Frutal en su salida, secando en una base muy rica de tabaco, canela y cedro rojo.",
        image: "azzarowantedbynight.png"
    },
    {
        id: 214,
        name: "Jean Paul Gaultier Scandal EDT 100ML",
        category: "hombre",
        price: 329,
        description: "Caramelo, haba tonka y mandarina",
        color: "#7f8fa6",
        badge: "Diseñador",
        popularity: 93,
        details: "Un golpe dulce y aromático, súper juvenil y vibrante. Destaca por su corona en el frasco y su enorme estela dulce.",
        image: "scandalpourhomme.png"
    },
    {
        id: 215,
        name: "Jean Paul Gaultier Scandal Le Parfum 100ML",
        category: "hombre",
        price: 379,
        description: "Geranio, haba tonka y sándalo negro",
        color: "#2c2c54",
        badge: "",
        popularity: 89,
        details: "Más denso y amaderado que el original. Pierde parte del dulzor caramelo para ganar un sándalo oscuro muy seductor.",
        image: "scandalleparfum.png"
    },
    {
        id: 216,
        name: "Jean Paul Gaultier Le Male Elixir 125ML",
        category: "hombre",
        price: 389,
        description: "Miel dorada, lavanda y tabaco",
        color: "#d4af37",
        badge: "Top Ventas",
        popularity: 98,
        details: "Una obra maestra de dulzor invernal. Combina miel, haba tonka, lavanda y menta en una concentración que quema los sentidos.",
        image: "maleelixir.png"
    },
    {
        id: 217,
        name: "Jean Paul Gaultier Le Male Le Parfum 125ML",
        category: "hombre",
        price: 389,
        description: "Cardamomo, iris y vainilla oscura",
        color: "#1e272e",
        badge: "Popular",
        popularity: 96,
        details: "La elegancia hecha perfume. El perfil marinero clásico elevado al lujo con especias cálidas y un fondo oriental.",
        image: "lemaleleparfum.png"
    },
    {
        id: 218,
        name: "Jean Paul Gaultier Le Beau EDT 125ML",
        category: "hombre",
        price: 329,
        description: "Coco fresco, bergamota y haba tonka",
        color: "#0abde3",
        badge: "Diseñador",
        popularity: 94,
        details: "El verano en una botella. Es dulce pero fresco, con una nota de coco súper prominente ideal para la playa.",
        image: "lebeauedt.png"
    },
    {
        id: 219,
        name: "Jean Paul Gaultier Paradise Garden 125ML",
        category: "hombre",
        price: 429,
        description: "Higo verde, coco y menta acuática",
        color: "#20bf6b",
        badge: "Tendencia",
        popularity: 95,
        details: "Un lanzamiento súper codiciado. Añade una nota de higo muy natural al ADN de coco, dándole un toque tropical y herbal exquisito.",
        image: "paradisegarden.png"
    },
    {
        id: 220,
        name: "Versace Eros EDP 100ML",
        category: "hombre",
        price: 259,
        description: "Menta, manzana, vainilla y ambroxan",
        color: "#0984e3",
        badge: "Clásico",
        popularity: 95,
        details: "El Dios del Amor. Una bomba de fiesta y seducción que combina frescura extrema en la salida con un fondo de vainilla dulce y duradera.",
        image: "eros.png"
    },
    {
        id: 221,
        name: "Versace Eros Flame EDP 100ML",
        category: "hombre",
        price: 259,
        description: "Cítricos picantes, mandarina y vainilla",
        color: "#eb2f06",
        badge: "",
        popularity: 92,
        details: "Versión cálida del Eros. Introduce mandarina italiana, pimienta negra y romero silvestre, creando un contraste ardiente y dulce.",
        image: "erosflame.png"
    },
    {
        id: 222,
        name: "Versace Dylan Blue 100ML",
        category: "hombre",
        price: 239,
        description: "Incienso, notas acuáticas y ambroxan",
        color: "#192a56",
        badge: "Versátil",
        popularity: 94,
        details: "Una fragancia azul que funciona para todo. Fresca por los cítricos y notas marinas, pero con carácter gracias al papiro y el incienso.",
        image: "dylanblue.png"
    },
    {
        id: 223,
        name: "Versace Eau Fraiche 100ML",
        category: "hombre",
        price: 279,
        description: "Limón blanco, carambola y maderas de cedro",
        color: "#74b9ff",
        badge: "",
        popularity: 89,
        details: "Pura frescura para el calor extremo. Súper ligera, acuática y brillante, perfecta para días soleados.",
        image: "eaufraiche.png"
    },
    {
        id: 224,
        name: "Valentino Donna Born in Roma EDP 100ML",
        category: "mujer",
        price: 439,
        description: "Grosella negra, jazmín y vainilla Bourbon",
        color: "#e84393",
        badge: "Top Ventas",
        popularity: 97,
        details: "Un floriental moderno y alta costura. Resalta una salida afrutada y vibrante sobre una base amaderada de vainilla súper elegante.",
        image: "borninromamujer.png"
    },
    {
        id: 225,
        name: "Valentino Uomo Born in Roma EDT 100ML",
        category: "hombre",
        price: 369,
        description: "Hojas de violeta, jengibre y vetiver",
        color: "#2f3640",
        badge: "Diseñador",
        popularity: 93,
        details: "Una celebración de la frescura urbana y la elegancia romana, con notas aromáticas ahumadas y toques minerales únicos.",
        image: "borninromahombre.png"
    },
    {
        id: 226,
        name: "Valentino Born in Roma Intense Uomo 100ML",
        category: "hombre",
        price: 429,
        description: "Vainilla seductora y lavanda",
        color: "#1e272e",
        badge: "Premium",
        popularity: 94,
        details: "Versión más oscura y densa, ideal para salidas nocturnas. La vainilla y el vetiver se roban el protagonismo.",
        image: "borninromaintense.png"
    },
    {
        id: 227,
        name: "Emporio Armani Stronger With You Intensely 100ML",
        category: "hombre",
        price: 339,
        description: "Toffee, canela y vainilla adictiva",
        color: "#b33939",
        badge: "Tendencia",
        popularity: 98,
        details: "El gourmand por excelencia de Armani. Un aroma a caramelo toffee y especias cálidas que derrite en climas fríos.",
        image: "strongerintensely.png"
    },
    {
        id: 228,
        name: "Emporio Armani Stronger With You Parfum 100ML",
        category: "hombre",
        price: 379,
        description: "Castañas glaseadas y maderas densas",
        color: "#84817a",
        badge: "",
        popularity: 92,
        details: "La versión más madura y concentrada. Baja un poco el nivel de azúcar y sube la resina y maderas para una masculinidad seria.",
        image: "strongerparfum.png"
    },
    {
        id: 229,
        name: "Ariana Grande Cloud EDP 100ML",
        category: "mujer",
        price: 199,
        description: "Crema batida, praliné y lavanda",
        color: "#c7ecee",
        badge: "Más vendido",
        popularity: 96,
        details: "Famoso por su increíble aroma dulzón, aéreo y parecido a perfumes nicho de gran lujo (como Baccarat Rouge) a una fracción del precio.",
        image: "cloud.png"
    },
    {
        id: 230,
        name: "Ariana Grande Cloud Pink EDP 100ML",
        category: "mujer",
        price: 199,
        description: "Fruta del dragón, orquídea y maderas de ámbar",
        color: "#ff9ff3",
        badge: "Nuevo",
        popularity: 92,
        details: "Una variante vibrante que le añade un toque afrutado de pitahaya y bayas silvestres al ADN dulce original.",
        image: "cloudpink.png"
    },
    {
        id: 231,
        name: "Ariana Grande Sweet Like Candy EDP 100ML",
        category: "mujer",
        price: 199,
        description: "Zarzamora, crema batida y malvavisco",
        color: "#f8a5c2",
        badge: "",
        popularity: 90,
        details: "Como su nombre indica, es una explosión de dulces y caramelos. Súper golosa, tierna y coqueta.",
        image: "sweetlikecandy.png"
    },
    {
        id: 232,
        name: "CH Good Girl Blush 80ML",
        category: "premium",
        price: 429,
        description: "Peonía dulce, vainilla y ylang-ylang",
        color: "#ffb8b8",
        badge: "Diseñador",
        popularity: 95,
        details: "El icónico tacón en versión rosa pastel. Una expresión floral y avainillada, sumamente romántica y empolvada.",
        image: "goodgirlblush.png"
    },
    {
        id: 233,
        name: "CH Good Girl 80ML",
        category: "mujer",
        price: 389,
        description: "Almendra, café, nardos y haba tonka",
        color: "#1e272e",
        badge: "Top Ventas",
        popularity: 96,
        details: "La dualidad de la mujer moderna. Fragancia audaz, dulce y sensual, ideal para la noche y eventos especiales.",
        image: "goodgirl.png"
    },
    {
        id: 234,
        name: "CH Bad Boy Cobalt EDP 100ML",
        category: "hombre",
        price: 339,
        description: "Ciruela, lavanda y trufa",
        color: "#3498db",
        badge: "Tendencia",
        popularity: 94,
        details: "Un aroma electrizante y muy moderno. Mezcla frutas oscuras con acordes terrosos y metálicos. Proyección excelente.",
        image: "badboycobalt.png"
    },
    {
        id: 235,
        name: "CH Bad Boy Elixir 100ML",
        category: "hombre",
        price: 339,
        description: "Misterio ahumado y salvia",
        color: "#2f3640",
        badge: "",
        popularity: 91,
        details: "Una concentración densa y nocturna del chico malo, con maderas oscuras y especias orientales magnéticas.",
        image: "badboyelixir.png"
    },
    {
        id: 236,
        name: "Paco Rabanne Invictus EDT 100ML",
        category: "hombre",
        price: 279,
        description: "Notas marinas, pomelo y hoja de laurel",
        color: "#dcdde1",
        badge: "Clásico",
        popularity: 95,
        details: "El aroma de la victoria. Una mezcla fresca y metálica que ha sido el estándar de versatilidad masculina por años.",
        image: "invictus.png"
    },
    {
        id: 237,
        name: "Paco Rabanne Invictus Victory Elixir 100ML",
        category: "hombre",
        price: 359,
        description: "Vainilla intensa, ámbar y haba tonka",
        color: "#1e272e",
        badge: "Premium",
        popularity: 96,
        details: "Un monstruo en proyección. Completamente distinto al original, siendo extremadamente dulce, oscuro e ideal para salir de fiesta.",
        image: "invictusvictoryelixir.png"
    },
    {
        id: 238,
        name: "Paco Rabanne Phantom Parfum 100ML",
        category: "hombre",
        price: 329,
        description: "Lavanda cremosa y vainilla",
        color: "#2f3640",
        badge: "",
        popularity: 88,
        details: "El famoso robot, ahora en un perfil más maduro. Una noche oscura con lavanda, cardamomo y vainilla adictiva.",
        image: "phantomparfum.png"
    },
    {
        id: 239,
        name: "Paco Rabanne One Million Parfum 100ML",
        category: "hombre",
        price: 319,
        description: "Nardos, pino y cuero salado",
        color: "#d4af37",
        badge: "Popular",
        popularity: 93,
        details: "Una reinvención del lingote de oro. Incorpora un acorde solar y floral (nardos) que junto al cuero salado lo hacen único y opulento.",
        image: "1millionparfum.png"
    },
    {
        id: 240,
        name: "Viktor & Rolf Spicebomb Extreme EDP 90ML",
        category: "hombre",
        price: 289,
        description: "Explosión de vainilla y tabaco",
        color: "#2c3e50",
        badge: "Top Ventas",
        popularity: 97,
        details: "Posiblemente uno de los mejores perfumes de invierno de diseñador de la historia. Especiado, rico, acogedor y nuclear.",
        image: "spicebombextreme.png"
    },

    
    {
        id: 241,
        name: "Viktor & Rolf Spicebomb Night Vision EDT 90ML",
        category: "hombre",
        price: 259,
        description: "Manzana verde, especias y almendras dulces",
        color: "#27ae60",
        badge: "",
        popularity: 86,
        details: "Una variante más fresca y eléctrica del clásico Spicebomb, con acordes verdes y un fondo tostado ideal para la noche urbana.",
        image: "spicebombnightvision.png"
    },
    {
        id: 242,
        name: "Acqua Di Gio Parfum 125ML",
        category: "hombre",
        price: 429,
        description: "Notas marinas, incienso y pachulí oscuro",
        color: "#2c3e50",
        badge: "Premium",
        popularity: 94,
        details: "El clásico renovado en una concentración Parfum muy madura, ahumada y sumamente elegante para ocasiones formales.",
        image: "adgparfum.png"
    },
    {
        id: 243,
        name: "Acqua Di Gio Profondo EDP 100ML",
        category: "hombre",
        price: 389,
        description: "Inmersión oceánica, notas minerales y mandarina",
        color: "#0984e3",
        badge: "Más vendido",
        popularity: 97,
        details: "Una bocanada de aire del mar profundo. Limpio, acuático y energizante, perfecto para clima cálido y ropa casual.",
        image: "adgprofondo.png"
    },
    {
        id: 244,
        name: "Acqua Di Gio Profondo Parfum 100ML",
        category: "hombre",
        price: 409,
        description: "Intensidad marina extrema y maderas",
        color: "#1e272e",
        badge: "Nuevo",
        popularity: 92,
        details: "Mayor duración y fijación que el Profondo clásico, elevando los acordes resinosos y marinos a su máxima expresión.",
        image: "adgprofondoparfum.png"
    },
    {
        id: 245,
        name: "Montblanc Legend Spirit 100ML",
        category: "hombre",
        price: 189,
        description: "Cítricos vibrantes, notas acuáticas y almizcle",
        color: "#f5f6fa",
        badge: "Económico",
        popularity: 90,
        details: "Una fragancia deportiva, fresca y súper limpia. Excelente opción para después del gimnasio o días de verano intensos.",
        image: "legendspirit.png"
    },
    {
        id: 246,
        name: "Montblanc Legend EDP 100ML",
        category: "hombre",
        price: 199,
        description: "Cuero oscuro, violeta y maderas",
        color: "#2d3436",
        badge: "",
        popularity: 88,
        details: "Una evolución más densa y masculina del clásico Legend, perfecta para proyectar madurez y seguridad en la oficina.",
        image: "legendedp.png"
    },
    {
        id: 247,
        name: "Montblanc Explorer Platinum EDP 100ML",
        category: "hombre",
        price: 189,
        description: "Frescura metálica, hojas de violeta y cedro",
        color: "#7f8fa6",
        badge: "",
        popularity: 85,
        details: "Un aroma moderno y revitalizante, que emula el aire fresco de la montaña con acordes terrosos y metálicos atrayentes.",
        image: "explorerplatinum.png"
    },
    {
        id: 248,
        name: "Prada Luna Rossa EDT 100ML",
        category: "hombre",
        price: 289,
        description: "Lavanda, menta amarga y frescura jabonosa",
        color: "#bdc3c7",
        badge: "",
        popularity: 89,
        details: "Inspirada en las carreras de veleros, ofrece una limpieza inigualable, fría, aromática y muy pulcra para uso diario.",
        image: "lunarossa.png"
    },
    {
        id: 249,
        name: "Prada Luna Rossa Black EDP 100ML",
        category: "hombre",
        price: 349,
        description: "Ámbar polvoso, cumarina y angélica",
        color: "#111111",
        badge: "Popular",
        popularity: 93,
        details: "Misteriosa, atalcada y oscura. Es la opción perfecta de Prada para noches frías y encuentros cercanos.",
        image: "lunarossablack.png"
    },
    {
        id: 250,
        name: "Prada Luna Rossa Carbon EDT 100ML",
        category: "hombre",
        price: 289,
        description: "Lavanda metálica, carbón y pimienta",
        color: "#353b48",
        badge: "",
        popularity: 95,
        details: "Un todoterreno masculino, a menudo comparado con Sauvage pero con un giro más suave, jabonoso y sofisticado.",
        image: "lunarossacarbon.png"
    },
    {
        id: 251,
        name: "Carolina Herrera 212 Men NYC EDT 100ML",
        category: "hombre",
        price: 259,
        description: "Verde, cítrico y almizcle floral",
        color: "#95a5a6",
        badge: "Clásico",
        popularity: 96,
        details: "El aroma de Nueva York. Notas de hierba cortada, jengibre y maderas que nunca pasan de moda y gustan a todo el mundo.",
        image: "212mennyc.png"
    },
    {
        id: 252,
        name: "Carolina Herrera 212 VIP Black EDP 100ML",
        category: "hombre",
        price: 299,
        description: "Absenta, vainilla y anís",
        color: "#2c3e50",
        badge: "Top Ventas",
        popularity: 94,
        details: "Hecha para la vida nocturna. Una explosión de licor de absenta dulce, perfecta para destacar en antros y fiestas.",
        image: "212vipblack.png"
    },
    {
        id: 253,
        name: "Carolina Herrera 212 VIP EDT 100ML",
        category: "hombre",
        price: 259,
        description: "Maracuyá, vodka y menta picante",
        color: "#ecf0f1",
        badge: "",
        popularity: 87,
        details: "Atrevida y fiestera, es una fragancia con notas alicoradas tropicales que inyecta mucha energía en salidas nocturnas.",
        image: "212vipmen.png"
    },
    {
        id: 254,
        name: "Carolina Herrera 212 VIP EDP 80ML",
        category: "mujer",
        price: 249,
        description: "Ron, maracuyá y vainilla seductora",
        color: "#f1c40f",
        badge: "",
        popularity: 89,
        details: "La reina de la exclusividad. Un aroma dulce, alicorado y cremoso, para las mujeres que no siguen las reglas, las escriben.",
        image: "212vipwomen.png"
    },
    {
        id: 255,
        name: "Carolina Herrera 212 VIP Rosé EDP 80ML",
        category: "mujer",
        price: 319,
        description: "Champán rosado y flor de duraznero",
        color: "#fda7df",
        badge: "Popular",
        popularity: 95,
        details: "Radiante, frutal y efervescente. Un brindis con champán rosado ideal para mujeres elegantes y sumamente femeninas.",
        image: "212viprose.png"
    },
    {
        id: 256,
        name: "Carolina Herrera 212 Sexy EDT 100ML",
        category: "hombre",
        price: 239,
        description: "Vainilla suave, pimienta y maderas",
        color: "#833471",
        badge: "",
        popularity: 85,
        details: "Fragancia magnética con acordes cálidos y atalcados, muy seductora para climas templados o eventos de noche.",
        image: "212sexy.png"
    },
    {
        id: 257,
        name: "Dior Fahrenheit EDT 100ML",
        category: "hombre",
        price: 359,
        description: "Cuero violeta, mandarina y toques de gasolina",
        color: "#e84118",
        badge: "Clásico",
        popularity: 93,
        details: "Una obra maestra atemporal. Famosa por su distintivo y polarizante olor a cuero combinado con hojas de violeta ardiente.",
        image: "fahrenheit.png"
    },
    {
        id: 258,
        name: "Dolce & Gabbana The One Gold EDP 100ML",
        category: "hombre",
        price: 289,
        description: "Naranja sanguina, jengibre y pachulí",
        color: "#f1c40f",
        badge: "",
        popularity: 86,
        details: "Versión fresca y dorada de la línea The One. Mantiene la seducción pero agrega cítricos muy potentes y terrosos.",
        image: "theonegold.png"
    },
    {
        id: 259,
        name: "Dolce & Gabbana The One EDP 100ML",
        category: "hombre",
        price: 279,
        description: "Ámbar profundo, tabaco y cardamomo",
        color: "#d35400",
        badge: "Más vendido",
        popularity: 97,
        details: "Posiblemente una de las mejores fragancias para citas del mundo. Cálida, ambarina y ridículamente atractiva.",
        image: "theoneedp.png"
    },
    {
        id: 260,
        name: "Dior Fahrenheit EDT 200ML",
        category: "hombre",
        price: 519,
        description: "El clásico fuego en tamaño Jumbo",
        color: "#c23616",
        badge: "Tamaño Grande",
        popularity: 91,
        details: "La potencia inconfundible de Dior Fahrenheit, presentada en una lujosa y masiva botella de 200ml.",
        image: "fahrenheit200.png"
    },
    {
        id: 261,
        name: "Dior Sauvage EDP 100ML",
        category: "hombre",
        price: 489,
        description: "Bergamota de Calabria, ambroxan y vainilla",
        color: "#1e272e",
        badge: "Diseñador",
        popularity: 100,
        details: "El titán actual de la perfumería masculina. Ofrece frescura incisiva envuelta en un toque de vainilla misteriosa de Papúa Nueva Guinea.",
        image: "sauvageedp.png"
    },
    {
        id: 262,
        name: "Dior Sauvage Elixir 60ML",
        category: "hombre",
        price: 529,
        description: "Especias nucleares, lavanda rica y maderas",
        color: "#0f1626",
        badge: "Extremo",
        popularity: 98,
        details: "Una concentración bestial y súper exclusiva. Se aleja del frescor para brindar una lavanda especiada cálida que dura eternidades.",
        image: "sauvageelixir60.png"
    },
    {
        id: 263,
        name: "Dior Sauvage Parfum 200ML",
        category: "hombre",
        price: 699,
        description: "Sándalo puro, incienso y cítricos maduros",
        color: "#111111",
        badge: "Tamaño Grande",
        popularity: 94,
        details: "La versión más madura y suave de Sauvage en un tamaño gigante. Mucho sándalo cremoso, haba tonka y una proyección más controlada.",
        image: "sauvageparfum200.png"
    },
    {
        id: 264,
        name: "Dior Sauvage EDP 200ML",
        category: "hombre",
        price: 629,
        description: "El rey de la versatilidad al doble",
        color: "#1e272e",
        badge: "Tamaño Grande",
        popularity: 95,
        details: "Para aquellos que han convertido a Sauvage EDP en su firma diaria, aquí está la presentación de 200ml.",
        image: "sauvageedp200.png"
    },
    {
        id: 265,
        name: "Dior Sauvage Elixir 100ML",
        category: "hombre",
        price: 749,
        description: "Lujo especiado y concentrado puro",
        color: "#0f1626",
        badge: "Premium",
        popularity: 96,
        details: "El potente Elixir en formato grande de 100ml. Su precio refleja su altísima concentración de aceites y especias de lujo.",
        image: "sauvageelixir100.png"
    },
    {
        id: 266,
        name: "Xerjoff Accento (Tester) 100ML",
        category: "unisex",
        price: 569,
        description: "Piña tropical, jacinto y almizcle empolvado",
        color: "#8c7ae6",
        badge: "Nicho",
        popularity: 88,
        details: "Versión tester. Una mezcla afrutada, polvosa y sumamente lujosa. Ideal para días primaverales donde buscas destacar con opulencia.",
        image: "accentotester.png"
    },
    {
        id: 267,
        name: "Xerjoff Naxos 100ML",
        category: "unisex",
        price: 699,
        description: "Miel dorada, tabaco rubio y lavanda clásica",
        color: "#d4af37",
        badge: "Nicho",
        popularity: 99,
        details: "Una obra de arte absoluta. Rinde homenaje a Sicilia, combinando la rica miel dulce y hojas de tabaco con cítricos súper brillantes.",
        image: "naxos.png"
    },
    {
        id: 268,
        name: "Xerjoff Accento 100ML",
        category: "unisex",
        price: 729,
        description: "El estallido atalcado y frutal original",
        color: "#8c7ae6",
        badge: "Nicho",
        popularity: 91,
        details: "Presentación original comercial. Elegancia en botella morada. Combina piña fresca, notas florales de jacinto y un iris cautivador.",
        image: "accento.png"
    },
    {
        id: 269,
        name: "Xerjoff Torino 21 100ML",
        category: "unisex",
        price: 779,
        description: "Menta extra fría, albahaca y cítricos de verano",
        color: "#20bf6b",
        badge: "Nicho",
        popularity: 95,
        details: "Posiblemente uno de los perfumes más refrescantes del mundo nicho. Súper herbáceo, cítrico y revitalizante para el sol extremo.",
        image: "torino21.png"
    },
    {
        id: 270,
        name: "Xerjoff Erba Pura 100ML",
        category: "unisex",
        price: 649,
        description: "Cesta de frutas sicilianas y almizcle",
        color: "#0abde3",
        badge: "Nicho",
        popularity: 97,
        details: "Una bomba de frutas tropicales y almizcle blanco. Conocida por su estela y proyección brutales que llenan habitaciones enteras.",
        image: "ervapura.png"
    },
    {
        id: 271,
        name: "Xerjoff Erba Gold 100ML",
        category: "unisex",
        price: 729,
        description: "Frutas exóticas bañadas en maderas de ámbar",
        color: "#f1c40f",
        badge: "Nicho",
        popularity: 93,
        details: "Comparte el ADN del Erba Pura, pero con un matiz ligeramente más maduro, especiado y con una presentación dorada espectacular.",
        image: "erbagold.png"
    },
    {
        id: 272,
        name: "Xerjoff Torino 21 (Tester) 100ML",
        category: "unisex",
        price: 699,
        description: "Magia refrescante y herbal en tester",
        color: "#20bf6b",
        badge: "Nicho",
        popularity: 89,
        details: "La misma explosión de menta y albahaca súper refrescante, en formato Tester más económico.",
        image: "torino21tester.png"
    },
    {
        id: 273,
        name: "Xerjoff Erba Pura (Tester) 100ML",
        category: "unisex",
        price: 629,
        description: "Cesta de frutas nucleares en tester",
        color: "#0abde3",
        badge: "Nicho",
        popularity: 92,
        details: "El aclamado best-seller frutal de Xerjoff, ofrecido en caja tester para quienes priorizan el jugo puro.",
        image: "erbapuratester.png"
    },
    {
        id: 274,
        name: "Xerjoff Erba Gold (Tester) 100ML",
        category: "unisex",
        price: 629,
        description: "Opulencia frutal dorada en tester",
        color: "#f1c40f",
        badge: "Nicho",
        popularity: 90,
        details: "Rico aroma de naranjas sicilianas y maderas nobles en su versión de caja sencilla o probador.",
        image: "erbagoldtester.png"
    },
    {
        id: 275,
        name: "Tom Ford Black Orchid EDP 50ML",
        category: "unisex",
        price: 489,
        description: "Orquídea oscura, trufa terrosa y pachulí",
        color: "#1e272e",
        badge: "Diseñador",
        popularity: 94,
        details: "Una fragancia icónica. Sumamente oscura, terrosa, dulce y floral. Derrocha un misterio y lujo inigualables.",
        image: "blackorchid.png"
    },
    {
        id: 276,
        name: "Tom Ford Lost Cherry 50ML",
        category: "unisex",
        price: 789,
        description: "Cereza ácida licorosa, almendra y vainilla",
        color: "#b33939",
        badge: "Premium",
        popularity: 96,
        details: "Un viaje gourmand opulento. Huele a cerezas maduras bañadas en licor dulce con un acorde cremoso de almendra amarga.",
        image: "lostcherry.png"
    },
    {
        id: 277,
        name: "Tom Ford Ombre Leather EDP 50ML",
        category: "unisex",
        price: 489,
        description: "Cuero táctil, jazmín blanco y cardamomo",
        color: "#2f3640",
        badge: "Diseñador",
        popularity: 95,
        details: "El aroma de un asiento de cuero de lujo nuevo. Extremadamente realista, audaz y equilibrado con un corazón floral suave.",
        image: "ombreleather.png"
    },
    {
        id: 278,
        name: "Parfums De Marly Layton 125ML",
        category: "hombre",
        price: 849,
        description: "Manzana avainillada, cardamomo y lavanda",
        color: "#273c75",
        badge: "Nicho",
        popularity: 99,
        details: "La joya de la corona nicho para climas templados. Sumamente elegante, dulce y especiada, cautivando cualquier olfato.",
        image: "layton.png"
    },
    {
        id: 279,
        name: "Parfums De Marly Althair 125ML",
        category: "hombre",
        price: 849,
        description: "Vainilla bourbon majestuosa, praliné y canela",
        color: "#e1b12c",
        badge: "Nicho",
        popularity: 96,
        details: "Una propuesta dulce espectacular. Vainilla ambarina cálida y praliné especiado, brindando muchísima modernidad.",
        image: "althair.png"
    },
    {
        id: 280,
        name: "Parfums De Marly Greenley 125ML",
        category: "unisex",
        price: 899,
        description: "Manzana verde crujiente, roble y musgo",
        color: "#44bd32",
        badge: "Nicho",
        popularity: 94,
        details: "Lujo primaveral y veraniego. Aroma a manzana verde muy realista y súper vigorizante sobre una rica base de cedro.",
        image: "greenley.png"
    },
    {
        id: 281,
        name: "Parfums De Marly Layton (Tester) 125ML",
        category: "hombre",
        price: 729,
        description: "Majestuosidad ecuestre en tester",
        color: "#273c75",
        badge: "Nicho",
        popularity: 91,
        details: "La inigualable esencia de manzana y vainilla cálida de Layton, presentada en versión probador a un mejor precio.",
        image: "laytontester.png"
    },
    {
        id: 282,
        name: "Lorenzo Pazzaglia Summer Hammer 50ML",
        category: "unisex",
        price: 599,
        description: "Cóctel de mango, piña y ron caribeño",
        color: "#fbc531",
        badge: "Nicho",
        popularity: 88,
        details: "Un perfume ultra-nicho divertido y alucinante. Simula un cóctel veraniego lleno de frutas suculentas y coco lactónico.",
        image: "summerhammer.png"
    },
    {
        id: 283,
        name: "Lorenzo Pazzaglia Sugar Kisses 50ML",
        category: "unisex",
        price: 599,
        description: "Besos de azúcar, chocolate y caramelo dulce",
        color: "#ff9ff3",
        badge: "Nicho",
        popularity: 89,
        details: "Un gourmand extremadamente adictivo, lleno de notas mantecosas de vainilla, cacao cremoso y muchísima azúcar.",
        image: "sugarkisses.png"
    }


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
    setInterval(rotateCarousel, 2300); // Cambia cada 3 segundos
}