export const addEventsToCases = (display) => {
    let case1 = document.getElementsByClassName("dd");
    let case2 = document.getElementsByClassName("di");
    let case3 = document.getElementsByClassName("id");
    let case4 = document.getElementsByClassName("ii");

    for (let i = 0; i < case1.length; i++) {
        case1[i].addEventListener("click", event => {
            display.moveableType = "distinguishable";
            display.staticType = "distinguishable";
            display.reset();
        });

        case2[i].addEventListener("click", event => {
            display.moveableType = "distinguishable";
            display.staticType = "indistinguishable";
            display.reset();
        });

        case3[i].addEventListener("click", event => {
            display.moveableType = "indistinguishable";
            display.staticType = "distinguishable";
            display.reset();
        });

        case4[i].addEventListener("click", event => {
            display.moveableType = "indistinguishable";
            display.staticType = "indistinguishable";
            display.reset();
        });
    }
}

export const addEventsToRules = (display) => {
    let rule1 = document.getElementsByClassName("unr");
    let rule2 = document.getElementsByClassName("inj");
    let rule3 = document.getElementsByClassName("sur");

    for (let i = 0; i < rule1.length; i++) {
        rule1[i].addEventListener("click", event => {
            // if (display.usesStarsAndBars()) {
            //     document.getElementsByClassName("num-balls")[0].innerHTML = parseInt(document.getElementsByClassName("num-balls")[0].innerHTML) + 1;
            // }
            display.restriction = "unrestricted";
        })
        rule2[i].addEventListener("click", event => {
            // if (display.usesStarsAndBars()) {
            //     document.getElementsByClassName("num-balls")[0].innerHTML = parseInt(document.getElementsByClassName("num-balls")[0].innerHTML) + 1;
            // }
            display.restriction = "injective";
        })
        rule3[i].addEventListener("click", event => {
            // if (display.usesStarsAndBars()) {
            //     document.getElementsByClassName("num-balls")[0].innerHTML = parseInt(document.getElementsByClassName("num-balls")[0].innerHTML) + 1;
            // }
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
        if(display.usesStarsAndBars()) {
            if(display.interfaceAlt.addPartition(event, display.rules)) {
                display.currentPartitions++;
                display.addToConfigurations();
            } else {
                console.log("Cannot add partition!");
            }
        } else {
            if (display.interface.addPartition(event, display.rules, display.ballType, display.binType)) {
                display.currentPartitions++;
                display.addToConfigurations();
                // appendPartition(interfaceView);
            } else {
                console.log("Cannot add partition!");
            }
        }
    });
}

const appendPartition = (interfaceView) => {
    const newCanvas = document.createElement("CANVAS");
    newCanvas.setAttribute("width", "1000");
    newCanvas.setAttribute("height", "1000");
    const ctx = newCanvas.getContext("2d");
    const history = document.getElementsByClassName("history")[0];

    history.appendChild(newCanvas);
    interfaceView.interface.partitions.forEach(partition => partition.draw(ctx, interfaceView.interface.balls, interfaceView.binType));
}