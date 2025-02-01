import { ChangeEventHandler } from 'react';

export default function Input({ id, type, name, onChange }: InputProps) {
    return (
        <>
            <input onChange={onChange} type={type} className="form-control" id={id} name={name} placeholder={`Enter ${name}`} autoComplete="off" />
        </>
    );
}

interface InputProps {
    id: string;
    name: string;
    type: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
