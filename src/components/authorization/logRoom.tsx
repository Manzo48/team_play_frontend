import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authlogin } from "../../features/AuthSlice";
import { useNavigate } from 'react-router-dom';

function logRoom(){
    // const getTok = useSelector((state: RootState)=> state.authSlice.token);
return(
<>
    <div>
        {/* <div><img src={state.avatarURL} alt="фото профиля" /></div> */}
        <div>Личный кабинет</div>
    </div>
</>
)
}
export default logRoom