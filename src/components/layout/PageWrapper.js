import React from 'react';
import Header from './Header';

const PageWrapper = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default PageWrapper;