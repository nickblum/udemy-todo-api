var Todos = require('../models/todoModel');

module.exports = function(app){
    app.get('/api/setupTodos',function(req,res){
        var starterTodos = [
            {
                username: 'todouser',
                todo: 'Make an app',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'todouser',
                todo: 'Start a farm',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'todouser',
                todo: 'Provide for posterity',
                isDone: false,
                hasAttachment: false
            }
        ]

        Todos.create(starterTodos, function(err, results){
            res.send(results);
        });

    });

}