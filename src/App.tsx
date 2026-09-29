import '@atoms/global.scss';
import { PageTemplate } from './templates/PageTemplate';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Project } from './pages/Projects/Project';
import { About } from './pages/About/About';
import { Redirect } from './atoms/Redirect';
import { Loader } from './atoms/Loader';
import { ErrorFallback } from './atoms/ErrorFallback';





const routes = createBrowserRouter([
    {
      path: 'miniQuiz',
      lazy: async () => {
            const module = await import('miniQuiz/App')
            return {
              Component: module.default
            }
      },
      hydrateFallbackElement: <Loader isCentered/>,
      errorElement: <ErrorFallback message='Возникли проблемы при загрузке приложения, разбираемся'/>
    },
    {
      path: 'typer/*',
      lazy: async () => {
            const module = await import('typer/App')
            return {
              Component: module.default
            }
      },
      hydrateFallbackElement: <Loader isCentered/>,
      errorElement: <ErrorFallback message='Возникли проблемы при загрузке приложения, разбираемся'/>
    },
    {
      path: '/',
      Component: PageTemplate,
      children: [
        {
          path: 'projects',
          Component: Project
        },
        {
          index: true,
          Component: About
        }
      ]
    },
    {
      path: '*',
      middleware: [Redirect]
    }
  ])
export const App = () => {

  return <RouterProvider router={routes}/>
}
