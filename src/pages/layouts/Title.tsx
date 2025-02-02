export default function Title({ title }:TitleDashboard) {
    return (
        <>
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">{title}</h4>
            </div>
        </>
    );
}

interface TitleDashboard {
    title: string;
}
