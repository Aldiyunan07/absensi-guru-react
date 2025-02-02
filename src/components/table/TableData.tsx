interface TableDataProps {
    children: React.ReactNode; // Ganti string menjadi ReactNode
    colspan?: number;
    rowspan?: number;
    textAlign?: 'right' | 'left' | 'center';
}

export default function TableData({ children, colspan = 1, rowspan = 1, textAlign }: TableDataProps) {
    return (
        <td colSpan={colspan} rowSpan={rowspan} style={{ textAlign }}>
            {children}
        </td>
    );
}
