document.getElementById('check').addEventListener("click",pali);
function pali()
{
        const input=document.getElementById('text1');
        const rslt=document.getElementById('result');
        if(ispali(input.value))
        {
            rslt.textContent=`"${input.value} " is a palindrome`;

        }
        else 
        {
            rslt.textContent=`"${input.value} " is not  a palindrome`;

        }
        rslt.classList.add('fadeIn');
        input.value="";

}
function ispali(str)
{
    const cleanStr=str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanStr);
    const revstr=cleanStr.split('').reverse().join('');
    console.log(revstr);

    return cleanStr==revstr

}