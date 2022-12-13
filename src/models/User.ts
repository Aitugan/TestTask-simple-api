import { DataTypes, } from 'sequelize'
import sequelize from '../db/postgres';

var User = sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: false,
        },
        name: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize: sequelize,
        tableName: 'User',
        timestamps: false,
    },
);

// export default User
User.sync({
	force: false
});

export default User
