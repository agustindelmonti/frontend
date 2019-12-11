import React from "react";
import UserCard from "./UserCard";

//Este componente usa scrolling infinito
const postsPerPage = 20;
const API_URL = "http://localhost:8080";

function FollowList({ match }) {
  const [state, dispatch] = React.useReducer(reducer, {
    loading: false,
    more: true,
    data: [],
    after: 0,
    error: false
  });
  const { loading, data, after, more, error } = state;

  const fetchMore = () => {
    dispatch({ type: "start" });
    //Todo: sacar username de la URL del cliente
    const endpoint = `${API_URL}${match.url}?page=${after}&size=${postsPerPage}`;

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
        dispatch({ type: "error" });
      });
  };

  //Fetches data when the component is first mounted
  React.useEffect(fetchMore, []);

  return (
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

      {error && <div>Server Error</div>}
    </div>
  );
}
export default FollowList;

/*useReducer hook
Encapsula los estados internos posibles del componente 
para desencadenar cambios en los datos (estado interno)
de forma mas ordenada
*/
const reducer = (state, action) => {
  switch (action.type) {
    case "start":
      return { ...state, loading: true, error: false };
    case "loaded":
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.newData],
        more: action.more,
        after: state.after + 1
      };
    case "error":
      return { ...state, loading: false, error: true };
    default:
      throw new Error();
  }
};
