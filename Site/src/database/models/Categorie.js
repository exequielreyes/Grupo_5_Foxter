module.exports = (sequelize, dataTypes) => {
    let alias = 'Categorie';
    
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
    
    const Categorie = sequelize.define(alias, cols, config);
    
    //Relaciones
    
    Categorie.associate = (models) => {
        Categorie.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'idCategory'
        })
    }
    
    return Categorie;
    }