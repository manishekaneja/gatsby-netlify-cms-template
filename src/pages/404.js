import React from 'react';
import { CharacterRandomizer } from '../components/CharacterRandomizer';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1 className="font-sans text-4xl md:text-6xl">
        <CharacterRandomizer string="404-Not-Found" />
      </h1>
    </div>
  </Layout>
);

export default NotFoundPage;
