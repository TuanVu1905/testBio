

let refAppConstainer = null;


const setContainer =(ref)=>{

    console.log(ref,'setContainer');
    refAppConstainer = ref;
}


const getContainer =()=>{
    console.log(refAppConstainer,'setContainer');
    return refAppConstainer;
}


export default {
    setContainer ,
    getContainer
}