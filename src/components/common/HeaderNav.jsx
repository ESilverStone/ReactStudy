import { Link } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <header>
      <nav className="header-nav">
        <div>
          <Link to="/">main</Link>
        </div>
        <div>
          <Link to="/car/create">자동차 등록</Link>
          <Link to="/car">자동차 목록</Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderNav;
