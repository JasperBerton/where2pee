# Examenopdracht Front-end Web Development

- Student: Jasper Berton
- Studentennummer: 202074759
- E-mailadres: jasper.berton@student.hogent.be

## Vereisten

Ik verwacht dat volgende software reeds geïnstalleerd is:

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
- ...

> Vul eventueel aan

## Opstarten

> Schrijf hier hoe we de applicatie starten (.env bestanden aanmaken, commando's om uit te voeren...)
.env bestand toevoegen met volgende informatie:
REACT_APP_AUTH0_DOMAIN="dev-rvdcsc46oy0hlxea.eu.auth0.com"
REACT_APP_AUTH0_CLIENT="VqaoP98wQ3Gxd3x3i8EmhFslAoW6bXS1"
REACT_APP_FIREBASE_API_KEY="AIzaSyC3Uq-sCHvkfVPWiMDBNgHddtCUb7VLCs4"
REACT_APP_FIREBASE_AUTH_DOMAIN="complaintsw2p.firebaseapp.com"
REACT_APP_FIREBASE_DATABASE_URL="https://complaintsw2p-default-rtdb.europe-west1.firebasedatabase.app"
REACT_APP_FIREBASE_PROJECTID="complaintsw2p"
REACT_APP_FIREBASE_STORAGEBUCKET="complaintsw2p.appspot.com"
REACT_APP_FIREBASE_MESSAGESENDERID="287022381092"
REACT_APP_FIREBASE_APPID="1:287022381092:web:f7c34b8b9283512e5c00b1"
REACT_APP_FIREBASE_MEASUREMENTID="G-6ZGHG2SB3Y"

daarna yarn install en yarn start

Inloggen is mogelijk met volgende inloggegevens:

email: jasperberton1@telenet.be
wachtwoord: Admin-123


## Testen

> Schrijf hier hoe we de testen uitvoeren (.env bestanden aanmaken, commando's om uit te voeren...)

npx cypress open en daar zijn de testen dan te zien onder e2e testen.