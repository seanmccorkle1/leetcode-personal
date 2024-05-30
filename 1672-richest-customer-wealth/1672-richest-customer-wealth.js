function maximumWealth(accounts) {
  return _.chain(accounts).map(_.sum).max().value();
}