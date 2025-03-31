import { INodeType, INodeTypeDescription } from 'n8n-workflow';

import {
	formOperations,
} from './descriptions';

export class JotForm implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'JotForm',
    name: 'jotForm',
    icon: 'file:jotForm.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Read, update, write and delete data from JotForm API',
    defaults: {
      name: 'JotForm',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        name: 'JotFormApi',
        required: true,
      },
    ],
    requestDefaults: {
      headers: {
        Accept: 'application/x-www-form-urlencoded',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
		properties: [
      {
        displayName: 'Resource',
        name: 'resource',
        type: 'options',
        noDataExpression: true,
        options: [
          {
            name: 'Form',
            value: 'form',
          },
        ],
        default: 'form',
      },
      ...formOperations,
		]
	};
}