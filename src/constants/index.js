const serverData = {
  protocol: 'http',
  host: 'localhost',
  port: '2999'
}
// const url = `${serverData.protocol}://${serverData.host}:${serverData.port}`
const APIUrl = `${serverData.protocol}://${serverData.host}:${serverData.port}/api`

export const API = {
  signIn: `${APIUrl}/signin`,
  signUp: `${APIUrl}/signup`,
  news: `${APIUrl}/news`
}
