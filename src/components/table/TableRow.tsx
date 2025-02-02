export default function TableRow({ children }: TableRowProps) {
    return (
        <>
            <tr>{children}</tr>
        </>
    );
}

interface TableRowProps {
    children: JSX.Element| JSX.Element[];
}
