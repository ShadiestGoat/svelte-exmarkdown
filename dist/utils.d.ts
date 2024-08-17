import type { Component, ComponentsMap, Parser, Plugin } from './types';
export declare const nonNullable: <T>(value: T | null | undefined) => value is T;
export declare const createParser: (plugins: Plugin[]) => Parser;
export declare const resolveComponent: (map: ComponentsMap, tagName: string, circularCheck?: string[]) => Component | string | null;
/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element#svg_elements_a_to_z
 * Excluding html tags
 */
export declare const svgTags: readonly ["animate", "animateMotion", "animateTransform", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "hatch", "hatchpath", "line", "linearGradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use", "view"];
export declare const htmlAndSvgTags: ("symbol" | "object" | "text" | "set" | "svg" | "html" | "base" | "head" | "link" | "meta" | "style" | "title" | "body" | "address" | "article" | "aside" | "footer" | "header" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "hgroup" | "main" | "nav" | "section" | "search" | "blockquote" | "dd" | "div" | "dl" | "dt" | "figcaption" | "figure" | "hr" | "li" | "menu" | "ol" | "p" | "pre" | "ul" | "a" | "abbr" | "b" | "bdi" | "bdo" | "br" | "cite" | "code" | "data" | "dfn" | "em" | "i" | "kbd" | "mark" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "small" | "span" | "strong" | "sub" | "sup" | "time" | "u" | "var" | "wbr" | "area" | "audio" | "img" | "map" | "track" | "video" | "embed" | "iframe" | "picture" | "portal" | "source" | "math" | "canvas" | "noscript" | "script" | "del" | "ins" | "caption" | "col" | "colgroup" | "table" | "tbody" | "td" | "tfoot" | "th" | "thead" | "tr" | "button" | "datalist" | "fieldset" | "form" | "input" | "label" | "legend" | "meter" | "optgroup" | "option" | "output" | "progress" | "select" | "textarea" | "details" | "dialog" | "summary" | "slot" | "template" | "acronym" | "big" | "center" | "content" | "dir" | "font" | "frame" | "frameset" | "image" | "marquee" | "menuitem" | "nobr" | "noembed" | "noframes" | "param" | "plaintext" | "rb" | "rtc" | "shadow" | "strike" | "tt" | "xmp" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "hatch" | "hatchpath" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "textPath" | "tspan" | "use" | "view")[];
export type Tag = (typeof htmlAndSvgTags)[number];
export declare const allowlist: (tags: Tag[]) => Plugin;
export declare const denylist: (tags: Tag[]) => Plugin;
