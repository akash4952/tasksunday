import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { Task, TaskStatus } from './task.model';
import { TaskService } from './task.service';

@Controller('task') 
export class TaskController {

    constructor(private taskService: TaskService){}

    @Get()
    getAllTasks():Task[]{
          
        return this.taskService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id:string ){
        return this.taskService.getTaskById(id);
    }


    @Post()
    createTask(@Body() createTaskDto:CreateTaskDto): Task {



        return this.taskService.createTask(createTaskDto);
        
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string){

        this.taskService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body('status') status:TaskStatus): Task{


        return this.taskService.updateTaskStatus(id, status);
    }
}
