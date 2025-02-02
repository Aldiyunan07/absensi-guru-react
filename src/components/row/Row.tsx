export default function Row({ children }: RowProps) {
    return (
        <>
            <div className="row">{children}</div>
        </>
    );
}

interface RowProps {
    children: JSX.Element | JSX.Element[];
}
