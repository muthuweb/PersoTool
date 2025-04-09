const getShortName = (piece1, piece2) => {
  if (!piece1 && !piece2) {
    return ''
  }

  // Split piece1 by spaces and filter out any falsy values
  const piece1Arr = piece1.split(' ').filter(Boolean)

  if (!piece2) {
    if (piece1Arr.length > 1) {
      return `${piece1Arr[0].substring(0, 1)}${piece1Arr[1].substring(0, 1)}`.toUpperCase()
    }
    return piece1.substring(0, 2).toUpperCase()
  }

  return `${piece1.substring(0, 1)}${piece2.substring(0, 1)}`.toUpperCase()
}

export default getShortName
