const errorMessage = '異常が発生しました。捜査し直して下さい。'

export const throwError = (error: string, message = errorMessage) => {
  throw new Error(error)
  alert(message)
}