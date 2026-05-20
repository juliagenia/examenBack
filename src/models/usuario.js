import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Usuario = sequelize.define('Usuario', {
  email: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  password: { 
    type: DataTypes.STRING,
    allowNull: true 
    
  },
   nombreUsuario: { 
    type: DataTypes.STRING,
    allowNull: true 
    
  },
   fechaNacimiento: { 
    type: DataTypes.DATEONLY,
    allowNull: true 
    
  },
  

});

export default Usuario;