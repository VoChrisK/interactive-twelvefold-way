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

export const addEventsToButtons = (display) => {
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
            display.addToConfigurations();
            appendPartition(display);
        } else {
            document.getElementsByClassName("error-msg")[0].classList.add("pop-up");
            setTimeout(() => document.getElementsByClassName("error-msg")[0].classList.remove("pop-up"), 3000);
        }
    });
}

const appendPartition = (display) => {
    const newCanvas = document.createElement("CANVAS");
    newCanvas.classList.add("configuration")
    newCanvas.setAttribute("width", "290");
    const ctx = newCanvas.getContext("2d");
    
    let length = display.interaction.configurations.length;
    let y = scaleNewCanvas(display, ctx, newCanvas);
    display.interaction.configurations[length - 1].draw(ctx, display.moveableType, display.staticType, y);
}

const scaleNewCanvas = (display, ctx, newCanvas) => {
    const length = display.interaction.staticShapes.length;
    const history = document.getElementsByClassName("history")[0];

    if(length === 1 || length === 2) {
        newCanvas.setAttribute("height", "275");
        ctx.scale(0.5, 0.5);
        history.appendChild(newCanvas);
        return newCanvas.getBoundingClientRect().height - 150;
    } else if (length === 3) {
        newCanvas.setAttribute("height", "225");
        ctx.scale(0.4, 0.4);
        history.appendChild(newCanvas);
        return newCanvas.getBoundingClientRect().height - 100;
    } else if (length === 4) {
        newCanvas.setAttribute("height", "175");
        ctx.scale(0.3, 0.3);
        history.appendChild(newCanvas);
        return newCanvas.getBoundingClientRect().height - 50;
    } else {
        newCanvas.setAttribute("height", "125");
        ctx.scale(0.24, 0.24);
        history.appendChild(newCanvas);
        return newCanvas.getBoundingClientRect().height;
    }
};