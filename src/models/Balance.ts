import { DataTypes } from 'sequelize'
import User from './User'
import sequelize from '../db/postgres';

var Balance = sequelize.define('balance', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: false,
    },
    amount: {
        type: DataTypes.DECIMAL,
    },
    user_id: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: 'id'
        },
    },
    },
    {
        sequelize: sequelize,
        tableName: 'Balance',
        timestamps: false,
    }
);

// export default Balance
Balance.sync({
	force: false
});

export default Balance
