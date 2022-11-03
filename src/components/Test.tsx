import React from 'react';
import Api from '../lib/services/http/Api';

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

export default Test;
