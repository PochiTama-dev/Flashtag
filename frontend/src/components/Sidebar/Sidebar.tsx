import { FaHome, FaTag, FaQrcode, FaGift, FaEnvelope, FaUserFriends, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "./Sidebar.scss";

const Sidebar = () => {
 return (
  <div className='sidebar'>
   <div className="sidebar-logo">
    <img src='/assets/flash-logo.png' alt='Profile' />
   </div>
   <div className='sidebar-header'>
    <div className='profile-picture'>
     <img src='/assets/flash-logo.png' alt='Profile' />
    </div>
    <div className='profile-info'>
     <span >Nombre de usuario</span>
     <div>

     <span style={{fontSize:'12px'  }}>Administrador</span>
     </div>
    </div>
   </div>
   <nav className='sidebar-nav'>
    <ul>
     <li>
      <a href='#'>
       <FaHome />
       <span>Dashboard</span>
      </a>
     </li>
     <li>
      <a href='#'>
       <FaTag />
       <span>Productos Flashtag</span>
      </a>
     </li>
     <li>
      <a href='#'>
       <FaQrcode />
       <span>Diseño QR</span>
      </a>
     </li>
     <li>
      <a href='#'>
       <FaGift />
       <span>Giftcard</span>
      </a>
     </li>
     <li>
      <a href='#'>
       <FaEnvelope />
       <span>Campañas</span>
      </a>
     </li>
     <li>
      <a href='#'>
       <FaEnvelope />
       <span>Ruleta</span>
      </a>
     </li>
     <div className='subtitle'>
      <p>Cuenta</p>
     </div>
     <li>
      <a href='#'>
       <FaUserFriends />

       <span>Cuenta</span>
      </a>
     </li>
     <li>
      <a href='#'>
       <FaUserFriends />
       <span>Usuarios</span>
      </a>
     </li>
     <li>
      <a href='#'>
       <FaUserCircle />
       <span>Clientes</span>
      </a>
     </li>
     <div className='subtitle'>
      <p>Otros</p>
     </div>
     <li>
      <a href='#'>
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
