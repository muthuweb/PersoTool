const getFormattedAmount = (amount) => {
  if (Math.abs(amount) < 1000) {
    return amount.toFixed(2)
  }
  if (Math.abs(amount) < 1000000) {
    return `${(amount / 1000).toFixed(1)}K`
  }
  return `${(amount / 1000000).toFixed(1)}M`
}

export default getFormattedAmount
