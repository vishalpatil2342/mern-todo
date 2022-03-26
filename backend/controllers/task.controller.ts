import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';


const { task } = new PrismaClient();


export const getAllTask = async (req: Request, res: Response) => {
  try {
    
    const data = await task.findMany({
      select: {
        id: true,
        task:true
      }
    })
    res.json({ "data": data });
  } catch ({ message }) {
    console.log(message);
    res.send(message);
  }
}


export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await task.delete({
      where: {
        id
      }
    }) 
    res.json({ "data": data });
  } catch ({ message }) {
    console.log(message);
    res.send(message);
  }
}


export const createTask = async (req: Request, res: Response) => {
  const { todo } = req.body;
  try {
    
    const data = await task.create({
      data: {
        task:todo
      }
    })
    
    res.json({ "data": data });
  } catch ({ message }) {
    console.log(message);
    res.send(message);
  }
}


