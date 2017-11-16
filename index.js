var data =  [
    {
        'name' : '데이터베이스',
        'grade' : 'A',
        'credit' : 3
    },
    {
        'name' : '교양영어',
        'grade' : 'B+',
        'credit' : 2
    },
    {
        'name' : '철학',
        'grade' : 'B+',
        'credit' : 1
    },
    {
        'name' : '미디어아트개론',
        'grade' : 'A+',
        'credit' : 3
    }
];


function convertCredits() {
    for(var i=0; i<data.length; i++){
        var credits = data[i].grade;
        switch(credits){
            case 'A+': data[i].grade = 4.5;
                break;
            case 'A': data[i].grade = 4.0;
                break;
            case 'B+': data[i].grade = 3.5;
                break;
            case 'B': data[i].grade = 3.0;
                break;
            case 'C+': data[i].grade = 2.5;
                break;
            case 'C': data[i].grade = 2.0;
                break;
            case 'F': data[i].grade = 0;
                break;
        }
    }
}convertCredits();

function calculateGpa() {
    var gpMultiple = 0;
    var gpSum = 0;

    for(var i=0; i<data.length; i++) {
        gpMultiple += (data[i].credit) * (data[i].grade);
        gpSum += data[i].credit;
    }

    var result = (gpMultiple / gpSum).toFixed(2);
    console.log('총평점:'+ result);
    console.log('이수학점:'+ gpSum);
}calculateGpa();