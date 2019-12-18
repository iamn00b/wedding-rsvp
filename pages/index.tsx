import React from 'react';
import Head from 'next/head';
import RSVPFormPage from '../src/rsvp-form/RSVPFormPage';

export default () => {
  return (
    <>
      <Head>
        <title>RSVP To Thirafi & Laila's Wedding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RSVPFormPage />
    </>
  );
};
