//[ no,district,+ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]

]



//1. district having Highest +ve case 
// let higest = covid_data.reduce((dis1,dis2)=>dis1[2]>dis2[2]?dis1:dis2)
// console.log(higest[1]);
//2. district having Highest 1st dose vaccine
// let dose1 = covid_data.reduce((dis1,dis2)=>dis1[5] > dis2[5]?dis1:dis2)
// console.log(dose1[1]);


//3. district having lowest death rate
// death = covid_data.reduce((dis1,dis2)=>dis1[3] < dis2[3] ? dis1:dis2)
// console.log(death[1]);

//4. sort data with +ve case in descending order
// let sort = covid_data.sort((a,b)=>b[2]-a[2])
// console.log(sort);



//5. 
//  console.log(`is district with +ve cases > 15000`, covid_data.some(dis=>dis[2]>15000)?`yes`:`no`);



//6. sort data with 1st dose vaccine
// sort = covid_data.forEach(dis=>console.log(`${dis[1]}-${dis[5]}`))

//7. Print Thrissur details
// console.log(covid_data.find(d=>d[1]=="Thrissur")); 

//8. Print total number of positive cases

//9. Print total number of curred cases
// console.log(covid_data.map(dis=>dis[4]).reduce((c1,c2)=>c1+c2));
//10. Print curred cases in Idukki
idukki = (covid_data.find(dis=>dis[1]=="Idukki"));
console.log(`${idukki[1]} curred cases are ${idukki[4]}`);

