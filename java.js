// 1. 1-dən 10-a qədər ədədlərin cəmini (hasilini) tapın.
// let cem=0,hasil=1
// for(let eded=1;eded<10;eded++){
//     cem+=eded
//     hasil*=eded
// }
// console.log(cem,"cem");
// console.log(hasil,"hasil");

// 2. 1-dən100-ə qədər cüt ədədləri / onların cəmini / hasilini tapın
// let cem=0,hasil=1
// for(let eded=1;eded<100;eded++){
//     if(eded%2==0){ 
//         console.log(eded);
//         cem+=eded
//         hasil*=eded
//     }
// }
// console.log(cem,"cem");
// console.log(hasil,"hasil");

// 3. 3 rəqəmli ədədlərin ədədi ortasını tapın
// let eded=100,say=0,cem=0
// for(let eded=100;eded<1000;eded++){
// say++
// cem+=eded
// }
// edediorta=cem/say
// console.log(cem,say,edediorta);

// 4. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədləri tapın
// let eded=100,say=0
// for(let eded=100;eded<1000;eded++){
// if(eded%7==0 & eded%8==0){
//     console.log(eded);

// }
// }

// 5. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmini tapın
// let eded=100,say=0,cem=0
// for(let eded=100;eded<1000;eded++){
//     if(eded%7==0 & eded%8==0){
//         cem=+eded
//     }
// }
// console.log(cem);

// 6. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədədi tapın
// let eded=100,say=0
// for(let eded=100;eded<1000;eded++)
//     if(eded%7==0 & eded%8==0){
//         console.log(eded);
//         break
//     }

// 7. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən son ədədi tapın.
// let eded=100,say=0
// for(let eded=999;eded>100;eded--){
//     if(eded%7==0 & eded%8==0){
//         console.log(eded);
//         break
//     }
// }

// 8. 1-dən 100-ə qədər sadə və mürəkkəb ədədləri tapın
// let count;
// for(eded=1 ;eded<100;eded++){
//     if(eded==1){
//         console.log(eded + "ne sadedir ne murekkeb");
//     }
//     else{
//         count=0;
//         for(let bolen=1 ; bolen<=eded ; bolen++){
//             if(eded%bolen==0){
//                 count++
//             }
//         }
// if(count>2){
//     console.log(eded + " murekkkebdir");
// }
// else{
// console.log(eded + "sadedir");
 

// }
// }
// }

// 9. Verilmiş 3 ədəddən ən böyük və ən kiçiyini tapın
// let a=145,b=67,c=210
// console.log(Math.min(a,b,c));
// console.log(Math.max(a,b,c));

// 10. İstifadəçi tərəfindən daxil edilən ədədin cüt olub-olmadığını yoxlayın.(Məsələn istifadəçi 12 daxil etdiyi zaman ekrana
    // cütdür, 15 daxil etdiyi zaman təkdir çıxarsın)
    // let a=prompt("eded daxil edin");
    // if(a%2==0){
    //     alert("cutdur")
    // }
    // else if(a%2!==0) {
    //     alert("cut deyil")
    // }

    // 11. İstifadəçidən iki rəqəm və bir riyazi əməl daxil etməsini təmin edin və həmin ədədlər üzərində daxil olunmuş riyazi əməli
