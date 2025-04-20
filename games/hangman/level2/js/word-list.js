const wordList = [
    { "word": "feliz", 
		"hint": "Uma emoção positiva quando tudo está bem." },
		
    { "word": "triste", 
		"hint": "Um sentimento que surge em momentos de tristeza." },
		
    { "word": "bravo", 
		"hint": "Quando alguém está zangado ou irritado." },
		
    { "word": "medo", 
		"hint": "Uma emoção sentida em situações assustadoras." },
		
    { "word": "alegria", 
		"hint": "Uma forma de felicidade em momentos de alegria." },
		
    { "word": "surpreso", 
		"hint": "Quando algo inesperado acontece e ficamos admirados." },
		
    { "word": "calmo", 
		"hint": "Uma sensação de paz em situações tranquilas." },
	
    { "word": "vivo", 
		"hint": "Algo que tem vida, o oposto de morto." },
		
    { "word": "morto", 
		"hint": "O oposto de vivo, em estado sem vida." },
		
    { "word": "sozinho", 
		"hint": "Quando alguém está sem companhia." },
		
    { "word": "juntos", 
		"hint": "Quando pessoas ou coisas estão unidas." },
		
    { "word": "entediado", 
		"hint": "Uma sensação causada pelo tédio." },
		
    { "word": "fácil", 
		"hint": "Algo que não é difícil." },
		
    { "word": "difícil", 
		"hint": "Algo que não é fácil." },
		
    { "word": "ruim", 
		"hint": "Algo que não é bom, o oposto de bom." },
		
    { "word": "bom", 
		"hint": "Algo que consideramos positivo ou bom." },
		
    { "word": "estaçoes", 
		"hint": "As quatro partes em que o ano é dividido." },
		
    { "word": "inverno", 
		"hint": "A estação mais fria do ano." },
		
    { "word": "verão", 
		"hint": "Quando o sol brilha muito, a época mais quente do ano." },
		
    { "word": "primavera", 
		"hint": "Quando a natureza floresce após o inverno." },
		
    { "word": "outono", 
		"hint": "Quando as folhas caem, segue o verão." },
		
    { "word": "céu", 
		"hint": "Está acima de nós, azul de dia, estrelado à noite." },
		
    { "word": "nuvem", 
		"hint": "Vapor de água no céu, branco ou cinzento." },
		
    { "word": "arco-íris", 
		"hint": "Após a chuva, aparecem faixas coloridas no céu." },
		
    { "word": "frio", 
		"hint": "A sensação de baixa temperatura." },
		
    { "word": "quente", 
		"hint": "A sensação de alta temperatura." },
		
    { "word": "vulcão", 
		"hint": "Uma montanha que expele lava quente." },
		
    { "word": "floresta", 
		"hint": "Um local com muitas árvores e plantas." },
		
    { "word": "selva", 
		"hint": "Uma floresta tropical densa." },
		
    { "word": "montanha", 
		"hint": "Uma grande formação geográfica elevada." },
		
    { "word": "serra", 
		"hint": "Uma cadeia de montanhas." },
		
    { "word": "colina", 
		"hint": "Uma pequena formação geográfica arredondada." },
		
    { "word": "cachoeira", 
		"hint": "Água que cai de um rio em grande altura." },
		
    { "word": "rio", 
		"hint": "Um curso de água longo e contínuo." },
		
    { "word": "lago", 
		"hint": "Uma massa de água cercada por terra." },
		
    { "word": "deserto", 
		"hint": "Uma área muito seca com pouca água." },
		
    { "word": "península", 
		"hint": "Terra cercada por água em três lados." },
		
    { 	"word": "ilha", 
		"hint": "Terra cercada completamente por água." },
		
    { "word": "praia", 
		"hint": "Uma área de areia junto à água." },
		
    {	"word": "oceano", 
		"hint": "A maior massa de água na Terra." },
		
    { "word": "mar", 
		"hint": "Parte menor do oceano, perto das costas." },
		
    { "word": "baía", 
		"hint": "Um corpo de água curvado para a terra." },
		
    { "word": "costa", 
		"hint": "Área de terra junto ao mar ou oceano." },
		
    { "word": "galáxia", 
		"hint": "Um grande conjunto de estrelas e planetas no espaço." },
		
    { "word": "estrela", 
		"hint": "Um corpo celeste que brilha no céu." },
		
    { "word": "lua", 
		"hint": "O satélite natural da Terra." },
	
    { "word": "planeta", 
		"hint": "Um corpo celeste redondo que orbita uma estrela." },
		
    { "word": "asteróide", 
		"hint": "Um pedaço de rocha menor que se move no espaço." },
		
    { "word": "cometa", 
		"hint": "Um corpo celeste de gelo e poeira com cauda." },
		
    { "word": "meteoro", 
		"hint": "Um pedaço de rocha que entra na atmosfera da Terra." },
		
    { "word": "espaço", 
		"hint": "A vastidão infinita do universo." },
		
    { "word": "universo", 
		"hint": "Tudo o que existe no espaço e no tempo." },
		
    { "word": "telescópio", 
		"hint": "Um instrumento para ampliar objetos distantes." },
		
    { "word": "sistema solar", 
		"hint": "O sistema de planetas que orbitam o sol." },
		
    { "word": "sol", 
		"hint": "A estrela central do sistema solar." },
		
    { "word": "mercúrio", 
		"hint": "O planeta mais próximo do Sol." },
		
    { "word": "vênus", 
		"hint": "Um planeta conhecido como 'Estrela da Manhã'." },
		
    { "word": "terra", 
		"hint": "O planeta em que vivemos." },
		
    { "word": "marte", 
		"hint": "Conhecido como o planeta vermelho, vizinho da Terra." },
		
    { "word": "júpiter", 
		"hint": "O maior planeta do sistema solar." },
		
    { "word": "saturno", 
		"hint": "Planeta famoso pelos seus anéis." },
		
    { "word": "urano", 
		"hint": "Um planeta azul no sistema solar." },
		
    { "word": "neptuno", 
		"hint": "O planeta mais distante do sistema solar." },
		
    { "word": "plutão", 
		"hint": "Antes considerado planeta, agora um planeta anão." },

    { "word": "Força", 
      "hint": "Efeito que causa movimento ou deformação." },
  
    { "word": "Movimento", 
      "hint": "Mudança de posição no espaço e no tempo." },
  
    { "word": "Velocidade", 
      "hint": "Medida da rapidez do movimento." },
      
    { "word": "Massa", 
      "hint": "Quantidade de matéria de um corpo." },

    { "word": "Peso", 
      "hint": "Força exercida pela gravidade sobre um corpo." },
  
    { "word": "Energia", 
      "hint": "Capacidade de realizar trabalho ou gerar mudança." },

    { "word": "Trabalho", 
      "hint": "Transferência de energia por meio de força." },
  
    { "word": "Temperatura", 
      "hint": "Energia média das partículas de uma substância." },

    { "word": "Pressão",
      "hint": "Força aplicada sobre uma superfície." },
  
    { "word": "Densidade", 
      "hint": "Massa de um material por unidade de volume." },
  
    { "word": "Tempo", 
      "hint": "Medida da sequência dos eventos." },
  
    { "word": "Volume", 
      "hint": "Espaço ocupado por um corpo." },
  
    { "word": "Rapidez", 
      "hint": "Intensidade e direção do movimento." },
  
    { "word": "Impulso", 
      "hint": "Quantidade de movimento de um objeto." },
  
    { "word": "Luz", 
      "hint": "Radiação eletromagnética visível aos olhos humanos." },
  
    { "word": "Som", 
      "hint": "Ondas geradas por vibrações." },
  
    { "word": "Gravidade", 
      "hint": "Força que atrai corpos uns para os outros." },
];