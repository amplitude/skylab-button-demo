import React from 'react';
import { useSkylab } from '../skylab';

export const LearnMoreButtonVariants = {
  CONTROL: 'control',
  CENTERED: 'centered'
}

export const LearnMoreButton = (props) => {
  const { client } = useSkylab();
  const buttonConfig = client.getVariantData('landing-page-button');
  const text = buttonConfig?.text || 'Learn More';

  return <a
        href="#features"
        className="btn btn-custom btn-lg page-scroll"
      >
        {text}
      </a>
}
