import React from 'react';
import ScriptButtonRegister from "@/app/Script/ScriptButtonRegister";
import getButtonClassNames from "@/app/StyleCss/GetClassName";


const ButtonRegister = () => {
    return <button className={getButtonClassNames()} onClick={ScriptButtonRegister}>Register</button>;
};

export default ButtonRegister;