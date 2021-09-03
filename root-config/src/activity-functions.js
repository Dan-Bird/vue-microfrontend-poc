export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  );
}

export function nav() {
  // The nav is always active
  return true;
}

export function page1(location) {
  return location.pathname.startsWith('/page1');
}

export function page2(location) {
  return prefix(location, 'page2');
}