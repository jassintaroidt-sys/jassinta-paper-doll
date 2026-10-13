import { COMPANIES } from './data/companies';
import { WORKS } from './data/works';
import { useHashRoute } from './hooks/useHashRoute';
import { StyleTestPage } from './chapters/StyleTestPage';
import { DollDevPage } from './chapters/DollDevPage';
import { AssetsDevPage } from './chapters/AssetsDevPage';
import { WorldDevPage } from './chapters/WorldDevPage';
import { CreatorTrilogyDevPage } from './chapters/CreatorTrilogyDevPage';
import { WorldJourney } from './components/world/WorldJourney';

// TokenDevPage: halaman verifikasi token dan data P01
// Ditampilkan di dev saja sebagai konfirmasi fondasi siap
function TokenDevPage() {
  const colorTokens = [
    { name: 'Ink', var: '--ink' },
    { name: 'Paper Base', var: '--paper-base' },
    { name: 'Warm Blush', var: '--warm-blush' },
    { name: 'Signal Pink', var: '--signal-pink' },
    { name: 'Mint', var: '--mint' },
    { name: 'Teal', var: '--teal' },
    { name: 'Cobalt', var: '--cobalt' },
    { name: 'Cream', var: '--cream' },
    { name: 'Butter', var: '--butter' },
    { name: 'Lilac', var: '--lilac' },
    { name: 'Burgundy', var: '--burgundy' },
    { name: 'Amber', var: '--amber' },
  ];

  const fontTokens = [
    { name: 'Gloock', css: 'var(--font-gloock)', sample: 'Headline Story' },
    { name: 'Fraunces', css: 'var(--font-fraunces)', sample: 'Italic Narration' },
    { name: 'Shantell Sans', css: 'var(--font-shantell)', sample: 'Speech Bubble' },
    { name: 'DM Mono', css: 'var(--font-dm-mono)', sample: 'DATA · 2026' },
    { name: 'Poppins', css: 'var(--font-poppins)', sample: 'Body text label' },
    { name: 'Anton', css: 'var(--font-anton)', sample: 'CHAPTER BOLD' },
    { name: 'Pinyon Script', css: 'var(--font-pinyon)', sample: 'Signature' },
    { name: 'Bodoni Moda', css: 'var(--font-bodoni)', sample: 'VOGUE' },
    { name: 'Bebas Neue', css: 'var(--font-bebas)', sample: 'MASTHEAD' },
  ];

  return (
    <div
      style={{
        background: 'var(--paper-base)',
        color: 'var(--ink)',
        fontFamily: 'var(--font-poppins)',
        minHeight: '100svh',
        padding: '2rem',
      }}
    >
      <h1
        style={{ fontFamily: 'var(--font-gloock)', fontSize: '2rem', marginBottom: '0.5rem' }}
      >
        P01 Token &amp; Data Verification
      </h1>
      <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.85rem', marginBottom: '2rem', opacity: 0.6 }}>
        Jassinta's Paper Doll Journey · Dev Build · Foundation Check
      </p>

      {/* Data counters */}
      <section style={{ marginBottom: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div
          style={{
            background: 'var(--warm-blush)',
            border: '3px solid var(--ink)',
            borderRadius: '4px',
            padding: '1rem 1.5rem',
            minWidth: '140px',
          }}
        >
          <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '2.5rem', fontWeight: 700 }}>
            {COMPANIES.length}
          </div>
          <div style={{ fontSize: '0.8rem' }}>Companies ✓</div>
        </div>
        <div
          style={{
            background: 'var(--mint)',
            border: '3px solid var(--ink)',
            borderRadius: '4px',
            padding: '1rem 1.5rem',
            minWidth: '140px',
          }}
        >
          <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '2.5rem', fontWeight: 700 }}>
            {WORKS.length}
          </div>
          <div style={{ fontSize: '0.8rem' }}>Works ✓</div>
        </div>
      </section>

      {/* Color tokens */}
      <section style={{ marginBottom: '2rem' }}>
        <h2
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '0.75rem',
          }}
        >
          Color Tokens
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {colorTokens.map((t) => (
            <div
              key={t.var}
              style={{
                background: `var(${t.var})`,
                border: '2px solid var(--ink)',
                borderRadius: '4px',
                width: '80px',
                height: '60px',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '4px',
              }}
              title={t.var}
            >
              <span
                style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: '0.6rem',
                  background: 'rgba(255,253,249,0.85)',
                  padding: '1px 3px',
                  borderRadius: '2px',
                }}
              >
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Font tokens */}
      <section style={{ marginBottom: '2rem' }}>
        <h2
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '0.75rem',
          }}
        >
          Font Tokens
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {fontTokens.map((f) => (
            <div
              key={f.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                borderBottom: '1px solid rgba(27,16,23,0.12)',
                paddingBottom: '0.4rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: '0.7rem',
                  minWidth: '120px',
                  opacity: 0.5,
                }}
              >
                {f.name}
              </span>
              <span style={{ fontFamily: f.css, fontSize: '1.25rem' }}>{f.sample}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Paper shadows */}
      <section style={{ marginBottom: '2rem' }}>
        <h2
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '0.75rem',
          }}
        >
          Paper Shadows (3-depth)
        </h2>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {(['--shadow-paper-1', '--shadow-paper-2', '--shadow-paper-3'] as const).map((s, i) => (
            <div
              key={s}
              style={{
                width: '80px',
                height: '80px',
                background: 'var(--paper-base)',
                filter: `var(${s})`,
                border: '3px solid var(--ink)',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-dm-mono)',
                fontSize: '0.7rem',
              }}
            >
              Depth {i + 1}
            </div>
          ))}
        </div>
      </section>

      {/* Companies list */}
      <section style={{ marginBottom: '2rem' }}>
        <h2
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '0.75rem',
          }}
        >
          10 Companies (DF 28.3)
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {COMPANIES.map((c) => (
            <div
              key={c.id}
              style={{
                border: '2px solid',
                borderColor: c.brandColorInk,
                borderRadius: '4px',
                padding: '0.4rem 0.75rem',
                fontFamily: 'var(--font-dm-mono)',
                fontSize: '0.75rem',
                background: `${c.brandColorInk}18`,
              }}
            >
              {c.id}. {c.name}
            </div>
          ))}
        </div>
      </section>

      <footer
        style={{
          fontFamily: 'var(--font-dm-mono)',
          fontSize: '0.7rem',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          opacity: 0.4,
          marginTop: '3rem',
          borderTop: '1px solid var(--ink)',
          paddingTop: '1rem',
        }}
      >
        2026 · Jassinta Roid Triniti · P01 Foundation Build
      </footer>
    </div>
  );
}

