const switchId = document.getElementById("switchId");

if (switchId) {
  switchId
  switchId.onclick = function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      function handle() {
        if (document.pictureInPictureElement) {
          document.exitPictureInPicture();
        } else {
          if (document.pictureInPictureEnabled) {
            document.getElementsByTagName('video')[0].requestPictureInPicture();
          }
        }
      }
      chrome.scripting
        .executeScript({
          target: { tabId: tabs[0].id },
          func: handle,
        })
        .then(() => {
          if (switchId.textContent === 'Off') {
            switchId.textContent = 'On';
          } else {
            switchId.textContent = 'Off';
          }
        });
    });
  };
}