import { Truck, XIcon, ZapIcon } from "lucide-react";
import { useState } from "react";

function Banner() {
  const [bannerVisible, setBannerVisible] = useState(() => {
    return sessionStorage.getItem("banner_dismissed") !== "true";
  });
  const dismissBanner = () => {
    setBannerVisible(false);
    sessionStorage.setItem("banner_dismissed", "true");
  };
  return (
    <div>
      {bannerVisible && (
        <div className="bg-linear-to-r from-zinc-900 via-zinc-700 to-zinc-900 text-white text-xs sm:text-sm relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-6">
            <div className="flex items-center justify-center gap-2">
              <Truck className="size-4 shrink-0" />
              <span className="font-medium">
                Free delivery on orders above $20
              </span>
            </div>
            <span className="hidden sm:inline text-white/40"></span>
            <div className="hidden sm:flex items-center gap-2">
                <ZapIcon className="size-4 fill-yellow-400 text-yellow-400 shrink-0" />
                <span>Authentic Sri Lankan crafts, delivered to your doorstep</span>
            </div>
          </div>
          <button
            onClick={dismissBanner}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 text-white/80 hover:text-white rounded-full transition-colors cursor-pointer">
                <XIcon className="size-4" />
            </button>
        </div>
      )}
    </div>
  );
}

export default Banner;
