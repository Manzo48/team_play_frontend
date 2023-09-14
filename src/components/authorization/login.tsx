import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authlogin } from "../../features/AuthSlice";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [click, setClick] = useState(false)
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const getTok = useSelector((state) => state.authSlice.token);

  const handleSetLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleSetPass = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    setClick(true)
    e.preventDefault();
    dispatch(authlogin({ login, password }));
  };

  useEffect(() => {
    if (getTok) {
      navigate("/");
    }
  }, [getTok, navigate]);

  return (
    <>
      <div>
        <h1>Login</h1>
      </div>
      <form onSubmit={handleSignUp}>
        <input
          placeholder="Введите логин"
          value={login}
          onChange={handleSetLogin}
          type="text"
        />
        <br />
        <input
          placeholder="Введите пароль"
          type="password"
          onChange={handleSetPass}
          value={password}
        />
        <button>add</button>
      </form>
      {click ? <p>неправильный логин или пароль</p>: null}
      {getTok ? navigate("/") : null}
    </>
  );
}

export default SignIn;
