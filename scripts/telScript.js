const appInstance = {
	data() {
		return {
			power: false,
			imageName: ["./assets/zebra.gif", "./assets/cartoonDancing.gif", "./assets/storm.gif", "./assets/food.gif"],
			progCounter: 0
		}
	},
	methods: {
		switchTelevision: function() {
			console.log("Current tv status: ", this.power);
			this.power = !this.power;
			console.log(this.power);
		},
		switchUpChannel(){
			if(this.power == true){
				this.progCounter = this.progCounter + 1
				console.log(this.progCounter)
				if(this.progCounter >= this.imageName.length){
					this.progCounter = 0
				}
			}
		},
		switchDownChannel(){
			if(this.power == true){
				this.progCounter = this.progCounter - 1
				console.log(this.progCounter)
				if(this.progCounter < 0){
					this.progCounter = this.imageName.length - 1
				}
			}
		}
	}
}

Vue.createApp(appInstance).mount("#app");