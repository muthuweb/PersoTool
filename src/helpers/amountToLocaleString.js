const amountToLocaleString = ({
  amount,
  locale = 'de',
  includeCurrency = true,
  currency = '€',
  decimalZeros = true
}) => {
  let result = amount.toLocaleString(locale, {
    minimumFractionDigits: decimalZeros ? 2 : 0,
    maximumFractionDigits: 2
  })

  if (includeCurrency) {
    result = locale === 'en' ? `${currency} ${result}` : `${result} ${currency}`
  }
  return result
}

export default amountToLocaleString
