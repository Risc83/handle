export const WORD_LENGTH = 4
export const TRIES_LIMIT = 10
export const START_DATE = (() => {
  const year = 2024
  const month = Math.floor(Math.random() * 12)
  const daysInMonth = new Date(year, month, 0).getDate()
  const day = Math.floor(Math.random() * daysInMonth)

  return new Date(year, month, day)
})()
export const RANDOM_SEED = 'handle'
export const DAYS_PLAY_BACK = 3
export const DEPLOY_HOST = 'handle.antfu.me'
export const NETLIFY_FUNCTION_HOST = '/.netlify/functions'
