export default (user) => {
  if (user && user.isAdmin)
    return true
  return false
}
