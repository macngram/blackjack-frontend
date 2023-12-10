import React, {EventHandler, useState} from 'react'
import axios from "axios";


const Login: React.FC = () => {
    const [id, setId] = useState()
    const [password, setPassword] = useState()
    const url ='http://lcj0821.synology.me:8088/login';

    const onChangeId = (e: any) => {
        setId(e.target.value);
    };
    const onChangePassword = (e: any) => {
        setPassword(e.target.value);
    };
    function login() {
        axios.post(url, {id: id, password: password})
            .then(r  => {
                    if (r.status == 200) {
                        window.sessionStorage.setItem("isLogin", r.data.seq)
                    }
            })
    }
    return (
        <>
            <div>로그인</div>
            <div>
                <input type="text" name='id' onChange={onChangeId} value={id}/>
                <input type="password" name='password' onChange={onChangePassword} value={password} />
                <button onClick={login} >전송</button>
            </div>
        </>
    );
};

export default Login;
