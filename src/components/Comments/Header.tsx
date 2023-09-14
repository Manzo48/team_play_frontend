import img from "../../img/logo.svg";
import img1 from "../../img/category.svg";
import img3 from "../../img/add.svg";
import style from "../../css/header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";  

function Header() {
  const getTok = useSelector((state: RootState) => state.authSlice.token);
  useEffect(() => {
    getTok;
  }, [getTok]);
  return (
    <div className={style.header_block}>
      <div className={style.input}>
        <div className={style.image}>
          <img src={img} alt="" />
        </div>
        <input placeholder="Что сегодня будем читать?" type="text" />
        <Link to="addPost">
          {" "}
          <img src={img3} alt="" />
        </Link>
      </div>
      <div>
        <div className={style.right_block}>
          <Link to="/">
            <span>Главная</span>
          </Link>
          <span>Публикации</span>
          {!getTok ? (
            <>
              <Link to="/auth">
                <p>
                  <span>Вход </span>
                </p>
              </Link>
              <Link to="/createUser">
                <p>
                  <span>регистрация</span>
                </p>
              </Link>
            </>
          ) : (
            <Link to="/logRoom">
              <span>личный кабнет</span>
            </Link>
          )}
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
