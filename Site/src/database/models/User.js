module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    
    let cols = {
        idUser: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        date: {
            type: dataTypes.DATE
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
            // unique: true
        },
        avatar: {
            type: dataTypes.STRING(255)
        },
        rol: {
            type: dataTypes.STRING(100)
        },
        remember: {
            type: dataTypes.BOOLEAN
        }    
    }
    
    let config = {
        timestamps: false
    }
    
    const User = sequelize.define(alias, cols, config);
    
    //Relaciones
    
    User.associate = (models) => {
        User.belongsToMany(models.Product, {
            as: 'products',
            through: 'userProduct',
            foreignKey: 'userId',
            otherKey: 'productId',
            timestamps: false,
            onDelete: 'CASCADE'
        })
    }
    
    return User;
    }