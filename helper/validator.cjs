function validator(url) {
  const regex =
    /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+)(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=%]*)?$/;
  return regex.test(url);
}

module.exports = validator;
