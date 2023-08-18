  import React from 'react';
  import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
  import AddData from './AddData';
  import EditData from './EditData';
  import ListData from './ListData';
  
  function App() {
    return (
        <React.Fragment>
          <Router>
            <Link to="/ListData">View Data</Link> |
            <Link to='/AddData'>Add Data</Link> |
            <Link to='/EditData'>Edit Data</Link> |
         
          <Routes>
            <Route path="/ListData" element={<ListData/>}/>
            <Route path='/AddData' element={<AddData/>}/>
            <Route path='/EditData' element={<EditData/>}/>
          </Routes>
          </Router>
        </React.Fragment>
    );
  }
  
  export default App;