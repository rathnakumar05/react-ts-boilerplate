import type { RouteObject } from 'react-router';
import Home from './Home';

const homeRouter: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
];

export default homeRouter;
