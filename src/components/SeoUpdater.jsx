import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteSeo } from "../seo/routeSeo.mjs";

function updateMetaTag(selector, attribute, value) {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, selector.includes("property=") ? selector.match(/property="([^"]+)"/)?.[1] : selector.match(/name="([^"]+)"/)?.[1]);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", value);
}

function updateCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
}

export default function SeoUpdater() {
  const location = useLocation();

  useEffect(() => {
    const seo = getRouteSeo(location.pathname);

    document.title = seo.title;
    updateCanonical(seo.canonical);
    updateMetaTag('meta[name="description"]', "name", seo.description);
    updateMetaTag('meta[property="og:title"]', "property", seo.title);
    updateMetaTag('meta[property="og:description"]', "property", seo.description);
    updateMetaTag('meta[property="og:url"]', "property", seo.canonical);
    updateMetaTag('meta[property="og:type"]', "property", seo.type);
  }, [location.pathname]);

  return null;
}
