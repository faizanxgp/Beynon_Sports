import React, { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.innerHTML = `
      (function(d, t) {
        var BASE_URL = "http://96.30.199.117:3001";
        var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
        g.src = BASE_URL + "/embed/anythingllm-chat-widget.min.js";
        g.async = true;
        g.defer = true;
        g.setAttribute('data-embed-id', 'e7bac9b8-2fc0-450d-a424-a2d65b0b2988');
        g.setAttribute('data-base-api-url', BASE_URL + "/api/v1");
        s.parentNode.insertBefore(g, s);
      })(document, "script");
    `;

    // Append script to document head
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      // Remove the script we added
      const scripts = document.head.querySelectorAll('script');
      scripts.forEach(scriptEl => {
        if (scriptEl.innerHTML.includes('anythingllm-chat-widget')) {
          document.head.removeChild(scriptEl);
        }
      });

      // Remove any widget elements that might have been added
      const widgetElements = document.querySelectorAll('[data-anythingllm-widget]');
      widgetElements.forEach(element => {
        element.remove();
      });
    };
  }, []);

  // This component doesn't render anything visible itself
  // The chat widget will be injected by the script
  return null;
};

export default ChatWidget;
