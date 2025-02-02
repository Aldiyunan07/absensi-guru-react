export default function CardDashboard({ title, count }: CardDashboardProps) {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="d-flex text-muted">
                        <div className="flex-shrink-0 me-3 bg-primary px-2 rounded text-white align-self-center">
                            <div style={{ padding: '10px' }} dir="ltr">
                                <i className="mdi mdi-calendar" style={{ fontSize: '30px' }}></i>
                            </div>
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                            <p className="mb-1">{title}</p>
                            <h5 className="mb-3">{count}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

interface CardDashboardProps {
    title: string;
    count: string;
}
