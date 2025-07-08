import express from 'express';
import notesRoutes from './routes/notes.js';
const app = express();

app.use(express.json());

app.use('/notes', notesRoutes);
app.listen(3000,()=>{
    console.log("La aplicación esta corriendo en el puerto 3000");
});

export default app;