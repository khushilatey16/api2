import express from 'express';

const app = express();
app.use(express.json());

const tasks = []; // use as a temp database

app.get('/health', (req, res) => { // health api: for checking server condition
    res.json({
        success: true,
        message: 'server is healthy'
    });
});

app.post('/create-task', (req, res) => {
    const { id, title, priority } = req.body;

    if(!id){
        return res.json({
            success :false,
            message: "id is required"
        })
    }
    if(!title){
        return res.json({
            success :false,
            message: "title is required"
        })
    }
    if(!priority){
        return res.json({
            success :false,
            message: "priority is required"
        })
    }


    const newTask = {
        "id": id, //"key":value
        "title": title,
        "priority": priority
    };

    tasks.push(newTask);

    res.json({
        success: true,
        message: 'task created successfully',
        data: newTask
    });
});

app.get('/all-tasks', (req , res) => {
    res.json({
        success: true,
        message: 'tasks added',
        data: tasks
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
