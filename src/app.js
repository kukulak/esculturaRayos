// const letras = [
//     'a' == 1, 'b' == 2, 'c' == 3, 'd' == 4,
//     'e' == 5, 'f' == 6, 'g' == 7, 'h' == 8,
//     'i' == 9, 'j' == 1, 'k' == 2, 'l' == 3,
//     'm' == 4, 'n' == 5, 'o' == 6, 'p' == 7,
//     'q' == 8, 'r' == 9, 's' == 1, 't' == 2,
//     'u' == 3, 'v' == 4, 'w' == 5, 'x' == 6,
//     'y' == 7, 'z' == 8, '1' == 1, '2' == 2,
//     '3' == 3, '4' == 4, '5' == 5, '6' == 6,
//     '7' == 7, '8' == 8, '9' == 9, '0' == 1
// ]

// const letras = [
//     ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
//     ['j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r'],
//     ['s', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1'],
//     ['2', '3', '4', '5', '6', '7', '8', '9', '0']
// ]


// const letras = [
    //     'a' = 1, 'b' = 2, 'c' = 3, 'd' = 4,
    //     'e' = 5, 'f' = 6, 'g' = 7, 'h' = 8,
    //     'i' = 9, 'j' = 1, 'k' = 2, 'l' = 3,
    //     'm' = 4, 'n' = 5, 'o' = 6, 'p' = 7,
    //     'q' = 8, 'r' = 9, 's' = 1, 't' = 2,
    //     'u' = 3, 'v' = 4, 'w' = 5, 'x' = 6,
    //     'y' = 7, 'z' = 8, '1' = 1, '2' = 2,
    //     '3' = 3, '4' = 4, '5' = 5, '6' = 6,
    //     '7' = 7, '8' = 8, '9' = 9, '0' = 1
    // ]
    
    
export function coordenadas(date, name, firstFull, secondFull){

    const letras = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1',
        '2', '3', '4', '5', '6', '7', '8', '9', '0',
    ]
    
    let allArray = []
    
    let finalArray = []

    let arrayName = name.split('')
    let arrayFirstFull = firstFull.split('')
    let arraySecondFull = secondFull.split('')
    let arrayDate = date.split('')
    // let reversedDate = 
    // arrayDate.reverse()

    function takeYear(){
        let year = arrayDate.slice(Math.max(arrayDate.length - 4, 1))
        let year2 = year.slice(0, 2)
        let year1 = year.slice(Math.max(year.length - 2, 1))
        let invertYear = year1.concat(year2)
        let day = arrayDate.slice(0, 2)
        let month = arrayDate.slice(2, 4)
        console.log('YEAR', invertYear)
        console.log('DAY', day)
        console.log('MONTH', month)
        let correctMonth = [...invertYear, ...month, ...day]
        arrayDate = correctMonth
    }

    takeYear()

    // console.log(arrayName)
    // console.log(arrayFirstFull)
    // console.log(arraySecondFull)
    // console.log(arrayDate)

    // comper lengths
    let numbersToComper = [arrayName.length, arrayFirstFull.length, arraySecondFull.length, arrayDate.length ]
    let bigerL = Math.max(...numbersToComper)
         

    for (let i = 0; i < bigerL; i++) {
        allArray.push(arrayDate[i])
        allArray.push(arrayFirstFull[i])
        allArray.push(arraySecondFull[i])
        allArray.push(arrayName[i])
    }

    for (let i = 0; i < allArray.length; i++) {
        finalArray.push(letras.indexOf(allArray[i])+1)
        if (finalArray[i] < 1 ){
            finalArray[i] = finalArray[i] + 2
        }
    }

    console.log(finalArray)


    for (let i = 0; i < finalArray.length; i++) {
        while (finalArray[i] > 9) {
            
            // if(finalArray[i] > 9){
            //     let numerologia = finalArray[i].toString().split('')
            //     finalArray[i] = parseInt(numerologia[0]) + parseInt(numerologia[1])
            // }


              // otherWay
          if(finalArray[i] > 9){
            let nineDivision = finalArray[i]/9
            finalArray[i] = Math.round(nineDivision)
          }



        }

        if(finalArray[i] == finalArray[i-1]){
            finalArray[i] = finalArray[i] * 2 
        }
        
    }

    

    console.log(allArray)

    console.log(finalArray)
   
    return finalArray


    // const n = 3

    // let resultArray= finalArray.reduce((r, e, i) =>
    //     (i % n ? r[r.length - 1].push(e) : r.push([e])) && r, []);

    // console.log('RESULT ARRAY', resultArray)

}

// coordenadas('christian', 'valderrama', 'gomez', '05071977')

// coordenadas('daniela', 'kelly', 'isunza', '26101986')

// coordenadas('rafael', 'valderrama', 'pedroza', '30061954')


// coordenadas('patricia', 'gomez', 'palafox', '12041951')

