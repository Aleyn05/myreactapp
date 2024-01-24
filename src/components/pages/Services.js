import React from 'react';
import Teleconsult from './Teleconsult';
import Referral from './Referral';
import LaboratoryTesting from './LaboratoryTesting';
import Imaging from './Imaging';
import ConsultStandard from './ConsultStandard';
import ConsultExtended from './ConsultExtended';


function Services() {
  return (
    <>
      <Teleconsult />
      <Referral />
      <LaboratoryTesting />
      <Imaging />
      <ConsultExtended />
      <ConsultStandard />
    </>
  );
}

export default Services;