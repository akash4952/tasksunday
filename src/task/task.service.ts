import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuid} from 'uuid';
import { CreateTaskDto } from 'src/dto/create-task.dto';

@Injectable()
export class TaskService {

    private tasks:Task[] = [];

    getAllTasks(): Task[]{
        return this.tasks;
    }
    
    
    getTaskById(id: string):Task {

        return this.tasks.find(task=> task.id==id)
    }

    createTask(createTaskDto: CreateTaskDto){
        
        const {title,description}=createTaskDto;
       
        const task: Task={
            id:uuid(),
            title,
            description,
            status:TaskStatus.OPEN,


        };
        this.tasks.push(task);
        return task;
    }


    deleteTask(id:string): void{
       
       this.tasks=this.tasks.filter(task=>task.id!==id);
    }


    updateTaskStatus(id:string,status:TaskStatus){
        const task=this.getTaskById(id);
        task.status=status;
        return task; 
    }

    
}
