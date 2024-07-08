const pressboxPresets = [
    {
        'default': { 
            primary: "#0F90E6", 
            primaryrgb: "#0F90E6", 
            secondary: "#394146", 
            secondaryrgb: "#394146", 
            // heading: "#202427",
            // headingrgb: "#202427",
            // body: "#394146", 
            // bodyrgb: "#394146",  
        }
    },
    
    {
        'preset1': {
            primary: "#ff0000", 
            primaryrgb: "#ff0000", 
            secondary: "#394146", 
            secondaryrgb: "#394146",
            // heading: "#202427",
            // headingrgb: "#202427", 
            // body: "#000000", 
            // bodyrgb: "#000000",
        },
    },
    
    {
        'preset2': { 
            primary: "#47A992", 
            primaryrgb: "#47A992", 
            secondary: "#394146", 
            secondaryrgb: "#394146",
            // heading: "#202427",
            // headingrgb: "#202427", 
            // body: "#482121", 
            // bodyrgb: "#482121", 
        }
    },
    {
        'preset3': { 
            primary: "#9f0592", 
            primaryrgb: "#9f0592", 
            secondary: "#3D256A", 
            secondaryrgb: "#3D256A",
            // heading: "#202427",
            // headingrgb: "#202427", 
            // body: "#000000", 
            // bodyrgb: "#000000", 
        }
    },
    {
        'preset4': { 
            primary: "#6F700F", 
            primaryrgb: "#6F700F", 
            secondary: "#0E2C67", 
            secondaryrgb: "#0E2C67",
            // heading: "#202427",
            // headingrgb: "#202427", 
            // body: "#483434", 
            // bodyrgb: "#483434", 
        }
    },
    {
        'btnsquare': { 
            btnBorderRadius : '0',
            btnBorderWidth : "2"
        }       
    },
    {
        'btnsemiround': { 
            btnBorderRadius : '12',
            btnBorderWidth : "2"
        }       
    },
    {
        'btnrounded': { 
            btnBorderRadius : '50',
            btnBorderWidth : "2"
        }       
    },
    {
        'inputsquare': { 
            inputBorderRadius : '0',
            inputBorderWidth : "2"
        }       
    },
    {
        'inputsemiround': { 
            inputBorderRadius : '12',
            inputBorderWidth : "2"
        }       
    },
    {
        'inputrounded': { 
            inputBorderRadius : '50',
            inputBorderWidth : "2"
        }       
    },
    {
        'fontdefault': { 
            googlefontsURL : '',
            fontfamily : ""
        }       
    },
    {
        'font1': { 
            googlefontsURL : 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap',
            fontfamily : "'Inter', sans-serif"
        }
    },
    {
        'font2': { 
            googlefontsURL : 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap',
            fontfamily : "'Poppins', sans-serif"
        }
    }
    
    
    // Add more presets as needed
];

function loadPreset(presetName) {
    const presets = pressboxPresets.find(preset => preset.hasOwnProperty(presetName));

    if (presets) {
        const preset = presets[presetName];
        // Here you can use the preset data to apply it to your application or perform necessary operations
        loadCustomizeData(preset);
        applyCSS();
    } else {
        console.error('Preset not found:', presetName);
    }
}

function updateHiddenValue(hiddenInputName, colorValue) {
    const hiddenInput = document.querySelector(`input[name="${hiddenInputName}"]`);
    hiddenInput.value = colorValue;
}

