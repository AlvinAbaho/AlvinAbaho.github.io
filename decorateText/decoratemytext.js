/* jshint esversion: 6 */
/* jshint devel:true */
window.onload = function () {
    "use strict";
    document.getElementById("bigger-decoration").addEventListener("click", function () {
        // alert("Hello, world!");
        // document.getElementById("text-area").style.fontSize = "4em";
        // document.getElementById("text-area").style.fontSize = "24pt";
        let timer = setInterval(biggerDecorations, 500);
        setTimeout(function () {
            clearInterval(timer);
        }, 5000);
    });

    function biggerDecorations() {
        const textArea = document.getElementById("text-area");
        const currentFontSize = window.getComputedStyle(textArea).fontSize; // <- it returns pixels
        textArea.style.fontSize = Math.ceil(parseInt(currentFontSize) * 72 / 96 + 2) + "pt";  // <- convert px to pt
    }

    document.getElementById("bling").addEventListener("change", function () {
        //alert("Checked!");
        const textAreaClassList = document.getElementById("text-area").classList;

        if (this.checked) {
            textAreaClassList.replace("default-text", "bling-text-area");
            document.body.classList.add("bling-body");
        } else {
            textAreaClassList.replace("bling-text-area", "default-text");
            document.body.classList.remove("bling-body");
        }
    });

    document.getElementById("pig-latin").addEventListener("click", () => {
        const textArea = document.getElementById("text-area");
        const textContent = textArea.value.replace(/\n/g, ' <br> ');  // <- Preserve line breaks
        textArea.value = textContent.split(/[\s|\n]/g)
            .map(word => word !== "<br>" ? translatePigLatin(word) : word)
            .join(" ")
            .replace(/ <br> /g, '\n'); // <- reinstate line breaks into html
    });

    document.getElementById("malkovitch").addEventListener("click", () => {
        const textArea = document.getElementById("text-area");
        textArea.value = translateMalkovitch(textArea.value);
    });

    const translatePigLatin = str => {
        const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

        if (vowels.indexOf(str[0]) > -1) { // starts with a vowel
            return str + "ay";
        } else { // starts with a consonant or consonant cluster -> (group of letters occurring before first vowel)
            const foundVowels = str.match(/[aeiouAEIOU]/g) || 0;
            const firstVowelOccurrence = str.indexOf(foundVowels[0]);
            return str.substring(firstVowelOccurrence) + str.substring(0, firstVowelOccurrence) + "ay";
        }
    };

    const translateMalkovitch = str => {
        str = str.replace(/\n/g, ' <br> '); // <- Preserve line breaks
        return str.split(" ").map(word => word.length >= 5 ? "Malkovich" : word).join(" ")
            .replace(/ <br> /g, '\n'); // <- reinstate line breaks into html
    };

};