'use client';

import Image from 'next/image';
import MapboxUI from './mapbox/page';

export default function Home() {
  return (
    <div className="relative w-full h-screen text-white">
      {/* 左上角 - 深夜 EMO 電台 保持原本設定 */}
      <div className="absolute left-0 top-0 z-10 p-4">
        <div>深夜 EMO 電台</div>
        <div className="flex items-center gap-2 mt-2">
          {/* 白色框只包圖片和名字 */}
          <div className="flex items-center gap-3 bg-white bg-opacity-50 rounded-md p-1">
            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden flex-shrink-0">
              <Image src="/images.jpeg" width={48} height={48} alt="Sana" />
            </div>
            <span className="text-black font-semibold">Sana</span>
          </div>
        </div>
      </div>

      {/* 影片區塊，獨立在圖片名字下方 */}
      <div className="absolute left-0 top-[90px] z-10 p-4 w-80">
        <div className="w-full aspect-video rounded-md overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/EeJ8n5PxFGE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>

      {/* 地圖全屏背景 */}
      <MapboxUI className="z-0 absolute top-0 left-0 w-full h-full" />
    </div>
  );
}
