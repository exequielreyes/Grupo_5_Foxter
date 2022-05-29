module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    
    let cols = {
        idCategory: {
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
    
    const Category = sequelize.define(alias, cols, config);
    
    //Relaciones
    
    Category.associate = (models) => {
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'idCategory'
        })
    }
    
    return Category;
    }