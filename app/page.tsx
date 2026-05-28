import { Hero } from '@/components/hero';
// EU AI Act readiness funnel is paused — restore by uncommenting this import and the <EuAiActBanner /> render below.
// import { EuAiActBanner } from '@/components/eu-ai-act-banner';
import { TrustStrip } from '@/components/trust-strip';
import { Problem } from '@/components/problem';
import { WhatWeDo } from '@/components/what-we-do';
import { HitlTriageFunnel } from '@/components/hitl-triage-funnel';
import { HowItWorks } from '@/components/how-it-works';
import { WhoItsFor } from '@/components/who-its-for';
import { FinalCTA } from '@/components/final-cta';

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* <EuAiActBanner /> — paused with the rest of the EU AI Act readiness funnel */}
      <TrustStrip />
      <Problem full />
      <WhatWeDo />
      <HitlTriageFunnel />
      <HowItWorks variant="home" />
      <WhoItsFor />
      <FinalCTA />
    </main>
  );
}
