import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo-group">
          <Link href="/" className="logo" aria-label="Home">
            <Image src="/logo.jpg" alt="RR logo" width={64} height={640} priority />
            <span className="brand">RR Enterprise's</span>
          </Link>
        </div>
        
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/">Home</Link>
           <Link href="/products">Products</Link>
          <Link href="/about us">About Us</Link>
          <Link href="/contact us">Contact Us</Link>
          
        </nav>
      </div>
    </header>
  );
}
