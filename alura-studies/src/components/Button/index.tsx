import React from "react";
import style from './Button.module.scss';
// CLass component (desuso)
class Button extends React.Component {
    render(): React.ReactNode {
        return (
            <button className={style.botao}>
                Botão
            </button>
        )
    }
}

export default Button;