export default function Card({ children }: CardProps) {
    return (
        <>
            <div className="card">
                <div className="card-body p-4">{children}</div>
            </div>
        </>
    );
}

interface CardProps {
    children: JSX.Element | JSX.Element[];
}
