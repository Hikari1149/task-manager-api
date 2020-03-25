require('../src/db/mongoose')
const Task = require('../src/models/task')


// Task.findByIdAndDelete('5e7711c06bff755ad34c0f8d')
// .then(res=>{
//     return Task.countDocuments({completed:false})
// }).then(count=>{
//     console.log({count})
// }).catch(e=>{
//     console.log(e)
// })


const deleteTaskAndCount = async (id)=>{
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}
deleteTaskAndCount(`5e77800bc2b41264d7bcc154`).then(count=>{
    console.log({count})
}).catch(e=>{
    console.log({e})
})