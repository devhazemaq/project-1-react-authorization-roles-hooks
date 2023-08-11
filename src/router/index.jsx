import { routes } from './routes'
import { useRoutes } from 'react-router-dom'


const Router = () => {

  console.log(routes);

  const router = useRoutes(routes);

  return router;
}

export default Router;