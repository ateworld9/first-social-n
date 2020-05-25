import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.img} src="http://pngimg.com/uploads/triangle/triangle_PNG30.png" alt={"asdfr"} />
        </header>
    );
}

export default Header;