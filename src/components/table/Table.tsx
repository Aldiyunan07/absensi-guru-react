export default function Table({ children }: TableProps) {
    return (
        <>
            <div className="table-responsive">
                <table className="table table-centered table-nowrap mb-0">{children}</table>
            </div>
        </>
    );
}

interface TableProps {
    children: JSX.Element | JSX.Element[];
}
