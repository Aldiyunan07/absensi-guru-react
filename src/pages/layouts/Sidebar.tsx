export default function Sidebar({ isCollapsed }: SidebarProps) {
    return (
        <div className={`vertical-menu ${isCollapsed ? 'collapsed' : ''}`}>
            <div data-simplebar="" className="h-100">
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title">Menu</li>
                        <li>
                            <a href="/dashboard" className="waves-effect">
                                <i className="mdi mdi-home-variant-outline" />
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="mdi mdi-apps" />
                                <span>Pengelolaan</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li>
                                    <a href="/guru">Guru</a>
                                </li>
                                <li>
                                    <a href="/absensi">Absensi</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/absensi" className=" waves-effect">
                                <i className="mdi mdi-apps" />
                                <span>Absensi</span>
                            </a>
                        </li>
                        <li>
                            <a href="/jadwal" className=" waves-effect">
                                <i className="mdi mdi-calendar" />
                                <span>Jadwal Mengajar</span>
                            </a>
                        </li>
                        <li>
                            <a href="/cuti" className=" waves-effect">
                                <i className="mdi mdi-briefcase-variant-outline" />
                                <span>Pengajuan Cuti</span>
                            </a>
                        </li>
                        <li>
                            <a href="/gaji" className=" waves-effect">
                                <i className="ri-bar-chart-line" />
                                <span>Manajemen Gaji</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

interface SidebarProps {
    isCollapsed: 0 | 1;
}
