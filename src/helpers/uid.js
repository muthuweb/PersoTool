const generateUid = (string) => {
  return `${string || ''}${(Math.random() + 1).toString(36).substring(2)}${new Date().getTime()}`
}

export default generateUid
