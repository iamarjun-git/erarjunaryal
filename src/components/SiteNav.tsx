import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/notes", label: "Notes" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="container" style={{ paddingTop: "1.5rem" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/" style={{ fontWeight: 700, fontSize: "1.05rem" }}>
          Arjun Aryal
        </Link>

        <div style={{ display: "flex", gap: "1rem" }}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="badge">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
