const ara1=[209,5,4,4,3,5];

const ara2=[34234,424,234,23423];

const ara3=[342,44,34,223];

//const ara3=ara1.concat(5).concat(ara2);

const ara=[...ara1,...ara2,5,...ara3];


const mx=Math.max(...ara1);

 //console.log(ara);

 console.log(mx);