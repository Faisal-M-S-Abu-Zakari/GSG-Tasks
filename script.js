//  Second Task :
const points =[20 , 50 , 80 , 90 , 70]
const sum = (arr)=>{
    return arr.reduce( (acc,value) => acc+value , 0 )
}
const avg = (sum(points)/points.length)
console.log(sum(points))
console.log(avg)

// Third Task :
const RemoveSimilar=(arr)=>{
    let set = new Set(arr)
    return Array.from(set)
}
const students = [
    'Faisal', 'Ahmed','Mohammed','Faisal','Ahmed',5,'Faisal','Ahmed','Mohammed',2,'Ahmed','Mohammed','Faisal',5,'Mohammed','Faisal','Ahmed','Mohammed',6,6,'Mohammed'
]

console.log(RemoveSimilar(students))