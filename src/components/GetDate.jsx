export function GetDate(props){

    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${day}${props.separator}${month<10?`0${month}`:`${month}`}${props.separator}${year}`
}