export default function App() {
  const { current } = useHashRoute();

  if (current.route === 'dev/style-test' || current.isDevStyleTest) {
    return <StyleTestPage />;
  }

  if (current.route === 'dev/doll' || current.isDevDoll) {
    return <DollDevPage />;
  }

  if (current.route === 'dev/assets' || current.isDevAssets) {
    return <AssetsDevPage />;
  }

  if (current.route === 'dev/world' || current.isDevWorld) {
    return <WorldDevPage />;
  }

  if (current.route === 'dev/trilogy' || current.isDevTrilogy) {
    return <CreatorTrilogyDevPage />;
  }

  // Rute utama: WorldJourney (Opening → Contact)
  if (current.isHome) {
    return <WorldJourney />;
  }

  // Fallback: portal dev
  return (
    <div>
      <div className="bg-pink-100 p-2 text-center text-xs font-mono border-b border-pink-200 flex justify-center gap-4 flex-wrap">
        <span>
          Style Test P02:{' '}
          <a href="#/dev/style-test" className="font-bold underline text-pink-700">
            #/dev/style-test
          </a>
        </span>
        <span>·</span>
        <span>
          Doll Rig P03:{' '}
          <a href="#/dev/doll" className="font-bold underline text-pink-700">
            #/dev/doll
          </a>
        </span>
        <span>·</span>
        <span>
          Assets Dev P04:{' '}
          <a href="#/dev/assets" className="font-bold underline text-pink-700">
            #/dev/assets
          </a>
        </span>
        <span>·</span>
        <span>
          World Dev P05:{' '}
          <a href="#/dev/world" className="font-bold underline text-pink-700">
            #/dev/world
          </a>
        </span>
      </div>
      <TokenDevPage />
    </div>
  );
}

