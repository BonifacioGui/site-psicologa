type AnchorItem = {
  href: `#${string}`;
  label: string;
};

export function AnchorNav({ items }: { items: AnchorItem[] }) {
  return <div className="anchor-bar">
    <nav className="shell anchor-navigation" aria-label="Nesta página">
      <span className="anchor-label">Nesta página</span>
      <div>
        {items.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </div>
    </nav>
  </div>;
}
