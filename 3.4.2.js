function curryIt(uncurried, ...args) {
  return function(...subargs) {
    return uncurried.apply(this, args.concat(subargs));
  }
}
