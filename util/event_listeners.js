import { findDDUConfiguration } from './../util/search_configuration';

export const addEventsToCases = (display) => {
    let case1 = document.getElementsByClassName("dd");
    let case2 = document.getElementsByClassName("di");
    let case3 = document.getElementsByClassName("id");
    let case4 = document.getElementsByClassName("ii");
    const moveableType = document.getElementsByClassName("moveable-type")[0];
    const staticType = document.getElementsByClassName("static-type")[0];

    for (let i = 0; i < case1.length; i++) {
        case1[i].addEventListener("click", event => {
            display.moveableType = "distinguishable";
            display.staticType = "distinguishable";
            moveableType.innerHTML = "Ball/Bar type: Distinguishable";
            staticType.innerHTML = "Bin/Star type: Distinguishable";
            display.restart();
        });

        case2[i].addEventListener("click", event => {
            display.moveableType = "distinguishable";
            display.staticType = "indistinguishable";
            moveableType.innerHTML = "Ball/Bar type: Distinguishable";
            staticType.innerHTML = "Bin/Star type: Indistinguishable";
            display.restart();
        });

        case3[i].addEventListener("click", event => {
            display.moveableType = "indistinguishable";
            display.staticType = "distinguishable";
            moveableType.innerHTML = "Ball/Bar type: Indistinguishable";
            staticType.innerHTML = "Bin/Star type: Distinguishable";
            display.restart();
        });

        case4[i].addEventListener("click", event => {
            display.moveableType = "indistinguishable";
            display.staticType = "indistinguishable";
            moveableType.innerHTML = "Ball/Bar type: Indistinguishable";
            staticType.innerHTML = "Bin/Star type: Indistinguishable";
            display.restart();
        });
    }
}

export const addEventsToRules = (display) => {
    let rule1 = document.getElementsByClassName("unr");
    let rule2 = document.getElementsByClassName("inj");
    let rule3 = document.getElementsByClassName("sur");
    const restriction = document.getElementsByClassName("restriction")[0];

    for (let i = 0; i < rule1.length; i++) {
        rule1[i].addEventListener("click", event => {
            display.restriction = "unrestricted";
            restriction.innerHTML = "Restriction: Unrestricted";
        })
        rule2[i].addEventListener("click", event => {
            display.restriction = "injective";
            restriction.innerHTML = "Restriction: Injective";
        })
        rule3[i].addEventListener("click", event => {
            display.restriction = "surjective";
            restriction.innerHTML = "Restriction: Surjective";
        })
    }
}

export const addEventsToButtons = (display, tutorial) => {
    document.getElementsByClassName("reset-state")[0].addEventListener("click", event => {
        display.resetState();
        display.start();
    });

    document.getElementsByClassName("reset-problem")[0].addEventListener("click", event => {
        display.resetInterface();
        display.addToConfigurations();
        display.start();
    });

    document.getElementsByClassName("submit-config")[0].addEventListener("submit", event => {
        if (display.interaction.addConfiguration(event, display.restriction, display.moveableType, display.staticType, display.distribution.starsAndBars)) {
            if(tutorial.checkSubmissionStep()) {
                tutorial.nextStep();
            }
            display.addToConfigurations();
            appendPartition(display);
            checkCompletion(display, tutorial);
        } else {
            document.getElementsByClassName("error-msg")[0].classList.add("pop-up");
            setTimeout(() => document.getElementsByClassName("error-msg")[0].classList.remove("pop-up"), 3000);
        }
    });

    document.getElementsByClassName("choose")[0].addEventListener("click", event => {
        event.stopImmediatePropagation();
        removeFadeIn();
        display.resetInterface();
        display.addToConfigurations();
        display.start();
    });

    document.getElementsByClassName("choose")[1].addEventListener("click", event => {
        removeFadeIn();
        document.getElementById("formulas").scrollIntoView();
    });

    // document.getElementsByClassName("show-solution")[0].addEventListener("click", event => {
    //     let binsArray = [];
    //     for(let i = 0; i < display.interaction.staticShapes.length; i++) {
    //         binsArray.push([]);
    //     }
    //     console.log(findDDUConfiguration(display.interaction.moveableShapes, display.interaction.staticShapes.length, binsArray));
    // })
}

const checkCompletion = (display, tutorial) => {
    if (display.interaction.configurations.length === display.totalConfigurations) {
        tutorial.nextStep();
        document.getElementsByClassName("submit")[0].setAttribute("disabled", "true");
        document.getElementsByClassName("submit")[0].classList.add("not-allowed");
        document.getElementsByClassName("all-configurations")[0].classList.add("fade-in");
        setTimeout(() => document.getElementsByClassName("try-again")[0].classList.add("fade-in"), 2000);
        setTimeout(() => document.getElementsByClassName("choose")[0].classList.add("fade-in"), 4000);
        setTimeout(() => document.getElementsByClassName("choose")[1].classList.add("fade-in"), 4000);
    }
};

const removeFadeIn = () => {
    document.getElementsByClassName("submit")[0].removeAttribute("disabled");
    document.getElementsByClassName("submit")[0].classList.remove("not-allowed");
    document.getElementsByClassName("all-configurations")[0].classList.remove("fade-in");
    document.getElementsByClassName("try-again")[0].classList.remove("fade-in");
    document.getElementsByClassName("choose")[0].classList.remove("fade-in");
    document.getElementsByClassName("choose")[1].classList.remove("fade-in");
}

const appendPartition = (display) => {
    const newCanvas = document.createElement("CANVAS");
    newCanvas.classList.add("configuration");
    let subtractHeight = 0;

    if(window.innerWidth <= 1500) {
        newCanvas.setAttribute("width", "190");
        subtractHeight = 51;
    } else if (window.innerWidth > 1500 && window.innerWidth <= 1850) {
        newCanvas.setAttribute("width", "216");
        subtractHeight = 40;
    } else {
        newCanvas.setAttribute("width", "290");
    }
    const ctx = newCanvas.getContext("2d");
    
    let length = display.interaction.configurations.length;
    let y = scaleNewCanvas(display, ctx, newCanvas, subtractHeight);
    display.interaction.configurations[length - 1].draw(ctx, display.moveableType, display.staticType, y);
    document.getElementsByClassName("history")[0].scrollTop = document.getElementsByClassName("history")[0].lastChild.offsetTop;
}

const scaleNewCanvas = (display, ctx, newCanvas, subtractHeight) => {
    const length = display.interaction.staticShapes.length;
    const history = document.getElementsByClassName("history")[0];
    let height;

    if(length === 1 || length === 2) {
        height = 275 - subtractHeight;
        newCanvas.setAttribute("height", height);
        ctx.scale(0.5, 0.5);
        history.appendChild(newCanvas);
        return newCanvas.getBoundingClientRect().height - 150;
    } else if (length === 3) {
        height = 225 - subtractHeight;
        newCanvas.setAttribute("height", height);
        ctx.scale(0.4, 0.4);
        history.appendChild(newCanvas);
        return newCanvas.getBoundingClientRect().height - 100;
    } else if (length === 4) {
        height = 175 - subtractHeight;
        newCanvas.setAttribute("height", height);
        ctx.scale(0.3, 0.3);
        history.appendChild(newCanvas);
        return newCanvas.getBoundingClientRect().height - 50;
    } else {
        height = 125 - subtractHeight;
        newCanvas.setAttribute("height", height);
        ctx.scale(0.24, 0.24);
        history.appendChild(newCanvas);
        return newCanvas.getBoundingClientRect().height;
    }
};