import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Plan = sequelize.define('Plan', {
  nombre: { 
    type: DataTypes.ENUM ("Gratuito", "Premium Individual", "Premium Familiar"), 
    allowNull: true 
  },
  precioMensual: { 
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  calidadAudio: { 
    type: DataTypes.ENUM,
    allowNull: true
  },
  limiteDispositivos: { 
    type: DataTypes.TINYINT,
    allowNull: true
  },


});

export default Plan;