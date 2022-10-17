import { MockMethod } from 'vite-plugin-mock';
import { Random } from 'mockjs';
import { successResp } from './_utils';

const requests: MockMethod[] = [
  {
    url: '/api/v1/mgdb/query',
    method: 'post',
    response: () => {
      return successResp({
        count: 100,
        data: {},
      });
    },
  },
  {
    url: '/api/v1/mgdb/read',
    method: 'post',
    response: () => {
      return successResp({
        count: 100,
        data: {},
      });
    },
  },
  {
    url: '/api/v1/mgdb/query',
    method: 'put',
    response: ({ query }: { query: any }) => {
      const size = +query.size;
      return successResp({
        items: Array(size),
      });
    },
  },
  {
    url: '/api/v1/mgdb/query',
    method: 'delete',
    response: () => {
      return successResp();
    },
  },
];

export default requests;