import { useLocation } from 'react-router-dom';
import Card from '../../components/Card';
import CardDashboard from '../../components/CardDashboard';
import Col from '../../components/row/Col';
import Row from '../../components/row/Row';
import Table from '../../components/table/Table';
import TableData from '../../components/table/TableData';
import TableHead from '../../components/table/TableHead';
import TableRow from '../../components/table/TableRow';
import TBody from '../../components/table/TBody';
import Thead from '../../components/table/Thead';
import App from '../layouts/App';
import { useEffect, useState } from 'react';
import { Iagenda } from '../../types/type';
import apiClient from '../../services/apiService';

export default function DashboardPage() {
    const location = useLocation();
    const { user } = location.state;
    const [agenda, setAgenda] = useState<Iagenda[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        apiClient
            .get('/api/my-agenda')
            .then((response) => {
                setAgenda(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            });
    }, []);
    return (
        <App title="Dashboard">
            <div className="row">
                <div className="col-xl-3 col-sm-6">
                    <CardDashboard title="Jadwal mengajar" count="20" />
                </div>
                <div className="col-xl-3 col-sm-6">
                    <CardDashboard title="Jumlah Absensi" count="30" />
                </div>
                <div className="col-xl-3 col-sm-6">
                    <CardDashboard title="Jumlah Pengajuan Cuti" count="20" />
                </div>
                <div className="col-xl-3 col-sm-6">
                    <CardDashboard title="Pengeluaran Gaji" count="20000" />
                </div>
            </div>
            {user.role == 'admin' ? (
                <p></p>
            ) : (
                <Row>
                    <Col col="col-lg-12">
                        <Card title="Jadwal Mengajar Saya">
                            <Table>
                                <Thead>
                                    <TableRow>
                                        <TableHead textAlign='center'>No</TableHead>
                                        <TableHead>Kelas</TableHead>
                                        <TableHead>Pelajaran</TableHead>
                                        <TableHead>Hari</TableHead>
                                        <TableHead>Jam</TableHead>
                                        <TableHead>Waktu</TableHead>
                                    </TableRow>
                                </Thead>
                                <TBody>
                                    {loading ? (
                                        <TableRow>
                                            <TableData colspan={6} textAlign="center">
                                                {' '}
                                                Loading...
                                            </TableData>
                                        </TableRow>
                                    ) : agenda.length > 0 ? (
                                        agenda.map((item, index) => (
                                            <TableRow key={item.id || index}>
                                                <TableData textAlign='center'>{index + 1}</TableData>
                                                <TableData>{item.kelas}</TableData>
                                                <TableData>{item.pelajaran}</TableData>
                                                <TableData>{item.hari}</TableData>
                                                <TableData>{item.jam}</TableData>
                                                <TableData>{item.waktu}</TableData>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableData colspan={6} textAlign="center">
                                                {' '}
                                                Belum ada data
                                            </TableData>
                                        </TableRow>
                                    )}
                                </TBody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            )}
        </App>
    );
}
