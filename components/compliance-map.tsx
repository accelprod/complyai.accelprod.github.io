import Link from 'next/link';

const FRAMEWORKS = [
  {
    slug: 'soc2',
    label: 'SOC 2 Type II',
    controls: 'CC7 system operations · CC6 access controls',
    how: 'Action audit trail (identity-attributed) + policy-enforced approve or deny on sensitive actions.',
  },
  {
    slug: 'iso-27001',
    label: 'ISO/IEC 27001:2022',
    controls: 'A.5 security policies · A.8 asset & data handling',
    how: 'Written policy as code; logged data-handling events; per-action attribution.',
  },
  {
    slug: 'nist-ai-rmf',
    label: 'NIST AI RMF',
    controls: 'GOVERN · MEASURE · MANAGE',
    how: 'Policy (GOVERN), telemetry (MEASURE), real-time approval/deny path (MANAGE).',
  },
  {
    slug: 'eu-ai-act',
    label: 'EU AI Act',
    controls: 'Article 12 — record-keeping for high-risk systems',
    how: 'Per-action immutable record with identity, model, and decision — Article 12-shaped out of the box.',
  },
  {
    slug: 'hipaa',
    label: 'HIPAA',
    controls: '§164.308 administrative · §164.312 technical safeguards',
    how: 'PHI path scopes, secret-file blocks, identity-attributed access logs, break-glass approval.',
  },
  {
    slug: 'pci-dss-4',
    label: 'PCI DSS 4.0',
    controls: 'Req 10 logging · Req 12 policy',
    how: 'Trace satisfies AI-touched cardholder-data logging; YAML policy is the controlled artifact.',
  },
];

export function ComplianceMap() {
  return (
    <section className="bay compliance-bay" id="compliance">
      <div className="shell">
        <div className="compliance-bay__head" data-reveal>
          <div className="eyebrow">
            <span className="dot" />
            Compliance mapping
          </div>
          <h2 className="h2" style={{ marginTop: 16, maxWidth: '22ch' }}>
            Audit-ready in days. <em>Not quarters.</em>
          </h2>
          <p className="lede" style={{ marginTop: 16 }}>
            Control mappings and audit exports per framework—evidence by default, not quarterly
            spreadsheets.
          </p>
        </div>

        <div className="compliance-grid" data-reveal-stagger>
          {FRAMEWORKS.map((f) => (
            <article key={f.slug} className="compliance-card">
              <header className="compliance-card__head">
                <span className="compliance-card__label">{f.label}</span>
                <Link href={`/compliance/${f.slug}`} className="compliance-card__link">
                  Mapping <span aria-hidden>→</span>
                </Link>
              </header>
              <p className="compliance-card__controls">{f.controls}</p>
              <p className="compliance-card__how">{f.how}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
