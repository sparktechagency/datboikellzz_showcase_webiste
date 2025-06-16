import Image from 'next/image';
import React from 'react';

function DownloadSection() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-28">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1>Download BetWise & Start Your Winning Journey Today!</h1>
          <p>
            Unlock expert betting tips from top cappers and bet smarter, not
            harder. Available now on Google Play and App Store.
          </p>
          <div>
            <Image src="/google-play-badge.svg" alt="Google Play" width={200} height={200} />
            <Image src="/google-play-badge.svg" alt="Google Play" width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadSection;
