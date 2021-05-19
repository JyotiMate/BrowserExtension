const pickerBg = document.getElementById("bgColor");
const pickerText = document.getElementById("textColor");
const button = document.getElementById("changeBgColor");
const button_TextColor = document.getElementById("changeTextColor");

button.addEventListener("click", async() => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true});

    chrome.storage.sync.set({ color: pickerBg.value });

    chrome.scripting.executeScript({ 
        target: { tabId: tab.id },
        function: setPageBackgroundColor,
    });
});

function setPageBackgroundColor() {
    chrome.storage.sync.get( "color", ({ color }) =>{
              document.body.style.backgroundColor = color; 
    });
}


button_TextColor.addEventListener("click", async() => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true});

    chrome.storage.sync.set({ color: pickerText.value });

    chrome.scripting.executeScript({ 
        target: { tabId: tab.id },
        function: setTextColor,
    });
});

function setTextColor() {
    chrome.storage.sync.get( "color", ({ color }) =>{
              document.body.style.color = color; 
    });
}

