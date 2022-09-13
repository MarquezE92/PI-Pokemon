

export default function validate (input){
		const error= {};
		if(input.name?.length === 0) {
			error.name = 'Your pokemon needs a name'
		} else if(!/^[a-zA-Z]+$/.test(input.name) || input.name?.length > 15) {
			error.name = 'Your name is invalid. It can only contain letters and no more than 15 characters'
		} else if (input.name?.length >0) {
			error.name = ''
		};
		if(input.hp && Number.isInteger(input.hp)){
			error.hp= 'Only integer numbers allowed'
		}else if(input.hp && input.hp < 15) {
			error.hp= 'Your pokemon needs more hp'
		} else if(input.hp && input.hp > 150) {
			error.hp= `Your pokemon's hp can't be over 150`
		};
		if(input.attack && Number.isInteger(input.attack)){
			error.attack= 'Only integer numbers allowed'
		}else if(input.attack && input.attack < 10) {
			error.attack= `Your pokemon's attack is too weak`
		} else if(input.attack && input.attack > 150) {
			error.attack= `Your pokemon's attack can't be over 150`
		};
		if(input.defense && Number.isInteger(input.defense)){
			error.defense= 'Only integer numbers allowed'
		}else if(input.defense && input.defense < 15) {
			error.defense= `Your pokemon's defense is too low`
		} else if(input.defense && input.defense > 150) {
			error.defense= `Your pokemon's defense can't be over 150`
		};
		if(input.speed && Number.isInteger(input.speed)){
			error.speed= 'Only integer numbers allowed'
		}else if(input.speed && input.speed < 10) {
			error.speed= `Your pokemon is too slow`
		} else if(input.speed && input.speed > 150) {
			error.speed= `Your pokemon's speed can't be over 150`
		};
		if(input.height && Number.isInteger(input.height)){
			error.height= 'Only integer numbers allowed'
		}else if(input.height && input.height < 1) {
			error.height= `Your pokemon is too short`
		} else if(input.height && input.height > 10) {
			error.height= `Your pokemon's height can't be over 10`
		};
		if(input.weight && Number.isInteger(input.weight)){
			error.weight= 'Only integer numbers allowed'
		}else if(input.weight && input.weight < 1) {
			error.weight= `Your pokemon is too lightweight`
		} else if(input.weight && input.weight > 1500) {
			error.weight= `Your pokemon's weight can't be over 1500`
		};
		if(input.image && !/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(input.image)) {
			error.image= `That's not a valid url`
		};
		if(input.types && input.types.length > 2) error.types = `You can't create a pokemon with more than 2 types`;
	return error
		return error
	};

