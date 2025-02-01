export default function Button({ name, type = 'button', class: className, disabled }: ButtonProps) {
    const combinedClass = `btn btn-primary waves-effect waves-light ${className || ''}`.trim();
    return (
        <button className={combinedClass} type={type} disabled={disabled}>
            {name}
        </button>
    );
}

interface ButtonProps {
    type?: 'button' | 'reset' | 'submit';
    name: string;
    disabled: true | false;
    class?: string;
}
