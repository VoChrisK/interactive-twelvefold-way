class Tutorial {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 26;
    }

    finishTutorial() {
        return this.currentStep > this.totalSteps;
    }

    checkInteractiveStep() {
        return [5, 6, 10, 18, 19].includes(this.currentStep);
    }

    checkSubmissionStep() {
        return [8, 11].includes(this.currentStep);
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
        document.getElementById(`step-${this.currentStep}`).classList.remove("hidden");
        this.modifyScreen();
    }
}

export default Tutorial;