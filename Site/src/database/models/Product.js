const { sequelize } = require(".");

module.exports = (sequelize, dataTypes) => {


let alias = 'Product';

let cols = {
    idProduct: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: dataTypes.STRING(100),
        allowNull: false
    },
    price: {
        type: dataTypes.INTEGER(10),
        allowNull: false
    },
    discount: {
        type: dataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    idCategory: dataTypes.INTEGER(10).UNSIGNED,
    description: {
        type: dataTypes.STRING(255),
    },
    idSexCategory: dataTypes.INTEGER(10).UNSIGNED,
    idSaleCategory: dataTypes.INTEGER(10).UNSIGNED
}

let config = {
    timestamps: false
}

const Product = sequelize.define(alias, cols, config);

//Relaciones

Product.associate = (models) => {
    Product.belongsTo(models.Categorie, {
        as: 'categorie',
        foreignKey: 'idCategory'
    }),

    Product.belongsTo(models.saleCategory, {
        as: 'saleCategory',
        foreignKey: 'idSaleCategory'
    }),

    Product.belongsTo(models.sexCategory, {
        as: 'sexCategory',
        foreignKey: 'idSexCategory'
    }),

    Product.hasMany(models.Image, {
        as: 'images',
        foreignKey: 'productId'
    }),

    Product.belongsToMany(models.Size, {
        as: 'sizes',
        through: 'productsSizes',
        foreignKey: 'productsId',
        otherKey: 'sizeId'
    }),

    Product.belongsToMany(models.User, {
        as: 'users',
        through: 'userProduct',
        foreignKey: 'productId',
        otherKey: 'userId'
    })

}

return Product;
}