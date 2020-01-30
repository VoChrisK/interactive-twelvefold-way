import Interface from "./interface";
import * as Formulas from './../util/formulas';

//this class is concerned with the presentation/event handling of the interface
class InterfaceView {
    constructor(ballType, binType, rules, numPartitons, ctx) {
        this.ballType = ballType;
        this.binType = binType;
        this.rules = rules;
        this.currentPartitions = 0;
        this.numPartitons = numPartitons;
        this.ctx = ctx;
        this.interface = new Interface(3, 3, [100, 50], [245, 440]);
    }

    addEventsToCases() {
        let case1 = document.getElementsByClassName("dd");
        let case2 = document.getElementsByClassName("di");
        let case3 = document.getElementsByClassName("id");
        let case4 = document.getElementsByClassName("ii");

        for(let i = 0; i < case1.length; i++) {
            case1[i].addEventListener("click", event => {
                this.ballType = "distinguishable";
                this.binType = "distinguishable";
                this.resetInterface();
                this.start();
            });

            case2[i].addEventListener("click", event => {
                this.ballType = "distinguishable";
                this.binType = "indistinguishable";
                this.resetInterface();
                this.start();
            });

            case3[i].addEventListener("click", event => {
                this.ballType = "indistinguishable";
                this.binType = "distinguishable";
                this.resetInterface();
                this.start();
            });

            case4[i].addEventListener("click", event => {
                this.ballType = "indistinguishable";
                this.binType = "indistinguishable";
                this.resetInterface();
                this.start();
            });
        }
    }

    addEventsToRules() {
        let rule1 = document.getElementsByClassName("unr");
        let rule2 = document.getElementsByClassName("inj");
        let rule3 = document.getElementsByClassName("sur");

        for(let i = 0; i < rule1.length; i++) {
            rule1[i].addEventListener("click", event => {
                this.rules = "unrestricted";
            })
            rule2[i].addEventListener("click", event => {
                this.rules = "injective";
            })
            rule3[i].addEventListener("click", event => {
                this.rules = "surjective";
            })
        }
    }

    addEventsToButtons() {
        document.getElementsByClassName("reset-state")[0].addEventListener("click", event => {
            this.resetState();
            this.start();
        });
        
        document.getElementsByClassName("reset-problem")[0].addEventListener("click", event => {
            this.resetInterface();
            this.start();
        });

        document.getElementsByClassName("submit-config")[0].addEventListener("submit", event => {
            if (this.interface.addPartition(event, this.rules, this.ballType, this.binType)) {
                this.currentPartitions++;
                this.addToConfigurations();
            } else {
                console.log("Cannot add partition!");
            }
        });
    }

    addToConfigurations() {
        document.getElementsByClassName("configuration-count")[0].innerHTML = `Configurations: ${this.currentPartitions}/${this.numPartitons}`;
    }

    updateCount(canvasEl) {
        let newValue;

        document.getElementById("ball-count").addEventListener("input", event => {
            event.preventDefault();
            newValue = event.target.value;
            document.getElementsByClassName("num-balls")[0].innerHTML = event.target.value;
            if(newValue > this.interface.balls.length) {
                this.interface.addBall();
            } else {
                this.interface.removeBall();
                this.ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height);
            }
            this.start();
        });

        document.getElementById("bin-count").addEventListener("input", event => {
            newValue = event.target.value;
            document.getElementsByClassName("num-bins")[0].innerHTML = event.target.value;
            if (newValue > this.interface.bins.length) {
                this.interface.addBin();
            } else {
                this.interface.removeBin();
                this.ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height);
            }
            this.start();
            console.log(this.interface.bins.length);
        });
    }

    resetState() {
        this.interface.setBalls(this.interface.balls.length);
        this.interface.setBins(this.interface.bins.length);
        const canvasEl = document.getElementById("canvas");
        this.ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height);
    }

    resetInterface() {
        this.resetState();
        this.interface.partitions = [];
    }

    start() {
        this.interface.draw(this.ctx, this.ballType, this.binType);
    }
}

export default InterfaceView;