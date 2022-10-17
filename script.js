'use strict';
        let counter=10;
        let dispalyArea = document.getElementById('display'),
        container = document.querySelector('.container');
        setTimeout(() => {
            dispalyArea.innerHTML = `${counter--}`;
            dispalyArea.style.fontSize="10rem"
            setTimeout(() =>{
              dispalyArea.innerHTML = `0${counter--}`;
                setTimeout(() =>{
                  dispalyArea.innerHTML = `0${counter--}`;
                    setTimeout(() =>{
                      dispalyArea.innerHTML = `0${counter--}`;
                        setTimeout(() =>{
                          dispalyArea.innerHTML = `0${counter--}`;
                            setTimeout(() =>{
                              dispalyArea.innerHTML = `0${counter--}`;
                                setTimeout(() =>{
                                  dispalyArea.innerHTML = `0${counter--}`;
                                    setTimeout(() =>{
                                      dispalyArea.innerHTML = `0${counter--}`;
                                        setTimeout(() =>{
                                          dispalyArea.innerHTML = `0${counter--}`;
                                            setTimeout(() =>{
                                              dispalyArea.innerHTML = `0${counter--}`;
                                                setTimeout(() =>{
                                                  dispalyArea.innerHTML = "Happy Independance Day!"
                                                  dispalyArea.style.fontSize="6rem"
                                                  dispalyArea.style.letterSpacing= "0px"
                                                  dispalyArea.classList.add("wish");
                                                  container.classList.add("final");                                                      
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)     
                },1000)
            },1000)
        }, 1000);
    