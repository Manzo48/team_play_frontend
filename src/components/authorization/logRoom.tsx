import React from 'react';
import { useNavigate } from 'react-router-dom';

function logRoom(){
    const navigate = useNavigate();

    const handleLogOut = ()=>{
        
        localStorage.removeItem("token");
        navigate("/auth")
    }
return(
<>
    <div>
        {/* <div><img src={state.avatarURL} alt="фото профиля" /></div> */}
        <div>Личный кабинет</div>
        <div>
            <button onClick={handleLogOut} >выйти из аккаунта</button>
        </div>
    </div>
</>
)
}
export default logRoom