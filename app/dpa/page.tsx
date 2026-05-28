import type { Metadata } from 'next';
import { RedirectStub } from '@/components/redirect-stub';

export const metadata: Metadata = {
  title: 'Redirecting…',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <RedirectStub to="/privacy/" />;
}
