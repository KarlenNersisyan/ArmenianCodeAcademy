function parseFloating(string, base) {
    let result;
    if (/^-?(0b)?(0o)?(0x)*([0-9])+.([0-9])+/.test(string)) {
      result = string.match(/^-?(0b)?(0o)?(0x)*([0-9])+.([0-9])+/);
    }
    return result ? Number(result[0].toString(base)) : NaN;
  }