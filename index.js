const express = require('express');

const app = express();
const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 8877;

app.get('/planetas',(req, res) =>{
  res.json({
    planeta:
    [ 
      {
      id: 1,
      name: 'Venus',
      desc: 'Marte é um mundo empoeirado, frio e desértico com uma atmosfera muito fina. Há fortes evidências de que Marte era – bilhões de anos atrás – mais úmido e quente, com uma atmosfera mais espessa.',
      diametro:6792.4,
      massa:'6,4174×1023',
      distancia:'227.943.824',
      rotacao:24,
      translacao:686.971,
      temperatura:63,
      atmosfera:'Dióxido de Carbono,Argônio,Nitrogênio,Oxigênio,Monóxido de carbono',
      img: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/2_mercury_480x320_new.jpg'
    },
    {
        id: 2,
        name: 'Venus',
        desc: 'Marte é um mundo empoeirado, frio e desértico com uma atmosfera muito fina. Há fortes evidências de que Marte era – bilhões de anos atrás – mais úmido e quente, com uma atmosfera mais espessa.',
        diametro:6792.4,
        massa:'6,4174×1023',
        distancia:'227.943.824',
        rotacao:24,
        translacao:686.971,
        temperatura:63,
        atmosfera:'Dióxido de Carbono,Argônio,Nitrogênio,Oxigênio,Monóxido de carbono',
        img: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/3_480x320_venus.png'
      },
      {
        id: 3,
        name: 'terra',
        desc: 'Marte é um mundo empoeirado, frio e desértico com uma atmosfera muito fina. Há fortes evidências de que Marte era – bilhões de anos atrás – mais úmido e quente, com uma atmosfera mais espessa.',
        diametro:6792.4,
        massa:'6,4174×1023',
        distancia:'227.943.824',
        rotacao:24,
        translacao:686.971,
        temperatura:63,
        atmosfera:'Dióxido de Carbono,Argônio,Nitrogênio,Oxigênio,Monóxido de carbono',
        img: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/4_earth_480x320.jpg'
      },
      {
        id: 4,
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
      {
        id: 5,
        name: 'Jupiter',
        desc: 'Marte é um mundo empoeirado, frio e desértico com uma atmosfera muito fina. Há fortes evidências de que Marte era – bilhões de anos atrás – mais úmido e quente, com uma atmosfera mais espessa.',
        diametro:6792.4,
        massa:'6,4174×1023',
        distancia:'227.943.824',
        rotacao:24,
        translacao:686.971,
        temperatura:63,
        atmosfera:'Dióxido de Carbono,Argônio,Nitrogênio,Oxigênio,Monóxido de carbono',
        img: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/9_jupiter_480x320_new.jpg'
      },
      {
        id:6,
        name: 'Saturno',
        desc: 'Marte é um mundo empoeirado, frio e desértico com uma atmosfera muito fina. Há fortes evidências de que Marte era – bilhões de anos atrás – mais úmido e quente, com uma atmosfera mais espessa.',
        diametro:6792.4,
        massa:'6,4174×1023',
        distancia:'227.943.824',
        rotacao:24,
        translacao:686.971,
        temperatura:63,
        atmosfera:'Dióxido de Carbono,Argônio,Nitrogênio,Oxigênio,Monóxido de carbono',
        img: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/38_saturn_480x320.jpg'
      },
      {
        id:7,
        name: 'Urano',
        desc: 'Marte é um mundo empoeirado, frio e desértico com uma atmosfera muito fina. Há fortes evidências de que Marte era – bilhões de anos atrás – mais úmido e quente, com uma atmosfera mais espessa.',
        diametro:6792.4,
        massa:'6,4174×1023',
        distancia:'227.943.824',
        rotacao:24,
        translacao:686.971,
        temperatura:63,
        atmosfera:'Dióxido de Carbono,Argônio,Nitrogênio,Oxigênio,Monóxido de carbono',
        img: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/69_uranus_480x320.jpg'
      },
      {
        id:8,
        name: 'Neturno',
        desc: 'Marte é um mundo empoeirado, frio e desértico com uma atmosfera muito fina. Há fortes evidências de que Marte era – bilhões de anos atrás – mais úmido e quente, com uma atmosfera mais espessa.',
        diametro:6792.4,
        massa:'6,4174×1023',
        distancia:'227.943.824',
        rotacao:24,
        translacao:686.971,
        temperatura:63,
        atmosfera:'Dióxido de Carbono,Argônio,Nitrogênio,Oxigênio,Monóxido de carbono',
        img: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/90_neptune_480x320.jpg'
      },
    ]
  })
})


app.listen(PORT, () => {
  console.log(`PORTA: ${PORT}`);
})

