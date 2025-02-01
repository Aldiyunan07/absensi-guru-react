export default function Label({ id, name }: LabelProps) {
    return (
        <>
            <label className="form-label" htmlFor={id}>
                {name}
            </label>
        </>
    );
}

interface LabelProps {
    id: string;
    name: string;
}
