const { Router } = require('express');
const { Pokemon, Type } = require('../db');
const axios = require('axios');
const { getAllpokemons, getPokemonApiById, getPokemonCreatedById } = require('../routesFunctions/index')
// Importar todos los routers;


const router = Router();



// Configurar los routers

let ID = 41
router.post('/pokemons', async (req, res)=> { 		//recibe types como un array de ids [1, 2,...20]
	const {name, hp, attack, defense, speed, height, weight, image, types} = req.body;
	try {
		const newPokemon = await Pokemon.create({name: name.toLowerCase(), hp, attack, defense, speed, height, weight, ID: ID++, image});
		
		newPokemon.addTypes(types);

		return res.send('A new Pokemon has been created');
	} catch(e) {
		res.status(400).send(e);
	}
});

router.get('/pokemons', async (req, res)=>{
	const { name } = req.query;
	const allPokemons = await getAllpokemons();

	try {
		if (name) {
		const pokemon = allPokemons.filter((pokemon)=> pokemon.name.toLowerCase() === name.toLowerCase())
				if (pokemon[0]) return res.json(pokemon);
				//acá buscar en la api por nombre
				return res.status(404).send("We couldn't find your Pokemon")

	} else {
			
			res.json(allPokemons);
		}
		} catch(e) {
			res.status(400).send(e);
		}
});

 //debe traer imagen, nombre, tipo, ID, Estadísticas (vida, ataque, defensa, velocidad), Altura y peso
router.get('/pokemons/:idPokemon', async (req, res)=>{ 
	const { idPokemon } = req.params;
	try {
		if (idPokemon<41) {
			const detallesPokemon = await getPokemonApiById(idPokemon);
			return res.json(detallesPokemon);
		} else {
			const detallesPokemon = await getPokemonCreatedById(idPokemon);
			res.json(detallesPokemon);
		}
	} catch(e) {
		res.status(400).send(e);
	}
	
});


router.get('/types', async (req, res)=> {
	try {
	const types = await Type.findAll({
		attributes: ['name']
		})
	
	if (types[0]) {
		return res.json(types);
	} else {
		const llamadoApi = await axios.get('https://pokeapi.co/api/v2/type');
		const typesOriginal= llamadoApi.data.results.map((type)=> {return {name: type.name}});
				
		Type.bulkCreate(typesOriginal);
		return res.json(typesOriginal);
	}
	} catch(e) {
		res.status(400).send(e);
	}
});




module.exports = router;
