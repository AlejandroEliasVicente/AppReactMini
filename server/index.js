const express = require('express');
const app = express();
const port = 3000;

// https://expressjs.com/en/4x/api.html#req.body
app.use(express.json());

let todos = [
    {
        'id': 1,
        'title': 'Test1',
        'isCompleted': true
    },
    {
        'id': 2,
        'title': 'Test2',
        'isCompleted': false
    },
];

//Listar todas las tareas
app.get('/tarea', (req, res) => {
    res.json(
        {
            'data': todos,
            'error': false
        }
    );
});

//Listar segun el ID
app.get('/tarea/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const todo = todos.find(n => n.id === id);

        if (todo) {
            res.json(
                {
                    'data': todo,
                    'error': false
                }
            );

        } else {
            throw new Error("Id no encontrado")
        }

    } catch (error) {
        res.json(
            {
                'message': error.message,
                'error': true
            }
        );
    }
});

//Crear una tarea
app.post('/ntarea', (req, res) => {

    try {
        console.log(req);
        const nuevaTarea = {
            id: todos.length + 1,
            title: req.body.title,
            isCompleted: false
        };
        todos.push(nuevaTarea);
        res.json(
            {
                'data': todos,
                'error': false
            }
        );
    } catch (error) {
        res.json(
            {
                'error': true
            }
        );
    }

});

//Actualizar una tarea
app.put('/tarea/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        let todo1 = todos.find(n1 => n1.id === id);
        if (todo1) {
            const tareaAct = req.body;
            todo1.title = tareaAct.title || todo1.title;
            todo1.isCompleted = tareaAct.isCompleted || todo1.isCompleted;
            res.json(
                {
                    'data': todo1,
                    'error': false
                }
            );
        } else {
            throw new Error("Id no encontrado")
        }
    } catch (error) {
        res.json(
            {
                'message': error.message,
                'error': true
            }
        );
    }
});

//Borrar por ID
app.delete('/tarea/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
    todos = todos.filter(n2 => n2.id !== id);
    res.json(
        {
            'data': todos,
            'error': false
        }
    );
    } catch (error) {
        res.json(
            {
                'error': true
            }
        );
    }
    
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});