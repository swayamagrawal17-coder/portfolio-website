/* @ds-bundle: {"format":4,"namespace":"NikoKanePortfolioDesignSystem_87771f","components":[{"name":"ArticleCard","sourcePath":"components/content/ArticleCard.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"ServiceItem","sourcePath":"components/content/ServiceItem.jsx"},{"name":"TestimonialCard","sourcePath":"components/content/TestimonialCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Scribble","sourcePath":"components/core/Scribble.jsx"},{"name":"Stamp","sourcePath":"components/core/Stamp.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"}],"sourceHashes":{"components/content/ArticleCard.jsx":"c4f0089163fd","components/content/ProjectCard.jsx":"b17987e46042","components/content/SectionHeading.jsx":"b146da077f68","components/content/ServiceItem.jsx":"22b7a97ce78d","components/content/TestimonialCard.jsx":"da2398d67703","components/core/Badge.jsx":"1fd107f38208","components/core/Button.jsx":"12a57e32379c","components/core/Eyebrow.jsx":"bb2508516f59","components/core/IconButton.jsx":"af4898746a01","components/core/Scribble.jsx":"2238d6028e33","components/core/Stamp.jsx":"f3dea70fca3b","components/forms/Input.jsx":"e9aeef2e0ea0","components/navigation/NavBar.jsx":"51aa7f890ee5","components/navigation/SiteFooter.jsx":"cdea97f1d444","ui_kits/portfolio-site/ContactScreen.jsx":"1550fd48a784","ui_kits/portfolio-site/HomeScreen.jsx":"ca987fcadb01","ui_kits/portfolio-site/ProjectsScreen.jsx":"dbcec5750b5a","ui_kits/portfolio-site/Shared.jsx":"5ae89f3e9e1a","ui_kits/portfolio-site/data.js":"e71f3cb4eb6a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NikoKanePortfolioDesignSystem_87771f = window.NikoKanePortfolioDesignSystem_87771f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProjectCard({
  image,
  imageBg = 'var(--vermilion)',
  title,
  meta,
  href = '#',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'transform var(--dur-base) var(--ease-out)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'var(--hover-lift)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      background: imageBg,
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: '13px',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-1)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-small)',
      color: 'var(--text-muted)'
    }
  }, meta)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '18px',
      color: 'var(--ink-1)',
      lineHeight: 1.2
    }
  }, "\u2192")));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ServiceItem({
  icon,
  title,
  description,
  tone = 'light',
  divider = true,
  style,
  ...rest
}) {
  const onDark = tone === 'light';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      padding: divider ? '0 30px' : '0 30px 0 0',
      borderLeft: divider ? `1px solid ${onDark ? 'var(--border-hairline-inverse)' : 'var(--border-hairline)'}` : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--marigold)',
      fontSize: '22px',
      lineHeight: 1,
      display: 'flex',
      height: 26,
      alignItems: 'center'
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 'var(--size-h4)',
      color: onDark ? 'var(--paper-1)' : 'var(--ink-1)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-small)',
      lineHeight: 1.65,
      color: onDark ? 'rgba(247,240,223,.7)' : 'var(--text-muted)'
    }
  }, description));
}
Object.assign(__ds_scope, { ServiceItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceItem.jsx", error: String((e && e.message) || e) }); }

// components/content/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TestimonialCard({
  quote,
  name,
  role,
  tone = 'accent',
  divider = true,
  style,
  ...rest
}) {
  const onAccent = tone === 'accent';
  return /*#__PURE__*/React.createElement("blockquote", _extends({
    style: {
      margin: 0,
      padding: divider ? '0 32px' : 0,
      borderLeft: divider ? `1px solid ${onAccent ? 'rgba(247,240,223,.34)' : 'var(--border-hairline)'}` : 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-body)',
      lineHeight: 1.7,
      color: onAccent ? 'var(--paper-1)' : 'var(--text-body)'
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: '11.5px',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: onAccent ? 'var(--paper-1)' : 'var(--ink-1)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: '11px',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: onAccent ? 'rgba(247,240,223,.72)' : 'var(--text-muted)'
    }
  }, role)));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  tone = 'neutral',
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'transparent',
      color: 'var(--ink-3)',
      border: '1px solid var(--border-hairline)'
    },
    accent: {
      background: 'var(--vermilion)',
      color: 'var(--paper-1)',
      border: '1px solid var(--vermilion)'
    },
    marigold: {
      background: 'var(--marigold)',
      color: 'var(--ink-1)',
      border: '1px solid var(--marigold)'
    },
    dark: {
      background: 'var(--ink-1)',
      color: 'var(--paper-1)',
      border: '1px solid var(--ink-1)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: '10.5px',
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      padding: '5px 10px',
      borderRadius: 'var(--radius-sm)',
      display: 'inline-block',
      lineHeight: 1,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/ArticleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ArticleCard({
  image,
  imageBg = 'var(--marigold)',
  category,
  title,
  date,
  readTime,
  href = '#',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'transform var(--dur-base) var(--ease-out)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'var(--hover-lift)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 10',
      background: imageBg,
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), category && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "accent",
    style: {
      background: 'transparent',
      color: 'var(--vermilion)',
      border: 'none',
      padding: 0
    }
  }, category), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 'var(--size-h3)',
      lineHeight: 'var(--lh-h3)',
      color: 'var(--ink-1)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-small)',
      color: 'var(--text-muted)'
    }
  }, date, readTime ? `   ${readTime}` : ''));
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-ui)',
  fontWeight: 700,
  letterSpacing: '.1em',
  textTransform: 'uppercase',
  border: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  transition: 'transform var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
  textDecoration: 'none',
  lineHeight: 1
};
const sizes = {
  sm: {
    fontSize: '10.5px',
    padding: '10px 18px'
  },
  md: {
    fontSize: '11.5px',
    padding: '14px 26px'
  },
  lg: {
    fontSize: '13px',
    padding: '18px 34px'
  }
};
const variants = {
  primary: {
    background: 'var(--marigold)',
    color: 'var(--ink-1)',
    borderRadius: 'var(--radius-pill)'
  },
  navy: {
    background: 'var(--navy)',
    color: 'var(--cream-2)',
    borderRadius: 'var(--radius-lg)'
  },
  outlineNavy: {
    background: 'transparent',
    color: 'var(--navy)',
    border: '2px solid var(--navy)',
    borderRadius: 'var(--radius-lg)'
  },
  dark: {
    background: 'var(--ink-1)',
    color: 'var(--paper-1)',
    borderRadius: 'var(--radius-pill)'
  },
  accent: {
    background: 'var(--vermilion)',
    color: 'var(--paper-1)',
    borderRadius: 'var(--radius-pill)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--ink-1)',
    border: '2px solid var(--ink-1)',
    borderRadius: 'var(--radius-pill)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--ink-1)',
    padding: 0,
    borderBottom: '2px solid var(--vermilion)',
    borderRadius: 0
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  href,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const Tag = href ? 'a' : 'button';
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(variant === 'ghost' ? {
      padding: '0 0 6px'
    } : null),
    ...(disabled ? {
      opacity: .38,
      pointerEvents: 'none'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    disabled: !href ? disabled : undefined,
    style: s,
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'var(--hover-lift)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, rest), children, arrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.15em',
      lineHeight: 0,
      transform: 'translateY(1px)'
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  color = 'var(--vermilion)',
  mark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      ...style
    }
  }, rest), mark && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '1.3em',
      lineHeight: 0
    }
  }, "\u2735"), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  children,
  label,
  variant = 'outline',
  size = 40,
  onClick,
  href,
  style,
  ...rest
}) {
  const skins = {
    outline: {
      background: 'transparent',
      color: 'var(--ink-1)',
      border: '2px solid var(--ink-1)'
    },
    dark: {
      background: 'var(--ink-1)',
      color: 'var(--paper-1)',
      border: '2px solid var(--ink-1)'
    },
    accent: {
      background: 'var(--vermilion)',
      color: 'var(--paper-1)',
      border: '2px solid var(--vermilion)'
    },
    bare: {
      background: 'transparent',
      color: 'var(--ink-2)',
      border: '2px solid transparent'
    }
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    "aria-label": label,
    onClick: onClick,
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      padding: 0,
      transition: 'transform var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out)',
      ...skins[variant],
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'var(--hover-lift)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Scribble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Scribble({
  variant = 'squiggle',
  color = 'var(--vermilion)',
  width = 120,
  style,
  ...rest
}) {
  const common = {
    display: 'block',
    width,
    ...style
  };
  if (variant === 'rule') {
    return /*#__PURE__*/React.createElement("span", _extends({
      "aria-hidden": "true",
      style: {
        ...common,
        height: 4,
        background: color,
        borderRadius: 2
      }
    }, rest));
  }
  if (variant === 'dots') {
    return /*#__PURE__*/React.createElement("span", _extends({
      "aria-hidden": "true",
      style: {
        ...common,
        height: 34,
        backgroundImage: 'var(--halftone)',
        backgroundSize: 'var(--halftone-size)',
        opacity: .9
      }
    }, rest));
  }
  const amp = variant === 'zigzag' ? '4px' : '3px';
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      ...common,
      height: 14,
      color,
      textDecorationLine: 'underline',
      textDecorationStyle: 'wavy',
      textDecorationThickness: amp,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      lineHeight: '10px'
    }
  }, rest), '\u00A0'.repeat(60));
}
Object.assign(__ds_scope, { Scribble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Scribble.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  face = 'serif',
  tone = 'dark',
  scribble = true,
  scribbleColor,
  align = 'left',
  style,
  headingId,
  children,
  ...rest
}) {
  const onDark = tone === 'light';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    color: onDark ? 'var(--marigold)' : 'var(--vermilion-deep)'
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    id: headingId,
    style: {
      margin: 0,
      fontFamily: face === 'display' ? 'var(--font-display)' : 'var(--font-serif)',
      fontWeight: face === 'display' ? 400 : 400,
      textTransform: face === 'display' ? 'uppercase' : 'none',
      fontSize: face === 'display' ? 'var(--size-display)' : 'var(--size-h1)',
      lineHeight: face === 'display' ? 'var(--lh-display)' : 'var(--lh-h1)',
      letterSpacing: face === 'display' ? 'var(--ls-display)' : '-.01em',
      color: onDark ? 'var(--paper-1)' : 'var(--text-display)'
    }
  }, title), scribble && /*#__PURE__*/React.createElement(__ds_scope.Scribble, {
    variant: "squiggle",
    width: 112,
    color: scribbleColor || (onDark ? 'var(--marigold)' : 'var(--vermilion)')
  }), children);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Stamp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stamp({
  children,
  tone = 'marigold',
  size = 118,
  rotate = -6,
  style,
  ...rest
}) {
  const tones = {
    marigold: {
      background: 'var(--marigold)',
      color: 'var(--ink-1)',
      border: 'none'
    },
    accent: {
      background: 'var(--vermilion)',
      color: 'var(--paper-1)',
      border: 'none'
    },
    outline: {
      background: 'transparent',
      color: 'var(--ink-1)',
      border: '2px solid var(--ink-1)'
    },
    outlineLight: {
      background: 'transparent',
      color: 'var(--paper-1)',
      border: '2px solid var(--paper-1)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-stamp)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: '6px',
      padding: '14px',
      transform: `rotate(${rotate}deg)`,
      fontFamily: 'var(--font-ui)',
      fontSize: '9.5px',
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      lineHeight: 1.45,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Stamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stamp.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  type = 'text',
  multiline = false,
  rows = 4,
  tone = 'light',
  style,
  ...rest
}) {
  const onDark = tone === 'dark';
  const field = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-ui)',
    fontSize: 'var(--size-body)',
    color: onDark ? 'var(--paper-1)' : 'var(--ink-1)',
    background: 'transparent',
    border: 'none',
    borderBottom: `2px solid ${onDark ? 'var(--border-hairline-inverse)' : 'var(--ink-1)'}`,
    borderRadius: 0,
    padding: '10px 0',
    outline: 'none',
    resize: 'vertical'
  };
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--marigold)' : 'var(--vermilion)'
    }
  }, label), /*#__PURE__*/React.createElement(Tag, _extends({
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    style: field,
    onFocus: e => {
      e.currentTarget.style.borderBottomColor = 'var(--vermilion)';
    },
    onBlur: e => {
      e.currentTarget.style.borderBottomColor = onDark ? 'rgba(247,240,223,.18)' : '#111';
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  brand = 'Niko Kane',
  items = [],
  active,
  onNavigate,
  cta = "Let's work together",
  onCta,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '32px',
      padding: '22px 56px',
      background: 'var(--surface-page)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0]);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '19px',
      letterSpacing: '-.01em',
      textTransform: 'uppercase',
      color: 'var(--ink-1)'
    }
  }, brand), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--vermilion)',
      fontSize: '19px',
      lineHeight: 0
    }
  }, "\u2735")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '30px'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(it);
    },
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: '11.5px',
      fontWeight: 600,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-1)',
      textDecoration: 'none',
      paddingBottom: '4px',
      borderBottom: active === it ? '2px solid var(--vermilion)' : '2px solid transparent'
    }
  }, it))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    arrow: true,
    onClick: onCta
  }, cta));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  brand = 'Niko Kane',
  blurb,
  columns = [],
  socials = [],
  legal = '© 2024 Niko Kane. All rights reserved.',
  links = [],
  style,
  ...rest
}) {
  const head = {
    fontFamily: 'var(--font-ui)',
    fontSize: '10.5px',
    fontWeight: 700,
    letterSpacing: '.14em',
    textTransform: 'uppercase',
    color: 'var(--marigold)',
    marginBottom: '16px'
  };
  const item = {
    fontFamily: 'var(--font-ui)',
    fontSize: 'var(--size-small)',
    color: 'rgba(247,240,223,.74)',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '9px'
  };
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-dark)',
      padding: '58px 56px 26px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr 1fr 1fr auto',
      gap: '40px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      textTransform: 'uppercase'
    }
  }, brand), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--vermilion)',
      fontSize: '20px',
      lineHeight: 0
    }
  }, "\u2735")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 22px',
      fontSize: 'var(--size-small)',
      lineHeight: 1.65,
      color: 'rgba(247,240,223,.7)',
      maxWidth: '30ch'
    }
  }, blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, socials.map(s => /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    key: s.label,
    label: s.label,
    href: s.href,
    variant: "bare",
    size: 30,
    style: {
      color: 'var(--paper-1)',
      border: '1px solid var(--border-hairline-inverse)'
    }
  }, s.icon)))), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("div", {
    style: head
  }, col.title), col.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: item
  }, i)))), /*#__PURE__*/React.createElement(__ds_scope.Stamp, {
    tone: "outlineLight",
    size: 108,
    rotate: 0
  }, "Design", /*#__PURE__*/React.createElement("br", null), "that means", /*#__PURE__*/React.createElement("br", null), "something")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '44px',
      paddingTop: '18px',
      borderTop: '1px solid var(--border-hairline-inverse)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '11.5px',
      color: 'rgba(247,240,223,.55)'
    }
  }, /*#__PURE__*/React.createElement("span", null, legal), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: '20px'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, l)))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/ContactScreen.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  Input,
  Stamp,
  Scribble
} = window.NikoKanePortfolioDesignSystem_87771f;
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Band, {
    bg: "var(--surface-accent-alt)",
    style: {
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--ink-1)"
  }, "Let's work together"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '14px 0 0',
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--size-display)',
      lineHeight: 1.02,
      color: 'var(--ink-1)'
    }
  }, "Have a project", /*#__PURE__*/React.createElement("br", null), "in mind?"), /*#__PURE__*/React.createElement(Scribble, {
    variant: "rule",
    color: "var(--ink-1)",
    width: 230,
    style: {
      marginTop: 14
    }
  })), /*#__PURE__*/React.createElement(Band, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--vermilion)',
      fontSize: 48,
      lineHeight: 1
    }
  }, "\u2735"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--size-h1)',
      color: 'var(--ink-1)'
    }
  }, "Got it. Talk soon."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: 'var(--size-small)'
    }
  }, "I reply to every enquiry within two working days."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "Jenna Walker"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "hello@studio.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    placeholder: "Cala Co."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Budget",
    placeholder: "$10k \u2013 $25k"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tell me about the project",
    multiline: true,
    rows: 5,
    placeholder: "What are you building, and what's in the way?",
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    arrow: true,
    style: {
      justifySelf: 'start'
    }
  }, "Send it over")), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Direct"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--size-h3)',
      color: 'var(--ink-1)'
    }
  }, "hello@nikokane.com")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Where"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: 'var(--size-small)',
      color: 'var(--text-body)'
    }
  }, "Portland, OR", /*#__PURE__*/React.createElement("br", null), "Available worldwide")), /*#__PURE__*/React.createElement(Stamp, {
    tone: "marigold",
    size: 116,
    rotate: 7,
    style: {
      marginTop: 8
    }
  }, "Booking Q3 \xB7 Two slots left")))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Eyebrow,
  Stamp,
  Scribble,
  SectionHeading,
  ProjectCard,
  ArticleCard,
  TestimonialCard,
  ServiceItem
} = window.NikoKanePortfolioDesignSystem_87771f;
function Hero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '10px 56px 40px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Brand designer"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '14px 0 0',
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: 'var(--size-hero)',
      lineHeight: 'var(--lh-hero)',
      letterSpacing: 'var(--ls-hero)',
      color: 'var(--ink-1)'
    }
  }, "Niko", /*#__PURE__*/React.createElement("br", null), "Kane"), /*#__PURE__*/React.createElement(Scribble, {
    variant: "rule",
    width: 210,
    style: {
      margin: '14px 0 26px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 26px',
      maxWidth: '34ch',
      fontSize: 'var(--size-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, "I create strategic brand identities that connect, inspire, and leave a lasting impression."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    onClick: () => onNavigate('Projects')
  }, "View my work")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '18px 60px 30px 10px',
      background: 'var(--marigold)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/poster-think-creative.png",
    alt: "",
    style: {
      position: 'absolute',
      inset: '0 40px 0 0',
      width: 'calc(100% - 40px)',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '50% 12%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 26,
      color: 'var(--vermilion)',
      fontSize: 54,
      lineHeight: 1
    },
    "aria-hidden": "true"
  }, "\u2735"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 4,
      bottom: 24,
      width: 84,
      height: 44,
      backgroundImage: 'var(--halftone)',
      backgroundSize: 'var(--halftone-size)'
    }
  }), /*#__PURE__*/React.createElement(Stamp, {
    tone: "accent",
    size: 104,
    rotate: -10,
    style: {
      position: 'absolute',
      left: -34,
      bottom: 60
    }
  }, "Bold \xB7 Strategy \xB7 Impact"))));
}
function HomeScreen({
  onNavigate
}) {
  const D = window.PortfolioData;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      background: 'var(--paper-0)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-1)',
      minHeight: 380,
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 34
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'var(--halftone)',
      backgroundSize: '14px 14px',
      opacity: .28
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-hand)',
      fontSize: 30,
      color: 'var(--paper-1)'
    }
  }, "studio, Portland")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 56px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "About me"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--size-h1)',
      lineHeight: 'var(--lh-h1)',
      color: 'var(--ink-1)'
    }
  }, "Design with purpose.", /*#__PURE__*/React.createElement("br", null), "Brands with ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--vermilion)'
    }
  }, "soul.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '46ch',
      fontSize: 'var(--size-small)',
      lineHeight: 1.75,
      color: 'var(--text-body)'
    }
  }, "I'm Niko Kane, a brand designer helping ambitious businesses stand out with clarity and character. From bold identities to thoughtful details, I design brands that feel true and connect deeply."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-hand)',
      fontSize: 34,
      color: 'var(--ink-1)'
    }
  }, "Niko Kane"), /*#__PURE__*/React.createElement(Stamp, {
    tone: "marigold",
    size: 116,
    rotate: -8,
    style: {
      position: 'absolute',
      right: 48,
      top: 96
    }
  }, "Based in Portland, working worldwide"))), /*#__PURE__*/React.createElement(Band, {
    bg: "var(--surface-inverse)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr repeat(4, 1fr)',
      gap: 0,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "light",
    eyebrow: "Services",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "What I can", /*#__PURE__*/React.createElement("br", null), "do for you"),
    scribbleColor: "var(--marigold)",
    style: {
      paddingRight: 30
    }
  }), D.services.map(s => /*#__PURE__*/React.createElement(ServiceItem, {
    key: s.title,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: s.icon
    }),
    title: s.title,
    description: s.description
  })))), /*#__PURE__*/React.createElement(Band, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 3fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Featured projects",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Selected", /*#__PURE__*/React.createElement("br", null), "work")
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    arrow: true,
    onClick: () => onNavigate('Projects'),
    style: {
      marginTop: 10
    }
  }, "View all projects")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, D.projects.slice(0, 3).map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.title,
    title: p.title,
    meta: p.meta,
    imageBg: p.bg
  }))))), /*#__PURE__*/React.createElement(Band, {
    bg: "var(--surface-accent)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 3fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "light",
    eyebrow: "Kind words",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "What clients", /*#__PURE__*/React.createElement("br", null), "say"),
    scribbleColor: "var(--marigold)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 0
    }
  }, D.testimonials.map((t, i) => /*#__PURE__*/React.createElement(TestimonialCard, _extends({
    key: t.name
  }, t, {
    divider: i > 0
  })))))), /*#__PURE__*/React.createElement(Band, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 3fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Insights",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Design", /*#__PURE__*/React.createElement("br", null), "ideas &", /*#__PURE__*/React.createElement("br", null), "insights")
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    arrow: true,
    style: {
      marginTop: 10
    }
  }, "View all articles")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, D.articles.map(a => /*#__PURE__*/React.createElement(ArticleCard, _extends({
    key: a.title
  }, a, {
    imageBg: a.bg
  })))))), /*#__PURE__*/React.createElement(Band, {
    bg: "var(--surface-accent-alt)",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--ink-1)"
  }, "Let's work together"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--size-display)',
      lineHeight: 1.02,
      color: 'var(--ink-1)'
    }
  }, "Have a project", /*#__PURE__*/React.createElement("br", null), "in mind?"), /*#__PURE__*/React.createElement(Scribble, {
    variant: "rule",
    color: "var(--ink-1)",
    width: 230,
    style: {
      marginTop: 14
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontSize: 'var(--size-body)',
      lineHeight: 1.7,
      color: 'var(--ink-1)',
      maxWidth: '38ch'
    }
  }, "I'd ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontFamily: 'var(--font-serif)'
    }
  }, "love"), " to hear about your project and explore how we can create something amazing together."), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    arrow: true,
    onClick: () => onNavigate('Contact')
  }, "Start a project")))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/ProjectsScreen.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  Badge,
  SectionHeading,
  ProjectCard,
  Stamp
} = window.NikoKanePortfolioDesignSystem_87771f;
function ProjectsScreen({
  onNavigate
}) {
  const D = window.PortfolioData;
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'Brand Identity', 'Packaging', 'Art Direction', 'Visual Systems'];
  const shown = filter === 'All' ? D.projects : D.projects.filter(p => p.meta.includes(filter));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Band, {
    style: {
      paddingBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Projects"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '14px 0 0',
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: 'var(--size-display)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--ink-1)'
    }
  }, "Selected", /*#__PURE__*/React.createElement("br", null), "work")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--size-body)',
      lineHeight: 1.7,
      color: 'var(--text-body)',
      maxWidth: '40ch'
    }
  }, "Identity systems, packaging and art direction for brands that would rather be remembered than blend in.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 34,
      flexWrap: 'wrap'
    }
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    onClick: () => setFilter(f),
    style: {
      cursor: 'pointer',
      border: 'none',
      padding: 0,
      background: 'none'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: filter === f ? 'dark' : 'neutral'
  }, f))))), /*#__PURE__*/React.createElement(Band, {
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 30
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.title,
    title: p.title,
    meta: p.meta,
    imageBg: p.bg
  }))), shown.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Nothing filed under ", filter, " yet.")), /*#__PURE__*/React.createElement(Band, {
    bg: "var(--surface-inverse)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "light",
    eyebrow: "Next",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Want your brand", /*#__PURE__*/React.createElement("br", null), "in this grid?"),
    scribbleColor: "var(--marigold)"
  }), /*#__PURE__*/React.createElement(Stamp, {
    tone: "outlineLight",
    size: 124,
    rotate: -6
  }, "Design that means something"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    onClick: () => onNavigate('Contact')
  }, "Start a project"))));
}
Object.assign(window, {
  ProjectsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/ProjectsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/Shared.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  NavBar,
  SiteFooter,
  IconButton
} = window.NikoKanePortfolioDesignSystem_87771f;
const Icon = ({
  name,
  ...p
}) => /*#__PURE__*/React.createElement("i", _extends({
  "data-lucide": name
}, p));
function Band({
  bg = 'var(--surface-page)',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: '72px 56px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, children));
}
function Chrome({
  page,
  onNavigate,
  children
}) {
  const D = window.PortfolioData;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    items: D.nav,
    active: page,
    onNavigate: onNavigate,
    onCta: () => onNavigate('Contact')
  }), children, /*#__PURE__*/React.createElement(SiteFooter, {
    blurb: D.footer.blurb,
    columns: D.footer.columns,
    socials: [{
      label: 'Instagram',
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "instagram"
      })
    }, {
      label: 'Dribbble',
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "dribbble"
      })
    }, {
      label: 'LinkedIn',
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "linkedin"
      })
    }, {
      label: 'Behance',
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "palette"
      })
    }],
    links: ['Privacy Policy', 'Terms & Conditions']
  }));
}
Object.assign(window, {
  Band,
  Chrome,
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/data.js
try { (() => {
window.PortfolioData = {
  nav: ['Home', 'About', 'Services', 'Projects', 'Insights', 'Contact'],
  services: [{
    icon: 'eye',
    title: 'Brand Strategy',
    description: 'Research-driven strategies that define your positioning and set you apart.'
  }, {
    icon: 'pencil',
    title: 'Brand Identity',
    description: 'Memorable visual identities designed to reflect your essence and resonate.'
  }, {
    icon: 'circle-dot',
    title: 'Visual Systems',
    description: 'Flexible brand systems that bring consistency and clarity across every touchpoint.'
  }, {
    icon: 'asterisk',
    title: 'Art Direction',
    description: 'Bold, thoughtful direction that elevates your brand across mediums.'
  }],
  projects: [{
    title: 'Verde Coffee',
    meta: 'Brand Identity, Packaging',
    bg: 'var(--vermilion)'
  }, {
    title: 'MVMNT Studio',
    meta: 'Brand Identity, Art Direction',
    bg: 'var(--ink-1)'
  }, {
    title: 'Solstice Skincare',
    meta: 'Brand Identity, Packaging',
    bg: 'var(--marigold)'
  }, {
    title: 'Cala Co.',
    meta: 'Visual Systems',
    bg: 'var(--paper-2)'
  }, {
    title: 'Northbound',
    meta: 'Art Direction',
    bg: 'var(--vermilion-deep)'
  }, {
    title: 'Field & Form',
    meta: 'Brand Identity',
    bg: 'var(--marigold-deep)'
  }],
  testimonials: [{
    quote: 'Niko completely transformed our brand. The identity feels so authentic and has helped us attract the right audience.',
    name: 'Jenna Walker',
    role: 'Founder, Cala Co.'
  }, {
    quote: 'Working with Niko was seamless from start to finish. His creativity and strategic approach are unmatched.',
    name: 'Marcus Holloway',
    role: 'CEO, MVMNT Studio'
  }, {
    quote: 'The brand Niko designed for us stands out in the best way. It\u2019s bold, thoughtful, and uniquely us.',
    name: 'Lena Rodriguez',
    role: 'Founder, Solstice Skincare'
  }],
  articles: [{
    category: 'Branding',
    title: 'Why Less Is More in Brand Design',
    date: 'May 10, 2024',
    readTime: '5 min read',
    bg: 'var(--marigold)'
  }, {
    category: 'Strategy',
    title: 'The Power of Brand Strategy',
    date: 'April 28, 2024',
    readTime: '6 min read',
    bg: 'var(--paper-2)'
  }, {
    category: 'Process',
    title: 'My Branding Process: From Insight to Identity',
    date: 'April 15, 2024',
    readTime: '7 min read',
    bg: 'var(--ink-1)'
  }],
  footer: {
    blurb: 'Brand designer crafting strategic, impactful identities for forward-thinking brands.',
    columns: [{
      title: 'Navigation',
      items: ['Home', 'About', 'Services', 'Projects', 'Insights', 'Contact']
    }, {
      title: 'Services',
      items: ['Brand Strategy', 'Brand Identity', 'Visual Systems', 'Art Direction']
    }, {
      title: 'Contact',
      items: ['hello@nikokane.com', 'Portland, OR', 'Available Worldwide']
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/data.js", error: String((e && e.message) || e) }); }

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceItem = __ds_scope.ServiceItem;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Scribble = __ds_scope.Scribble;

__ds_ns.Stamp = __ds_scope.Stamp;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

})();
