import { IsEnum, IsString } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class GetTasksFilterDto {
  @IsString()
  search: string;

  @IsEnum(IsEnum)
  status: TaskStatus;
}
