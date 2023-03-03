class CustomDataError extends Error {
  constructor(message) {
    super(message);
    this.name = 'Data body Error';
  }
}

module.exports = CustomDataError;
