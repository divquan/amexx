import React from 'react';

const page = () => {
  return (
    <div>
      <ProgressComponent />
    </div>
  );
};

export default page;

const ProgressComponent = () => {
  const progressItems = [
    {
      name: 'General',
      pathname: 'general',
    },
    {
      name: 'Education Goals',
      pathname: 'education-goals',
    },
    {
      name: 'General',
      pathname: 'general',
    },
  ];
  return <div></div>;
};
