module.exports = (sequelize, dataTypes) => {
    let alias = 'sexCategory';
    
    let cols = {
        idSexCategories: {
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
    
    const sexCategory = sequelize.define(alias, cols, config);
    
    //Relaciones
    
    sexCategory.associate = (models) => {
        sexCategory.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'idSexCategory'
        })
    }
    
    return sexCategory;
    }