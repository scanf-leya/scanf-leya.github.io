// Para sem uso de scroll
const s=()=>{
    let article=document.getElementsByTagName("article")
    let a=[...article]
    console.log(a)
    a.map((e)=>{
        if (e.id=="apr") {
            let apr=document.getElementsByTagName("button")
            let apr1=[...apr]
            apr1.map((e)=>{
                if (e.id=="b1") {
                    e.addEventListener("click",(el)=>{
                        
                    })
                }
                else if(e.id=="b2") {
                    e.addEventListener("click",(el)=>{
                        el.innerHTML="Home"
                        let article=document.getElementsByTagName("article")
                        let a=[...article]
                        a.map((e)=>{
                            if (e.id=="contacte-me") {
                                e.style.display="block"
                            }else{e.style.display="none"}
                        })
                    })
                }
            })
            e.style.display="flex"
        }else{e.style.display="none"}
    })

    let head=document.querySelectorAll("a#h")
    let h=[...head]
    
    h.map((e)=>{
        e.style.cursor="pointer"
        if (e.innerHTML=="Home") {
            e.addEventListener("click",(el)=>{
                el.innerHTML="Home"
                let article=document.getElementsByTagName("article")
                let a=[...article]
                a.map((e)=>{
                    if (e.id=="apr") {
                        e.style.display="flex"
                    }else{e.style.display="none"}
                })
            })
        }
        else if(e.innerHTML=="About me") {
            e.addEventListener("click",(el)=>{
                el.innerHTML="Home"
                let article=document.getElementsByTagName("article")
                let a=[...article]
                a.map((e)=>{
                    if (e.id=="about") {
                        e.style.display="flex"
                    }else{e.style.display="none"}
                })
            })
        }
        else if(e.innerHTML=="Portifólio") {
            e.addEventListener("click",(el)=>{
                el.innerHTML="Home"
                let article=document.getElementsByTagName("article")
                let a=[...article]
                a.map((e)=>{
                    if (e.id=="portifolio") {
                        e.style.display="flex"
                    }else{e.style.display="none"}
                })
            })
        }
        else if(e.innerHTML=="Contacte-me") {
            e.addEventListener("click",(el)=>{
                el.innerHTML="Home"
                let article=document.getElementsByTagName("article")
                let a=[...article]
                a.map((e)=>{
                    if (e.id=="contacte-me") {
                        e.style.display="block"
                    }else{e.style.display="none"}
                })
            })
        }
    })
        
    let footer=document.querySelectorAll("img.f")
    let f=[...footer]
    f.map((e)=>{
        e.style.cursor="pointer"
        if (e.id=="git") {
            e.addEventListener("click",(el)=>{
                window.location.href="https://github.com/scanf-leya"
            })
        }
        else if(e.id=="link") {
            e.addEventListener("click",(el)=>{
                window.location.href="https://www.linkedin.com/in/goven-leya-5650a6291/"
                })
        }
        else if(e.id=="repilt") {
            e.addEventListener("click",(el)=>{
                window.location.href="https://replit.com/@leyagoven"
            })
        }
        
    })
}
s()