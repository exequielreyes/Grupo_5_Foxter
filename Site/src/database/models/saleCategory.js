module.exports = (sequelize, dataTypes) => {
    let alias = 'saleCategory';
    
    let cols = {
        idSaleCategory: {
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
    
    const saleCategory = sequelize.define(alias, cols, config);
    
    //Relaciones
    
    saleCategory.associate = (models) => {
        saleCategory.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'idSaleCategory'
        })
    }
    
    return saleCategory;
    }