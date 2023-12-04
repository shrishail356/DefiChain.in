import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = 'https://DeFiChain.in';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const handleAbout = () => {
    navigate('/about');
  }

  const tweetAboutSite = () => {
    const siteUrl = encodeURIComponent('https://DeFiChain.in');
    const description = encodeURIComponent(
      '🚀 Join the revolution with DeFiChain! \n Learn, earn, and explore the world of decentralized finance. \n Dive into $DFI token and be part of #Devhack2023 #Devhack2023 #Bengaluru @defichain @DeFiChainLabs \n Dev @Lost_Ali3n_ & @ShrishailMPati3',
    );
    const tweetUrl = `https://twitter.com/intent/tweet?text=${description}&url=${siteUrl}`;
    window.open(tweetUrl);
  };

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(
      '🚀 Join the DeFiChain revolution! Learn, earn, and explore the world of decentralized finance at https://DeFiChain.in #DeFi #Crypto #Devhack2023 #Bengaluru',
    );
    const whatsappUrl = `https://wa.me/?text=${text}`;
    window.open(whatsappUrl);
  };

  const shareOnTelegram = () => {
    const text = encodeURIComponent(
      '🚀 Join the DeFiChain revolution! Learn, earn, and explore the world of decentralized finance at https://DeFiChain.in #DeFi #Crypto #Devhack2023 #Bengaluru',
    );
    const telegramUrl = `https://t.me/share/url?url=${text}`;
    window.open(telegramUrl);
  };

  return (
    <div className="bottom-0 left-0 w-full bg-gray-800 py-4 mt-10 text-center">
      <div className="container mx-auto px-4 flex justify-between items-center text-white">
        <p className="text-sm md:mb-0">&copy; {new Date().getFullYear()} DeFiChain.in All rights reserved. </p>
        <a href="#" className="underline inline-block mt-2 md:mt-0">
          <button  onClick={handleAbout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            About Us
          </button>
        </a>

        <div className="flex items-center">
          <div className="flex items-center mr-5">
            <p className="font-semibold text-gray-300 mr-2">Share : </p>
            <a
              href="https://twitter.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100"
              onClick={tweetAboutSite}
            >
              <img src="../../img/twitter-black.svg" alt="Twitter" className="w-6 h-6 mr-2" />
            </a>
            <a
              href="https://t.me/example"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100"
              onClick={shareOnTelegram}
            >
              <img src="../../img/telegram-active.svg" alt="Telegram" className="w-6 h-6 mr-2" />
            </a>
            <a
              href="https://wa.me/?text=https://DeFiChain.in"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100"
              onClick={shareOnWhatsApp}
            >
              <img src="../../img/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
            </a>
          </div>
          <button
            className="text-xs px-2 py-1 bg-gray-600 rounded-md hover:bg-gray-700 mr-4 focus:outline-none"
            onClick={copyToClipboard}
          >
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;