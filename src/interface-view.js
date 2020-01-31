import Interface from "./interface";
import { determineFormula } from './../util/formulas';
import InterfaceAlt from "./interface-alt";

//this class is concerned with the presentation/event handling of the interface
class InterfaceView {
    constructor(ballType, binType, rules, numPartitons, ctx) {
        this.ballType = ballType;
        this.binType = binType;
        this.rules = rules;
        this.currentPartitions = 0;
        this.numPartitons = numPartitons;
        this.ctx = ctx;
        this.interface = new Interface(document.getElementsByClassName("num-balls")[0].innerHTML, document.getElementsByClassName("num-bins")[0].innerHTML, [100, 50], [245, 440]);
        this.interfaceAlt = new InterfaceAlt(document.getElementsByClassName("num-balls")[0].innerHTML, document.getElementsByClassName("num-bins")[0].innerHTML, [133, 400], [100, 200]);
    }

    addToConfigurations() {
        document.getElementsByClassName("configuration-count")[0].innerHTML = `Configurations: ${this.currentPartitions}/${this.numPartitons}`;
    }

    usesStarsAndBars() {
        return this.ballType === "indistinguishable" && this.binType === "distinguishable" && (this.rules === "unrestricted" || this.rules === "surjective");
    }

    calculateFormula() {
        if(this.usesStarsAndBars()) {
            this.numPartitons = determineFormula(this.ballType, this.binType, this.rules)(this.interfaceAlt.bars.length + 1, this.interfaceAlt.stars.length);
        } else {
            this.numPartitons = determineFormula(this.ballType, this.binType, this.rules)(this.interface.balls.length, this.interface.bins.length);
        }
        this.currentPartitions = 0;
        this.addToConfigurations();
    }

    changeLabels() {
        let ballLabel = document.getElementById("ball-label-header");
        let binLabel = document.getElementById("bin-label-header");

        if(this.usesStarsAndBars()) {
            ballLabel.innerText = "Bars";
        } else {
            ballLabel.innerText = "Balls";
        }

        if(this.usesStarsAndBars()) {
            binLabel.innerText = "Stars";
        } else {
            binLabel.innerText = "Bins";
        }
    }

    updateValues() {
        if(this.usesStarsAndBars()) {
            this.interfaceAlt.setBars(document.getElementsByClassName("num-balls")[0].innerHTML - 1);
            this.interfaceAlt.setStars(document.getElementsByClassName("num-bins")[0].innerHTML);
        } else {
            this.interface.setBalls(document.getElementsByClassName("num-balls")[0].innerHTML);
            this.interface.setBins(document.getElementsByClassName("num-bins")[0].innerHTML);
        }
    }

    updateAmount(value) {
        if (this.usesStarsAndBars()) {
            document.getElementsByClassName("num-balls")[0].innerHTML = value - 1;
        } else {
            document.getElementsByClassName("num-balls")[0].innerHTML = value;
        }
    }

    updateCount(canvasEl) {
        let newValue;

        document.getElementById("ball-count").addEventListener("input", event => {
            event.preventDefault();
            newValue = event.target.value;
            this.updateAmount(parseInt(newValue));

            if (this.usesStarsAndBars()) {
                if (newValue > this.interfaceAlt.bars.length) {
                    this.interfaceAlt.addBar();
                } else {
                    this.interfaceAlt.removeBar();
                    this.ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height);
                }
                this.calculateFormula();
                this.startAlt();
            } else {
                if (newValue > this.interface.balls.length) {
                    this.interface.addBall();
                } else {
                    this.interface.removeBall();
                    this.ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height);
                }
                this.calculateFormula();
                this.start();
            }
        });

        document.getElementById("bin-count").addEventListener("input", event => {
            newValue = event.target.value;
            document.getElementsByClassName("num-bins")[0].innerHTML = event.target.value;
            if(this.usesStarsAndBars()) {
                if(newValue > this.interfaceAlt.stars.length) {
                    this.interfaceAlt.addStar();
                } else {
                    this.interfaceAlt.removeStar();
                    this.ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height); 
                }
                this.calculateFormula();
                this.startAlt();
            } else {
                if (newValue > this.interface.bins.length) {
                    this.interface.addBin();
                } else {
                    this.interface.removeBin();
                    this.ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height);
                }
                this.calculateFormula();
                this.start();
            }
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
        this.currentPartitions = 0;
    }

    reset() {
        this.updateValues();
        this.calculateFormula();
        this.resetInterface();
        this.changeLabels();
        if (this.usesStarsAndBars()) {
            document.getElementsByClassName("num-balls")[0].innerHTML = this.interfaceAlt.bars.length;
            this.startAlt();
        } else {
            this.start();
        }
    }

    start() {
        this.interface.draw(this.ctx, this.ballType, this.binType);
    }

    startAlt() {
        this.interfaceAlt.draw(this.ctx);
    }
}

export default InterfaceView;