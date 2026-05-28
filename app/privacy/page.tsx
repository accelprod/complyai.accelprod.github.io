import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Privacy Policy — ComplyAI',
  description: 'How ComplyAI handles personal data on complai.dev and in our products.',
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="May 19, 2026">
      <p>
        ComplyAI (&quot;we&quot;, &quot;us&quot;) operates complai.dev and related products. This policy
        describes what we collect on this website and how we use it.
      </p>
      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Demo and contact forms:</strong> name, work email, company, and any details you
          submit.
        </li>
        <li>
          <strong>Website usage:</strong> standard server and analytics logs (pages visited,
          referrer, browser type) if analytics are enabled.
        </li>
        <li>
          <strong>Product telemetry:</strong> ComplyAI deployments run in your environment by default;
          the runtime does not call home unless you configure export to your observability systems.
        </li>
      </ul>
      <h2>How we use it</h2>
      <p>
        To respond to inquiries, scope pilots, improve the site, and communicate about ComplyAI. We do
        not sell personal data.
      </p>
      <h2>Retention</h2>
      <p>
        Form submissions are retained while we have an active business relationship or as needed for
        legal compliance, then deleted or anonymized.
      </p>
      <h2>Your rights</h2>
      <p>
        Depending on your location, you may request access, correction, or deletion of personal data.
        Email <a href="mailto:hi@complai.dev">hi@complai.dev</a>.
      </p>
      <h2>Changes</h2>
      <p>
        We may update this policy as the product matures. Material changes will be reflected on this
        page with an updated date.
      </p>
      <p>
        <em>
          This is a starter policy for an early-stage company. Have counsel review before enterprise
          procurement.
        </em>
      </p>
    </LegalPage>
  );
}
