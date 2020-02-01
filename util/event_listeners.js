export const addEventsToCases = (interfaceView) => {
    let case1 = document.getElementsByClassName("dd");
    let case2 = document.getElementsByClassName("di");
    let case3 = document.getElementsByClassName("id");
    let case4 = document.getElementsByClassName("ii");

    for (let i = 0; i < case1.length; i++) {
        case1[i].addEventListener("click", event => {
            interfaceView.ballType = "distinguishable";
            interfaceView.binType = "distinguishable";
            interfaceView.reset();
        });

        case2[i].addEventListener("click", event => {
            interfaceView.ballType = "distinguishable";
            interfaceView.binType = "indistinguishable";
            interfaceView.reset();
        });

        case3[i].addEventListener("click", event => {
            interfaceView.ballType = "indistinguishable";
            interfaceView.binType = "distinguishable";
            interfaceView.reset();
        });

        case4[i].addEventListener("click", event => {
            interfaceView.ballType = "indistinguishable";
            interfaceView.binType = "indistinguishable";
            interfaceView.reset();
        });
    }
}

export const addEventsToRules = (interfaceView) => {
    let rule1 = document.getElementsByClassName("unr");
    let rule2 = document.getElementsByClassName("inj");
    let rule3 = document.getElementsByClassName("sur");

    for (let i = 0; i < rule1.length; i++) {
        rule1[i].addEventListener("click", event => {
            if (interfaceView.usesStarsAndBars()) {
                document.getElementsByClassName("num-balls")[0].innerHTML = parseInt(document.getElementsByClassName("num-balls")[0].innerHTML) + 1;
            }
            interfaceView.rules = "unrestricted";
        })
        rule2[i].addEventListener("click", event => {
            if (interfaceView.usesStarsAndBars()) {
                document.getElementsByClassName("num-balls")[0].innerHTML = parseInt(document.getElementsByClassName("num-balls")[0].innerHTML) + 1;
            }
            interfaceView.rules = "injective";
        })
        rule3[i].addEventListener("click", event => {
            if (interfaceView.usesStarsAndBars()) {
                document.getElementsByClassName("num-balls")[0].innerHTML = parseInt(document.getElementsByClassName("num-balls")[0].innerHTML) + 1;
            }
            interfaceView.rules = "surjective";
        })
    }
}

export const addEventsToButtons = (interfaceView) => {
    document.getElementsByClassName("reset-state")[0].addEventListener("click", event => {
        interfaceView.resetState();
        interfaceView.start();
    });

    document.getElementsByClassName("reset-problem")[0].addEventListener("click", event => {
        interfaceView.resetInterface();
        interfaceView.addToConfigurations();
        interfaceView.start();
    });

    document.getElementsByClassName("submit-config")[0].addEventListener("submit", event => {
        if(interfaceView.usesStarsAndBars()) {
            if(interfaceView.interfaceAlt.addPartition(event, interfaceView.rules)) {
                interfaceView.currentPartitions++;
                interfaceView.addToConfigurations();
            } else {
                console.log("Cannot add partition!");
            }
        } else {
            if (interfaceView.interface.addPartition(event, interfaceView.rules, interfaceView.ballType, interfaceView.binType)) {
                interfaceView.currentPartitions++;
                interfaceView.addToConfigurations();
            } else {
                console.log("Cannot add partition!");
            }
        }
    });
}