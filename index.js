var wins=document.querySelector('.wins')
var losses=document.querySelector('.losses')
var guesses=document.querySelector('.guesses')
var letters=document.querySelector('.letters')
var word=document.querySelector('.word')
var arr=[]
var arr1=[]
var arr2=[]
var qxal=0
var mxal=0
var texmin=10
wins.innerText=qxal
losses.innerText=mxal
guesses.innerText=texmin
letters.innerText=arr
var adlar=['afganistan','albania','algeria','andorra','angola','bahamas','bangladesh','belgium','bermuda','burundi','chad','chile','cambodia','djibouti'
,'egypt','ecuador','estonia','greenland','grenada','haiti','hungary','kenya']
var index=Math.floor(Math.random()*adlar.length)
var sparra=adlar[index].split('')
word.innerText='_ '.repeat(adlar[index].length)
innerr='_'.repeat(adlar[index].length)
spinner=innerr.split('')
window.onkeypress=function(e){
    if(arr.includes(e.key)==false){
        arr.push(e.key)
        for(var i=0;i<sparra.length; i++){
            if(e.key==sparra[i]){
                spinner[i]=sparra[i]
                word.innerText=spinner.join(' ')
            }
        }
        if(arr1.includes(e.key)==false){
            arr2.push(e.key)
            letters.innerText=arr2
        }
    }
    if(arr1.includes(e.key)==false){
        texmin--
        guesses.innerText=texmin
        if(texmin==0){
            arr=[]
            arr1=[]
            arr2=[]
            letters.innerText=arr2
            index=Math.floor(Math.random()*adlar.length)
            sparra=adlar[index].split('')
            word.innerText='_ '.repeat(adlar[index].length)
            spinner=innerr.split('')
            texmin=10
            guesses.innerText=texmin
            mxal++
            lossses.innerText=mxal
        }
    }
    if(arr1.length==sparra.length){
        index=Math.floor(Math.random()*adlar.length)
        sparra=adlar[index].split('')
        word.innerText='_ '.repeat(adlar[index].length)
        innerr='_'.repeat(adlar[index].length)
        spinner=innerr.split('')
        arr=[]
        arr1=[]
        arr2=[]
        letters.innerText=arr2
        qxal++
        wins.innerText=qxal
        texmin=10
        guesses.innerText=texmin

    }

}