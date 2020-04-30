let scores = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true
    },

    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true
    },

    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false
    },

    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true
    }
];
// console.log(scores);

//2. Declare a function named addScore

let addScore = (array, newName, newScore, newDate) => {
    let newStudent = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60
    }
    array.push(newStudent)
};
addScore(scores, "Danielle", 85, "2020-04-10");


//3. Declare a function named deleteScoreByIndex
//(where,how many)

let deleteScoreByIndex = (array, index) => {
    //use splice to delete an object?
    array.splice(index, 1);
};
// deleteScoreByIndex(scores, 1);
// console.log(scores);

//4.Declare a function deleteScoreByName

function deleteScoreByName = (array, name) {
    let indexToRemove = array.findIndex((scoreElement) => {
        return scoreElement.name === name;
    });
    array.splice(indexToRemove, 1);
};
deleteScoreByName("Joe", scores);
console.log(scores);

//5. Declare a function named editScore

const editScore = (array, index, score) => {
    let passed = null;
    if (score <= 60) {
        passed === true;
    } else {
        passed === false;
    }
    array[index].score = score
    array[index].passed = passed;

};

// editScore(scores, 0, 40);
// console.log(scores);

//practice stuff
// let human ={
//     name : "bob",
//     age : 6,
// };

// human.age = 7;

//6. 
const findScoreByName = (array, name) => {
    return array.find((person) => {
        return person.name === name
    });
};
//call back , findScoreByName finds the object

//7. Declare a function named findLowestScore
const findLowestScore = (array) => {
    let currentLowestScore = [0];
    array.forEach((element => {
        if (element.score < currentLowestScore.score) {
            currentLowestScore = element;
        }
    });
    return currentLowestScore;
}
console.log(findLowestScore(scores));

//8. Declare a function named findAverageQUizScore
const findAverageQuizScore = (array) => {
    let currentScores = 0;
    for (let obj of array) {
        currentScores += obj.score;
    }
    return currentScores / array.length;
};
console.log(findAverageQuizScore(scores));

//9. Declare a function named filterScores
const filterScores = (array, property, value) => {
    return array.filter((obj) => {
        return obj[property] === value;

    });
};
console.log(filterScores(scores, "name", "Joe")) //skipped

// 10. Declare a functionnamed sortScoresAsc
const sortScoresAsc = (array) => {
    return array.sort();

}