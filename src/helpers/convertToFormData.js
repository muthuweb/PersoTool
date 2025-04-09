// This method is for converting the form object to url encoded form data
const convertToFormData = (form) => {
  const params = new FormData()

  Object.keys(form).forEach((key) => {
    const val = form[key]
    if (Array.isArray(val)) {
      val.forEach((item, index) => {
        const isFile = item.constructor === File || item.constructor === Blob
        params.append(
          `${key}[${index}]`,
          typeof item === 'object' && !isFile ? JSON.stringify(item) : item
        )
      })
    } else {
      params.append(key, val)
    }
  })

  return params
}

export default convertToFormData
