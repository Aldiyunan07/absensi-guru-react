export default function Card({ children, title = null }: CardProps) {
    return (
        <>
            <div className="card">
                <div className="card-body p-4">
                    {title ? <div className="card-title">{title}</div> : ''}
                    {children}
                </div>
            </div>
        </>
    );
}

interface CardProps {
    children: JSX.Element | JSX.Element[];
    title: string | null;
}
