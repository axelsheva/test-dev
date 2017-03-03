import Users from '../models/users';

export async function getUserByToken(token) {
  const { _id } = token;
  let user;
  try {
    user = await Users.findOne({ _id }, { password: 0 });
  } catch (e) {
    throw e;
  }
  return user;
}
