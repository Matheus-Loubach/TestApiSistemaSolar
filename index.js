const express = require('express');

const app = express();
const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 8877;

app.get('/planetas',(req, res) =>{
  res.json({
    products: [
      {
        id: 1,
        name: 'Marte',
        desc: 'Marte é um mundo empoeirado, frio e desértico com uma atmosfera muito fina. Há fortes evidências de que Marte era – bilhões de anos atrás – mais úmido e quente, com uma atmosfera mais espessa.',
        diametro:6792.4,
        massa:'6,4174×1023',
        distancia:'227.943.824',
        rotacao:24,
        translacao:686.971,
        temperatura:63,
        atmosfera:'Dióxido de Carbono,Argônio,Nitrogênio,Oxigênio,Monóxido de carbono',
        img: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/6_mars_480x320.jpg'
      },
    ]
  })
})


app.listen(PORT, () => {
  console.log(`PORTA: ${PORT}`);
})

