//statistics  
console.log(" we are in the stat js");

const userPropForm = document.querySelector('#userProp');
var dataArray = [];

prepareDate()



const sub = document.getElementById('submit');
userProp.addEventListener('submit', (e) => 
{  
    console.log("we entered the on click listner");
  e.preventDefault();


////////////// getting blood types
  
    var blodcheck  = document.getElementsByClassName('blood');
    var blood = [];

    for( let i = 0; i < 8 ; i ++)
    {
      if (blodcheck[i].checked == true) 
      {
        blood.push(blodcheck[i].value);
      }
    }

    console.log(blood);

    ////////// getting blood types ends here /////////////


  var startDate  = userPropForm['startDate'].value;
  var endDate  = userPropForm['endDate'].value;
  console.log(startDate);
  console.log(endDate);
  var ageMin = userPropForm['ageMin'].value;
  var ageMax = userPropForm['ageMax'].value;  
  var heightMin = parseInt(userPropForm['heightMin'].value);
  console.log(heightMin);
  var heightMax = parseInt(userPropForm['heightMax'].value);
  console.log(heightMax);
  var weightMin = parseInt(userPropForm['weightMin'].value);
  console.log(weightMin);
  var weightMax = parseInt(userPropForm['weightMax'].value);
  console.log(weightMax);
  var male;
  var female;
  var pregnant;
  var notPregnant;
  var smoker;
  var notSmoker;

/*  setFilter(); */


if (userPropForm['female'].checked == true) {

        female = "true";
        console.log(" femlae has bees set successfully: " + female);
      }
      else
      {
        female = "false";
        pregnant = "false";
        notPregnant ="true";
        console.log(" didnt enter female ^^ ? :(");
      }



      if (userPropForm['male'].checked == true)
      {
        male = "true";
        console.log(" male has bees set successfully:" +male );
      }
      else
      {
        male = "false";
        console.log(" didnt enter male ^^ ? :(" +male);
      }



      if (userPropForm['pregBox'].checked == true ) 
      {
        pregnant = "true";
        console.log(" preg has bees set successfully: " + pregnant);
      }
      else
      {
        pregnant = "false";
        console.log(" didnt enter preg ^^ ? :(" + pregnant);
      }

      if (userPropForm['NonPregBox'].checked == true) 
      {
        notPregnant = "true" ;
        console.log(" non preg has bees set successfully" + notPregnant);
      }
      else
      {
        notPregnant = "false";
        console.log(" didnt enter non preg ^^ ? :(" + notPregnant);
      }

      ///////////////// main filter is finsihed here one is finished ///////////////////////

      
      if (userPropForm['smoker'].checked == true && userPropForm['notSmoker'].checked == true ) 
      {
        smoker = "true";
        notSmoker = "true";
        console.log(" smoker has bees set successfully");
      }
      else if (userPropForm['smoker'].checked == true && userPropForm['notSmoker'].checked == false)
      {
        smoker = "true";
        notSmoker = "false";
      }
      if (userPropForm['smoker'].checked == false && userPropForm['notSmoker'].checked == true)
      {
        smoker = "false";
        notSmoker = "true";
        console.log(" didnt enter smoker ^^ ? :(");
      }
  


  console.log(" filter has bees set successfully");
  /*console.log("ageMax, ageMin, male, female, pregnant, notPregnant, smoker, notSmoker, heightMin, heightMaxig, weightMin, weightMax" );*/
  console.log("maximum age: "+ageMax,"Minimum age: "+ ageMin,"male: "+ male, "female: "+female,"pregnant: "+ pregnant,"notPregnant: "+ notPregnant,"smoker: "+ smoker,"Not smoker: "+ notSmoker, heightMin, heightMax, weightMin, weightMax );




if (checkingForm())
{
  console.log("Entered If Condition");

      //////     Flag 1     //////////
 if (female == "true" &&  male == "true" && pregnant == "true" && notPregnant == "true" && smoker == "true" && notSmoker == "true" )
        {
          var filterArray = [["Date", "Heart Rate"]];
          var stepsArray = [["Date", "Steps"]];
          var sleepArray = [["Date", "Sleeping Hours"]];
          
         
          for(var i = 0; i< dataArray.length; i++)
          {

          /*data array  [ 0 age, 1 gender, 2 preg, 3 weight, 4 height, 5 smoker, 6 bloodtype, 7 hr, 8 steps, 9 sleep ]*/
            
              if (ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && (heightMin <= dataArray[i][4] && heightMax >= dataArray[i][4]) && (weightMin <= dataArray[i][3] && weightMax >= dataArray[i][3]))
              {
                if (blood.includes(dataArray[i][6])) 
                {
                 
                  for( var key in dataArray[i][7])
                  {


                    if ( convertToDate2( key ) >= convertToDate( startDate ) && convertToDate2( key ) <= convertToDate( endDate ) )
                    {
                      filterArray.push([convertToDate2( key ), dataArray[i][7][key]]);
                    }
                  }

                  for( var key1 in dataArray[i][8])
                  {

                    if ( convertToDate2( key1 ) >= convertToDate( startDate ) && convertToDate2( key1 ) <= convertToDate( endDate ) )
                    {
                      stepsArray.push([convertToDate2( key1 ), dataArray[i][8][key1]]);
                    }
                  }

                  for( var key2 in dataArray[i][9])
                  {
                    if ( convertToDate3( key2 ) >= convertToDate( startDate ) && convertToDate3( key2 ) <= convertToDate( endDate ) )
                    {
                      sleepArray.push([convertToDate3( key2 ), dataArray[i][9][key2]]);
                    }
                  }
                }

                }
              }
            
         

          console.log("filer array after population");
          console.log(filterArray);

          console.log(" i am fired from flag  1");
          //function drawC(data1 , title1, title2, minV1, maxV1, minV2, maxV2,flag)
          drawC(filterArray , "Date" ,"Heart Rate", convertToDate(startDate), convertToDate(endDate), 1);
          drawSteps(stepsArray , "Date" ,"Steps", convertToDate(startDate), convertToDate(endDate), 1);
          drawSleep(sleepArray , "Date" ,"Sleeping Hours", convertToDate(startDate), convertToDate(endDate), 1);

           }
        



        //////     Flag 2     //////////

         // age, gender, pregnant, weight, height, smoker //
          // all + preg + smoker + not smoker 


         else if (female == "true" &&  male == "true" && pregnant == "true" && notPregnant == "false" && smoker == "true" && notSmoker == "true" ) 
        {
          console.log("Enter Flag 2");
          /*data array  [age, gender, preg, weight, height,smoker, bloodtype, hr, steps ]*/
          var filterArray = [["Date", "Heart Rate"]];
          var stepsArray = [["Date", "Steps"]];
          var sleepArray = [["Date", "Sleeping Hours"]];


          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && /*pregnency*/ "true" == dataArray[i][2] &&(heightMin <= dataArray[i][4] && heightMax >= dataArray[i][4]) && (weightMin <= dataArray[i][3] && weightMax >= dataArray[i][3]))
              {
                
                if (blood.includes(dataArray[i][6])) 
                {
                 
                  for( var key in dataArray[i][7])
                  {


                    if ( convertToDate2( key ) >= convertToDate( startDate ) && convertToDate2( key ) <= convertToDate( endDate ) )
                    {
                      filterArray.push([convertToDate2( key ), dataArray[i][7][key]]);
                    }
                  }

                  for( var key1 in dataArray[i][8])
                  {

                    if ( convertToDate2( key1 ) >= convertToDate( startDate ) && convertToDate2( key1 ) <= convertToDate( endDate ) )
                    {
                      stepsArray.push([convertToDate2( key1 ), dataArray[i][8][key1]]);
                    }
                  }

                  for( var key2 in dataArray[i][9])
                  {
                    if ( convertToDate3( key2 ) >= convertToDate( startDate ) && convertToDate3( key2 ) <= convertToDate( endDate ) )
                    {
                      sleepArray.push([convertToDate3( key2 ), dataArray[i][9][key2]]);
                    }
                  }
                }
              }
            
          }


          //function drawC(data1 , title1, title2, minV1, maxV1, minV2, maxV2,flag)
          drawC(filterArray , "Date" ,"Heart Rate", convertToDate(startDate), convertToDate(endDate), 2);
          drawSteps(stepsArray , "Date" ,"Steps", convertToDate(startDate), convertToDate(endDate), 2);
          drawSleep(sleepArray , "Date" ,"Sleeping Hours", convertToDate(startDate), convertToDate(endDate), 2);

        
        }

        ///////////// flag 3 ///////////

        // age, gender, pregnant, weight, height, smoker //
          // all + preg + smoker 


        else if (female == "true" &&  male == "true" && pregnant == "true" && notPregnant == "false" && smoker == "true" && notSmoker == "false" ) 
        {
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [["Date", "Heart Rate"]];
          var stepsArray = [["Date", "Steps"]];
          var sleepArray = [["Date", "Sleeping Hours"]];

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "true" == dataArray[i][2] && "true" == dataArray[i][5] && (heightMin <= dataArray[i][4] && heightMax >= dataArray[i][4]) && (weightMin <= dataArray[i][3] && weightMax >= dataArray[i][3]))
              {
                if (blood.includes(dataArray[i][6])) 
                {
                 
                  for( var key in dataArray[i][7])
                  {


                    if ( convertToDate2( key ) >= convertToDate( startDate ) && convertToDate2( key ) <= convertToDate( endDate ) )
                    {
                      filterArray.push([convertToDate2( key ), dataArray[i][7][key]]);
                    }
                  }

                  for( var key1 in dataArray[i][8])
                  {

                    if ( convertToDate2( key1 ) >= convertToDate( startDate ) && convertToDate2( key1 ) <= convertToDate( endDate ) )
                    {
                      stepsArray.push([convertToDate2( key1 ), dataArray[i][8][key1]]);
                    }
                  }

                  for( var key2 in dataArray[i][9])
                  {
                    if ( convertToDate3( key2 ) >= convertToDate( startDate ) && convertToDate3( key2 ) <= convertToDate( endDate ) )
                    {
                      sleepArray.push([convertToDate3( key2 ), dataArray[i][9][key2]]);
                    }
                  }
                }
              }
            
          }


          //function drawC(data1 , title1, title2, minV1, maxV1, minV2, maxV2,flag)
          drawC(filterArray , "Date" ,"Heart Rate", convertToDate(startDate), convertToDate(endDate), 3);
          drawSteps(stepsArray , "Date" ,"Steps", convertToDate(startDate), convertToDate(endDate), 3);
          drawSleep(sleepArray , "Date" ,"Sleeping Hours", convertToDate(startDate), convertToDate(endDate), 3);
        }


        //////////   flaaag 4   //////////////

        // age, gender, pregnant, weight, height, smoker //
          // all + preg + not smoker 


        else if (female == "true" &&  male == "true" && pregnant == "true" && notPregnant == "false" && smoker == "false" && notSmoker == "true" ) 
        {
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [["Date", "Heart Rate"]];
          var stepsArray = [["Date", "Steps"]];
          var sleepArray = [["Date", "Sleeping Hours"]];

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "true" == dataArray[i][2] && "false" == dataArray[i][5] && (heightMin <= dataArray[i][4] && heightMax >= dataArray[i][4]) && (weightMin <= dataArray[i][3] && weightMax >= dataArray[i][3]))
              {
                if (blood.includes(dataArray[i][6])) 
                {
                 
                  for( var key in dataArray[i][7])
                  {


                    if ( convertToDate2( key ) >= convertToDate( startDate ) && convertToDate2( key ) <= convertToDate( endDate ) )
                    {
                      filterArray.push([convertToDate2( key ), dataArray[i][7][key]]);
                    }
                  }

                  for( var key1 in dataArray[i][8])
                  {

                    if ( convertToDate2( key1 ) >= convertToDate( startDate ) && convertToDate2( key1 ) <= convertToDate( endDate ) )
                    {
                      stepsArray.push([convertToDate2( key1 ), dataArray[i][8][key1]]);
                    }
                  }

                  for( var key2 in dataArray[i][9])
                  {
                    if ( convertToDate3( key2 ) >= convertToDate( startDate ) && convertToDate3( key2 ) <= convertToDate( endDate ) )
                    {
                      sleepArray.push([convertToDate3( key2 ), dataArray[i][9][key2]]);
                    }
                  }
                }
              }
            
          }


          //function drawC(data1 , title1, title2, minV1, maxV1, minV2, maxV2,flag)
          drawC(filterArray , "Date" ,"Heart Rate", convertToDate(startDate), convertToDate(endDate), 4);
          drawSteps(stepsArray , "Date" ,"Steps", convertToDate(startDate), convertToDate(endDate), 4);
          drawSleep(sleepArray , "Date" ,"Sleeping Hours", convertToDate(startDate), convertToDate(endDate), 4);
        }

         ////////////// all + preg ends here ////////////


         //////////  flaag 5  ////////////////


        // age, gender, pregnant, weight, height, smoker //
          // all +  non preg + smoker + not smoker


        else if (female == "true" &&  male == "true" && pregnant == "false" && notPregnant == "true" && smoker == "true" && notSmoker == "true" ) 
        {
          /*data array  [age, gender, preg, weight, height,smoker ]*/
         var filterArray = [["Date", "Heart Rate"]];
          var stepsArray = [["Date", "Steps"]];
          var sleepArray = [["Date", "Sleeping Hours"]];

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "false" == dataArray[i][2] && (heightMin <= dataArray[i][4] && heightMax >= dataArray[i][4]) && (weightMin <= dataArray[i][3] && weightMax >= dataArray[i][3]))
              {
                if (blood.includes(dataArray[i][6])) 
                {
                 
                  for( var key in dataArray[i][7])
                  {


                    if ( convertToDate2( key ) >= convertToDate( startDate ) && convertToDate2( key ) <= convertToDate( endDate ) )
                    {
                      filterArray.push([convertToDate2( key ), dataArray[i][7][key]]);
                    }
                  }

                  for( var key1 in dataArray[i][8])
                  {

                    if ( convertToDate2( key1 ) >= convertToDate( startDate ) && convertToDate2( key1 ) <= convertToDate( endDate ) )
                    {
                      stepsArray.push([convertToDate2( key1 ), dataArray[i][8][key1]]);
                    }
                  }

                  for( var key2 in dataArray[i][9])
                  {
                    if ( convertToDate3( key2 ) >= convertToDate( startDate ) && convertToDate3( key2 ) <= convertToDate( endDate ) )
                    {
                      sleepArray.push([convertToDate3( key2 ), dataArray[i][9][key2]]);
                    }
                  }
                }
              }
            
          }


          //function drawC(data1 , title1, title2, minV1, maxV1, minV2, maxV2,flag)
          drawC(filterArray , "Date" ,"Heart Rate", convertToDate(startDate), convertToDate(endDate), 5);
          drawSteps(stepsArray , "Date" ,"Steps", convertToDate(startDate), convertToDate(endDate), 5);
          drawSleep(sleepArray , "Date" ,"Sleeping Hours", convertToDate(startDate), convertToDate(endDate), 5);
        }


        //////////// flag 6 //////////

        // age, gender, pregnant, weight, height, smoker //
          // all +  non preg  + not smoker


        else if (female == "true" &&  male == "true" && pregnant == "false" && notPregnant == "true" && smoker == "false" && notSmoker == "true" ) 
        {
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [["Date", "Heart Rate"]];
          var stepsArray = [["Date", "Steps"]];
          var sleepArray = [["Date", "Sleeping Hours"]];

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "false" == dataArray[i][2] && "false" == dataArray[i][5] && notSmoker == dataArray[i][5] && (heightMin <= dataArray[i][4] && heightMax >= dataArray[i][4]) && (weightMin <= dataArray[i][3] && weightMax >= dataArray[i][3]))
              {
                if (blood.includes(dataArray[i][6])) 
                {
                 
                  for( var key in dataArray[i][7])
                  {


                    if ( convertToDate2( key ) >= convertToDate( startDate ) && convertToDate2( key ) <= convertToDate( endDate ) )
                    {
                      filterArray.push([convertToDate2( key ), dataArray[i][7][key]]);
                    }
                  }

                  for( var key1 in dataArray[i][8])
                  {

                    if ( convertToDate2( key1 ) >= convertToDate( startDate ) && convertToDate2( key1 ) <= convertToDate( endDate ) )
                    {
                      stepsArray.push([convertToDate2( key1 ), dataArray[i][8][key1]]);
                    }
                  }

                  for( var key2 in dataArray[i][9])
                  {
                    if ( convertToDate3( key2 ) >= convertToDate( startDate ) && convertToDate3( key2 ) <= convertToDate( endDate ) )
                    {
                      sleepArray.push([convertToDate3( key2 ), dataArray[i][9][key2]]);
                    }
                  }
                }
              }
            
          }


          //function drawC(data1 , title1, title2, minV1, maxV1, minV2, maxV2,flag)
          drawC(filterArray , "Date" ,"Heart Rate", convertToDate(startDate), convertToDate(endDate), 6);
          drawSteps(stepsArray , "Date" ,"Steps", convertToDate(startDate), convertToDate(endDate), 6);
          drawSleep(sleepArray , "Date" ,"Sleeping Hours", convertToDate(startDate), convertToDate(endDate), 6);
        }

        ///////// flag 7 ///////////

        // age, gender, pregnant, weight, height, smoker //
          // all +  non preg  + smoker


        else if (female == "true" &&  male == "true" && pregnant == "false" && notPregnant == "true" && smoker == "true" && notSmoker == "false" ) 
        {

          console.log("enter flag 7 if")

          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [["Date", "Heart Rate"]];
          var stepsArray = [["Date", "Steps"]];
          var sleepArray = [["Date", "Sleeping Hours"]];

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "false" == dataArray[i][2] && "true" == dataArray[i][5]  && (heightMin <= dataArray[i][4] && heightMax >= dataArray[i][4]) && (weightMin <= dataArray[i][3] && weightMax >= dataArray[i][3]))
              {
                if (blood.includes(dataArray[i][6])) 
                {
                 
                  for( var key in dataArray[i][7])
                  {


                    if ( convertToDate2( key ) >= convertToDate( startDate ) && convertToDate2( key ) <= convertToDate( endDate ) )
                    {
                      filterArray.push([convertToDate2( key ), dataArray[i][7][key]]);
                    }
                  }

                  for( var key1 in dataArray[i][8])
                  {

                    if ( convertToDate2( key1 ) >= convertToDate( startDate ) && convertToDate2( key1 ) <= convertToDate( endDate ) )
                    {
                      stepsArray.push([convertToDate2( key1 ), dataArray[i][8][key1]]);
                    }
                  }

                  for( var key2 in dataArray[i][9])
                  {
                    if ( convertToDate3( key2 ) >= convertToDate( startDate ) && convertToDate3( key2 ) <= convertToDate( endDate ) )
                    {
                      sleepArray.push([convertToDate3( key2 ), dataArray[i][9][key2]]);
                    }
                  }
                }

              }
            
          }

          console.log(filterArray);


          //function drawC(data1 , title1, title2, minV1, maxV1, minV2, maxV2,flag)
          drawC(filterArray , "Date" ,"Heart Rate", convertToDate(startDate), convertToDate(endDate), 7);
          drawSteps(stepsArray , "Date" ,"Steps", convertToDate(startDate), convertToDate(endDate), 7);
          drawSleep(sleepArray , "Date" ,"Sleeping Hours", convertToDate(startDate), convertToDate(endDate), 7);
        }


        /////////////////       flaaaaaaag    8   ///////////////
                /// all ends here and female filter start 


          // age, gender, pregnant, weight, height, smoker //
          // female preg or not smoker or not height


        else if (female == "true" &&  male == "false" && pregnant == "true" && notPregnant == "true" && smoker == "true" && notSmoker == "true" ) 
        {

          

          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [["Date", "Heart Rate"]];
          var stepsArray = [["Date", "Steps"]];
          var sleepArray = [["Date", "Sleeping Hours"]];

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "female" == dataArray[i][1] && (heightMin <= dataArray[i][4] && heightMax >= dataArray[i][4]) && (weightMin <= dataArray[i][3] && weightMax >= dataArray[i][3]))
              {
                if (blood.includes(dataArray[i][6])) 
                {
                 
                  for( var key in dataArray[i][7])
                  {


                    if ( convertToDate2( key ) >= convertToDate( startDate ) && convertToDate2( key ) <= convertToDate( endDate ) )
                    {
                      filterArray.push([convertToDate2( key ), dataArray[i][7][key]]);
                    }
                  }

                  for( var key1 in dataArray[i][8])
                  {

                    if ( convertToDate2( key1 ) >= convertToDate( startDate ) && convertToDate2( key1 ) <= convertToDate( endDate ) )
                    {
                      stepsArray.push([convertToDate2( key1 ), dataArray[i][8][key1]]);
                    }
                  }

                  for( var key2 in dataArray[i][9])
                  {
                    if ( convertToDate3( key2 ) >= convertToDate( startDate ) && convertToDate3( key2 ) <= convertToDate( endDate ) )
                    {
                      sleepArray.push([convertToDate3( key2 ), dataArray[i][9][key2]]);
                    }
                  }
                }
              }
            
          }

          console.log(filterArray);


          //function drawC(data1 , title1, title2, minV1, maxV1, minV2, maxV2,flag)
          drawC(filterArray , "Date" ,"Heart Rate", convertToDate(startDate), convertToDate(endDate), 8);
          drawSteps(stepsArray , "Date" ,"Steps", convertToDate(startDate), convertToDate(endDate), 8);
          drawSleep(sleepArray , "Date" ,"Sleeping Hours", convertToDate(startDate), convertToDate(endDate), 8);
        }



        ////////////        flag  9       ///////////////

        // age, gender, pregnant, weight, height, smoker //
          // female preg or not+ smoker + height


        else if (female == "true" &&  male == "false" && pregnant == "true" && notPregnant == "true" && smoker == "true" && notSmoker == "false" ) 
        {
          console.log("entered  flag 9");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [["Date", "Heart Rate"]];
          var stepsArray = [["Date", "Steps"]];
          var sleepArray = [["Date", "Sleeping Hours"]];

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if ( "true" == dataArray[i][5]  && ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "female" == dataArray[i][1] && (heightMin <= dataArray[i][4] && heightMax >= dataArray[i][4]) && (weightMin <= dataArray[i][3] && weightMax >= dataArray[i][3]))
              {
               if (blood.includes(dataArray[i][6])) 
                {
                 
                  for( var key in dataArray[i][7])
                  {


                    if ( convertToDate2( key ) >= convertToDate( startDate ) && convertToDate2( key ) <= convertToDate( endDate ) )
                    {
                      filterArray.push([convertToDate2( key ), dataArray[i][7][key]]);
                    }
                  }

                  for( var key1 in dataArray[i][8])
                  {

                    if ( convertToDate2( key1 ) >= convertToDate( startDate ) && convertToDate2( key1 ) <= convertToDate( endDate ) )
                    {
                      stepsArray.push([convertToDate2( key1 ), dataArray[i][8][key1]]);
                    }
                  }

                  for( var key2 in dataArray[i][9])
                  {
                    if ( convertToDate3( key2 ) >= convertToDate( startDate ) && convertToDate3( key2 ) <= convertToDate( endDate ) )
                    {
                      sleepArray.push([convertToDate3( key2 ), dataArray[i][9][key2]]);
                    }
                  }
                }
              }
            
          }


          //function drawC(data1 , title1, title2, minV1, maxV1, minV2, maxV2,flag)
          drawC(filterArray , "Date" ,"Heart Rate", convertToDate(startDate), convertToDate(endDate), 9);
          drawSteps(stepsArray , "Date" ,"Steps", convertToDate(startDate), convertToDate(endDate), 9);
          drawSleep(sleepArray , "Date" ,"Sleeping Hours", convertToDate(startDate), convertToDate(endDate), 9);
        }


        ////////////        flag  10       ///////////////
       
       // age, gender, pregnant, weight, height, smoker //
          // female preg or not+ not smoker + height


        else if (female == "true" &&  male == "false" && pregnant == "true" && notPregnant == "true" && smoker == "false" && notSmoker == "true" ) 
        {
          console.log("entered  flag 10");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [["Date", "Heart Rate"]];
          var stepsArray = [["Date", "Steps"]];
          var sleepArray = [["Date", "Sleeping Hours"]];

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if ( "false" == dataArray[i][5] && ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "female" == dataArray[i][1] && (heightMin <= dataArray[i][4] && heightMax >= dataArray[i][4]) && (weightMin <= dataArray[i][3] && weightMax >= dataArray[i][3]) )
              {
                if (blood.includes(dataArray[i][6])) 
                {
                 
                  for( var key in dataArray[i][7])
                  {


                    if ( convertToDate2( key ) >= convertToDate( startDate ) && convertToDate2( key ) <= convertToDate( endDate ) )
                    {
                      filterArray.push([convertToDate2( key ), dataArray[i][7][key]]);
                    }
                  }

                  for( var key1 in dataArray[i][8])
                  {

                    if ( convertToDate2( key1 ) >= convertToDate( startDate ) && convertToDate2( key1 ) <= convertToDate( endDate ) )
                    {
                      stepsArray.push([convertToDate2( key1 ), dataArray[i][8][key1]]);
                    }
                  }

                  for( var key2 in dataArray[i][9])
                  {
                    if ( convertToDate3( key2 ) >= convertToDate( startDate ) && convertToDate3( key2 ) <= convertToDate( endDate ) )
                    {
                      sleepArray.push([convertToDate3( key2 ), dataArray[i][9][key2]]);
                    }
                  }
                }
              }
            
          }


          //function drawC(data1 , title1, title2, minV1, maxV1, minV2, maxV2,flag)
          drawC(filterArray , "Date" ,"Heart Rate", convertToDate(startDate), convertToDate(endDate), 10);
          drawSteps(stepsArray , "Date" ,"Steps", convertToDate(startDate), convertToDate(endDate), 10);
          drawSleep(sleepArray , "Date" ,"Sleeping Hours", convertToDate(startDate), convertToDate(endDate), 10);
        }


        ////////////        flag  11       ///////////////
       
       // age, gender, pregnant, weight, height, smoker //
          // female nonpreg+ height + smoker


        else if (female == "true" &&  male == "false" && pregnant == "false" && notPregnant == "true" && smoker == "true" && notSmoker == "false" ) 
        {
          console.log("entered  flag 11");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [["Date", "Heart Rate"]];
          var stepsArray = [["Date", "Steps"]];
          var sleepArray = [["Date", "Sleeping Hours"]];

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if ("true" == dataArray[i][5] && "false" == dataArray[i][2] && ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "female" == dataArray[i][1] && (heightMin <= dataArray[i][4] && heightMax >= dataArray[i][4]) && (weightMin <= dataArray[i][3] && weightMax >= dataArray[i][3]) )
              {
               if (blood.includes(dataArray[i][6])) 
                {
                 
                  for( var key in dataArray[i][7])
                  {


                    if ( convertToDate2( key ) >= convertToDate( startDate ) && convertToDate2( key ) <= convertToDate( endDate ) )
                    {
                      filterArray.push([convertToDate2( key ), dataArray[i][7][key]]);
                    }
                  }

                  for( var key1 in dataArray[i][8])
                  {

                    if ( convertToDate2( key1 ) >= convertToDate( startDate ) && convertToDate2( key1 ) <= convertToDate( endDate ) )
                    {
                      stepsArray.push([convertToDate2( key1 ), dataArray[i][8][key1]]);
                    }
                  }

                  for( var key2 in dataArray[i][9])
                  {
                    if ( convertToDate3( key2 ) >= convertToDate( startDate ) && convertToDate3( key2 ) <= convertToDate( endDate ) )
                    {
                      sleepArray.push([convertToDate3( key2 ), dataArray[i][9][key2]]);
                    }
                  }
                }
              }
            
          }


          //function drawC(data1 , title1, title2, minV1, maxV1, minV2, maxV2,flag)
          drawC(filterArray , "Date" ,"Heart Rate", convertToDate(startDate), convertToDate(endDate), 11);
          drawSteps(stepsArray , "Date" ,"Steps", convertToDate(startDate), convertToDate(endDate), 11);
          drawSleep(sleepArray , "Date" ,"Sleeping Hours", convertToDate(startDate), convertToDate(endDate), 11);
        }



        ////////////        flag  12       ///////////////
       
       // age, gender, pregnant, weight, height, smoker //
          // female nonpreg+ not smoker + height


        else if (female == "true" &&  male == "false" && pregnant == "false" && notPregnant == "true" && smoker == "false" && notSmoker == "true" ) 
        {
          console.log("entered  flag 12");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [["Date", "Heart Rate"]];
          var stepsArray = [["Date", "Steps"]];
          var sleepArray = [["Date", "Sleeping Hours"]];

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if ( "false" == dataArray[i][5] && "false" == dataArray[i][2] && ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "female" == dataArray[i][1] && (heightMin <= dataArray[i][4] && heightMax >= dataArray[i][4]) && (weightMin <= dataArray[i][3] && weightMax >= dataArray[i][3]) )
              {
                if (blood.includes(dataArray[i][6])) 
                {
                 
                  for( var key in dataArray[i][7])
                  {


                    if ( convertToDate2( key ) >= convertToDate( startDate ) && convertToDate2( key ) <= convertToDate( endDate ) )
                    {
                      filterArray.push([convertToDate2( key ), dataArray[i][7][key]]);
                    }
                  }

                  for( var key1 in dataArray[i][8])
                  {

                    if ( convertToDate2( key1 ) >= convertToDate( startDate ) && convertToDate2( key1 ) <= convertToDate( endDate ) )
                    {
                      stepsArray.push([convertToDate2( key1 ), dataArray[i][8][key1]]);
                    }
                  }

                  for( var key2 in dataArray[i][9])
                  {
                    if ( convertToDate3( key2 ) >= convertToDate( startDate ) && convertToDate3( key2 ) <= convertToDate( endDate ) )
                    {
                      sleepArray.push([convertToDate3( key2 ), dataArray[i][9][key2]]);
                    }
                  }
                }
              }
            
          }


          //function drawC(data1 , title1, title2, minV1, maxV1, minV2, maxV2,flag)
          drawC(filterArray , "Date" ,"Heart Rate", convertToDate(startDate), convertToDate(endDate), 12);
          drawSteps(stepsArray , "Date" ,"Steps", convertToDate(startDate), convertToDate(endDate), 12);
          drawSleep(sleepArray , "Date" ,"Sleeping Hours", convertToDate(startDate), convertToDate(endDate), 12);
        }


        ////////////        flag  13       ///////////////
       
       // age, gender, pregnant, weight, height, smoker //
          // female nonpreg+  smoker + height + not smoker


        else if (female == "true" &&  male == "false" && pregnant == "false" && notPregnant == "true" && smoker == "true" && notSmoker == "true" ) 
        {
          console.log("entered  flag 13");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [["Date", "Heart Rate"]];
          var stepsArray = [["Date", "Steps"]];
          var sleepArray = [["Date", "Sleeping Hours"]];

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if ( "false" == dataArray[i][2] && ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "female" == dataArray[i][1] && (heightMin <= dataArray[i][4] && heightMax >= dataArray[i][4]) && (weightMin <= dataArray[i][3] && weightMax >= dataArray[i][3]))
              {
                if (blood.includes(dataArray[i][6])) 
                {
                 
                  for( var key in dataArray[i][7])
                  {


                    if ( convertToDate2( key ) >= convertToDate( startDate ) && convertToDate2( key ) <= convertToDate( endDate ) )
                    {
                      filterArray.push([convertToDate2( key ), dataArray[i][7][key]]);
                    }
                  }

                  for( var key1 in dataArray[i][8])
                  {

                    if ( convertToDate2( key1 ) >= convertToDate( startDate ) && convertToDate2( key1 ) <= convertToDate( endDate ) )
                    {
                      stepsArray.push([convertToDate2( key1 ), dataArray[i][8][key1]]);
                    }
                  }

                  for( var key2 in dataArray[i][9])
                  {
                    if ( convertToDate3( key2 ) >= convertToDate( startDate ) && convertToDate3( key2 ) <= convertToDate( endDate ) )
                    {
                      sleepArray.push([convertToDate3( key2 ), dataArray[i][9][key2]]);
                    }
                  }
                }
              }
            
          }


          //function drawC(data1 , title1, title2, minV1, maxV1, minV2, maxV2,flag)
          drawC(filterArray , "Date" ,"Heart Rate", convertToDate(startDate), convertToDate(endDate), 13);
          drawSteps(stepsArray , "Date" ,"Steps", convertToDate(startDate), convertToDate(endDate), 13);
          drawSleep(sleepArray , "Date" ,"Sleeping Hours", convertToDate(startDate), convertToDate(endDate), 13);
        }


        ////////////        flag  14       ///////////////
       
       // age, gender, pregnant, weight, height, smoker //
          // female preg+ not smoker + height + smoker


        else if (female == "true" &&  male == "false" && pregnant == "true" && notPregnant == "false" && smoker == "true" && notSmoker == "true" ) 
        {
          console.log("entered  flag 14");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [["Date", "Heart Rate"]];
          var stepsArray = [["Date", "Steps"]];
          var sleepArray = [["Date", "Sleeping Hours"]];

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if ( "true" == dataArray[i][2] && ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "female" == dataArray[i][1] && (heightMin <= dataArray[i][4] && heightMax >= dataArray[i][4]) && (weightMin <= dataArray[i][3] && weightMax >= dataArray[i][3]) )
              {
                if (blood.includes(dataArray[i][6])) 
                {
                 
                  for( var key in dataArray[i][7])
                  {


                    if ( convertToDate2( key ) >= convertToDate( startDate ) && convertToDate2( key ) <= convertToDate( endDate ) )
                    {
                      filterArray.push([convertToDate2( key ), dataArray[i][7][key]]);
                    }
                  }

                  for( var key1 in dataArray[i][8])
                  {

                    if ( convertToDate2( key1 ) >= convertToDate( startDate ) && convertToDate2( key1 ) <= convertToDate( endDate ) )
                    {
                      stepsArray.push([convertToDate2( key1 ), dataArray[i][8][key1]]);
                    }
                  }

                  for( var key2 in dataArray[i][9])
                  {
                    if ( convertToDate3( key2 ) >= convertToDate( startDate ) && convertToDate3( key2 ) <= convertToDate( endDate ) )
                    {
                      sleepArray.push([convertToDate3( key2 ), dataArray[i][9][key2]]);
                    }
                  }
                }
              }
            
          }


          //function drawC(data1 , title1, title2, minV1, maxV1, minV2, maxV2,flag)
          drawC(filterArray , "Date" ,"Heart Rate", convertToDate(startDate), convertToDate(endDate), 14);
          drawSteps(stepsArray , "Date" ,"Steps", convertToDate(startDate), convertToDate(endDate), 14);
          drawSleep(sleepArray , "Date" ,"Sleeping Hours", convertToDate(startDate), convertToDate(endDate), 14);
        }


        ////////////        flag  15       ///////////////
       
       // age, gender, pregnant, weight, height, smoker //
          // female preg+ not smoker + height


        else if (female == "true" &&  male == "false" && pregnant == "true" && notPregnant == "false" && smoker == "false" && notSmoker == "true" ) 
        {
          console.log("entered  flag 15");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [["Date", "Heart Rate"]];
          var stepsArray = [["Date", "Steps"]];
          var sleepArray = [["Date", "Sleeping Hours"]];

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if ("false" == dataArray[i][5] && "true" == dataArray[i][2] && ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "female" == dataArray[i][1] && (heightMin <= dataArray[i][4] && heightMax >= dataArray[i][4]) && (weightMin <= dataArray[i][3] && weightMax >= dataArray[i][3]))
              {
                if (blood.includes(dataArray[i][6])) 
                {
                 
                  for( var key in dataArray[i][7])
                  {


                    if ( convertToDate2( key ) >= convertToDate( startDate ) && convertToDate2( key ) <= convertToDate( endDate ) )
                    {
                      filterArray.push([convertToDate2( key ), dataArray[i][7][key]]);
                    }
                  }

                  for( var key1 in dataArray[i][8])
                  {

                    if ( convertToDate2( key1 ) >= convertToDate( startDate ) && convertToDate2( key1 ) <= convertToDate( endDate ) )
                    {
                      stepsArray.push([convertToDate2( key1 ), dataArray[i][8][key1]]);
                    }
                  }

                  for( var key2 in dataArray[i][9])
                  {
                    if ( convertToDate3( key2 ) >= convertToDate( startDate ) && convertToDate3( key2 ) <= convertToDate( endDate ) )
                    {
                      sleepArray.push([convertToDate3( key2 ), dataArray[i][9][key2]]);
                    }
                  }
                }
              }
            
          }


          //function drawC(data1 , title1, title2, minV1, maxV1, minV2, maxV2,flag)
          drawC(filterArray , "Date" ,"Heart Rate", convertToDate(startDate), convertToDate(endDate), 15);
          drawSteps(stepsArray , "Date" ,"Steps", convertToDate(startDate), convertToDate(endDate), 15);
          drawSleep(sleepArray , "Date" ,"Sleeping Hours", convertToDate(startDate), convertToDate(endDate), 15);
        }


        ////////////        flag  16       ///////////////
       
       // age, gender, pregnant, weight, height, smoker //
          // female preg+  smoker + height


        else if (female == "true" &&  male == "false" && pregnant == "true" && notPregnant == "false" && smoker == "true" && notSmoker == "false" ) 
        {
          console.log("entered  flag 16");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [["Date", "Heart Rate"]];
          var stepsArray = [["Date", "Steps"]];
          var sleepArray = [["Date", "Sleeping Hours"]];

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if ("true" == dataArray[i][5] && "true" == dataArray[i][2] && ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "female" == dataArray[i][1] && (heightMin <= dataArray[i][4] && heightMax >= dataArray[i][4]) && (weightMin <= dataArray[i][3] && weightMax >= dataArray[i][3]))
              {
               if (blood.includes(dataArray[i][6])) 
                {
                 
                  for( var key in dataArray[i][7])
                  {


                    if ( convertToDate2( key ) >= convertToDate( startDate ) && convertToDate2( key ) <= convertToDate( endDate ) )
                    {
                      filterArray.push([convertToDate2( key ), dataArray[i][7][key]]);
                    }
                  }

                  for( var key1 in dataArray[i][8])
                  {

                    if ( convertToDate2( key1 ) >= convertToDate( startDate ) && convertToDate2( key1 ) <= convertToDate( endDate ) )
                    {
                      stepsArray.push([convertToDate2( key1 ), dataArray[i][8][key1]]);
                    }
                  }

                  for( var key2 in dataArray[i][9])
                  {
                    if ( convertToDate3( key2 ) >= convertToDate( startDate ) && convertToDate3( key2 ) <= convertToDate( endDate ) )
                    {
                      sleepArray.push([convertToDate3( key2 ), dataArray[i][9][key2]]);
                    }
                  }
                }
              }
            
          }


          //function drawC(data1 , title1, title2, minV1, maxV1, minV2, maxV2,flag)
          drawC(filterArray , "Date" ,"Heart Rate", convertToDate(startDate), convertToDate(endDate), 16);
          drawSteps(stepsArray , "Date" ,"Steps", convertToDate(startDate), convertToDate(endDate), 16);
          drawSleep(sleepArray , "Date" ,"Sleeping Hours", convertToDate(startDate), convertToDate(endDate), 16);
        }


        //////////////////       male  + height  starts   ////////////////////////


        ////////////        flag  17       ///////////////
       
       // age, gender, pregnant, weight, height, smoker //
          // male all


        else if (female == "false" &&  male == "true" && smoker == "true" && notSmoker == "true" ) 
        {
          console.log("entered  flag 17");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [["Date", "Heart Rate"]];
          var stepsArray = [["Date", "Steps"]];
          var sleepArray = [["Date", "Sleeping Hours"]];

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "male" == dataArray[i][1] && (heightMin <= dataArray[i][4] && heightMax >= dataArray[i][4]) && (weightMin <= dataArray[i][3] && weightMax >= dataArray[i][3]))
              {
                if (blood.includes(dataArray[i][6])) 
                {
                 
                  for( var key in dataArray[i][7])
                  {


                    if ( convertToDate2( key ) >= convertToDate( startDate ) && convertToDate2( key ) <= convertToDate( endDate ) )
                    {
                      filterArray.push([convertToDate2( key ), dataArray[i][7][key]]);
                    }
                  }

                  for( var key1 in dataArray[i][8])
                  {

                    if ( convertToDate2( key1 ) >= convertToDate( startDate ) && convertToDate2( key1 ) <= convertToDate( endDate ) )
                    {
                      stepsArray.push([convertToDate2( key1 ), dataArray[i][8][key1]]);
                    }
                  }

                  for( var key2 in dataArray[i][9])
                  {
                    if ( convertToDate3( key2 ) >= convertToDate( startDate ) && convertToDate3( key2 ) <= convertToDate( endDate ) )
                    {
                      sleepArray.push([convertToDate3( key2 ), dataArray[i][9][key2]]);
                    }
                  }
                }
              }
            
          }

            console.log(filterArray);

          //function drawC(data1 , title1, title2, minV1, maxV1, minV2, maxV2,flag)
          drawC(filterArray , "Date" ,"Heart Rate", convertToDate(startDate), convertToDate(endDate), 17);
          drawSteps(stepsArray , "Date" ,"Steps", convertToDate(startDate), convertToDate(endDate), 17);
          drawSleep(sleepArray , "Date" ,"Sleeping Hours", convertToDate(startDate), convertToDate(endDate), 17);
        }


        ////////////        flag  18       ///////////////
       
       // age, gender, pregnant, weight, height, smoker //
          // male + smoker + height


        else if (female == "false" &&  male == "true" &&  smoker == "true" && notSmoker == "false" ) 
        {
          console.log("entered  flag 18");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [["Date", "Heart Rate"]];
          var stepsArray = [["Date", "Steps"]];
          var sleepArray = [["Date", "Sleeping Hours"]];

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if ("true" == dataArray[i][5] && ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "male" == dataArray[i][1] && (heightMin <= dataArray[i][4] && heightMax >= dataArray[i][4]) && (weightMin <= dataArray[i][3] && weightMax >= dataArray[i][3]) )
              {
               if (blood.includes(dataArray[i][6])) 
                {
                 
                  for( var key in dataArray[i][7])
                  {


                    if ( convertToDate2( key ) >= convertToDate( startDate ) && convertToDate2( key ) <= convertToDate( endDate ) )
                    {
                      filterArray.push([convertToDate2( key ), dataArray[i][7][key]]);
                    }
                  }

                  for( var key1 in dataArray[i][8])
                  {

                    if ( convertToDate2( key1 ) >= convertToDate( startDate ) && convertToDate2( key1 ) <= convertToDate( endDate ) )
                    {
                      stepsArray.push([convertToDate2( key1 ), dataArray[i][8][key1]]);
                    }
                  }

                  for( var key2 in dataArray[i][9])
                  {
                    if ( convertToDate3( key2 ) >= convertToDate( startDate ) && convertToDate3( key2 ) <= convertToDate( endDate ) )
                    {
                      sleepArray.push([convertToDate3( key2 ), dataArray[i][9][key2]]);
                    }
                  }
                }
              }
            
          }

          console.log(filterArray);
         //function drawC(data1 , title1, title2, minV1, maxV1, minV2, maxV2,flag)
          drawC(filterArray , "Date" ,"Heart Rate", convertToDate(startDate), convertToDate(endDate), 18);
          drawSteps(stepsArray , "Date" ,"Steps", convertToDate(startDate), convertToDate(endDate), 18);
          drawSleep(sleepArray , "Date" ,"Sleeping Hours", convertToDate(startDate), convertToDate(endDate), 18);
        }



        ////////////        flag  19       ///////////////
       
       // age, gender, pregnant, weight, height, smoker //
          // male + smoker + height


        else if (female == "false" &&  male == "true" &&  smoker == "false" && notSmoker == "true" ) 
        {
          console.log("entered  flag 37");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [["Date", "Heart Rate"]];
          var stepsArray = [["Date", "Steps"]];
          var sleepArray = [["Date", "Sleeping Hours"]];

          for(let i = 0; i< dataArray.length; i++)
          {
                      /*data array  [ 0 age, 1 gender, 2 preg, 3 weight, 4 height, 5 smoker, 6 bloodtype, 7 hr, 8 steps, 9 sleep ]*/

            
              if ("false" == dataArray[i][5] && ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "male" == dataArray[i][1] && (heightMin <= dataArray[i][4] && heightMax >= dataArray[i][4]) && (weightMin <= dataArray[i][3] && weightMax >= dataArray[i][3]) )
              {
                if (blood.includes(dataArray[i][6])) 
                {
                 
                  for( var key in dataArray[i][7])
                  {


                    if ( convertToDate2( key ) >= convertToDate( startDate ) && convertToDate2( key ) <= convertToDate( endDate ) )
                    {
                      filterArray.push([convertToDate2( key ), dataArray[i][7][key]]);
                    }
                  }

                  for( var key1 in dataArray[i][8])
                  {

                    if ( convertToDate2( key1 ) >= convertToDate( startDate ) && convertToDate2( key1 ) <= convertToDate( endDate ) )
                    {
                      stepsArray.push([convertToDate2( key1 ), dataArray[i][8][key1]]);
                    }
                  }

                  for( var key2 in dataArray[i][9])
                  {
                    if ( convertToDate3( key2 ) >= convertToDate( startDate ) && convertToDate3( key2 ) <= convertToDate( endDate ) )
                    {
                      sleepArray.push([convertToDate3( key2 ), dataArray[i][9][key2]]);
                    }
                  }
                }
              }
            
          }

          console.log(filterArray);
          //function drawC(data1 , title1, title2, minV1, maxV1, minV2, maxV2,flag)
          drawC(filterArray , "Date" ,"Heart Rate", convertToDate(startDate), convertToDate(endDate), 19);
          drawSteps(stepsArray , "Date" ,"Steps", convertToDate(startDate), convertToDate(endDate), 19);
          drawSleep(sleepArray , "Date" ,"Sleeping Hours", convertToDate(startDate), convertToDate(endDate), 19);
        }
     

      }

        
      
      else
      {
          alert("Please Pick at Least one of each filter filter");
          console.log("Entered the Else Condition");
       }

       userPropForm.reset();

      
 });
  



    /////////// checking form has at least one element 


    function checkingForm()
    {

      var blodcheck  = document.getElementsByClassName('blood');
      var blood = [];

      for( let i = 0; i < 8 ; i ++)
        {
          if (blodcheck[i].checked == true) 
          {
            blood.push(blodcheck[i].value);
          }
        }

      var x, y, z, a, b, c, d, e;
      if ( x =  (userPropForm['female'].checked == null && userPropForm['male'].checked == null ) )
      {
        console.log(x);
        alert("Check Gender Input");
        return false;
      }

      else if ( y =  (userPropForm['smoker'].checked == null && userPropForm['notSmoker'].checked == null ) )
      {
        console.log(y);
        alert("Check smocking Input");
        return false;
      }

      else if ( z =  (userPropForm['ageMin'].value == null || userPropForm['ageMax'].value == null ) )
      {
        console.log(z);
        alert("Check Age input");
        return false;
      }

      else if ( a =  (userPropForm['ageMin'].checked > userPropForm['ageMax'].value) )
      {
        console.log(a);
        alert("Make sure age Maximum is bigger then Minimum");
        return false;
      }

      else if ( b =  (userPropForm['heightMin'].value == null || userPropForm['heightMax'].value == null ) )
      {
        console.log(b);
        alert("Check Height Input");
        return false;
      }

      else if ( c =  (userPropForm['heightMin'].checked > userPropForm['heightMax'].value) )
      {
        console.log(c);
        alert("Make Sure Height Maximum is bigger then height Minimum");
        return false;
      }

      else if ( d =  (userPropForm['weightMin'].value == null || userPropForm['weightMax'].value == null ) )
      {
        console.log(d);
        alert("Check Weight Input");
        return false;
      }

      else if ( a =  (userPropForm['weightMin'].checked > userPropForm['weightMax'].value) )
      {
        console.log(a);
        alert("Make Sure Weight maximum is bigger the weight Minimum");
        return false;
      }

      else if ( blood.length < 1)
      {
        alert("Please pick at least 1 blood type");
        return false;
      }

      else
      {
        return true;
      }

    }
   

    /////////// start  data gathering /////////////////

    function prepareDate()
    {
      console.log("preparing data started");
      console.log(dataArray);

      db.collection('Patient').get().then( (snapshot) => {
      snapshot.docs.forEach( doc => {

        if(doc.data().dob == "null")
        {
          var x = "4/28/1971";
          var temp = (doc.data().dob).split('/');
          dob = new Date(Number(temp[2]), Number(temp[1]) - 1, Number(temp[0]));
          var diff_ms = Date.now() - dob.getTime();
          var age_dt = new Date(diff_ms);
          var cAge = Math.abs(age_dt.getUTCFullYear() - 1970);
        }

        else
        {
          var temp = (doc.data().dob).split('/');
          dob = new Date(Number(temp[2]), Number(temp[1]), Number(temp[0]));
          var diff_ms = Date.now() - dob.getTime();
          var age_dt = new Date(diff_ms);
          var cAge = Math.abs(age_dt.getUTCFullYear() - 1970);
        }

        
      if( doc.data().hr !== undefined && doc.data().steps !== undefined && doc.data().sleep !== undefined)
      {
        dataArray.push([
            cAge,
            doc.data().gender,
            doc.data().pregnant,
            doc.data().weight,
            doc.data().height,
            doc.data().smoker,
            doc.data().bloodtype,
            doc.data().hr,
            doc.data().steps,
            doc.data().sleep
            ]);
      }

      })

      console.log("dataArray after gtting data");
      console.log(dataArray);

    })
    }


    /////////// drawing function ////////

    function drawC(data1 , title1, title2, minV1, maxV1,flag)
    {
      
      if (data1.length == 1 || data1.length == 0) {
        alert("no data Found");
        console.log("not found fired from flag: "+flag);
        return;
      }

        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);


        function drawChart() {

        var data = google.visualization.arrayToDataTable(data1);

        var options = {
          title: title1+' vs. '+title2+' comparison',
          hAxis: {title: title1, minValue: minV1, maxValue: maxV1},
          vAxis: {title: title2, minValue: 0, maxValue:220},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }
      console.log(data1);

      console.log(flag);
  }

  function drawSteps(data1 , title1, title2, minV1, maxV1, flag)
    {
      
      if (data1.length == 1 || data1.length == 0) {
        alert("no data Found");
        console.log("not found fired from flag: "+flag);
        return;
      }

        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);


        function drawChart() {

        var data = google.visualization.arrayToDataTable(data1);

        var options = {
          title: title1+' vs. '+title2+' comparison',
          hAxis: {title: title1, minValue: minV1, maxValue: maxV1},
          vAxis: {title: title2, minValue: 0, maxValue:2000},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('chart_steps'));

        chart.draw(data, options);
      }
      console.log(data1);

      console.log(flag);
  }

  function drawSleep(data1 , title1, title2, minV1, maxV1, flag)
    {
      
      if (data1.length == 1 || data1.length == 0) {
        alert("no data Found");
        console.log("not found fired from flag: "+flag);
        return;
      }

        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);


        function drawChart() {

        var data = google.visualization.arrayToDataTable(data1);

        var options = {
          title: title1+' vs. '+title2+' comparison',
          hAxis: {title: title1, minValue: minV1, maxValue: maxV1},
          vAxis: {title: title2, minValue: 0, maxValue: 36},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('chart_sleep'));

        chart.draw(data, options);
      }
      console.log(data1);

      console.log(flag);
  }



function convertToDate( string )
{
  
  var temp = string.split('-');
  var v = new Date(Number(temp[0]), Number(temp[1]) - 1, Number(temp[2]));
  return v;
}

function convertToDate2( string )
{

  var temp2 = string.split(' ');
  var temp = temp2[0].split('/');
  var v = new Date(Number(temp[0]), Number(temp[1]) - 1, Number(temp[2]));
  return v;
}

function convertToDate3(string)
{
  var mon = ["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  var temp = string.split("-");
  var v = new Date(Number(temp[2]),mon.indexOf(temp[1]), Number(temp[0]));
  return v;
    
}

function convertDate(x)
{
  var formated = x.getDate()+"/"+(x.getMonth()+1)+"/"+x.getFullYear();
  return formated;
}

function logout()
{
    auth.signOut().then(function()
    {
        sessionStorage.setItem('status','loggedOut');
        window.location.replace("index.html");
    }, function(error)
    {
        console.log("Error in logout");
    });
}

function emergency()
{
    window.location.replace("sos.html");
}

function home()
{
    window.location.replace("profile.html");
}

function community()
{
    window.location.replace("community.html");
}
