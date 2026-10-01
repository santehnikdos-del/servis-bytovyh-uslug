"use client";

import { useEffect } from "react";

export default function ConversionTracking() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        window.location.pathname.replace(/\/$/, "") !==
        "/akkumulyatory-s-dostavkoy"
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a");
      if (!link) return;

      const url = new URL(link.href, window.location.href);
      let sendTo = "";

      if (
        url.protocol === "tel:" &&
        url.pathname.replace(/\D/g, "") === "77082000513"
      ) {
        sendTo = "AW-18420476013/iIE5CPPD-4wdEO3QyM9E";
      }

      if (
        url.hostname === "wa.me" &&
        url.pathname.replace(/\//g, "") === "77082000513"
      ) {
        sendTo = "AW-18420476013/uGTkCPbD-4wdEO3QyM9E";
      }

      if (!sendTo) return;

      const adsWindow = window as Window & {
        gtag?: (
          command: string,
          eventName: string,
          parameters: Record<string, unknown>
        ) => void;
      };

      adsWindow.gtag?.("event", "conversion", {
        send_to: sendTo,
        value: 1,
        currency: "USD",
      });
    }

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}