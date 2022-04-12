import { uuid } from '../utils'
import { User } from '@/libs/api/auth'

export type TaskStatus = 'ReadyForTesting' | 'Done' | 'Todo';

export interface Task {
  title: string
  description: string;
  name: string;
  id: string;
  userAssigned?: User | null;
  status?: TaskStatus;
}

export interface Board {
  name: string;
  columns: Array<{
    name: string
    tasks: Task[]
  }>;
}

export const MockBoardData: Board = {
  name: 'workshop',
  columns: [
    {
      name: 'Todo',
      tasks: [
        {
          description: 'Javascript task description',
          title: 'Javascript STORY',
          name: 'Javascript Task',
          id: uuid(),
          userAssigned: {
            email: '',
            fullName: 'Emre Baskan'
          }
        },
        {
          description: 'Vue Task description',
          title: 'VUE STORY',
          name: 'VUe task',
          id: uuid(),
          userAssigned: {
            email: '',
            fullName: 'Ridvan Baskan'
          }
        }
      ]
    },
    {
      name: 'In Progress',
      tasks: [
        {
          description: 'React task description',
          title: 'REACT STORY NEW',
          name: 'React task',
          id: uuid(),
          userAssigned: {
            email: '',
            fullName: 'Emre Baskan'
          }
        },
        {
          description: 'Flutter task description',
          title: 'Flutter STORY',
          name: 'Flutter task',
          id: uuid(),
          userAssigned: {
            email: '',
            fullName: 'Ridvan Baskan'
          }
        }
      ]
    },
    {
      name: 'Done',
      tasks: [
        {
          description: 'Angular task description',
          title: 'ANGULAR STORY NEW',
          name: 'angular task',
          id: uuid(),
          userAssigned: {
            email: '',
            fullName: 'Emre Baskan'
          }
        },
        {
          description: 'Node.js task description',
          title: 'NODE.js STORY',
          name: 'node.js task',
          id: uuid(),
          userAssigned: {
            email: '',
            fullName: 'Ridvan Baskan'
          }
        }
      ]
    }
  ]
}
