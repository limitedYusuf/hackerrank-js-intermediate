class ParkingLot {
   slots = [];
   constructor(slots) {
     for(let i=0; i<slots; i++) {
      this.slots.push(null);
     }
   }

   park(carId) {
      console.log(this.slots);
      const unOccupiedIndex = this.slots.findIndex(i => i === null);
      if(unOccupiedIndex == -1) {
         return false;
      }
      this.slots[unOccupiedIndex] = carId;
      return true;
   }

   getSlots() {
      return this.slots;
   }

   remove(carId) {
      const carIndex = this.slots.findIndex(i => i === carId);
      if(carIndex !== -1) {
         this.slots[carIndex] = null;
         return true;
      }
      return false;
   }
 }
 