function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

const wrapAdjective = function(param='*') {
    return function(adjective="special") {
        return `You are ${param}${adjective}${param}!`
    }
}
//function wrapAdjective(param="*") {
//    return function(adj="special") {
//       return `You are ${param}${adj}${param}!`
//    }
//}