function BoardMember (name, homeState, training) {
  this.name = name,
  this.homeState = homeState,
  this.training = training;
  
  BoardMember.prototype.veto = () => {
    return "No, I must disagree"
  }
  BoardMember.prototype.approve = () => "You can do that!"
  BoardMember.prototype.doCharity = () => "I like to help people."
}