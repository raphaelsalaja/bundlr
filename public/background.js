// get all the tabs in the current window and print them out
function getTabs()
{
  chrome.tabs.query({ currentWindow: true }, function (tabs)
  {
    console.log(tabs);
  }
  );
}

// create alarm for watchdog and fresh on installed/updated, and start fetch data
chrome.runtime.onInstalled.addListener(() => {
  getTabs();
});
