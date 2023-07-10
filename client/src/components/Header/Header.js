import React from "react";
import headerbg from "../../utils/assets/images/header-bg.jpg";

const Header = () => {
    return (
        <div className="max-h-[50px] max-w-sm">
            <img src={headerbg} alt="background-img" />
            <h2>Header page </h2>
        </div>
    );
};

export default Header;
