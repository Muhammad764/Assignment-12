import React from 'react';

const Loading = () => {
    return (
    <div className="flex items-center justify-center space-x-6 animate-bounce pb-48 pt-48">
      <div className="w-12 h-12 bg-primary rounded-full"></div>
      <div className="w-12 h-12 bg-primary rounded-full"></div>
      <div className="w-12 h-12 bg-primary rounded-full"></div>
     </div>
    );
};

export default Loading;