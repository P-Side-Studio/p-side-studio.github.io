import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        P-Side
      </Link>
      <ul>
        <CustomLink to="/music">Music</CustomLink>
      </ul>
    </nav>
  )
}

interface CustomLinkProps {
  to: string;
  children: any;
  className?: string;
}

function CustomLink({ to, children, className }: CustomLinkProps) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} className={className}>
        {children}
      </Link>
    </li>
  )
}