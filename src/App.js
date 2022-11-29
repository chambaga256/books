
import './App.css';
import { Link, Route, Router, Routes } from 'react-router-dom';
import BookList from "./components/BookList"
import AddBook from './components/AddBook';
function App() {
  return (
   
      <div>
        {/* <nav>
           <ul>
            <li>
              <Link to="/">BookList</Link>
            </li>
           </ul>
        </nav>
        <Routes>
          <Route path="/" element={<BookList/>} >

          </Route>
        </Routes> */}
        <BookList />

        <AddBook />
      </div>


  
  );
}

export default App;
