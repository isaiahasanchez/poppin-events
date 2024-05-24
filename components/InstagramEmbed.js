import React, { useEffect } from 'react';
import instagramEmbedCode from './instagramEmbedCode';

const InstagramEmbed = () => {
  useEffect(() => {
    // Load the Instagram embed script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.instagram.com/embed.js';
    script.onload = () => {
      window.instgrm.Embeds.process();
    };
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">

    <div dangerouslySetInnerHTML={{ __html: instagramEmbedCode }} />
    </div>
  );
};

export default InstagramEmbed;
