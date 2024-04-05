import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Movies } from './Pages/Movies'
import { TvShows } from './Pages/TvShows'
import { ScreenLayout } from './ScreenLayout/ScreenLayout'
import { MovieDetails } from './Pages/MovieDetails'

const routes = createBrowserRouter([
  {
    path: "/", element: <ScreenLayout />,

    children: [
      { path: "/", element: <Home /> },
      { path: "/movies", element: <Movies /> },
      { path: "/tvShows", element: <TvShows /> },
      { path: "/movieDetails/:id", element: <MovieDetails /> }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App;
