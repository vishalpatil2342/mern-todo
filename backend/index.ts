import express from 'express';
import cors from 'cors';
import taskRouter from './routes/task.route';

(async () => {
  try {
    
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use("/task", taskRouter);
    
    app.listen(process.env.PORT, () => {
      console.log(`connected successfully ${process.env.PORT}`);
    })
  } catch ({ message }) {
    console.log(message);
  }
})(); 
