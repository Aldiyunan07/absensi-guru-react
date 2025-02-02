import { useLocation, useNavigate } from 'react-router-dom';
import apiClient from '../../services/apiService';
import Button from '../../components/Button';

export default function Navbar({ onToggle }: NavbarProps) {
    const location = useLocation();
    const { user } = location.state;
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await apiClient.post('/api/logout');
            if (response.status == 200) {
                localStorage.removeItem('token');
            }
            navigate('/');
        } catch (error: unknown) {
            console.error(error);
        }
    };
    return (
        <header id="page-topbar">
            <div className="navbar-header">
                <div className="d-flex">
                    <div className="navbar-brand-box text-center">
                        <a href="index.html" className="logo logo-dark">
                            <span className="logo-sm">
                                <img src="/images/logo-sm.png" alt="logo-sm-dark" height={22} />
                            </span>
                            <span className="logo-lg">
                                <img src="/images/logo-dark.png" alt="logo-dark" height={24} />
                            </span>
                        </a>
                        <a href="index.html" className="logo logo-light">
                            <span className="logo-sm">
                                <img src="/images/logo-sm.png" alt="logo-sm-light" height={22} />
                            </span>
                            <span className="logo-lg">
                                <img src="/images/logo-light.png" alt="logo-light" height={24} />
                            </span>
                        </a>
                    </div>
                    <button type="button" className="btn btn-sm px-3 font-size-24 header-item waves-effect" onClick={onToggle} id="vertical-menu-btn">
                        <i className="ri-menu-2-line align-middle" />
                    </button>
                </div>
                <div className="d-flex">
                    <div className="dropdown d-none d-lg-inline-block ms-1">
                        <button type="button" className="btn header-item noti-icon waves-effect" data-bs-toggle="fullscreen">
                            <i className="ri-fullscreen-line" />
                        </button>
                    </div>
                    <div className="dropdown d-inline-block user-dropdown">
                        <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="rounded-circle header-profile-user" src={`${user.avatar}`} alt="Header Avatar" />
                            <span className="d-none d-xl-inline-block ms-1">{user.name}</span>
                            <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="/profil">
                                <i className="ri-user-line align-middle me-1" /> Profile
                            </a>
                            <a className="dropdown-item" href="/ganti-password">
                                <i className="dripicons-gear align-middle me-1" /> Ubah Password
                            </a>
                            <div className="dropdown-divider" />
                            <form onSubmit={handleSubmit}>
                                <input type="hidden" name="_token" defaultValue="YOUR_CSRF_TOKEN" />
                                <Button style={{ cursor: 'pointer' }} class="dropdown-item text-danger" type={'submit'} name={'logout'}>
                                    <i className="ri-shut-down-line align-middle me-1 text-danger" /> Logout{' '}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

interface NavbarProps {
    onToggle: () => void;
}
