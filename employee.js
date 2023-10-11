function Employee(title) {
   this.title = title;
   this.setTitle = function(tE) {
       this.title = tE;
   }
   this.getTitle = function() {
       return this.title;
   }
}

Employee.prototype.setTitle = function(tE) {
   this.title = tE;
}

Employee.prototype.getTitle = function(tE) {
   return this.title;
}

function Engineer(title, isManager) {
   Employee.call(this, title);
   this.isManager = isManager;
   this.setIsManager = function(isM) {
       this.isManager = isM;
   }
   this.getIsManager = function() {
       return this.isManager;
   }
}

Engineer.prototype.setIsManager = function(tE) {
   this.isManager = tE;
}

Engineer.prototype.getIsManager = function() {
   return this.isManager;
}