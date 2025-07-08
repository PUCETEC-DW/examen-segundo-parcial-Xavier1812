import { task } from '../models /models.js' 

export const getNotes= (req,res)=>{
    console.log('Total de tareas:')
    res.status(200).json(task)
};

export const addNotes = (req, res)=>{
    console.log(req.body);
    const nuevaTask = {
        id: task.length + 1,
        ...req.body,
    };
    task.push(nuevaTask);
    res.status(201).json(nuevaTask);
};

export const updateNotes = (req, res)=>{
};

export const deleteNotes = (req, res)=>{
}

export const summaryNotes = (req, res)=>{
}






