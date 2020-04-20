class Tutorial {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 33;
    }

    finishTutorial() {
        return this.currentStep > this.totalSteps;
    }

    checkInteractiveStep() {
        return [6, 7, 10, 18, 19, 23].includes(this.currentStep);
    }

    checkSubmissionStep() {
        return [8, 11, 24].includes(this.currentStep);
    }

    removeDarkScreen() {
        if (document.getElementsByClassName("darken-screen")[0]) {
            document.getElementsByClassName("darken-screen")[0].classList.remove("darken-screen");
        }
    }

    addDarkScreen() {
        if (!document.getElementsByClassName("darken-screen")[0]) {
            document.getElementsByTagName("body")[0].classList.add("darken-screen");
        }
    }

    modifyScreen() {
        if(this.checkInteractiveStep() || this.checkSubmissionStep()) {
            this.removeDarkScreen();
        } else {
            this.addDarkScreen();
        }
    }

    hideAllTutorials() {
        document.getElementById(`step-${this.currentStep}`).classList.add("hidden");
        this.removeDarkScreen();
    }

    nextStep() {
        document.getElementById(`step-${this.currentStep}`).classList.add("hidden");
        this.currentStep++;

        if(this.finishTutorial()) {
            document.getElementsByTagName("body")[0].classList.remove("darken-screen");
        } else {
            document.getElementById(`step-${this.currentStep}`).classList.remove("hidden");
            this.modifyScreen();
        }

    }
}

export default Tutorial;