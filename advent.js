//--------------PROBLEMA 1---------------------------

// const gifts = ['cat', 'game', 'socks']
// const wrapped = wrapping(gifts)

// function wrapping(gifts) {
//   return gifts.map(gift =>{
//     const paper = "*".repeat(gift.length + 2)
//     return paper+'\n'+"*"+gift+"*"+'\n'+paper
//   })
// }

// console.log(wrapped)


//--------------PROBLEMA 2---------------------------

// const year = 2023
// const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

// function countHours(year, holidays) {
//   return holidays.map(holiday => {
//     const date = new Date(`${year}/${holiday}`)
//     return [1,2,3,4,5].includes(date.getDay())
//   }).reduce((acc, curr) => acc + curr) * 2
// }

// //d 0 , l 1, m 2, m 3, j 4, v 5, s 6

// console.log(countHours(2023, ['01/06', '04/01', '12/25']))


//----------------PROBLEMA 3---------------------------

// const packOfGifts = ["book", "doll", "ball"]
// const reindeers = ["dasher", "dancer"]

// // pack weights 4 + 4 + 4 = 12
// // reindeers can carry (2 * 6) + (2 * 6) = 24
// function distributeGifts(packOfGifts, reindeers) {
//     //obtener la suma de la cantidad de letras de cada regalo
//     const packWeigths = packOfGifts.join("").length
//     const MaximunRaindersWeigth = reindeers.join("").length * 2
//     return Math.floor(MaximunRaindersWeigth/packWeigths)
// }

// console.log(distributeGifts(packOfGifts, reindeers)) // 2




//----------------PROBLEMA 4---------------------------

function fitsInOneBox(boxes) {
    //comparar las medidas de cada caja y ordenarlas de mayor a menorr
    return boxes.sort((a,b) =>{
        return (b.l , b.w , b.h)-(a.l , a.w , a.h)
    //cumplir la condicion
    }).slice(1).every((box,i) => {
        return box.l < boxes[i].l && box.w < boxes[i].w && box.h < boxes[i].h
    })
}

console.log(fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 3, h: 3 }
]) 
)// true

//----------------PROBLEMA 5---------------------------

//----------------PROBLEMA 6---------------------------

//----------------PROBLEMA 7---------------------------

//----------------PROBLEMA 8---------------------------

