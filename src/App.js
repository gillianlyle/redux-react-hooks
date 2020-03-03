import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import axios from 'axios';

function App() {

  const content = useSelector(state => state); //this hook gives us redux store state
  const dispatch = useDispatch(); //this hook gives us dispatch method
  
  //async action
  function getData(){
    return dispatch => {
      axios.get("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => 
        dispatch({
          type: "FETCH_DATA",
          data: response.data
        })
      );
    };
  }

  useEffect(() => {
    dispatch(getData());
  }, [])

  return (
    <div className="App">
       {content.data && (
         <ul>
           <li>{content.data.id}</li>
           <li>{content.data.title}</li>
         </ul>
       )}
    </div>
  );
}

export default App;
