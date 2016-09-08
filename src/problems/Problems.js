
let Problems = [
{
    name:'Human Readable Time',
    description:'This function will convert seconds into a hours:minutes:seconds format',
    solution: function humanReadable(seconds) {
                    var hours = Math.floor(seconds/3600);
                    seconds -= Math.floor(hours*3600);
                    if(hours<10) hours = '0'+hours;
                    var minutes = Math.floor(seconds/60);
                    seconds -= Math.floor(minutes*60);
                    if(minutes<10) minutes = '0'+minutes;
                    if(seconds<10) seconds = '0'+seconds;
                    return ''+hours+':'+minutes+':'+seconds+''  
    } 
}

];

module.exports = Problems;