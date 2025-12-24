import { createBrowserRouter } from 'react-router';
import homeRouter from './pages/home/homeRouter';

const router = createBrowserRouter([...homeRouter]);

export default router;
