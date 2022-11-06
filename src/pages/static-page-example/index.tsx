import { NextPageWithLayout } from '../_app';
import React, { ReactElement } from 'react';
import PrimaryLayout from '../../layouts/primary/PrimaryLayout';

interface StaticPageExampleProps {
  barbers: barber[];
}

interface barber {
  id: string;
  name: string;
  rating: number;
}

const StaticPageExample: NextPageWithLayout<StaticPageExampleProps> = (
  props: StaticPageExampleProps
) => {
  const { barbers } = props;

  return (
    <div>
      <ul>
        {barbers.map((barber) => (
          <li key={barber.id}>{barber.name}</li>
        ))}
      </ul>
    </div>
  );
};

StaticPageExample.getLayout = (page: ReactElement) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

//only runs on the server and is invisible on the client side
export async function getStaticProps() {
  return {
    props: {
      barbers: [
        {
          id: 'awd21r1h2j41j4j124j1',
          name: 'barbier ahmed',
          rating: 4.5,
        },
        {
          id: 'awd21r42f241j4j124j1',
          name: 'barbier jafar',
          rating: 3.5,
        },
      ],
    },
  };
}

export default StaticPageExample;
