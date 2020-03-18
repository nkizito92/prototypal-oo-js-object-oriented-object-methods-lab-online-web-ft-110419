function BoardMember (name, homeState, training) {
  this.name = name,
  this.homeState = homeState,
  this.training = training;
  
  veto () {
    return "no, I must disagree"
  }
  
}