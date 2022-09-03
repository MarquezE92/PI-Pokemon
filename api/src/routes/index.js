const { Router } = require('express');
const { Pokemon, Type } = require('../db');
const axios = require('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

/* async function getPokeApi(url) {
	const llamadoApi = await axios.get(url);
	
	const ID = llamadoApi.data.id;
	const name = llamadoApi.data.name;
	const image = llamadoApi.data.sprites.other.home.front_default;
	const types = llamadoApi.data.types.map((type)=> type.type.name)
	
	console.log({ID, name, image, types});
	return {ID, name, image, types};
		 
}*/
/*const primerosPokes = []
async function getPokeApi(url) {
	
	const datosPokemon = await axios.get(url)
	.then((res)=> res.data)
	.then((data)=> primerosPokes.push({ID: data.id, name: data.name, image: data.sprites.other.home.front_default}));

	//console.log(primerosPokes)
	//return primerosPokes
}
*/
async function getApiFirstInfo() {
	const pokemonsData = [];
	const firstApi = await axios.get('https://pokeapi.co/api/v2/pokemon');
	const urlFirstpoke = firstApi.data.results.map(async(pokemon)=> await axios.get(pokemon.url));

	const pokeData = Promise.all(urlFirstpoke)
		.then(poke=> {poke.map(p=>{
			pokemonsData.push({
				ID: p.data.id,
				name: p.data.name,
				image: p.data.sprites.other.home.front_default,
				types: p.data.types.map((type)=> type.type.name)
			})
		})
		return pokemonsData;
	})
	return pokeData;
}



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
let ID = 41
router.post('/pokemons', async (req, res)=> {
	const {image, name, hp, attack, defense, speed, height, weight} = req.body;
	try {
		const newPokemon = await Pokemon.create({image, name, hp, attack, defense, speed, height, weight, ID: ID++});
		
		return res.json(newPokemon);
	} catch(e) {
		res.send(e);
	}
});

router.get('/pokemons', async (req, res)=>{
	const { name } = req.query;
	const pokemons20 = await getApiFirstInfo();
	try {
		if (name) {
		const pokemonC = await Pokemon.findAll({ //inclue: [{model: Type, attributes:['name'], through: {attributes:[]}}]
					where: {
						name
					},
					attributes: ['image', 'name', 'ID'],
					});
				if (pokemonC[0]) return res.json(pokemonC);
				//acá buscar en la api por nombre


	} else {
			/*const primerllamadoApi = await axios.get('https://pokeapi.co/api/v2/pokemon');
			const primerosPokeApi = await primerllamadoApi.data.results
			const mapped = primerosPokeApi.map( (pokemon)=>{getPokeApi(pokemon.url)})
			return res.json(mapped);
	-------------------------------------------------------------------------
			const primerllamadoApi = axios.get('https://pokeapi.co/api/v2/pokemon')
				.then((res)=> res.data)
				.then((data)=> data.results.map((pokemon)=>getPokeApi(pokemon.url)));*/
			return res.send(pokemons20)
			const pokemonsC = await Pokemon.findAll({
				attributes: ['image', 'name', 'ID']
			}); 
			res.json(pokemonsC);
		}
		} catch(e) {
			res.send(e);
		}
});

router.get('/pokemons/:idPokemon', async (req, res)=>{
	const { idPokemon } = req.params;
	const pokemon = await Pokemon.findByPk(idPokemon);
	res.json(pokemon);
});


router.get('/types', async (req, res)=> {
	try {
	const types = await Type.findAll({
		attributes: ['name', 'id']
		})
	
	if (types[0]) {
		return res.json(types);
	} else {
		const llamadoApi = await axios.get('https://pokeapi.co/api/v2/type');
		const typesOriginal= llamadoApi.data.results.map((type)=> {return {'name':type.name}});
		
			
		Type.bulkCreate(typesOriginal);
		return res.json(typesOriginal);
	}
	} catch(e) {
		res.send(e);
	}
});

router.put('/pokemons-types/:idPokemon/:idTypes', async(req, res)=>{

	const {idPokemon} = req.params; //le paso el id del pokémon
	const {idTypes} = req.params; //le paso un array de los id de todos los tipos a los que pertenece
	let pokemon = await Pokemon.findByPk(idPokemon); //agarro al Pokémon correspondiente

	res.json(await pokemon.addTypes(idTypes))

})


module.exports = router;
