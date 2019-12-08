import React from "react";
import UserCard from "./UserCard";

//Este componente usa scrolling infinito
const postsPerPage = 20;
const API_URL = "http://localhost:8080";
const username = "jowas2";

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    loading: false,
    more: true,
    data: [],
    after: 0
  });

  const { loading, data, after, more } = state;

  const fetchMore = () => {
    dispatch({ type: "start" });
    //Todo: sacar username de la URL del cliente
    const endpoint = `${API_URL}/${username}/followed?page=${after}&size=${postsPerPage}`;

    fetch(endpoint)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: "loaded",
          newData: response.content,
          more: !response.last
        });
      })
      .catch(error => {
        console.error("Error:", error);
        // do some clean-up job
      });
  };

  return (
    <div>
      <div>
        {data.map(user => (
          <UserCard key={user.id} data={user} />
        ))}

        {loading && <div>Loading..</div>}

        {!loading && more && (
          <div>
            <button onClick={fetchMore}>Load More</button>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;

/*useReducer hook
Encapsula los estados internos posibles del componente 
para desencadenar cambios en los datos (estado interno)
de forma mas ordenada
*/
const reducer = (state, action) => {
  switch (action.type) {
    case "start":
      return { ...state, loading: true };
    case "loaded":
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.newData],
        more: action.more,
        after: state.after + 1
      };
    default:
      throw new Error();
  }
};