function applyCSS() {
    var inputs = document.querySelectorAll('.preset-input');
    var styleTag = document.getElementById('customize-css');
    var cssRules = {};
    var customizeData = {};

    inputs.forEach(function(input) {
        // Check if input value is empty, then skip processing
        if (input.value === '') {
            return;
        }
        
        var selector = input.getAttribute('data-selector');
        var cssVar = input.getAttribute('data-var');
        var valueType = input.getAttribute('data-value-type');
        var value;

        customizeData[input.name] = input.value;

        if (input.type === 'color') {
            value = input.value;

            if (valueType === 'rgba') {
                // Convert the color value to rgba for HEXA type
                value = hexToRGBA(value);
            }
            if (valueType === 'rgb') {
                // Convert the color value to rgb for HEXA type
                value = hexToRGB(value);
            }
        } else if (input.type === 'number') {
            value = input.value + (valueType === 'px' ? 'px' : '');
        }else if (input.type === 'text') {
            value = input.value;
        }


        // If selector exists in rules, update the value; otherwise, create a new rule
        if (!cssRules[selector]) {
            cssRules[selector] = {};
        }

        cssRules[selector][cssVar] = value;
    });

    var cssCode = '';
    const googlefontsURL = document.getElementById('googlefontsURL').value;
    if(googlefontsURL != ''){
        cssCode += "@import url('"+googlefontsURL+"');\n";
        customizeData[document.getElementById('googlefontsURL').name] = googlefontsURL;
    }

    for (var selector in cssRules) {
        cssCode += selector + ' { ';
        var properties = cssRules[selector];
        for (var prop in properties) {
            cssCode += prop + ': ' + properties[prop] + '; ';
        }
        cssCode += '}\n';
    }

    // Set the CSS content of the <style> tag
    if (styleTag.styleSheet) {
        styleTag.styleSheet.cssText = cssCode;
    } else {
        styleTag.innerHTML = cssCode;
    }

    document.getElementById('css-input').value = cssCode;
    localStorage.setItem('savedCSS', cssCode);
    localStorage.setItem('savedCustomizeData', JSON.stringify(customizeData));
}

// Function to convert hex to rgba
function hexToRGBA(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, 1)` : null;
}

// Function to convert hex to rgba
function hexToRGB(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
}

function loadSavedCSS() {
    var savedCSS = localStorage.getItem('savedCSS');
    
    if (savedCSS) {
        document.getElementById('css-input').value = savedCSS;
        var styleTag = document.getElementById('customize-css');
        // Set the CSS content of the <style> tag
        if (styleTag.styleSheet) {
            styleTag.styleSheet.cssText = savedCSS;
        } else {
            styleTag.innerHTML = savedCSS;
        }

    }
}

function loadCustomizeData(parameters) {
    var customizeData = localStorage.getItem('savedCustomizeData');
    
    if (parameters) {
        for (var name in parameters) {
            var element = document.querySelector('[name="'+name+'"]');
            if (element !== null) {
                element.value = parameters[name];           
            } else {
                console.warn('Element with name "' + name + '" not found.');
            }
        }       
    } else if (customizeData) {
        const data = JSON.parse(customizeData);
        for (var name in data) {
            var element = document.querySelector('[name="'+name+'"]');
            if (element !== null) {
                element.value = data[name];           
            } else {
                console.warn('Element with name "' + name + '" not found.');
            }
        }       
    }
}


document.addEventListener('DOMContentLoaded', function() {
    "use strict";

    window.addEventListener('load', function() {
        const date = new Date();
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var html = xhr.responseText;
                    document.querySelector("body > .page").insertAdjacentHTML('beforeend', html);
                    loadCustomizeData();
                    loadSavedCSS();
                } else {
                    console.error('Error:', xhr.status);
                }
            }
        };

        xhr.open('GET', 'customize/presets.html?time=' + date.getTime(), true);
        xhr.send();
    });

    document.addEventListener('submit', function(event) {
        var target = event.target;
        if (target && target.id === 'customizer-form') {
            event.preventDefault();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const copyLinks = document.querySelectorAll('[data-copy="css-input"]');

    copyLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-copy');
            const textarea = document.getElementById(targetId);
            if (textarea) {
                textarea.select();
            }
        });
    });
});

$(document).on("#al_reset","click",function(){
    $("#customizer-form").reset();
    // console.log(true);
});

function resetButtonEve (){
    $("#customizer-form")[0].reset();
    applyCSS();
    loadPreset('preset1')
    loadPreset('preset2')
    loadPreset('preset3')
    loadPreset('preset4')
    loadPreset('default')
    // console.log($("#customizer-form"));
}