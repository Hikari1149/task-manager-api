require('../src/db/mongoose')
const User = require('../src/models/user')

// 5e770f6ed8476359d47ac78f

// User.findByIdAndUpdate('5e770f6ed8476359d47ac78f',{
//     age:2,
// }).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:0})   
// }).then(count=>{
//     console.log({count})
// }).catch(e=>{
//     console.log({e})
// })


const updateAgeAndCount =  async(id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}
updateAgeAndCount('5e770f6ed8476359d47ac78f',3).then(count=>{
    console.log({count})
}).catch(e=>{
    console.log({e})
})