// tətbiq edib nəticəni ekrana çıxarın.
// let eded1=+prompt("birinci ededi daxil edin");
// let eded2=+prompt("ikinci ededi daxil edin");
// let operator=+prompt("operator daxil edin (+,-,*,/)");
// let cavab
// switch (operator) {
//     case "+" :
//         cavab=eded1+eded2;
//         break;
//     case "_" :
//     cavab=eded1-eded2;
//     break;
//     case "*" :
//     cavab=eded1*eded2
//     break;
//     case "/" :
//         cavab=eded1/eded2;
//         break;
//     default:
//         bele bir emeliyyat yoxdur;
//     break;
// console.log(cavab);
// }



    // 12.Daxil edilmis ededin boluneni olan butun uc reqemli ededleri cixarin.
    // let num=+prompt("eded daxil edin");
    // for(let i=100;i<1000;i++){
    //     if(i%num==0){
    //         console.log(i);
    //     }
    // }

    // 13. Daxil edilmiş ədədin bütün mümkün tam bölənlərini tapın.
    // for(let eded=1;eded<=100;eded++){
    //     let say=0
    //     for(let i=1;i<=eded;i++){
    //     if(eded%i==0){
    //         say++
    //   }
    // }
    // console.log(eded,say);
    //     }

    // 14. 12 ədədi hansı 2 ədədin cəmi ola bilər? ( Bütün kombinasiyaları tapın)
    //    let eded1=12;
    // for(let eded=0;eded<=(eded1/2);eded++){
    //     console.log(eded,eded1-eded );
    // }

    // 15. İki dəyişənin dəyərlərininin yerini dəyişən proqram tərtib edin. (Məsələn x=5, y=6, =&gt; x=6, y=5)
    // let x=5
    // let y=6
    // console.log("evvel:");
    // console.log("5:",x);
    // console.log("6:",y);
    // let deyis=x
    // x=y
    // y=deyis
    // console.log("sonra");
    // console.log("5:",x);
    // console.log("6:",y);


    // 16. Verilmiş ədədin tam ədəd olub olmadığını yoxlayan proqram yazın.
//         let eded=5.8
//     if(Math.floor(eded)==eded){
// console.log("tam eded");
//     }
//     else{
//         console.log("tam deyil");
//     }

// 17. number dəyişənində iki rəqəmli ədəd saxlanılır. Bu ədədin
// - beşinci dərəcə qüvvətə qaldırılmış vəziyyətini (tapın);
// - 3-ə bölünmədən qalan qalığını (tapın);
// let eded=10
// console.log(Math.pow(10,5));
// console.log(10%3);

// 18.Daxil edilen temperatura esasen havanin isti, cox isti, soyuq, cox soyuq oldugunu gosterin.
// 0 &gt; �� cox soyuq
// 0-15 derece �� soyu
// 15-30 derece �� isti
// 30&lt; �� cox isti
// Əgər heç biri deyilse alerte versin ki temperatur yanlışdır.
// let temperatur=+prompt("eded daxil edin");
// switch (temperatur) {
//     case"temperatur<0":
//     alert ("cox soyuq");
//         break;
//         case ("temperatur>0 && temperatur<15"):
//         alert ("soyuq");
//         break
//         case "tempertur>15 && temperatur<30":
//         alert ("isti");
//         break;
//         case "temperatur>30":
//         alert ("cox isti");
//         break;
//         default:
//             alert("temperatur yanlisdir");
// }

// 19. Daxil edilen rəqəmə görə həftənin günlərini çıxardan program yazın (switch ile yazın.) Meselen: 1 =&gt; bazarertesi,
// 3=&gt; cersenbe (heftenin 7 gunu ucun)
// let gun=+prompt("gun daxil edin")
// switch (gun) {
//     case 1: 
//         alert("bazar ertesi");
//         break;
//         case 2: 
//             alert("cersenbe axsami");
//             break;
//             case 3:
//         alert("cersenbe");
//         break;
//         case 4:
//         alert("cume axsami");
//         break;
//         case 5:
//             alert("cume");
//             break;
//             case 6:
//                 alert("senbe");
//                 break;
//                 case 7:
//                     alert("bazar");
//     default:
//         alert("bele bir gun yoxdur")
// }


// 20. Daxil edilen ayların sıra nömresinə əsasən hansı fəsil olduğunu tapın. Meselen : 5 (may ayı 5-cidir) output: Yaz
// // fesli alertə çıxarın.
// let ay=+prompt("ay daxil edin")
// switch (ay) {
//     case 12:
//     case 1:
//     case 2:
//     alert("qis fesli")
//         break;
//         case 3:
//         case 4:
//         case 5: 
//         alert("yaz fesli")
//         break;
//         case 6:
//         case 7:
//             case 8:
//                 break;
//                 alert("yay fesli")
//                 case 9:
//                     case 10:
//                         case 11:
//                             alert("payiz fesli")
//                             break;
//                             default:("yanlis deyer")
//         break;
// }