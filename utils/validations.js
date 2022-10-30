export const validateDate = (value) => {
  if (value && value.length < 10) {
    return false
  }

  const valueSplit = value.split('/')
  const newFormat = valueSplit.reverse().join('-')
  const newDate = new Date(newFormat).toLocaleDateString('pt-BR', {
    timeZone: 'UTC',
  })

  if (newDate === 'Invalid Date') {
    return false
  }
  return true
}
