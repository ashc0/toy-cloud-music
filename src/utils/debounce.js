let debounce = (cb, delay = 500) => {
  let timer = null
  return (args) => {
    clearTimeout(timer)
    timer = setTimeout(cb, delay, args)
  }
}

export default debounce