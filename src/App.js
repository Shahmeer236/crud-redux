// import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import UserList from './features/UserList';
import AddUser from './components/AddUser';
import EditUser from './features/EditUser';
import abc from './features/abc';

function App() {
  return (

     <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
      <h1 className='text-center font-bold text-2xl text-gray-700'>CRUD with Redux toolkit</h1> 
           {/* <AddUser/> */}
      <Routes>
        <Route path="/" element={ <UserList/>}/>
        <Route path='/add-user' element={<AddUser/>} />
        <Route path='/edit-user/:id' element={<EditUser/>} />
        <Route path='/abc' element={<abc/>} />


      </Routes>
      
      </div>

  );
}

export default App;
