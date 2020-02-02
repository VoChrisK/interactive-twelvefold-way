export const addEventsToCases = (display) => {
    let case1 = document.getElementsByClassName("dd");
    let case2 = document.getElementsByClassName("di");
    let case3 = document.getElementsByClassName("id");
    let case4 = document.getElementsByClassName("ii");

    for (let i = 0; i < case1.length; i++) {
        case1[i].addEventListener("click", event => {
            display.moveableType = "distinguishable";
            display.staticType = "distinguishable";
            display.restart();
        });

        case2[i].addEventListener("click", event => {
            display.moveableType = "distinguishable";
            display.staticType = "indistinguishable";
            display.restart();
        });

        case3[i].addEventListener("click", event => {
            display.moveableType = "indistinguishable";
            display.staticType = "distinguishable";
            display.restart();
        });

        case4[i].addEventListener("click", event => {
            display.moveableType = "indistinguishable";
            display.staticType = "indistinguishable";
            display.restart();
        });
    }
}

export const addEventsToRules = (display) => {
    let rule1 = document.getElementsByClassName("unr");
    let rule2 = document.getElementsByClassName("inj");
    let rule3 = document.getElementsByClassName("sur");

    for (let i = 0; i < rule1.length; i++) {
        rule1[i].addEventListener("click", event => {
            display.restriction = "unrestricted";
        })
        rule2[i].addEventListener("click", event => {
            display.restriction = "injective";
        })
        rule3[i].addEventListener("click", event => {
            display.restriction = "surjective";
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
            console.log("Cannot add partition!");
        }
    });
}

const appendPartition = (display) => {
    const newCanvas = document.createElement("CANVAS");
    newCanvas.classList.add("configuration")
    newCanvas.setAttribute("width", "300");
    newCanvas.setAttribute("height", "200");
    const ctx = newCanvas.getContext("2d");
    // scaleNewCanvas(display, ctx);
    ctx.scale(0.4, 0.4); 
    
    const history = document.getElementsByClassName("history")[0];
    
    let length = display.interaction.configurations.length;
    history.appendChild(newCanvas);
    let y = newCanvas.getBoundingClientRect().y;
    console.log(newCanvas.getBoundingClientRect());
    display.interaction.configurations[length - 1].draw(ctx, display.moveableType, display.staticType, y);
    // display.interaction.configurations.forEach(configuration => configuration.draw(ctx, display.staticType));
}

const scaleNewCanvas = (display, ctx) => {
    const length = display.interaction.staticShapes.length;

    if (length === 3) {
        ctx.scale(0.3, 0.3);
    } else if (length === 4) {
        ctx.scale(0.3, 0.3);
    } else {
        ctx.scale(0.25, 0.25);
    }
};