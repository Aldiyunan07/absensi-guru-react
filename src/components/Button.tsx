import { CSSProperties } from "react";

export default function Button({ name, style, type = 'button', class: className, disabled }: ButtonProps) {
    const combinedClass = `btn btn-primary waves-effect waves-light ${className || ''}`.trim();
    return (
        <button style={style} className={combinedClass} type={type} disabled={disabled}>
            {name}
        </button>
    );
}

interface ButtonProps {
    type?: 'button' | 'reset' | 'submit';
    name: string;
    disabled?: true | false;
    class?: string;
    style?: CSSProperties | undefined;
}
