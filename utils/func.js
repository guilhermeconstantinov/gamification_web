export const money = (value) => {
  if(!value){
    return
  }
  const intl = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })
  return intl.format(value)
}
