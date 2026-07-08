export type Country = {
  name: string;
  slug: string;
  href: string;
  status: "available" | "coming-soon";
  description: string;
};

export const countries: Country[] = [
  {
    name: "Canada",
    slug: "canada",
    href: "/canada",
    status: "available",
    description:
      "Popular for quality education, multicultural cities, and post-study opportunities.",
  },
  {
    name: "Australia",
    slug: "australia",
    href: "/australia",
    status: "available",
    description:
      "Known for universities, student jobs, lifestyle, and international education.",
  },
  {
    name: "Germany",
    slug: "germany",
    href: "/germany",
    status: "available",
    description:
      "Attractive for low-tuition public universities and strong career opportunities.",
  },
  {
    name: "Finland",
    slug: "finland",
    href: "/finland",
    status: "available",
    description:
      "Known for high-quality education, safety, and student-friendly living.",
  },

  // You can add more countries later like this:
  {
  name: "United States",
  slug: "usa",
  href: "/usa",
  status: "available",
  description:
    "Home to many of the world's top universities, offering outstanding education, research opportunities, and global career prospects.",
},
{
  name: "United Kingdom",
  slug: "unitedkingdom",
  href: "/unitedkingdom",
  status: "available",
  description:
    "Home to some of the world's most prestigious universities with globally recognized degrees and strong career opportunities.",
},
{
  name: "Ireland",
  slug: "ireland",
  href: "/ireland",
  status: "available",
  description:
    "An English-speaking study destination known for excellent universities, innovation, and strong graduate employment opportunities.",
},
{
  name: "Netherlands",
  slug: "netherlands",
  href: "/netherlands",
  status: "available",
  description:
    "Known for world-class universities, innovative teaching, and a wide range of English-taught programmes.",
},
{
  name: "Sweden",
  slug: "sweden",
  href: "/sweden",
  status: "available",
  description:
    "Known for innovation, sustainability, and globally recognized universities offering many English-taught programmes.",
},
{
  name: "Norway",
  slug: "norway",
  href: "/norway",
  status: "available",
  description:
    "A Scandinavian study destination known for world-class education, research, sustainability, and an exceptional quality of life.",
},
{
  name: "Denmark",
  slug: "denmark",
  href: "/denmark",
  status: "available",
  description:
    "A leading Scandinavian study destination known for innovation, sustainability, and world-class universities.",
},
{
  name: "New Zealand",
  slug: "newzealand",
  href: "/newzealand",
  status: "available",
  description:
    "A welcoming study destination with world-class universities, outstanding quality of life, and excellent post-study opportunities.",
},
{
  name: "France",
  slug: "france",
  href: "/france",
  status: "available",
  description:
    "A world-famous study destination known for prestigious universities, innovation, culture, and affordable higher education.",
},
{
  name: "Switzerland",
  slug: "switzerland",
  href: "/switzerland",
  status: "available",
  description:
    "Known for world-leading universities, innovation, research excellence, and outstanding quality of life.",
},
{
  name: "Italy",
  slug: "italy",
  href: "/italy",
  status: "available",
  description:
    "One of Europe's most historic study destinations, known for world-class universities, engineering, architecture, medicine, and arts.",
},
{
  name: "Austria",
  slug: "austria",
  href: "/austria",
  status: "available",
  description:
    "A popular European study destination known for excellent universities, innovation, music, engineering, and high quality of life.",
},
{
  name: "Belgium",
  slug: "belgium",
  href: "/belgium",
  status: "available",
  description:
    "A multilingual European study destination known for excellent universities, research, and innovation.",
},
{
  name: "Japan",
  slug: "japan",
  href: "/japan",
  status: "available",
  description:
    "A world-leading study destination known for technology, engineering, innovation, and internationally respected universities.",
},
{
  name: "South Korea",
  slug: "southkorea",
  href: "/southkorea",
  status: "available",
  description:
    "A world-leading study destination known for technology, engineering, innovation, and globally respected universities.",
},
{
  name: "Singapore",
  slug: "singapore",
  href: "/singapore",
  status: "available",
  description:
    "Asia's leading study destination known for world-class universities, innovation, and outstanding graduate employability.",
},
{
  name: "China",
  slug: "china",
  href: "/china",
  status: "available",
  description:
    "One of Asia's largest study destinations, known for world-class universities, technology, engineering, and research.",
},
{
  name: "Hong Kong",
  slug: "hongkong",
  href: "/hongkong",
  status: "available",
  description:
    "A leading Asian study destination known for globally ranked universities, finance, innovation, and research.",
},
{
  name: "Malaysia",
  slug: "malaysia",
  href: "/malaysia",
  status: "available",
  description:
    "A popular Asian study destination offering affordable education, English-taught programmes, and globally recognized universities.",
},
{
  name: "Taiwan",
  slug: "taiwan",
  href: "/taiwan",
  status: "available",
  description:
    "A leading Asian study destination known for technology, engineering, semiconductors, and globally recognized universities.",
},
{
  name: "United Arab Emirates",
  slug: "uae",
  href: "/uae",
  status: "available",
  description:
    "A leading Middle Eastern study destination known for modern universities, international branch campuses, business, engineering, and innovation.",
},
{
  name: "India",
  slug: "india",
  href: "/india",
  status: "available",
  description:
    "One of the world's largest study destinations, known for engineering, technology, medicine, management, and globally recognized institutes.",
},
{
  name: "Thailand",
  slug: "thailand",
  href: "/thailand",
  status: "available",
  description:
    "A leading Southeast Asian study destination known for affordable education, engineering, medicine, hospitality, and internationally recognized universities.",
},
{
  name: "Saudi Arabia",
  slug: "saudiarabia",
  href: "/saudiarabia",
  status: "available",
  description:
    "A leading Middle Eastern study destination known for engineering, petroleum, medicine, business, and world-class research universities.",
},
{
  name: "Poland",
  slug: "poland",
  href: "/poland",
  status: "available",
  description:
    "A popular European study destination known for affordable education, engineering, medicine, business, and internationally recognized universities.",
},
{
  name: "Qatar",
  slug: "qatar",
  href: "/qatar",
  status: "available",
  description:
    "A world-class Middle Eastern study destination known for Education City, international branch campuses, engineering, business, medicine, and research.",
},
{
  name: "Türkiye",
  slug: "turkiye",
  href: "/turkiye",
  status: "available",
  description:
    "A major study destination bridging Europe and Asia, known for internationally recognized universities, engineering, medicine, business, and affordable education.",
},
{
  name: "Spain",
  slug: "spain",
  href: "/spain",
  status: "available",
  description:
    "One of Europe's leading study destinations, known for world-class universities, engineering, business, medicine, architecture, innovation, and vibrant student life.",
},
{
  name: "Portugal",
  slug: "portugal",
  href: "/portugal",
  status: "available",
  description:
    "A leading European study destination known for affordable education, world-class universities, engineering, business, medicine, and an exceptional quality of life.",
},
{
  name: "Czech Republic",
  slug: "czech-republic",
  href: "/czech-republic",
  status: "available",
  description:
    "A leading Central European study destination known for affordable education, world-class universities, engineering, medicine, science, and innovation.",
},
{
  name: "Greece",
  slug: "greece",
  href: "/greece",
  status: "available",
  description:
    "A historic European study destination known for respected universities, engineering, medicine, business, science, affordable education, and rich cultural heritage.",
},
{
  name: "Hungary",
  slug: "hungary",
  href: "/hungary",
  status: "available",
  description:
    "A leading Central European study destination known for affordable education, internationally recognized universities, medicine, engineering, business, and computer science.",
},
{
  name: "Romania",
  slug: "romania",
  href: "/romania",
  status: "available",
  description:
    "An affordable European study destination known for internationally recognized universities, medicine, engineering, computer science, business, and innovation.",
},
{
  name: "South Africa",
  slug: "south-africa",
  href: "/south-africa",
  status: "available",
  description:
    "Africa's leading study destination known for world-class universities, engineering, medicine, business, research, and innovation.",
},
{
  name: "Vietnam",
  slug: "vietnam",
  href: "/vietnam",
  status: "coming-soon",
  description:
    "A rapidly growing Asian study destination known for engineering, business, medicine, and internationally recognized universities.",
},
{
  name: "Brazil",
  slug: "brazil",
  href: "/brazil",
  status: "coming-soon",
  description:
    "South America's largest study destination, known for research universities, engineering, medicine, and innovation.",
},

{
  name: "Mexico",
  slug: "mexico",
  href: "/mexico",
  status: "coming-soon",
  description:
    "A leading Latin American study destination with internationally recognized universities and diverse academic programmes.",
},

{
  name: "Argentina",
  slug: "argentina",
  href: "/argentina",
  status: "coming-soon",
  description:
    "Known for prestigious public universities, affordable education, medicine, engineering, and research.",
},

{
  name: "Chile",
  slug: "chile",
  href: "/chile",
  status: "coming-soon",
  description:
    "A respected South American study destination with strong universities in engineering, business, and science.",
},

{
  name: "Indonesia",
  slug: "indonesia",
  href: "/indonesia",
  status: "coming-soon",
  description:
    "A rapidly growing Asian study destination known for engineering, business, medicine, and research.",
},

{
  name: "Philippines",
  slug: "philippines",
  href: "/philippines",
  status: "coming-soon",
  description:
    "An English-speaking Asian study destination offering affordable higher education and internationally recognized programmes.",
},

{
  name: "Pakistan",
  slug: "pakistan",
  href: "/pakistan",
  status: "coming-soon",
  description:
    "Home to leading universities in engineering, medicine, computer science, and business.",
},

{
  name: "Bangladesh",
  slug: "bangladesh",
  href: "/bangladesh",
  status: "coming-soon",
  description:
    "An emerging South Asian study destination with growing universities and research opportunities.",
},

{
  name: "Sri Lanka",
  slug: "sri-lanka",
  href: "/sri-lanka",
  status: "coming-soon",
  description:
    "A South Asian study destination known for quality public universities, engineering, medicine, and information technology.",
},

{
  name: "Kazakhstan",
  slug: "kazakhstan",
  href: "/kazakhstan",
  status: "coming-soon",
  description:
    "A Central Asian study destination with internationally developing universities in engineering, business, and science.",
},

{
  name: "Uzbekistan",
  slug: "uzbekistan",
  href: "/uzbekistan",
  status: "coming-soon",
  description:
    "A growing higher education destination investing in international programmes and research.",
},

{
  name: "Georgia",
  slug: "georgia",
  href: "/georgia",
  status: "coming-soon",
  description:
    "An increasingly popular European-Asian study destination known for medicine and affordable education.",
},

{
  name: "Armenia",
  slug: "armenia",
  href: "/armenia",
  status: "coming-soon",
  description:
    "An emerging study destination offering quality education in engineering, medicine, and technology.",
},

{
  name: "Azerbaijan",
  slug: "azerbaijan",
  href: "/azerbaijan",
  status: "coming-soon",
  description:
    "A developing international study destination with strengths in engineering, energy, and business.",
},

{
  name: "Nepal",
  slug: "nepal",
  href: "/nepal",
  status: "coming-soon",
  description:
    "An emerging higher education destination offering programmes in engineering, medicine, and management.",
},
{
  name: "Egypt",
  slug: "egypt",
  href: "/egypt",
  status: "coming-soon",
  description:
    "One of Africa's leading study destinations, known for medicine, engineering, business, and internationally recognized universities.",
},

{
  name: "Morocco",
  slug: "morocco",
  href: "/morocco",
  status: "coming-soon",
  description:
    "A growing North African study destination with strengths in engineering, business, and scientific research.",
},

{
  name: "Nigeria",
  slug: "nigeria",
  href: "/nigeria",
  status: "coming-soon",
  description:
    "Africa's largest higher education system with leading universities in engineering, medicine, and business.",
},

{
  name: "Kenya",
  slug: "kenya",
  href: "/kenya",
  status: "coming-soon",
  description:
    "A leading East African study destination known for research, technology, business, and agriculture.",
},

{
  name: "Ghana",
  slug: "ghana",
  href: "/ghana",
  status: "coming-soon",
  description:
    "A respected West African study destination with internationally recognized universities and research institutions.",
},

{
  name: "Mauritius",
  slug: "mauritius",
  href: "/mauritius",
  status: "coming-soon",
  description:
    "An emerging international study destination offering English-taught programmes and a multicultural environment.",
},

{
  name: "Botswana",
  slug: "botswana",
  href: "/botswana",
  status: "coming-soon",
  description:
    "A developing African study destination with growing opportunities in science, engineering, and business.",
},

{
  name: "Namibia",
  slug: "namibia",
  href: "/namibia",
  status: "coming-soon",
  description:
    "An emerging Southern African study destination known for environmental sciences, engineering, and business.",
},

{
  name: "Zimbabwe",
  slug: "zimbabwe",
  href: "/zimbabwe",
  status: "coming-soon",
  description:
    "Home to respected universities offering programmes in engineering, medicine, agriculture, and business.",
},

{
  name: "Zambia",
  slug: "zambia",
  href: "/zambia",
  status: "coming-soon",
  description:
    "A growing higher education destination with strengths in engineering, mining, agriculture, and health sciences.",
},

{
  name: "Algeria",
  slug: "algeria",
  href: "/algeria",
  status: "coming-soon",
  description:
    "One of North Africa's largest higher education systems with strong engineering and science programmes.",
},

{
  name: "Tunisia",
  slug: "tunisia",
  href: "/tunisia",
  status: "coming-soon",
  description:
    "A Mediterranean study destination recognized for engineering, medicine, information technology, and business.",
},

{
  name: "Uganda",
  slug: "uganda",
  href: "/uganda",
  status: "coming-soon",
  description:
    "An East African study destination with expanding opportunities in medicine, business, and technology.",
},

{
  name: "Rwanda",
  slug: "rwanda",
  href: "/rwanda",
  status: "coming-soon",
  description:
    "A rapidly developing African study destination emphasizing innovation, technology, and entrepreneurship.",
},

{
  name: "Senegal",
  slug: "senegal",
  href: "/senegal",
  status: "coming-soon",
  description:
    "A leading Francophone African study destination known for higher education, research, and international collaboration.",
},
{
  name: "Croatia",
  slug: "croatia",
  href: "/croatia",
  status: "coming-soon",
  description:
    "A European study destination known for quality universities, engineering, medicine, tourism, and business.",
},

{
  name: "Slovakia",
  slug: "slovakia",
  href: "/slovakia",
  status: "coming-soon",
  description:
    "A Central European study destination offering affordable education in engineering, medicine, and technology.",
},

{
  name: "Slovenia",
  slug: "slovenia",
  href: "/slovenia",
  status: "coming-soon",
  description:
    "A highly regarded European study destination known for engineering, sustainability, and innovation.",
},

{
  name: "Estonia",
  slug: "estonia",
  href: "/estonia",
  status: "coming-soon",
  description:
    "A digital-first European study destination known for information technology, engineering, and entrepreneurship.",
},

{
  name: "Latvia",
  slug: "latvia",
  href: "/latvia",
  status: "coming-soon",
  description:
    "A Baltic study destination with internationally recognized programmes in business, medicine, and engineering.",
},

{
  name: "Lithuania",
  slug: "lithuania",
  href: "/lithuania",
  status: "coming-soon",
  description:
    "A growing European study destination offering affordable education in engineering, medicine, and technology.",
},

{
  name: "Iceland",
  slug: "iceland",
  href: "/iceland",
  status: "coming-soon",
  description:
    "A Nordic study destination known for renewable energy, environmental sciences, and high-quality education.",
},

{
  name: "Luxembourg",
  slug: "luxembourg",
  href: "/luxembourg",
  status: "coming-soon",
  description:
    "A multilingual European study destination recognized for finance, business, law, and international education.",
},

{
  name: "Malta",
  slug: "malta",
  href: "/malta",
  status: "coming-soon",
  description:
    "An English-speaking Mediterranean study destination offering internationally recognized higher education.",
},

{
  name: "Cyprus",
  slug: "cyprus",
  href: "/cyprus",
  status: "coming-soon",
  description:
    "A popular Mediterranean study destination known for business, hospitality, engineering, and medicine.",
},

{
  name: "Serbia",
  slug: "serbia",
  href: "/serbia",
  status: "coming-soon",
  description:
    "A growing European study destination recognized for engineering, medicine, and scientific research.",
},

{
  name: "Bulgaria",
  slug: "bulgaria",
  href: "/bulgaria",
  status: "coming-soon",
  description:
    "An affordable European study destination known for medicine, engineering, business, and information technology.",
},

{
  name: "Ukraine",
  slug: "ukraine",
  href: "/ukraine",
  status: "coming-soon",
  description:
    "A European study destination historically recognized for engineering, medicine, aviation, and scientific research.",
},

{
  name: "Israel",
  slug: "israel",
  href: "/israel",
  status: "coming-soon",
  description:
    "A global innovation hub known for world-class universities, technology, engineering, medicine, and entrepreneurship.",
},

{
  name: "Jordan",
  slug: "jordan",
  href: "/jordan",
  status: "coming-soon",
  description:
    "A Middle Eastern study destination recognized for medicine, engineering, pharmacy, and business education.",
},
{
  name: "Albania",
  slug: "albania",
  href: "/albania",
  status: "coming-soon",
  description:
    "A growing European study destination offering affordable higher education in engineering, business, and social sciences.",
},

{
  name: "Bosnia and Herzegovina",
  slug: "bosnia-and-herzegovina",
  href: "/bosnia-and-herzegovina",
  status: "coming-soon",
  description:
    "A Southeastern European study destination with developing universities and international study opportunities.",
},

{
  name: "Montenegro",
  slug: "montenegro",
  href: "/montenegro",
  status: "coming-soon",
  description:
    "A small European study destination known for affordable education and an expanding international student community.",
},

{
  name: "North Macedonia",
  slug: "north-macedonia",
  href: "/north-macedonia",
  status: "coming-soon",
  description:
    "An emerging Balkan study destination offering programmes in medicine, engineering, business, and technology.",
},

{
  name: "Moldova",
  slug: "moldova",
  href: "/moldova",
  status: "coming-soon",
  description:
    "An affordable Eastern European study destination with growing international education opportunities.",
},

{
  name: "Belarus",
  slug: "belarus",
  href: "/belarus",
  status: "coming-soon",
  description:
    "Known for engineering, medicine, information technology, and scientific research programmes.",
},

{
  name: "Kosovo",
  slug: "kosovo",
  href: "/kosovo",
  status: "coming-soon",
  description:
    "An emerging European study destination with developing higher education and international partnerships.",
},

{
  name: "Brunei",
  slug: "brunei",
  href: "/brunei",
  status: "coming-soon",
  description:
    "A Southeast Asian study destination recognized for quality education and government-supported universities.",
},

{
  name: "Cambodia",
  slug: "cambodia",
  href: "/cambodia",
  status: "coming-soon",
  description:
    "A developing Asian study destination with expanding universities and international education opportunities.",
},

{
  name: "Laos",
  slug: "laos",
  href: "/laos",
  status: "coming-soon",
  description:
    "An emerging Southeast Asian study destination offering affordable higher education.",
},

{
  name: "Mongolia",
  slug: "mongolia",
  href: "/mongolia",
  status: "coming-soon",
  description:
    "A growing Asian study destination known for engineering, mining, business, and environmental sciences.",
},

{
  name: "Kyrgyzstan",
  slug: "kyrgyzstan",
  href: "/kyrgyzstan",
  status: "coming-soon",
  description:
    "A Central Asian study destination offering affordable education in medicine, engineering, and business.",
},

{
  name: "Oman",
  slug: "oman",
  href: "/oman",
  status: "coming-soon",
  description:
    "A Middle Eastern study destination with modern universities and growing international education opportunities.",
},

{
  name: "Bahrain",
  slug: "bahrain",
  href: "/bahrain",
  status: "coming-soon",
  description:
    "A Gulf study destination known for business, engineering, finance, and internationally accredited universities.",
},

{
  name: "Fiji",
  slug: "fiji",
  href: "/fiji",
  status: "coming-soon",
  description:
    "A Pacific study destination offering quality higher education in environmental science, tourism, and business.",
},
{
  name: "Iran",
  slug: "iran",
  href: "/iran",
  status: "coming-soon",
  description:
    "A historic Middle Eastern study destination recognized for engineering, medicine, science, and technology education.",
},

{
  name: "Iraq",
  slug: "iraq",
  href: "/iraq",
  status: "coming-soon",
  description:
    "A developing higher education destination with universities offering programmes in engineering, medicine, business, and science.",
},

{
  name: "Lebanon",
  slug: "lebanon",
  href: "/lebanon",
  status: "coming-soon",
  description:
    "A Middle Eastern study destination known for internationally recognized universities, medicine, business, and engineering.",
},

{
  name: "Peru",
  slug: "peru",
  href: "/peru",
  status: "coming-soon",
  description:
    "A leading South American study destination offering quality education in engineering, business, medicine, and environmental sciences.",
},

{
  name: "Colombia",
  slug: "colombia",
  href: "/colombia",
  status: "coming-soon",
  description:
    "A rapidly growing Latin American study destination known for engineering, business, medicine, and research universities.",
},

{
  name: "Costa Rica",
  slug: "costa-rica",
  href: "/costa-rica",
  status: "coming-soon",
  description:
    "A Central American study destination recognized for sustainability, environmental sciences, business, and high-quality education.",
},

];