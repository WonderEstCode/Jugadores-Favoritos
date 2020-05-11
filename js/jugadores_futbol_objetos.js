//jugadores de  futbol con objetos

var x,aux,pregunta,nombreJugadores = ''

var jugadores = [
    {
        nombre : 'Cristiano Ronaldo',
        descripcion :'Cristiano Ronaldo, es un futbolista portugués que juega como delantero en la Juventus F. C. de la Serie A de Italia y en la selección de Portugal, de la cual es su capitán.'
    },
    {
        nombre : 'Messi',
        descripcion :'Leo Messi, ​ es un futbolista argentino que juega como delantero o centrocampista.​​ Ha desarrollado toda su carrera en el F. C. Barcelona de la Primera División de España y en la selección de Argentina, equipos de los que es capitán.'
    },
    {
        nombre : 'James',
        descripcion : 'James Rodríguez​ es un futbolista colombiano nacionalizado español​ que juega como centrocampista en el Real Madrid Club de Fútbol de la Primera División de España. Además es internacional absoluto con la selección de fútbol de Colombia'
    },
    {
        nombre :'Falcao',
        descripcion :'Radamel Falcao García Zárate es un futbolista colombiano que juega como delantero en el Galatasaray Sport Kulübü de la Superliga de Turquía. Debutó profesionalmente con 13 años en el extinto club colombiano Lanceros Boyacá.​'
    },
    {
        nombre : 'Ronaldinho',
        descripcion : 'Ronaldinho, es un exjugador de fútbol brasileño nacionalizado español. Es mundialmente reconocido como uno de los talentos más grandes en la historia de dicho deporte.'
    },
    {
        nombre : 'Mbappé',
        descripcion : 'Kylian Mbappé Lottin; es un futbolista francés que juega como delantero en el París Saint-Germain Football Club de la Ligue 1 de Francia.'
    },
    {
        nombre :'Luis Súarez',
        descripcion : 'Luis Suárez, es un futbolista ítalo-uruguayo que juega como delantero en el Fútbol Club Barcelona de la Primera División de España. Es internacional absoluto con la selección de fútbol de Uruguay, de la cual es el máximo goleador histórico.'
    },
    {
        nombre: 'Oblak',
        descripcion : 'Jan Oblak es un futbolista esloveno. Juega de portero y su equipo actual es el Atlético de Madrid de la Primera División de España. Es internacional con la selección eslovena. Debutó con 16 años en el NK Olimpija Ljubljana de su país.'
    },
    {
        nombre : 'Neymar',
        descripcion : 'Neymar Jr., es un futbolista brasileño que juega como delantero en el París Saint-Germain Football Club de la Ligue 1 de Francia.​ Dotado de una gran técnica, es considerado como uno de los mejores jugadores del mundo de su generación.​​​'

    },
    {
        nombre :'Griezmann',
        descripcion : 'Antoine Griezmann es un futbolista francés que juega como delantero en el Fútbol Club Barcelona de la Primera División de España y además es internacional con la selección de fútbol de Francia. Comenzó su carrera profesional en la Real Sociedad en 2009, ascendiendo a Primera División un año más tarde.'
    },
    {
        nombre :'Mohamed Salah',
        descripcion :'Mohamed Salah es un futbolista egipcio que juega como delantero en el Liverpool Football Club de la Premier League de Inglaterra. Además es internacional con la selección de Egipto. Comenzó su carrera en Egipto. Luego se trasladó al Basilea en 2012, donde ganó la Superliga en su primera temporada.'

    }
]

for(var i = 1; i <= jugadores.length; i++){
    nombreJugadores += i + ") " + jugadores[i-1].nombre + "\n"
}

do{
    x = prompt("Selecciona uno de los siguientes jugadores:\n"+nombreJugadores)
    
    if(x < 1 || x > jugadores.length){
        alert("El número ingresado es incorrecto")
    }else{
        aux = prompt('¿Quiere ver informacion sobre este jugador?')
        if(aux == 'si') alert(jugadores[x-1].nombre+'\n'+jugadores[x-1].descripcion)
    }

    pregunta = prompt('¿Quiere seguir jugando?')

}while(pregunta == 'si')

alert('GRACIAS POR JUGAR!')

