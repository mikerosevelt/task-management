import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class UpdateTask {
  @IsEnum(IsEnum)
  status: TaskStatus;
}
