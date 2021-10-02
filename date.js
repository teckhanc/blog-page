exports.getDate = function() {
  const today = new Date();

  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  }
  return today.toLocaleDateString("en-AU", options)
}
