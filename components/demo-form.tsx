'use client';

import { useState } from 'react';
import Link from 'next/link';
import { track, EVENTS } from '@/lib/analytics';

const TEAM_SIZE = ['1–10 devs', '10–100 devs', '100–500 devs', '500–2,000 devs', '2,000+ devs'];
const AGENTS = ['IDE agents', 'CLI agents', 'Cloud agents', 'MCP servers', 'Self-hosted agents', 'Other'];
const FRAMEWORKS = ['SOC 2', 'ISO 27001', 'NIST AI RMF', 'EU AI Act', 'HIPAA', 'PCI DSS 4.0', 'None / not yet'];
const URGENCY = ['Evaluating now', 'Pilot this quarter', 'Production in 6 months', 'Just researching'];

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState({
    name: '',
    workEmail: '',
    company: '',
    role: '',
    teamSize: '',
    agents: [] as string[],
    frameworks: [] as string[],
    urgency: '',
    notes: '',
    // Honeypot — invisible to humans, bots fill it and we drop the submission.
    botField: '',
  });
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  const setField = (k: keyof typeof data, v: string) => setData((d) => ({ ...d, [k]: v }));
  const toggleArr = (k: 'agents' | 'frameworks', v: string) =>
    setData((d) => ({ ...d, [k]: d[k].includes(v) ? d[k].filter((x) => x !== v) : [...d[k], v] }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.workEmail.includes('@') || !data.name || !data.company) return;
    // Honeypot — silently treat bot submissions as successful so they stop retrying,
    // but never POST anywhere. Real humans never see or touch this field.
    if (data.botField) {
      setSubmitted(true);
      return;
    }
    setError(null);
    setLoading(true);

    // Refuse to lie about success: if Formspree isn't configured, surface a real error
    // and bail. Never show the success screen on a fake submission.
    if (!formspreeId) {
      console.error('[DemoForm] NEXT_PUBLIC_FORMSPREE_ID is not set — submission cannot be sent.');
      setError(
        'Our intake system isn\'t reachable right now. Please email founders@complai.dev directly and we\'ll get straight back to you.',
      );
      setLoading(false);
      return;
    }

    try {
      const { botField: _bot, ...payload } = data;
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...payload,
          agents: payload.agents.join(', '),
          frameworks: payload.frameworks.join(', '),
          _subject: 'ComplyAI early access request',
        }),
      });
      if (!res.ok) {
        throw new Error(`Formspree responded ${res.status}`);
      }
      track(EVENTS.FORM_SUBMIT_SUCCESS, { form: 'demo' });
      setSubmitted(true);
    } catch (err) {
      console.error('[DemoForm] submission failed:', err);
      setError(
        'We couldn\'t reach our intake system. Please email founders@complai.dev directly — we\'ll respond within one business day.',
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="wl-success is-visible">
        <div className="wl-success__check">✓</div>
        <h3 className="wl-success__title">Thanks for the request.</h3>
        <p className="wl-success__sub">
          We&apos;ll be in touch within one business day to propose a few times for a 30-minute
          discovery call — a short conversation to understand what you&apos;re trying to solve.
        </p>
        <div className="wl-success__meta">
          <Link href="/" style={{ color: 'var(--accent)' }}>← Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <form className="demo-form wl-form" onSubmit={submit} noValidate>
      {/* Honeypot field — visually hidden, ignored by humans, filled by bots. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
        <label>
          Leave this field empty
          <input
            type="text"
            name="botField"
            tabIndex={-1}
            autoComplete="off"
            value={data.botField}
            onChange={(e) => setField('botField', e.target.value)}
          />
        </label>
      </div>

      <div className="demo-form__row demo-form__row--two">
        <label className="demo-form__field">
          <span className="wl-label">Full name *</span>
          <input
            className="wl-input"
            value={data.name}
            onChange={(e) => setField('name', e.target.value)}
            required
            autoComplete="name"
          />
        </label>
        <label className="demo-form__field">
          <span className="wl-label">Work email *</span>
          <input
            className="wl-input"
            type="email"
            value={data.workEmail}
            onChange={(e) => setField('workEmail', e.target.value)}
            required
            autoComplete="email"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <div className="demo-form__row demo-form__row--two">
        <label className="demo-form__field">
          <span className="wl-label">Company *</span>
          <input
            className="wl-input"
            value={data.company}
            onChange={(e) => setField('company', e.target.value)}
            required
            autoComplete="organization"
          />
        </label>
        <label className="demo-form__field">
          <span className="wl-label">Role</span>
          <input
            className="wl-input"
            value={data.role}
            onChange={(e) => setField('role', e.target.value)}
            placeholder="CISO · VP Eng · Compliance · Platform · etc."
            autoComplete="organization-title"
          />
        </label>
      </div>

      <div className="demo-form__field">
        <span className="wl-label">Team size</span>
        <div className="wl-chips">
          {TEAM_SIZE.map((t) => (
            <button
              type="button"
              key={t}
              className={`wl-chip${data.teamSize === t ? ' is-on' : ''}`}
              onClick={() => setField('teamSize', t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="demo-form__field">
        <span className="wl-label">AI agents in your environment</span>
        <div className="wl-chips">
          {AGENTS.map((t) => (
            <button
              type="button"
              key={t}
              className={`wl-chip${data.agents.includes(t) ? ' is-on' : ''}`}
              onClick={() => toggleArr('agents', t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="demo-form__field">
        <span className="wl-label">Compliance frameworks you&apos;re mapping to</span>
        <div className="wl-chips">
          {FRAMEWORKS.map((t) => (
            <button
              type="button"
              key={t}
              className={`wl-chip${data.frameworks.includes(t) ? ' is-on' : ''}`}
              onClick={() => toggleArr('frameworks', t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="demo-form__field">
        <span className="wl-label">Timeline</span>
        <div className="wl-chips">
          {URGENCY.map((t) => (
            <button
              type="button"
              key={t}
              className={`wl-chip${data.urgency === t ? ' is-on' : ''}`}
              onClick={() => setField('urgency', t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="demo-form__field">
        <span className="wl-label">What problem are you trying to solve?</span>
        <textarea
          className="wl-input demo-form__textarea"
          rows={4}
          value={data.notes}
          onChange={(e) => setField('notes', e.target.value)}
          placeholder="e.g., we deployed AI agents to 200 devs and our CISO needs an audit trail by next quarter"
        />
      </div>

      {error ? (
        <p className="demo-form__error" role="alert">
          {error}
        </p>
      ) : null}

      <div className="wl-actions">
        <span className="demo-form__legal">
          NDA in 24 hours · 30-min discovery · pricing in meeting #2
        </span>
        <button
          className={`btn btn--primary${loading ? ' is-loading' : ''}`}
          type="submit"
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? 'Sending…' : 'Request early access'} <span className="arrow">→</span>
        </button>
      </div>
    </form>
  );
}
