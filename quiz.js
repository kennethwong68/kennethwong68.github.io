function check(x) {   
    switch (x) {
    case 1:
        console.log("Check Q1 answer");
        break;
    case 2:
        console.log("Check Q2 answer");
        break;
    case 3:
        console.log("Check Q3 answer");
        break;
    case 4:
        console.log("Check Q4 answer");
        break;
    case 5:
        console.log("Check Q5 answer");
        break;
    case 6:
        console.log("Check Q6 answer");
        break;
    case 7:
        console.log("Check Q7 answer");
        break;
    case 8:
        console.log("Check Q8 answer");
        if (toggle8==false){
            document.getElementById('q8a1').checked = true;
            toggle8 = true;                
        } else {
            document.getElementById('q8a1').checked = false;
            toggle8 = false;
        }            
        break;
    case 9:
        console.log("Check Q9 answer");
        if (toggle9==false){
            document.getElementById('q9a2').checked = true;
            toggle9 = true;                
        } else {
            document.getElementById('q9a2').checked = false;
            toggle9 = false;
        }
        break;
    }
}

function validate() {
// validate if question 1 is being filled
    let res = [0,0,0,0,0,0,0,0,0];
    console.log(res);
    console.log('in the first validate loop');
    var ele = document.getElementsByName('html_ver');
    Flag = "False";
    for (i=0; i<ele.length;i++) {
        if (ele[i].checked) {
            Flag = "True";
            // verify if the chosen answer is correct
            if (ele[i].value=="5") {
                res[0] = '1';
            } 
            break;
        };
    }     
    if (Flag == "True") {
        console.log(res);
        validate2(res);
    } else {
        alert('please fill in answer to question 1');        
    }
}

function validate2(arr) {
// validate if question 2 is being filled
    console.log(arr);
    console.log('in the 2nd validate loop');    

    var ele = document.getElementsByName('css_ver');
    Flag = "False";
    for (i=0; i<ele.length;i++) {
        if (ele[i].checked) {
            Flag = "True";
            // verify if the chosen answer is correct
            if (ele[i].value=="3") {
                arr[1] = '1';
            } 
            break;
        }
    }
    if (Flag == "True") {
        validate3(arr);
        } else {
        alert('please fill in answer to question 2');        
    }
} 

function validate3(arr) {
// validate if question 3 (checkbox type input) is being filled
    console.log(arr);
    console.log('in the 3rd validate loop');    

    var ele = document.getElementsByName('css_type');
    Flag = "False";
    for (i=0; i<ele.length;i++) {
        if (ele[i].checked) {
            Flag = 'True';
        }            
    }
    if (Flag == "True") {
        // once validated correct, proceed to verify if the chosen answer (for checkbox type) is correct
        if (ele[0].checked && ele[1].checked && ele[2].checked) {
            arr[2] = '1';
        } 
        validate4(arr);
    } else {
        alert('please fill in answer to question 3');        
    }
}

function validate4(arr) {
// validate if question 4 (text type input) is being filled
    console.log(arr);
    console.log("4th loop");
    var ele = document.getElementById('q4');    
    if (ele.value == "") {
        alert('please fill in answer to question 4');
    } else {
        // verify if the written text answer is correct
        if (ele.value=="inline") {
            arr[3] = '1';
        }
        validate5(arr);
    }
}

function validate5(arr) {
// validate if question 5 is being filled
    console.log(arr);
    console.log("5th loop");
    var ele = document.getElementsByName('css_bgcol');
    Flag = "False";
    for (i=0; i<ele.length;i++) {
        if (ele[i].checked) {
            Flag = "True";
            // verify if the chosen answer is correct
            if (ele[i].value=="1") {
                arr[4] = '1';
            }
            break;
        }
    }
    if (Flag == "True") {
        validate6(arr);
    } else {
        alert('please fill in answer to question 5');        
    }
} 

function validate6(arr) {
// validate if question 6 is being filled
    console.log(arr);
    console.log("6th loop");
    var ele = document.getElementsByName('html_tag');
    Flag = "False";
    for (i=0; i<ele.length;i++) {
        if (ele[i].checked) {
            Flag = "True";
            // verify if the chosen answer is correct
            if (ele[i].value=="3") {
                arr[5] = '1';
            }
            break;
        }
    }
    if (Flag == "True") {
        validate7(arr);
    } else {
        alert('please fill in answer to question 6');        
    }
}

function validate7(arr) {
// validate if question 7 is being filled
    console.log(arr);
    console.log("7th loop");
    var ele = document.getElementsByName('html_header');
    Flag = "False";
    for (i=0; i<ele.length;i++) {
        if (ele[i].checked) {
            Flag = "True";
            // verify if the chosen answer is correct
            if (ele[i].value=="6") {
            arr[6] = '1';
            }
            break;
        }
    }
    if (Flag == "True") {
        validate8(arr);
    } else {
        alert('please fill in answer to question 7');        
    }
}

function validate8(arr) {
// validate if question 8 is being filled
    console.log(arr);
    console.log("8th loop");
    var ele = document.getElementsByName('html_list');
    Flag = "False";
    for (i=0; i<ele.length;i++) {
        if (ele[i].checked) {
            Flag = "True";
            // verify if the chosen answer is correct
            if (ele[i].value=="1") {
                arr[7] = '1';
            }
            break;
        }
    }
    if (Flag == "True") {
        validate9(arr);
    } else {
        alert('please fill in answer to question 8');        
    }
}
    
function validate9(arr) {
// validate if question 9 is being filled
    console.log(arr);
    console.log("9th loop");
    var ele = document.getElementsByName('html_ol');
    Flag = "False";
    for (i=0; i<ele.length;i++) {
        if (ele[i].checked) {
            Flag = "True";
            // verify if the chosen answer is correct
            if (ele[i].value=="2") {
                arr[8] = '1';
            }
            break;
        }
    }
    if (Flag == "True") {
        alert('thank you for your submission');
        console.log(arr);
        addresult(arr);            
    } else {
        alert('please fill in answer to question 9');        
    }
}
        
function addresult(arr) {
    console.log("add result loop");
    var total = 0;
    for (let x of arr) {
        total += parseInt(x);
    };
    if (total<5) {
        alert('Scored ' + total + '/9'+ ' (Failed)');
    } else if (total==9) {
        alert('Perfect score! '+ total + '/9');
    } else {
        alert('Scored ' + total + '/9' + ' (Passed)');
    };
    console.log(arr);
}