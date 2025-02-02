export default function Col({ children, col }: ColProps) {
    return (
        <>
            <div className={col}>{children}</div>
        </>
    );
}

interface ColProps {
    children: JSX.Element | JSX.Element[];
    col: string;
}
