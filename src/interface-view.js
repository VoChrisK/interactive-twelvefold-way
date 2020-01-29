import Interface from "./interface";
import * as Formulas from './../util/formulas';

//this class is concerned with the presentation/event handling of the interface
class InterfaceView {
    constructor(ballType, binType, rules, numPartitons, ctx) {
        this.ballType = ballType;
        this.binType = binType;
        this.rules = rules;
        this.numPartitons = numPartitons;
        this.ctx = ctx;
        this.interface = new Interface(3, 3, 100, 300);
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
        document.getElementsByClassName("submit-partition")[0].addEventListener("submit", event => {
            if (this.interface.addPartition(event, this.rules, this.ballType, this.binType)) {
                console.log(this.interface.partitions);
            } else {
                console.log("Cannot add partition!");
            }
        });
    }

    resetState() {
        this.interface.setBalls();
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