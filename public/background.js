
var tabs = [];
function GetAllTabs()
{
  chrome.tabs.query({ currentWindow: true }, function (openedTabs)
  {
    openedTabs.forEach(openedTabs =>
    {
      tabs.push(
        {
          position: openedTabs.index,
          title: openedTabs.title,
          url: openedTabs.url,
          icon: openedTabs.icon,
        }
      );
    });
    console.group('CURRENT TAB ARRAY');
    console.log(tabs);
    console.groupEnd('CURRENT TAB ARRAY');
  });
}

chrome.runtime.onInstalled.addListener(() =>
{
  GetAllTabs();
});
