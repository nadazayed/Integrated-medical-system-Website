/*
      //////     Flag 19     //////////
 if (female == "true" &&  male == "true" && pregnant == "true" && notPregnant == "true" && smoker == "true" && notSmoker == "true" && weight == true ) 
  console.log("we entered all");
        {
          //data array  [age, gender, preg, weight, height,smoker ]
          var filterArray = [];
          console.log("after setting fillter array");
          filterArray.push(["Age","Weight"]);
         
          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && HWMin <= dataArray[i][3] && HWMax >= dataArray[i][3])
              {
                filterArray.push([parseInt(dataArray[i][0]), parseInt(dataArray[i][3])]);
              }
            
          }

          console.log("filer array after population");
          console.log(filterArray);

          console.log(" i am fired from flag  19");
          drawC(filterArray , "Age" ,"Height", 19);
        }
*/

        //////     Flag 20     //////////

         // age, gender, pregnant, weight, height, smoker //
          // all + preg + smoker + not smoker 


        if (female == "true" &&  male == "true" && pregnant == "true" && notPregnant == "false" && smoker == "true" && notSmoker == "true" && height == true ) 
        {
          console.log("Enter Flag 20");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [];
          filterArray.push(["Age","Height"]);


          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && pregnant == dataArray[i][2] && HWMin <= dataArray[i][3] && HWMax >= dataArray[i][3])
              {
                filterArray.push([parseInt(dataArray[i][0]), parseInt(dataArray[i][3])]);
              }
            
          }


          drawC(filterArray , "Age" ,"Weight", 20);

        
        }

        ///////////// flag 21 ///////////

        // age, gender, pregnant, weight, height, smoker //
          // all + preg + smoker 


        if (female == "true" &&  male == "true" && pregnant == "true" && notPregnant == "false" && smoker == "true" && notSmoker == "false" && weight == true ) 
        {
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [];
          filterArray.push(["Age","Weight"]);

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && pregnant == dataArray[i][2] && smoker == dataArray[i][5] && HWMin <= dataArray[i][3] && HWMax >= dataArray[i][3])
              {
                filterArray.push([parseInt(dataArray[i][0]), parseInt(dataArray[i][3])]);
              }
            
          }


          drawC(filterArray , "Age" ,"Weight", 21);
        }


        //////////   flaaag 22   //////////////

        // age, gender, pregnant, weight, height, smoker //
          // all + preg + not smoker 


        if (female == "true" &&  male == "true" && pregnant == "true" && notPregnant == "false" && smoker == "false" && notSmoker == "true" && weight == true ) 
        {
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [];
          filterArray.push(["Age","Weight"]);

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && pregnant == dataArray[i][2] && notSmoker == dataArray[i][5] && HWMin <= dataArray[i][3] && HWMax >= dataArray[i][3])
              {
                filterArray.push([parseInt(dataArray[i][0]), parseInt(dataArray[i][3])]);
              }
            
          }


          drawC(filterArray , "Age" ,"Weight", 22);
        }

         ////////////// all + preg ends here ////////////


         //////////  flaag 23  ////////////////


        // age, gender, pregnant, weight, height, smoker //
          // all +  non preg + smoker + not smoker


        if (female == "true" &&  male == "true" && pregnant == "false" && notPregnant == "true" && smoker == "true" && notSmoker == "true" && weight == true ) 
        {
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [];
          filterArray.push(["Age","Weight"]);

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && notPregnant == dataArray[i][2] && HWMin <= dataArray[i][3] && HWMax >= dataArray[i][3])
              {
                filterArray.push([parseInt(dataArray[i][0]), parseInt(dataArray[i][3])]);
              }
            
          }


          drawC(filterArray , "Age" ,"Weight", 23);
        }


        //////////// flag 24 //////////

        // age, gender, pregnant, weight, height, smoker //
          // all +  non preg  + not smoker


        if (female == "true" &&  male == "true" && pregnant == "false" && notPregnant == "true" && smoker == "false" && notSmoker == "true" && weight == true ) 
        {
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [];
          filterArray.push(["Age","Weight"]);

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && notPregnant == dataArray[i][2] && notSmoker == dataArray[i][5] && notSmoker == dataArray[i][5] && HWMin <= dataArray[i][4] && HWMax >= dataArray[3][3])
              {
                filterArray.push([parseInt(dataArray[i][0]), parseInt(dataArray[i][3])]);
              }
            
          }


          drawC(filterArray , "Age" ,"Height", 24);
        }

        ///////// flag 25 ///////////

        // age, gender, pregnant, weight, height, smoker //
          // all +  non preg  + smoker


        if (female == "true" &&  male == "true" && pregnant == "false" && notPregnant == "true" && smoker == "true" && notSmoker == "false" && weight == true ) 
        {

          console.log("enter flag 7 if")

          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [];
          filterArray.push(["Age","Weight"]);

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && notPregnant == dataArray[i][2] && smoker == dataArray[i][5]  && HWMin <= dataArray[i][3] && HWMax >= dataArray[i][3])
              {
                filterArray.push([parseInt(dataArray[i][0]), parseInt(dataArray[i][3])]);

              }
            
          }

          console.log(filterArray);


          drawC(filterArray , "Age" ,"Weight", 25);
        }


        /////////////////       flaaaaaaag    26   ///////////////
                /// all ends here and female filter start 


          // age, gender, pregnant, weight, height, smoker //
          // female preg or not smoker or not height


        if (female == "true" &&  male == "false" && pregnant == "true" && notPregnant == "true" && smoker == "true" && notSmoker == "true" && weight == true ) 
        {

          

          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [];
          filterArray.push(["Age","Weight"]);

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "female" == dataArray[i][1] && HWMin <= dataArray[i][3] && HWMax >= dataArray[i][3])
              {
                filterArray.push([parseInt(dataArray[i][0]), parseInt(dataArray[i][3])]);
              }
            
          }

          console.log(filterArray);


          drawC(filterArray , "Age" ,"Weight", 26);
        }



        ////////////        flag  27       ///////////////

        // age, gender, pregnant, weight, height, smoker //
          // female preg or not+ smoker + height


        if (female == "true" &&  male == "false" && pregnant == "true" && notPregnant == "true" && smoker == "true" && notSmoker == "false" && weight == true ) 
        {
          console.log("entered  flag 27");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [];
          filterArray.push(["Age","Weight"]);

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if ( smoker == dataArray[i][5]  && ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "female" == dataArray[i][1] && HWMin <= dataArray[i][3] && HWMax >= dataArray[i][3])
              {
                filterArray.push([parseInt(dataArray[i][0]), parseInt(dataArray[i][3])]);
              }
            
          }


          drawC(filterArray , "Age" ,"Height", 27);
        }


        ////////////        flag  28       ///////////////
       
       // age, gender, pregnant, weight, height, smoker //
          // female preg or not+ not smoker + height


        if (female == "true" &&  male == "false" && pregnant == "true" && notPregnant == "true" && smoker == "false" && notSmoker == "true" && weight == true ) 
        {
          console.log("entered  flag 28");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [];
          filterArray.push(["Age","Height"]);

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if ( notSmoker == dataArray[i][5] && ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "female" == dataArray[i][1] && HWMin <= dataArray[i][3] && HWMax >= dataArray[i][3] )
              {
                filterArray.push([parseInt(dataArray[i][0]), parseInt(dataArray[i][3])]);
              }
            
          }


          drawC(filterArray , "Age" ,"Height", 28);
        }


        ////////////        flag  29       ///////////////
       
       // age, gender, pregnant, weight, height, smoker //
          // female nonpreg+ height + smoker


        if (female == "true" &&  male == "false" && pregnant == "false" && notPregnant == "true" && smoker == "true" && notSmoker == "false" && weight == true ) 
        {
          console.log("entered  flag 11");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [];
          filterArray.push(["Age","Weight"]);

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (smoker == dataArray[i][5] && notPregnant == dataArray[i][2] && ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "female" == dataArray[i][1] && HWMin <= dataArray[i][3] && HWMax >= dataArray[i][3] )
              {
                filterArray.push([parseInt(dataArray[i][0]), parseInt(dataArray[i][3])]);
              }
            
          }


          drawC(filterArray , "Age" ,"Height", 29);
        }



        ////////////        flag  30       ///////////////
       
       // age, gender, pregnant, weight, height, smoker //
          // female nonpreg+ not smoker + height


        if (female == "true" &&  male == "false" && pregnant == "false" && notPregnant == "true" && smoker == "false" && notSmoker == "true" && weight == true ) 
        {
          console.log("entered  flag 30");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [];
          filterArray.push(["Age","Weight"]);

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (notSmoker == dataArray[i][5] && notPregnant == dataArray[i][2] && ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "female" == dataArray[i][1] && HWMin <= dataArray[i][3] && HWMax >= dataArray[i][3] )
              {
                filterArray.push([parseInt(dataArray[i][0]), parseInt(dataArray[i][3])]);
              }
            
          }


          drawC(filterArray , "Age" ,"Height", 30);
        }


        ////////////        flag  31       ///////////////
       
       // age, gender, pregnant, weight, height, smoker //
          // female nonpreg+  smoker + height + not smoker


        if (female == "true" &&  male == "false" && pregnant == "false" && notPregnant == "true" && smoker == "true" && notSmoker == "true" && weight == true ) 
        {
          console.log("entered  flag 31");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [];
          filterArray.push(["Age","Weight"]);

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if ( notPregnant == dataArray[i][2] && ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "female" == dataArray[i][1] && HWMin <= dataArray[i][3] && HWMax >= dataArray[i][3])
              {
                filterArray.push([parseInt(dataArray[i][0]), parseInt(dataArray[i][3])]);
              }
            
          }


          drawC(filterArray , "Age" ,"Height", 31);
        }


        ////////////        flag  32       ///////////////
       
       // age, gender, pregnant, weight, height, smoker //
          // female preg+ not smoker + height + smoker


        if (female == "true" &&  male == "false" && pregnant == "true" && notPregnant == "false" && smoker == "true" && notSmoker == "true" && weight == true ) 
        {
          console.log("entered  flag 32");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [];
          filterArray.push(["Age","Weight"]);

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if ( pregnant == dataArray[i][2] && ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "female" == dataArray[i][1] && HWMin <= dataArray[i][3] && HWMax >= dataArray[i][3] )
              {
                filterArray.push([parseInt(dataArray[i][0]), parseInt(dataArray[i][3])]);
              }
            
          }


          drawC(filterArray , "Age" ,"Weight", 32);
        }


        ////////////        flag  33       ///////////////
       
       // age, gender, pregnant, weight, height, smoker //
          // female preg+ not smoker + height


        if (female == "true" &&  male == "false" && pregnant == "true" && notPregnant == "false" && smoker == "false" && notSmoker == "true" && weight == true ) 
        {
          console.log("entered  flag 33");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [];
          filterArray.push(["Age","Weight"]);

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (notSmoker == dataArray[i][5] && pregnant == dataArray[i][2] && ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "female" == dataArray[i][1] && HWMin <= dataArray[i][3] && HWMax >= dataArray[i][3])
              {
                filterArray.push([parseInt(dataArray[i][0]), parseInt(dataArray[i][3])]);
              }
            
          }


          drawC(filterArray , "Age" ,"Height", 33);
        }


        ////////////        flag  34       ///////////////
       
       // age, gender, pregnant, weight, height, smoker //
          // female preg+  smoker + height


        if (female == "true" &&  male == "false" && pregnant == "true" && notPregnant == "false" && smoker == "true" && notSmoker == "false" && weight == true ) 
        {
          console.log("entered  flag 34");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [];
          filterArray.push(["Age","Weight"]);

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (smoker == dataArray[i][5] && pregnant == dataArray[i][2] && ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "female" == dataArray[i][1] && HWMin <= dataArray[i][3] && HWMax >= dataArray[i][3])
              {
                filterArray.push([parseInt(dataArray[i][0]), parseInt(dataArray[i][3])]);
              }
            
          }


          drawC(filterArray , "Age" ,"Weight", 34);
        }


        //////////////////       male  + height  starts   ////////////////////////


        ////////////        flag  35       ///////////////
       
       // age, gender, pregnant, weight, height, smoker //
          // male + not smoker  + height


        if (female == "false" &&  male == "true" && smoker == "true" && notSmoker == "true" && weight == true ) 
        {
          console.log("entered  flag 35");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [];
          filterArray.push(["Age","Weight"]);

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "male" == dataArray[i][1] && HWMin <= dataArray[i][3] && HWMax >= dataArray[i][3])
              {
                filterArray.push([parseInt(dataArray[i][0]), parseInt(dataArray[i][3])]);
              }
            
          }

            console.log(filterArray);

          drawC(filterArray , "Age" ,"Weight", 35);
        }


        ////////////        flag  36       ///////////////
       
       // age, gender, pregnant, weight, height, smoker //
          // male + smoker + height


        if (female == "false" &&  male == "true" &&  smoker == "true" && notSmoker == "false" && weight == true ) 
        {
          console.log("entered  flag 36");
          /*data array  [age, gender, preg, weight, height,smoker ]*/
          var filterArray = [];
          filterArray.push(["Age","Weight"]);

          for(let i = 0; i< dataArray.length; i++)
          {
            
              if (smoker == dataArray[i][5] && ageMin <= dataArray[i][0] && ageMax >= dataArray[i][0] && "male" == dataArray[i][1] && HWMin <= dataArray[i][3] && HWMax >= dataArray[i][3] )
              {
                filterArray.push([parseInt(dataArray[i][0]), parseInt(dataArray[i][3])]);
              }
            
          }

          console.log(filterArray);
          drawC(filterArray , "Age" ,"Height", 36);
        }