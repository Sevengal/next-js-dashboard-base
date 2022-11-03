import { NextPageWithLayout } from '../_app';
import React, { ReactElement } from 'react';
import PrimaryLayout from '../../layouts/primary/PrimaryLayout';
import Api from '../../lib/services/http/Api';

const TestPage: NextPageWithLayout = () => {
  return (
    <section>
      <Test></Test>
      <h2>Layout Example (About)</h2>
      <p>
        This example adds a property <code>getLayout</code> to your page,
        allowing you to return a React component for the layout. This allows you
        to define the layout on a per-page basis. Since we&apos;re returning a
        function, we can have complex nested layouts if desired.
      </p>
      <p>
        When navigating between pages, we want to persist page state (input
        values, scroll position, etc.) for a Single-Page Application (SPA)
        experience.
      </p>
      <p>
        This layout pattern will allow for state persistence because the React
        component tree is persisted between page transitions. To preserve state,
        we need to prevent the React component tree from being discarded between
        page transitions.
      </p>
      <h3>Try It Out</h3>
      <p>
        To visualize this, try tying in the search input in the{' '}
        <code>Sidebar</code> and then changing routes. You&apos;ll notice the
        input state is persisted.
      </p>
    </section>
  );
};

class Test extends React.Component<any, any> {
  async componentDidMount() {
    await Api.post(
      'oauth/token',
      {
        grant_type: 'password',
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        username: 'jesse',
        password: 'aapje123',
        scope: '*',
      },
      false
    ).then((response) => {
      console.log(response);
    });
  }

  render() {
    return <div>hello</div>;
  }
}

export default TestPage;

TestPage.getLayout = (page: ReactElement) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};