function BoardMember (name, homeState, training) {
  this.name = name,
  this.homeState = homeState,
  this.training = training;
  
  get veto () {
    return "no, I must disagree"
  }
  
}