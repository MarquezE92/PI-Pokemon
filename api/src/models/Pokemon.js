// Para poder trabajar con sequelize y postgres, instalamos sequelize
// y pg.
const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      },
    name: {
      type: DataTypes.STRING(15), //El pokémon con nombre más largo a la fecha es 'Crabominable', con solo 12 caracteres
      allowNull: false,
      unique: true,
      validate: { 
        isAlpha: true,
        notIn: [['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard',
              'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle',
              'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow',
              'fearow', 'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 'sandslash', 'nidoran',
              'nidoran-f', 'nidorina', 'nidoqueen', 'nidoran-m', 'nidorino', 'nidoking', 'clefairy',
              'clefable', 'vulpix', 'ninetales', 'jigglypuff', 'wigglytuff']]
      }
    },
    hp: {
      type: DataTypes.INTEGER,
      defaultValue: 55,
      validate: {
        max: 150,
        min: 15
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      defaultValue: 48,
      validate: {
        max: 150,
        min: 10
      }
    },
    defense: {
      type: DataTypes.INTEGER,
      defaultValue: 65,
      validate: {
        max: 150,
        min: 15
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 45,
      validate: {
        max: 150,
        min: 10
      }
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
      validate: {
        max: 10,
        min: 1
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 300,
      validate: {
        max: 1500,
        min: 1
      }
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: 'https://image.winudf.com/v2/image1/YWlyLmNvbS5zdW1tb2dhbWVzLnBva2VkZWdnYW5kaGF0Y2hpdF9pY29uXzE1NTUxMTA5NjlfMDc3/icon.png?w=&fakeurl=1'
    },
  },
  {
  timestamps: false, //Para eliminar el createdAt/updatedAt de la tabla
  }); 
};  
