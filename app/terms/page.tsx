import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Terms of Use — ComplyAI',
  description: 'Terms governing use of complai.dev and ComplyAI services.',
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="May 19, 2026">
      <p>
        By accessing complai.dev or using ComplyAI software and services, you agree to these terms.
        If you are using ComplyAI on behalf of an organization, you represent that you have authority
        to bind that organization.
      </p>
      <h2>Services</h2>
      <p>
        ComplyAI provides cloud and self-hosted software for AI agent governance. Features and
        availability may change during early access and pilot programs.
      </p>
      <h2>Acceptable use</h2>
      <p>
        You will not misuse the site or product, attempt unauthorized access, or use ComplyAI in
        violation of applicable law.
      </p>
      <h2>Disclaimer</h2>
      <p>
        The site and product are provided as-is during early-stage development. We do not warrant
        uninterrupted or error-free operation. Security and compliance outcomes depend on your
        configuration and processes.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, ComplyAI is not liable for indirect, incidental, or
        consequential damages arising from use of the site or product.
      </p>
      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws applicable to ComplyAI&apos;s place of incorporation,
        without regard to conflict-of-law rules. Specific jurisdiction will be stated in enterprise
        agreements.
      </p>
      <p>
        <em>Enterprise customers receive order forms and MSAs that supersede this page where they conflict.</em>
      </p>
    </LegalPage>
  );
}
