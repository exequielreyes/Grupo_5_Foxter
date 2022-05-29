module.exports = (sequelize, dataTypes) => {
    let alias = 'Size';
    
    let cols = {
        idSize: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    }
    
    let config = {
        timestamps: false
    }
    
    const Size = sequelize.define(alias, cols, config);
    
    //Relaciones
    
    Size.associate = (models) => {
        Size.belongsToMany(models.Product, {
            as: 'products',
            through: 'productsSizes',
            foreignKey: 'sizeId',
            otherKey: 'productsId'
        })
    }
    
    return Size;
    }