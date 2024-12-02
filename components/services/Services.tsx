import React from 'react';
import ServicesHero from './ServicesHero';
import ServicesOverview from './ServicesOverview';
import ServicesHighlights from './ServicesHighlights';
import ServicesFeatures from './ServicesFeatures';
import ServicesAdvantages from './ServicesAdvantages';
import ServicesBenefits from './ServicesBenefits';
import ServicesCTA from './ServicesCTA';
import ServicesList from './ServicesList';

const Services: React.FC = () => {
  return (
    <div className="services-section">
      <ServicesList />
      <ServicesOverview />
      <ServicesHighlights />
      <ServicesFeatures />
      {/* <ServicesAdvantages /> */}
      <ServicesBenefits />
      {/* <ServicesCTA /> */}

      {/* <ServicesOverview />
        <ServicesHighlights />
        <ServicesFeatures />
        <ServicesAdvantages />
        <ServicesBenefits /> */}
    </div>
  );
};

export default Services;
