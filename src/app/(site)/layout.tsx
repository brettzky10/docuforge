import Footer from './_components/footer';
import Header from './_components/header';
import React from 'react';

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default HomePageLayout;