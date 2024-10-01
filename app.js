const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // middleware do parsowania danych z formularzy

app.get('/',(req, res) => {                  //
    res.sendFile(__dirname + '/index.html'); // obsługa wyświetlenia formularza
});                                          //

app.post('/submit', (req,res) => {                                      //
    const imie = req.body.imie;                                         //
    const nazwisko = req.body.nazwisko;                                 // obsługa przesyłania formluarza
    res.send(`Otrzymano dane: Imię - ${imie}, Nazwisko - ${nazwisko}`); //
});                                                                     //

app.listen(port, () =>{                                       //
    console.log(`Serwer działa na http://localhost:${port}`); // Uruchomienie serwera
})                                                            //