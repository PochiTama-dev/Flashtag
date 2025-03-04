import React from "react";
import {
  FaHome,
  FaTag,
  FaQrcode,
  FaGift,
  FaEnvelope,
  FaUserFriends,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { useAuth } from "../../Context/LoginContext";
import "./Sidebar.scss";

const routes = {
  dashboard: '#',
  productos: '#',
  qrDesign: '/qrDesign',
  giftcard: '#',
  campanas: '#',
  ruleta: '#',
  cuenta: '#',
  usuarios: '#',
  clientes: '#',
  logout: '#'
};

const Sidebar = () => {
  const { state, logout } = useAuth();
  const { user } = state;

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/assets/flash-logo.png" alt="Logo" />
      </div>
      <div className="sidebar-header">
        <div className="profile-picture">
          <img
            src={user?.avatar || "/assets/default-avatar.png"}
            alt="Profile"
          />
        </div>
        <div className="profile-info">
          <span>{user?.fullname || "Nombre"}</span>
          <div>
            {/*          <span style={{ fontSize: "12px" }}>{user?.role?.name || 'Rol'}</span> */}
          </div>
        </div>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <a href={routes.dashboard}>
              <FaHome />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href={routes.productos}>
              <FaTag />
              <span>Productos Flashtag</span>
            </a>
          </li>
          <li>
            <a href={routes.qrDesign}>
              <FaQrcode />
              <span>Diseño QR</span>
            </a>
          </li>
          <li>
            <a href={routes.giftcard}>
              <FaGift />
              <span>Giftcard</span>
            </a>
          </li>
          <li>
            <a href={routes.campanas}>
              <FaEnvelope />
              <span>Campañas</span>
            </a>
          </li>
          <li>
            <a href={routes.ruleta}>
              <FaEnvelope />
              <span>Ruleta</span>
            </a>
          </li>
          <div className="subtitle">
            <p>Cuenta</p>
          </div>
          <li>
            <a href={routes.cuenta}>
              <FaUserFriends />
              <span>Cuenta</span>
            </a>
          </li>
          <li>
            <a href={routes.usuarios}>
              <FaUserFriends />
              <span>Usuarios</span>
            </a>
          </li>
          <li>
            <a href={routes.clientes}>
              <FaUserCircle />
              <span>Clientes</span>
            </a>
          </li>
          <div className="subtitle">
            <p>Otros</p>
          </div>
          <li>
            <a href={routes.logout} onClick={logout}>
              <FaSignOutAlt />
              <span>Cerrar sesión</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
