export default function TableHead({ children, textAlign }: TableHeadProps) {
    return (
        <>
            <th scope="col" style={{ textAlign }}>
                {children}
            </th>
        </>
    );
}

interface TableHeadProps {
    children: string;
    textAlign?: 'left' | 'center' | 'right';
}
