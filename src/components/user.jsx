//our parameters are located in match props
// const User = (props) => {
//   console.log(props.match.params);
//   return <h1>User</h1>;
// };

// export default User;

import { useParams } from 'react-router-dom';
export default function User() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
