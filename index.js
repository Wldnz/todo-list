
document.addEventListener('DOMContentLoaded',()=>{
    // list navigation class
    const navigation  = document.getElementById('navigation')
    const listNav = navigation.children[0]
    const homeNav = navigation.children[1]
    const settingNav = navigation.children[2]
    const hiddenNav = navigation.children[3]


    // when the hidden button clicked
    let isHidden = false
    hiddenNav.addEventListener('click',()=>{
        if(isHidden){
            for(let i = 0; i < 3; i++){
                navigation.children[i].style.display = 'flex'
                // navigation.style.padding = '0.5rem'
            }
            isHidden = false

        }else{
            for(let i = 0; i < 3; i++){
                navigation.children[i].style.display = 'none'
                // navigation.style.padding = '0'

            }
        isHidden = true
        }
    })

    // function express keknya
    // function ListMenuInNavigation(parentObject){
       
    // }


    // var listMenuInNav = new ListMenuInNavigation(navigation.children)



    // function untuk mengambil object dari array
    // function takeObjectInArray(arr){
    //     for(var obj of Object.values(arr)){
            
    //     }
    // }

    
    

})