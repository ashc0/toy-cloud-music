function throttle(cb, delay) {
  let flag = true
  return function () {
    if (flag) {
      setTimeout(() => {
        cb.call(this)
        flag = true
      }, delay)
    }
    flag = false
  }
}

export default throttle


