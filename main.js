const states = [
    {
        id: 1,
        name: "Illinois"
    },
    {
        id: 2,
        name: "Tennessee"
    },
    {
        id: 3,
        name: "California"
    },
    {
        id: 4,
        name: "Minnesota"
    },
    {
        id: 5,
        name: "Florida"
    }
];

const cities = [
    {
        id: 1,
        name: "Chicago",
        stateId: 1
    },
    {
        id: 2,
        name: "Nashville",
        stateId: 2
    },
    {
        id: 3,
        name: "Los Angeles",
        stateId: 3
    },
    {
        id: 4,
        name: "Minneapolis",
        stateId: 4
    },
    {
        id: 5,
        name: "Memphis",
        stateId: 2
    },
    {
        id: 6,
        name: "Champaign",
        stateId: 1
    },
    {
        id: 7,
        name: "San Franscisco",
        stateId: 3
    },
    {
        id: 8,
        name: "Knoxville",
        stateId: 2
    },
    {
        id: 9,
        name: "Orlando",
        stateId: 5
    },
];

for (const city of cities) {
    for (const state of states) {
        if (city.stateId === state.id) {
            console.log(`${city.name} is located in ${state.name}.`)
        }
    }
};