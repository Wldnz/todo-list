// const { count } = require("console")

const db = new Dexie('todoDb')

db.version(1).stores({
    penggunaTodo:`
        id,
        keterangan`,
})

function addToDoList(){
    while (true){
        let toDo = prompt('Add What? (min 10 Character)')
        if (toDo != null){
            if(toDo.length > 10){
                if (confirm('Are You Sure Want To Add Text Into Your List? : \n' + toDo)){
                    db.penggunaTodo.count().then(result => 
                       addDataIntoDatabase(result,toDo)
                    )
                    console.log("Berhasil Menambahkan Ke Dalam Database!")
                    location.reload()
                    break
                }else{
                    break
                }
            }else{
                console.log('Invalid Input, Please Input For Validation')
            }
        }else{
            break
        }
    }
}


function showDataInDatabae(){
    db.penggunaTodo.toArray().then(res => 
        // console.log(res)
        res.map(ress =>
            console.log(ress.id +ress.id)
        )
    )
}

function addDataIntoDatabase(totalDataDiDatabase,keteranganToDo){
    for(let i = 1; i <= totalDataDiDatabase + 1; i++ ){
        console.log('walawe')
        db.penggunaTodo.get(i).then(res =>{
            console.log(res)
            if(res == undefined){
                console.log('walawe2')
                
                db.penggunaTodo.add({id:i,keterangan:keteranganToDo})
            }
        })
}

}


// function deleteData(idData){
//     db.penggunaTodo.delete(idData)
// }



// db.penggunaTodo.where({id :1}).toArray().then(res => 
//     res.forEach(e=>
//         console.log(e.id)
//     )
// )

document.addEventListener('DOMContentLoaded',()=>{

    let bc = 'asas'
    bc.toLowerCase()
    document.body.addEventListener('click',(e)=>{
        // console.log(e.target.parentElement.children[2])

        if(e.target.tagName.toLowerCase() == 'h3'){
            for(let i = 0; i < e.target.parentElement.children.length; i++){
                if(e.target.parentElement.children[i].className.toLowerCase() == 'keteranganhere'){
                    let keteranganTarget = e.target.parentElement.children[i].textContent
                    let isDelete = confirm(
                        "Apakah Anda Yakin Ingin Menghapus List\n" +keteranganTarget+ "?" 
                    )
                    if (isDelete){
                        db.penggunaTodo.where({keterangan :keteranganTarget}).toArray().then(res => 
                            res.forEach(ress=>
                                db.penggunaTodo.delete(ress.id)
                                // console.log(ress.id)
                            )
                        )
                        location.reload()

                    }else{
                        break
                    }
                }
            }
           
        }

    })

















    // buat masukin keterangan yang ada di database ke dalam to do list

    const listTodoDiv = document.getElementById('listToDo')

    db.penggunaTodo.toArray().then(result =>
        result.forEach(e=>
            listTodoDiv.innerHTML += `<div class="ToDo">
            <input type="checkbox" name="checkBox">
            <h4 class="keteranganHere">${e.keterangan}</h4>
           <h3>✖️</h3>
        </div>`
        )
    )


})