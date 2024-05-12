import { Routes, Route, Navigate } from "react-router-dom";
import { About, Blog, Contacts, CreateNewPost, Home, Login, Page404, SinglePost } from "./pages";
import { Layout } from "./components/Layout";
import { AuthRequire } from "./hoc/AuthRequire";
import { Profile } from './pages/Profile';
import { ProfileEdit } from './pages/ProfileEdit';

const App = () => {
  const posts = [
    { id: 1, title: 'title post 1', body: 'text for post 1' },
    { id: 2, title: 'title post 2', body: 'text for post 2' },
    { id: 3, title: 'title post 3', body: 'text for post 3' },
  ];

  return (    
    <Routes>


      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="about" element={ <About /> } />

        <Route path="posts" element={ <Navigate to="/blog" replace /> } />
        <Route path="blog" element={ <Blog data={ posts }/> } />
        <Route path="blog/:id" element={ <SinglePost data={ posts }/> } />
        <Route path="blog/new" element={
          <AuthRequire>
            <CreateNewPost /> 
          </AuthRequire> } 
        />

        <Route path="contacts" element={ <Contacts /> } />

        <Route path="login" element={ <Login /> }/>

        <Route path="/profile" element={<Profile />} />

        <Route path="/profile/edit" element={<ProfileEdit />} />


        <Route path="*" element={ <Page404 /> } />
      </Route>
      
    </Routes>
  );
}

export default App;
