'use strict';
var express = require('express');
var cors = require('cors');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const app = express();

app.use(cors());
//app.use(express.json());
app.use(express.static('../public'));

const posts = [
  {
    id:1,
    title: "Ciasto marchewkowe z migdałami",
    url: "https://hpba.pl/wp-content/uploads/2017/03/17495552_1493888897312022_1131535202_n.jpg",
    content: "Ciasto marchewkowe ma w moim domu szczególne względy 🙂 Jest jednym z najbardziej lubianych deserów, więc chętnie je przyrządzam, modyfikuję i staram się udoskonalić. Dziś wersja na mące z bezglutenowych płatków owsianych."
},
 {
  id: 2,
  title: "Koktajl sportowca",
  url: "https://hpba.pl/wp-content/uploads/2018/08/MW_JedzenieAnia2018_100518_0255.jpg",
   content: "Dzisiejszy koktajl to propozycja dla osób aktywnych. Banany to przecież idealne owoce dla sportowców! Są źródłem cukrów prostych, które bardzo szybko się wchłaniają, więc doskonałe sprawdzą się jako przekąska potreningowa. Banany wspierają odbudowę glikogenu mięśniowego po treningu. To także bogactwo potasu, magnezu oraz tryptofanu, któremu zawdzięczamy dobry nastrój "
},
{
  id:3,
  title: "Prosty przepis na makaron z cukinią",
  url: "https://hpba.pl/wp-content/uploads/2017/08/DSC_4166-1020x681.jpg",
  content: "Warto korzystać z sezonu na cukinię, póki można ją jeszcze łatwo dostać 🙂 Dziś prosty i szybki przepis na makaron, właśnie z wywołana do tablicy cukinią. Cukinia to zdrowe warzywo, które  jest odpowiednie np. dla osób, z  problematyczną zgagą, dolegliwościami refleksowymi,  bądź nadkwaśnością. Jest idealnym warzywem dla osób, które chcą zgubić nadprogramowe kilogramy, ponieważ cukinia jest niskokaloryczna, lekkostrawna i posiada dużo wody, pobudza perystaltykę jelit. Przygotowanie:\nPokroiłam cukinie w półksiężyce, a cebule w piórka. W międzyczasie ugotowałam makaron al dente.\n Cukinie wrzuciłam na rozgrzaną patelnię z oliwą z oliwek i poddusiłam do miękkości dodając przyprawy.\n Dorzuciłam ugotowany makaron, doprawiłam i posypałam prażonym pestkami słonecznika oraz odrobina tartego parmezanu"
},
{
  id: 4,
  title: "adidas świętuje rekord Bale'a",
  url: "https://sportowyblog.net/public/storage/blog/article/9d/12/0d/44/1016/slider/5b998de631312/big.jpg",
  content: "Najlepszy obecnie piłkarz Smoków i jeden z najważniejszych zawodników w stajni niemieckiego producenta zaprezentował się w nowych butach w spotkaniach z Irlandią i Danią. Dla Bale'a były to pierwsze mecze po pobiciu rekordu. Na specjalnie spersonalizowanych butach, których kolorystyka została utrzyma zgodnie z linią Team Mode, możemy znaleźć wszystko to, co charakteryzuje Walijczyków - flagę i smoka. Do tego na zewnętrznej stronie każdego modelu znalazł się hasztag #29, który oczywiście nawiązuje do liczby bramek zdobytych przez Garetha Bale'a. Do sprzedaży limitowanej edycji modelu X18.1 z kolekcji Team Mode trafiło tylko 29 par butów, które były dostępne wyłącznie w brytyjskim sklepie adidas. Nie trzeba dodawać, że buty rozeszły się szybciej, niż świat o nich usłyszał? Pozostałe modele butów piłkarskich z kolekcji adidas Team Mode znajdziecie w sklepie hurtowniasportowa.net."
},
{
  id:5,
  title : "Pomarańczowa zupa jesiennych warzyw",
  url: "https://hpba.pl/wp-content/uploads/2017/10/DSC_4670-1020x815.jpg",
  content: "Dynia to moje ulubione jesienne warzywo, a pomysły na zupy dyniowe chyba nigdy mi się nie skończą. Dynia to lekkostrawne i niskokaloryczne warzywo, które jednocześnie zawiera całe bogactwo witamin i składników mineralnych. Dzisiaj zupa dyniowa w wersji z batatem i marchwią."
} ,
{
  id:6,
  title : "Budyń waniliowy",
  url: "https://hpba.pl/wp-content/uploads/2018/01/DSC_2451-1020x659.jpg",
  content: "Jeśli chodzi za Tobą śniadanie na słodko, to ten zdrowy przepis jest świetną propozycją dla Ciebie na początek dnia. Przygotujesz go bardzo szybko i równie szybko zniknie ze stołu 🙂 Gwarantuję! Dzisiaj w roli głównej BUDYŃ WANILIOWY, czyli królowa kasz – kasza jaglana z nutką wanilii, w połączeniu z jabłkiem, miodem i rodzynkami."
}
];

app.get('/api/posts', (req, res) => {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("blog");
    dbo.collection("blog").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  }); 

  
});

app.get('/api/posts/:id', (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) {
    res.status(404).send("Post NotFound");
  }
  res.send(post);
});

app.post('/api/posts', (req, res) => {
  const post = {
    id: posts.length + 1,
    title: req.body.name,
    text: req.body.text
  };
  posts.push(post);
  res.send(post);
});

app.put('/api/posts/:id', (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) {
    res.status(404).send("Post NotFound");
  }
  post.title = req.body.title;
  post.text = req.body.text;
  res.send(post);
});

app.delete('/api/posts/:id', (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) {
    res.status(404).send("Post NotFound");
  }
  const index = posts.indexOf(posts);
  posts.splice(index, 1, null);
  res.send(post);
});



app.listen(process.env.PORT || 3000, function () {
  console.info('Server is running')
});
