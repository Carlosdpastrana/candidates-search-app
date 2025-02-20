import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/SavedCandidates">Potential Candidates</Link>
    </nav>
  );
};

export default Nav;