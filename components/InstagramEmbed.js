import React, { useEffect } from 'react';
import instagramEmbedCode from './instagramEmbedCode';

const tikTokEmbedCode = `
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@poppineventswithj" data-unique-id="poppineventswithj" data-embed-type="creator" style="max-width: 780px; min-width: 288px;" > 
  <section> 
    <a target="_blank" href="https://www.tiktok.com/@poppineventswithj?refer=creator_embed">@poppineventswithj</a> 
  </section> 
</blockquote> 
<script async src="https://www.tiktok.com/embed.js"></script>
`;

const InstagramEmbed = () => {
  useEffect(() => {
    // Load the Instagram embed script
    const instagramScript = document.createElement('script');
    instagramScript.async = true;
    instagramScript.src = 'https://www.instagram.com/embed.js';
    instagramScript.onload = () => {
      window.instgrm.Embeds.process();
    };
    document.body.appendChild(instagramScript);

    // Load the TikTok embed script
    const tikTokScript = document.createElement('script');
    tikTokScript.async = true;
    tikTokScript.src = 'https://www.tiktok.com/embed.js';
    document.body.appendChild(tikTokScript);

    // Clean up the scripts when the component unmounts
    return () => {
      document.body.removeChild(instagramScript);
      document.body.removeChild(tikTokScript);
    };
  }, []);

  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto p-4 max-w-screen-xl">
      <div className="m-2 p-2" dangerouslySetInnerHTML={{ __html: instagramEmbedCode }} />
      <div className="m-2 p-2" dangerouslySetInnerHTML={{ __html: tikTokEmbedCode }} />
    </div>
  );
  
  
};

export default InstagramEmbed;
