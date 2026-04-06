"use client";

import { pushDataLayer } from "@/lib/tracking";

export default function TrackableAnchor({
  href,
  className,
  children,
  eventName = "cta_click",
  eventParams = {},
  onClick,
  ...props
}) {
  function handleClick(event) {
    pushDataLayer(eventName, eventParams);
    onClick?.(event);
  }

  return (
    <a href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
