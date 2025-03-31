import type { INodeProperties } from 'n8n-workflow';

export const formOperations: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'get',
    options: [
      {
        name: 'Get',
        value: 'get',
        description: 'Get a form',
        action: 'Get a form',
      },
    ],
    displayOptions: {
      show: {
        resource: ['form'],
      },
    },
  },
];