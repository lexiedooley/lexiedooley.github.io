const students = ['willump', 'cleo', 'pixie', 'ralphie', 'twitch', 'annie', 'marble', 'sable', 'kiwi', 'kairi', 'petunia'];

// const obj = {};

// obj.getAll = function(req, res, next) {
//     // return students;
//     res.locals.studentsNames = students;
//     return next();
// }
    
// module.exports = obj;

module.exports = { 
    getAll: function() {
        return students;
    }
};