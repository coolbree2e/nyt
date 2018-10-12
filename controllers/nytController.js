const db = require('../models');

module.exports = {
    findAll:(req,res) => {
console.log('find all')
    },

    findById:(req,res) =>{
console.log('findById')
    },
    remove:(req,res)=>{
console.log('remove')
    }
}