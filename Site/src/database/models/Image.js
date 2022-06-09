module.exports = (sequelize, dataTypes) => {
    let alias = 'Image';
    
    let cols = {
        idImage: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        productId: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
      
        }
        

    }
    
    let config = {
        timestamps: false
    }
    
    const Image = sequelize.define(alias, cols, config);
    
    //Relaciones
    
    Image.associate = (models) => {
        Image.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'productId',
            onDelete: 'CASCADE',
        })
    }
    
    return Image;
    }