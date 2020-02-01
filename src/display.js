import Interaction from "./interaction";
import { determineFormula } from '../util/formulas';
import Validation from './validation';

//this class is concerned with the presentation/event handling of the interface
class Display {
    constructor(moveableType, staticType, restriction, totalConfigurations, ctx) {
        this.moveableType = moveableType;
        this.staticType = staticType;
        this.restriction = restriction;
        this.totalConfigurations = totalConfigurations;
        this.ctx = ctx;
        this.validation = new Validation();
        this.validation.usesStarsAndBars(this.moveableType, this.staticType, this.restriction);
        const numMoveableShapes = document.getElementsByClassName("num-balls")[0].innerHTML;
        const numStaticShapes = document.getElementsByClassName("num-bins")[0].innerHTML;
        const moveableShapes = this.validation.setMoveableShapes(numMoveableShapes);
        const staticShapes = this.validation.setStaticShapes(numStaticShapes);
        this.interaction = new Interaction(moveableShapes, staticShapes);
    }

    addToConfigurations() {
        document.getElementsByClassName("configuration-count")[0].innerHTML = `Configurations: ${this.interaction.configurations.length}/${this.totalConfigurations}`;
    }

    //account for stars and bars later
    calculateFormula() {
        this.numPartitons = determineFormula(this.moveableType, this.staticType, this.restriction)(this.interaction.moveableShapes.length, this.interaction.staticShapes.length);
        this.addToConfigurations();
    }

    updateValues() {
        const numMoveableShapes = document.getElementsByClassName("num-balls")[0].innerHTML;
        const numStaticShapes = document.getElementsByClassName("num-bins")[0].innerHTML;
        const moveableShapes = this.validation.setMoveableShapes(numMoveableShapes);
        const staticShapes = this.validation.setStaticShapes(numStaticShapes);
        this.interaction.setMoveableShapes(moveableShapes);
        this.interaction.setStaticShapes(staticShapes);
    }

    updateCount(canvasEl) {
        let newValue;

        document.getElementById("ball-count").addEventListener("input", event => {
            event.preventDefault();
            newValue = event.target.value;
            let moveableShape;

            if(newValue > this.interaction.moveableShapes.length) {
                moveableShape = this.validation.addMoveableShape(this.interaction.moveableShapes.length);
                this.interaction.addMoveableShape(moveableShape);
            } else {
                this.interaction.removeMoveableShape();
                this.ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height);
            }
            this.calculateFormula();
            this.start();
        });

        document.getElementById("bin-count").addEventListener("input", event => {
            newValue = event.target.value;
            document.getElementsByClassName("num-bins")[0].innerHTML = event.target.value;
            let staticShape;

            if(newValue > this.interaction.staticShapes.length) {
                staticShape = this.validation.addStaticShape(this.interaction.staticShapes.length);
                this.interaction.addStaticShape(staticShape);
            } else {
                this.interaction.removeStaticShape();
                this.ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height);
            }
            this.calculateFormula();
            this.start();
        });
    }

    resetState() {
        this.interaction.setMoveableShapes(this.interaction.moveableShapes);
        this.interaction.setStaticShapes(this.interaction.staticShapes);
        const canvasEl = document.getElementById("canvas");
        this.ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height);
    }

    resetInterface() {
        this.resetState();
        this.interaction.partitions = [];
    }

    reset() {
        this.updateValues();
        this.calculateFormula();
        this.resetInterface();
        this.start();
    }

    start() {
        this.interaction.draw(this.ctx, this.moveableType, this.staticType);
    }
}

export default Display;