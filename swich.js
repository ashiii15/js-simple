switch(new Date().getDay()){
    case 0:
        day = monday;
        break;
        case 1:
        day = tuesday;
        break;
        case 2:
        day = wednesday;
        break;
        case 3:
        day = thursday;
        break;
        case 4:
        day = friday;
        break;
        case 5:
        day = saturday;
        break;
        case 6:
        day = sunday;
        break;
        default:
        day = invalid;
        break;
        
}
document.getElementById("demo").innerHTML = day;