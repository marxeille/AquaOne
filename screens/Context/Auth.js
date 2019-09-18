import React, {useState} from 'react';

export const AuthContext = React.createContext({
  user: {name: 'Phạm Thị Lâu Ra', phone: '09000000000'},
  authenticate: () => {},
});

const AuthContextProvider = props => {
  const [loggedUser, setLoggedUser] = useState({
    name: 'Bành Thị Không Ra',
    phone: '09000000000',
  });
  return (
    <AuthContext.Provider
      value={{user: loggedUser, authenticate: setLoggedUser}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
