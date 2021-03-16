'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Project extends Sequelize.Model {}
        Project.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            projectName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            projectCost: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
        }, { sequelize });
    
        return Project;
    }
