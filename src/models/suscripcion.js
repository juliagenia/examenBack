import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Suscripcion = sequelize.define('Suscripcion', {
  idUsuario: { 
    type: DataTypes.INTEGER, 
    allowNull: true,
    references:{model: "usuarios", key: "id"}
  },
  idPlan: { 
    type: DataTypes.INTEGER,
     allowNull: true,
    references:{model: "planes", key: "id"}
     
  },
  fechaInicio: { 
    type: DataTypes.DATE, 
    defaultValue: DataTypes.NOW
  },
  activa: { 
    type: DataTypes.BOOLEAN, 
    allowNull: true,
  
  },

});

export default Suscripcion;