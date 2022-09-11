const { Pokemon, Type } = require('../db');
const axios = require('axios');

async function getApiFirstInfo() {
	const pokemonsData = [];
	const firstApi = await axios.get('https://pokeapi.co/api/v2/pokemon');
	const partTwo = await axios.get(firstApi.data.next);
	const urlFirstsPoke = firstApi.data.results.map(async(pokemon)=> await axios.get(pokemon.url));
	const urlSecondsPoke = partTwo.data.results.map(async(pokemon)=> await axios.get(pokemon.url));
	const urlAll = urlFirstsPoke.concat(urlSecondsPoke);

	const pokeData = Promise.all(urlAll)
		.then(poke=> {poke.map(p=>{
			pokemonsData.push({
				ID: p.data.id,
				name: p.data.name,
				image: p.data.sprites.other.home.front_default,
				types: p.data.types.map((type)=>{ return {'name': type.type.name}}),
				attack: p.data.stats[1]['base_stat']
			})
		})
		return pokemonsData;
	})
	return pokeData;
};

async function getPokemonsCreated() {
	const pokemonsC = await Pokemon.findAll({
				attributes: ['image', 'name', 'ID', 'attack'],
				include: {
					model: Type,
					attributes: ['name'],
					through: {
						attributes:[],
					}
				}
			});
	return pokemonsC;
};



async function getAllpokemons() {
	const pokemons40 = await getApiFirstInfo();
	const pokeCreated = await getPokemonsCreated();
	const allPokemons = pokemons40.concat(pokeCreated);
	
	return allPokemons;
};


async function getPokemonApiById(id) {
	const llamadoApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const pokeData = {
		ID: llamadoApi.data.id,
		name: llamadoApi.data.name,
		image: llamadoApi.data.sprites.versions['generation-v']['black-white']['animated']['front_shiny'],
		types: llamadoApi.data.types.map((type)=> {return {name: type.type.name}}),
		hp: llamadoApi.data.stats[0]['base_stat'],
		attack: llamadoApi.data.stats[1]['base_stat'],
		defense: llamadoApi.data.stats[2]['base_stat'],
		speed: llamadoApi.data.stats[5]['base_stat'],
		height: llamadoApi.data.height,
		weight: llamadoApi.data.weight
	}

	return pokeData;
};

async function getPokemonCreatedById(id) {
	const pokeData = await Pokemon.findAll({
		where:{
			ID: id
		},
		include: {
					model: Type,
					attributes: ['name'],
					through: {
						attributes:[],
					}
				}
	});
	return pokeData;
}


module.exports = {
	getAllpokemons,
	getPokemonApiById,
	getPokemonCreatedById
};