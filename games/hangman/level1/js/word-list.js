const wordList = [
    { 	"word": "feliz", 
		"hint": "Ez egy pozitív érzelem, amit akkor érzünk, ha minden rendben." },
		
    { 	"word": "triste", 
		"hint": "Egy érzelem, amit szomorú pillanatokban élünk át." },
		
    { 	"word": "bravo", 
		"hint": "Amikor valaki haragos vagy dühös." },
		
    { 	"word": "medo", 
		"hint": "Ez az érzelem jelentkezik, amikor valaki fél." },
		
    { 	"word": "alegria", 
		"hint": "A boldogság egyik fajtája, örömteli pillanatokban tapasztaljuk." },
		
    { 	"word": "surpreso", 
		"hint": "Amikor valami váratlan történik, és csodálkozunk." },
		
    { 	"word": "calmo", 
		"hint": "Az érzelem, amit nyugodt helyzetekben érzünk." },
		
    { 	"word": "vivo", 
		"hint": "Amikor valami élettel teli, ellentéte a halott." },
		
    { 	"word": "morto", 
		"hint": "Az ellentéte az élőnek, élettelen állapot." },
		
    { 	"word": "sozinho", 
		"hint": "Amikor valaki egyedül van, társ nélkül." },
		
    { 	"word": "juntos", 	
		"hint": "Amikor emberek vagy dolgok együtt vannak." },
		
    { 	"word": "entediado", 
		"hint": "Ezt az érzést az unalom idézi elő." },
		
    { 	"word": "fácil", 
		"hint": "Amire azt mondjuk, hogy nem nehéz." },
		
    { 	"word": "difícil", 
		"hint": "Amire azt mondjuk, hogy nem könnyű." },
		
    { 	"word": "ruim", 
		"hint": "Valami, ami nem jó, ellentétes a jósággal." },
		
    { 	"word": "bom", 
		"hint": "Amire azt mondjuk, hogy pozitív vagy jó." },
		
    { 	"word": "estaçoes", 
		"hint": "Az év négy részre osztható szakasza." },
		
    { 	"word": "inverno", 
		"hint": "Az év leghidegebb évszaka." },
		
    { 	"word": "verão", 
		"hint": "Amikor a nap sokat süt, az év legmelegebb része." },
		
    { 	"word": "primavera", 
		"hint": "Amikor a természet virágba borul, a tél után következik." },
		
    { 	"word": "outono", 
		"hint": "Amikor a levelek hullanak, a nyár után következik." },
		
    { 	"word": "céu", 
		"hint": "Felettünk van, nappal kék, éjjel csillagos." },
		
    { 	"word": "nuvem", 
		"hint": "Az égen lebegő vízpára, ami fehér vagy szürke." },
		
    { 	"word": "arco-íris", 
		"hint": "Eső után az égen színes csíkok jelennek meg." },
		
    { 	"word": "frio", 
		"hint": "Az alacsony hőmérséklet érzése." },
		
    { 	"word": "quente", 
		"hint": "A magas hőmérséklet érzése." },
		
	{ 	"word": "vulcão", 
		"hint": "Egy hegy, amely forró lávát lövell ki." },
		
    { 	"word": "floresta", 
		"hint": "Sok fák és növények egy helyen." },
		
    { 	"word": "selva", 
		"hint": "Egy sűrű, trópusi erdő." },
		
    { 	"word": "montanha", 
		"hint": "Egy nagy, magas földrajzi forma." },
		
    { 	"word": "serra", 
		"hint": "Hegyekből álló vonulat." },
		
    { 	"word": "colina", 
		"hint": "Egy kisebb, domború földrajzi forma." },
		
    { 	"word": "cachoeira", 
		"hint": "Zuhogó víz, ami folyóból esik le magasból." },
		
    { 	"word": "rio", 
		"hint": "Egy hosszú, folyóvíz." },
		
    { 	"word": "lago", 
		"hint": "Egy állóvíz, amelyet föld vesz körül." },
		
    { 	"word": "deserto", 
		"hint": "Egy nagyon száraz terület, kevés vízzel." },
		
    { 	"word": "península", 	
		"hint": "Szárazföld, amit három oldalról víz vesz körül." },
		
    { 	"word": "ilha", 
		"hint": "Teljesen víz által körülvett szárazföld." },
		
    { 	"word": "praia", 
		"hint": "Homokos partvidék a víz mellett." },
		
    { 	"word": "oceano", 
		"hint": "A legnagyobb víztömeg a Földön." },
		
    { 	"word": "mar", 
		"hint": "Az óceán kisebb része, partok közelében." },
		
    { 	"word": "baía", 
		"hint": "Egy víztest, amely egy partot karéjoz." },
		
    { 	"word": "costa", 
		"hint": "A tenger vagy óceán melletti partvidék." },
		
    { 	"word": "galáxia", 
		"hint": "Csillagok, bolygók és más égitestek nagy csoportja az űrben." },
		
    { 	"word": "estrela", 
		"hint": "Az égen fénylő, önállóan sugárzó égitest." },
		
    { 	"word": "lua", 
		"hint": "A Föld éjszakai kísérője az égen." },
		
    { 	"word": "planeta", 
		"hint": "Nagy, kerek égitest, amely egy csillag körül kering." },
		
    { 	"word": "asteróide", 
		"hint": "Kisebb kőzetdarab, amely az űrben mozog." },
		
    { 	"word": "cometa", 
		"hint": "Jégből és porból álló égitest, ami csóvát húz maga mögött." },
		
    { 	"word": "meteoro", 
		"hint": "Egy űrből a Föld légkörébe érkező kődarab." },
		
    { 	"word": "espaço", 
		"hint": "A világegyetem végtelen tágassága." },
	
    { 	"word": "universo", 
		"hint": "Minden létező térben és időben." },
		
    { 	"word": "telescópio", 
		"hint": "Eszköz, amely távoli égitesteket nagyít fel." },
		
    { 	"word": "sistema solar", 
		"hint": "Nap körül keringő bolygók és más égitestek rendszere." },
	
    { 	"word": "sol", 
		"hint": "A naprendszer központi csillaga." },
		
    { 	"word": "mercúrio", 
		"hint": "A Naphoz legközelebb eső bolygó." },
		
    { 	"word": "vênus", 
		"hint": "Bolygó, amit 'Esthajnalcsillagnak' is neveznek." },
		
    {	"word": "terra", 
		"hint": "Az a bolygó, ahol élünk." },
		
    { 	"word": "marte", 
		"hint": "Vörös bolygóként ismert, a Föld szomszédja." },
		
    { 	"word": "júpiter", 
		"hint": "A Naprendszer legnagyobb bolygója." },
		
    { 	"word": "saturno", 
		"hint": "Bolygó, amely híres gyűrűiről." },
		
    { 	"word": "urano", 
		"hint": "Kékes színű bolygó a Naprendszerben." },
		
    { 	"word": "neptuno", 
		"hint": "A Naprendszer legtávolabbi bolygója." },
		
    { 	"word": "plutão", 
		"hint": "Korábban bolygónak tekintették, most törpebolygó." },

	{ 	"word": "Força", 
		"hint": "Hatás, ami mozgást vagy alakváltozást okoz." },

	{ 	"word": "Movimento", 
		"hint": "Testek helyváltoztatása térben és időben." },

	{ 	"word": "Velocidade", 
		"hint": "A mozgás sebességének mértéke." },
		
	{ 	"word": "Massa", 
		"hint": "Az anyag mennyiségének mértéke." },

	{ 	"word": "Peso", 
		"hint": "A gravitáció által kifejtett erő." },

	{ 	"word": "Energia", 
		"hint": "Képesség munkavégzésre vagy változásra." },

	{ 	"word": "Trabalho", 
		"hint": "Erő által végzett energiaátadás." },

	{ 	"word": "Temperatura", 
		"hint": "Az anyag részecskéinek átlagos mozgási energiája." },

	{ 	"word": "Pressão",
		"hint": "Erő, ami egy felületre hat." },

	{ 	"word": "Densidade", 
		"hint": "Az anyag tömege térfogategységenként." },

	{ 	"word": "Tempo", 
		"hint": "Az események sorrendjének mértéke." },

	{ 	"word": "Volume", 
		"hint": "Az anyag által elfoglalt tér mérete." },

	{ 	"word": "Rapidez", 
		"hint": "A mozgás gyorsasága és iránya." },

	{ 	"word": "Impulso", 
		"hint": "Mozgásban lévő testek mennyisége." },

	{ 	"word": "Luz", 
		"hint": "Elektromágneses sugárzás, amit látunk." },

	{ 	"word": "Som", 
		"hint": "Rezgések által keltett hullámok." },

	{ 	"word": "Gravidade", 
		"hint": "Vonzerő, ami testeket egymás felé húz." },
];