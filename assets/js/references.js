/*Reference Details Table*/

const referenceTable = document.querySelector(".pain");

const references = [
  {
    
        

        sl1:1,
        name1 : "Januaris muli",
        designation1 : "attache, KNBS", 
        image1: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.knbs.or.ke%2Fwp-content%2Fuploads%2F2017%2F02%2FLogo_knbs.png&tbnid=mvTdS4aMIpjiqM&vet=12ahUKEwjY15HG1ML_AhXkrycCHbGgCQUQMygAegUIARDGAQ..i&imgrefurl=https%3A%2F%2Fwww.knbs.or.ke%2F&docid=p62I1mZqUsoa2M&w=180&h=119&q=knbs&ved=2ahUKEwjY15HG1ML_AhXkrycCHbGgCQUQMygAegUIARDGAQ",
        message1 : "James has exemptional grasping skills and made an exceptional growth during the attachment period. He offered sincere help to the team throughout the period as well as being impressive problem solver who is able to address complex issues strategically and confidently..",
        

        sl2: 2,
        name2 : "Frank",
            designation2 : "Software developer",
            image2 : "",
            message2 : "James is a conscientious individual whom I mentored . His problem-solving skills and a keen interest in learning new skillsets are remarkable. His hardworking nature and team-building abilities make him different from others.",

       
    },

    {
        sl3:3,
        name1 : "felix onyimbo",
        designation1 : "Cyber-shop, blueink",
        image1 : "",
        message1 : "James and I have worked on several projects. Apart from technical skills, he also has good soft skills. He has good experience with debugging and has excellent leadership qualities.",
        
        sl4: 4,
        name1 : "G",
            designation1 : "Photography assistant",
            image1 : "",
            message1 : "James is a conscientious individual whom I mentored . His problem-solving skills and a keen interest in learning new skillsets are remarkable. His hardworking nature and team-building abilities make him different from others.",





        
  },
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      absbox_for_linkedin1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
      absbox_for_linkedin2,
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
