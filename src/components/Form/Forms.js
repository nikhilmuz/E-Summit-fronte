
import $ from 'jquery'
            var specialKeys = new Array();
            specialKeys.push(8); //Backspace
            function IsNumeric(e) {
                var keyCode = e.which ? e.which : e.keyCode
                var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
                document.getElementById("loginform").style.display = ret ? "none" : "inline";
                return ret;
            }
