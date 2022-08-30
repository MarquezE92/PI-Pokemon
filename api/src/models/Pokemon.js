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
      validate: { // agregar un -> notIn: [['nombres de los pokémons que voy a traer']]
        isAlpha: true,
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
    }
  },
  {
  timestamps: false, //Para eliminar el createdAt/updatedAt de la tabla
  }); 
};  
