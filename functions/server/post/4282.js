exports.handler = async () => {
  return {
    statusCode: 301,
    headers: {
      location: 'https://www.makalecafe.com/bir-cocugu-iki-kopegin-2021/'
    }
  }
}