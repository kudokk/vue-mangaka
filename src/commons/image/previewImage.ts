export const previewImage = (element: HTMLImageElement, file: File) => {
  const reader = new FileReader()
  reader.onload = function () {
    element.src = this.result as string
  }
  reader.readAsDataURL(file)
}