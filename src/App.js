import './App.css';
import { Route, Routes } from 'react-router-dom';
import Posts from './component/Posts';
import Post from './component/Post';
import NotFound from './component/NotFound';
import DefaultP from './component/DefaultP';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Posts />}>
          <Route index element={
            <div>
              <DefaultP />
            </div>
          } />
          <Route path='/posts/:postId' element={<Post />} />

        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
