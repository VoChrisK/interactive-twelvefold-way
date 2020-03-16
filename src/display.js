import Interaction from "./interaction";
import { determineFormula } from '../util/formulas';
import Distribution from './distribution';

//this class is concerned with the presentation/event handling of the interface
class Display {
    constructor(moveableType, staticType, restriction, totalConfigurations, ctx) {
        this.moveableType = moveableType;
        this.staticType = staticType;
        this.restriction = restriction;
        this.totalConfigurations = totalConfigurations;
        this.ctx = ctx;
        this.distribution = new Distribution();
        this.distribution.usesStarsAndBars(this.moveableType, this.staticType, this.restriction);
        const numMoveableShapes = document.getElementsByClassName("num-balls")[0].innerHTML;
        const numStaticShapes = document.getElementsByClassName("num-bins")[0].innerHTML;
        const moveableShapes = this.distribution.setMoveableShapes(numMoveableShapes);
        const staticShapes = this.distribution.setStaticShapes(numStaticShapes);
        this.interaction = new Interaction(moveableShapes, staticShapes);
    }

    addToConfigurations() {
        document.getElementsByClassName("configuration-count")[0].innerHTML = `Configurations: ${this.interaction.configurations.length}/${this.totalConfigurations}`;
    }

    //account for stars and bars later
    calculateFormula() {
        this.totalConfigurations = determineFormula(this.moveableType, this.staticType, this.restriction)(this.interaction.moveableShapes.length, this.interaction.staticShapes.length);
        this.addToConfigurations();
    }

    updateValues() {
        const numMoveableShapes = document.getElementsByClassName("num-balls")[0].innerHTML;
        const numStaticShapes = document.getElementsByClassName("num-bins")[0].innerHTML;
        const moveableShapes = this.distribution.setMoveableShapes(numMoveableShapes);
        const staticShapes = this.distribution.setStaticShapes(numStaticShapes);
        this.interaction.setMoveableShapes(moveableShapes);
        this.interaction.setStaticShapes(staticShapes);
    }

    updateCount(canvasEl) {
        let newValue;

        document.getElementById("ball-count").addEventListener("input", event => {
            event.preventDefault();
            newValue = event.target.value;
            document.getElementsByClassName("num-balls")[0].innerHTML = newValue;
            if (this.distribution.starsAndBars) document.getElementsByClassName("num-balls")[0].innerHTML -= 1;
            let moveableShape;

            if(newValue > this.interaction.moveableShapes.length) {
                moveableShape = this.distribution.addMoveableShape(this.interaction.moveableShapes.length);
                this.interaction.addMoveableShape(moveableShape);
            } else {
                this.interaction.removeMoveableShape();
                this.ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height);
            }

            this.clearConfigurations();
            this.calculateFormula();
            this.interaction.configurations = [];
            this.addToConfigurations();
            this.start();
        });

        document.getElementById("bin-count").addEventListener("input", event => {
            newValue = event.target.value;
            document.getElementsByClassName("num-bins")[0].innerHTML = newValue;
            let staticShape;
            let length = this.interaction.staticShapes.length;

            if(this.distribution.starsAndBars) length -= 1;

            if(newValue > length) {
                staticShape = this.distribution.addStaticShape(this.interaction.staticShapes.length);
                this.interaction.addStaticShape(staticShape);
            } else {
                this.interaction.removeStaticShape();
                this.ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height);
            }

            this.clearConfigurations();
            this.calculateFormula();
            this.interaction.configurations = [];
            this.addToConfigurations();
            this.start();
        });
    }

    resetState() {
        this.updateValues();
        const canvasEl = document.getElementById("canvas");
        this.ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height);
    }

    resetInterface() {
        this.resetState();
        this.interaction.configurations = [];
        this.addToConfigurations();
        this.clearConfigurations();
    }

    restart() {
        this.changeDisplay();
        this.calculateFormula();
        this.resetInterface();
        this.start();
    }

    clearConfigurations() {
        const configurations = document.getElementsByClassName("configuration");
        for(let i = configurations.length - 1; i >= 0; i--) {
            configurations[i].remove();
        }
    }

    changeDisplay() {
        if (this.distribution.starsAndBars !== this.distribution.usesStarsAndBars(this.moveableType, this.staticType, this.restriction)) {
            this.distribution.starsAndBars = this.distribution.usesStarsAndBars(this.moveableType, this.staticType, this.restriction);
            this.distribution.setUp();
            this.distribution.updateDisplayCount(this.interaction.moveableShapes.length);
            this.updateValues();
            this.distribution.changeLabels();
        }
    }

    start() {
        this.interaction.draw(this.ctx, this.moveableType, this.staticType);
    }
}

export default Display;