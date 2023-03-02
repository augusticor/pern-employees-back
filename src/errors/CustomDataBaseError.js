class CustomDataBaseError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DataBase Error';
  }
}

module.exports = CustomDataBaseError;
