export default function dateFilter (value, format = 'date') {
  const options = {}
  return new Intl.DateTimeFormat('ru-Ru', options).format(new Date(value))
}
