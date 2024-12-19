const now = new Date()

const secondTime = 1000
const minuteTime = secondTime * 60
const hourTime = minuteTime * 60
const dayTime = hourTime * 24
const weekTime = dayTime * 7
const monthTime = dayTime * 30 // TODO: その月の日数を計算
const yearTime = dayTime * 365

const getYears = (differenceTime: number) => Math.floor(differenceTime / yearTime) + '年前'
const getMonths = (differenceTime: number) => Math.floor(differenceTime / monthTime) + 'ヵ月前'
const getWeeks = (differenceTime: number) => Math.floor(differenceTime / weekTime) + '週間前'
const getDays = (differenceTime: number) => Math.floor(differenceTime / dayTime) + '日前'
const getHours = (differenceTime: number) => Math.floor(differenceTime / hourTime) + '時間前'
const getMinuts = (differenceTime: number) => Math.floor(differenceTime / minuteTime) + '分前'
const getSeconds = (differenceTime: number) => Math.floor(differenceTime / secondTime) + '秒前'

const has1Year = (differenceTime: number) => differenceTime / yearTime >= 1
const has1Month = (differenceTime: number) => differenceTime / monthTime >= 1
const has1Week = (differenceTime: number) => differenceTime / weekTime >= 1
const has1Day = (differenceTime: number) => differenceTime / dayTime >= 1
const has1Hour = (differenceTime: number) => differenceTime / hourTime >= 1
const has1Minute = (differenceTime: number) => differenceTime / minuteTime >= 1
const has1Second = (differenceTime: number) => differenceTime / secondTime >= 1
const getDifferenceTime = (date: Date) => now.getTime() - date.getTime()

export const getRecentTime = (time: string) => {
  const differenceTime = getDifferenceTime(new Date(time))
  if (has1Year(differenceTime)) return getYears(differenceTime)
  if (has1Month(differenceTime)) return getMonths(differenceTime)
  if (has1Week(differenceTime)) return getWeeks(differenceTime)
  if (has1Day(differenceTime)) return getDays(differenceTime)
  if (has1Hour(differenceTime)) return getHours(differenceTime)
  if (has1Minute(differenceTime)) return getMinuts(differenceTime)
  if (has1Second(differenceTime)) return getSeconds(differenceTime)
  return '1秒前'
} 