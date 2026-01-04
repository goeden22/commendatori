import { CommendatoriLogo } from "./CommendatoriLogo";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-6">
            <h3
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.75rem',
                letterSpacing: '-0.01em',
                fontWeight: 500,
              }}
            >
             <CommendatoriLogo></CommendatoriLogo>
            </h3>
            <p className="text-muted-foreground max-w-sm" style={{ fontSize: '0.9375rem', lineHeight: '1.7' }}>
              SEO & marketing for interior design studios who lead their category.
            </p>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 space-y-4">
            <p
              className="uppercase tracking-[0.15em] text-muted-foreground"
              style={{ fontSize: '0.75rem', fontFamily: 'DM Sans, sans-serif' }}
            >
              Get in Touch
            </p>
            <a
              href="mailto:contact@commendatori.org"
              className="block text-foreground hover:text-primary transition-colors"
              style={{ fontSize: '1rem' }}
            >
              contact@commendatori.org
            </a>
                  <p
     
              className="block text-foreground hover:text-primary transition-colors"
              style={{ fontSize: '1rem' }}
            >
              +48 501 347 369
            </p>
          </div>

          {/* Legal */}
          <div className="lg:col-span-3 space-y-4">
            <p
              className="text-muted-foreground"
              style={{ fontSize: '0.875rem' }}
            >
              © {new Date().getFullYear()} Commendatori
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
