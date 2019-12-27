// format time is xx.yy
const sliceTime = (time) => {
  const data = {
    hour: String,
    minutes: String
  }
  data.hour = time.slice(0, time.indexOf(':'));
  data.minutes = time.slice(time.indexOf(':') + 1, time.indexOf(':') + 3);
  return (data.hour + '.' + data.minutes)
}
// kiem tra 2 khoang thoi gian co giao nhau khong
const overlapTime = (startTime1, endTime1, startTime2, endTime2) => {
  const start1 = parseFloat(sliceTime(startTime1));
  const start2 = parseFloat(sliceTime(startTime2));
  const end1 = parseFloat(sliceTime(endTime1));
  const end2 = parseFloat(sliceTime(endTime2));
  if (start1>=start2 && start1<end2){
    return true;
  }else if(start1<start2 && end1>start2 && end1<end2){
    return true;
  }
  return false;
};
// format date
const sliceDate=(date)=>{
  const tmpDate = {
    day : String,
    month: String,
    year: String
  }
  tmpDate.day = date.slice(0,date.indexOf('/'));
  tmpDate.month= date.slice(date.indexOf('/')+1,date.lastIndexOf('/'));
  tmpDate.year = date.slice(date.lastIndexOf('/')+1,date.lastIndexOf('/')+5);
  return tmpDate
}
//kiem tra ngay thi co trung nhau khong
const overlapDate= (date1,date2)=>{
  const d1 = sliceDate(date1);
  const d2 = sliceDate(date2);
  if(parseInt(d1.year)==parseInt(d2.year)){
    if(parseInt(d1.month)==parseInt(d2.month)){
      if(parseInt(d1.day)==parseInt(d2.day)){
        return true
      }
    }
  }
  return false;
}
// kiem tra phong thi co bi trung ca thi khong
const checkOverlap =(data,list)=>{
  for(let i=0;i<list.length;i++){
    if(data.class==list[i].class ){
      if(overlapDate(data.date.toString(),list[i].date.toString())){
        if(overlapTime(data.startTime,data.endTime,list[i].startTime,list[i].endTime)){
          return true;
        }
      }
    }  
  }
  return false;
}
// kiem tra ngay ca thi co bi trung nhau khong 
const checkSchudeOverlap =(data,list)=>{
  for(let i=0;i<list.length;i++){
      if(overlapDate(data.date.toString(),list[i].date.toString())){
      if(overlapTime(data.startTime,data.endTime,list[i].startTime,list[i].endTime)){
          return true;
        }
      }
    }  
    return false;
}
module.exports = {
 checkOverlap,
 checkSchudeOverlap
}