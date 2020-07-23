import React, {useState, useContext} from 'react';

//Context
//UserContext Whatever, 
// export const UserContext = React.createContext();
const UserContext = React.createContext();


//provider :UserContextProvider에 넣는 콤포넌트
// const [user] = useState({
//     name:'Nicolas'
// })
const UserContextProvider = ({children}) => 
{ 
    //state
    const [user, setUser] = useState({
        name:'Nicolas',
        loggedIn:false
    })   
    //function 
    const logUserIn = () => setUser({
        ...user, loggedIn:true
    })
    //provider: context를 가져오는 역활
    //value 값할당
    //{children} 모든 컴포넌트를 자식으로
    return(
        <UserContext.Provider value={{user ,fn:{logUserIn}}}>{children}</UserContext.Provider>
    )

}

//자동으로 실행되는 함수
export const useUser = () => {
    const {user} = useContext(UserContext);
    return user;
}

export const useFns = () => {
    const {fn} = useContext(UserContext);
    return fn;
}

export default UserContextProvider;
