export default (exerciseName) => {
  return exerciseName.toLowerCase().split(' ').join('-')
}
