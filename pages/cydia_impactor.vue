<template lang="html">
<div class="grid grid-align">
  <div class="section fullwidth">
    <div class="heading">
        Cydia Impactor
    </div>
    <div>
      <p>Welcome to the Cydia Impactor page. Here you can find downloads to the program, how to install a IPA file, and as well as find solutions to your errors. Cydia Impactor allows you to install unsigned apps on your iDevice and all you need is a computer also all the apps with the blue buttons in our IPA library need to be sideloaded with Cydia Impactor so please keep that in mind. Below you can find all the downloads for Cydia Impactor, please install for your correct OS.</p>
    </div>
  </div>
  <div class="section fullwidth">
    <div class="heading">
      Download Cydia Impactor Here:
    </div>
    <div class="grid center">
      <a href="https://cydia.saurik.com/api/latest/1">
          <i class="fab fa-apple fontawesome"></i>Mac OS X
      </a>
      <a href="https://cydia.saurik.com/api/latest/2">
          <i class="fab fa-windows fontawesome"></i>Windows
      </a>
      <a href="https://cydia.saurik.com/api/latest/4">
          <i class="fab fa-linux fontawesome"></i>Linux (32-bit)
      </a>
      <a href="https://cydia.saurik.com/api/latest/5">
          <i class="fab fa-linux fontawesome"></i>Linux (64-bit)
      </a>
    </div>
  </div>
  <div class="section fullwidth">
    <div class="heading">
      How To Install An .IPA File
    </div>
    <div>
      <ol>
        <li>Make sure you have the lastest version of iTunes installed on your computer.</li>
        <li>Download the .ipa file of your choice from <a href="/apps">THIS</a> page.</li>
        <li>Download Cydia Impactor from the links above.</li>
        <li>Extract the Impactor ZIP file and run the program labeled 'Impactor'.</li>
        <li>Connect your iDevice to your computer.</li>
        <p>NOTE: Make sure your iDevice is recognized by your computer.</p>
        <li>Open Cydia Impactor and drag the .ipa file you downloaded into the GUI window.</li>
        <li>Enter your Apple ID email into the field provided and click 'OK'.</li>
        <li>Enter your Apple ID password into the field provided and click 'OK'.</li>
        <p>NOTE: Your Apple ID is only used to generate a certificate from Apple and is not saved anywhere.</p>
        <li>Wait for Cydia Impactor to sign the .ipa file.</li>
        <p>NOTE: Wait to proceed until you see the 'Complete' message at the bottom of the program.</p>
        <li>Unlock your device and go to Settings > General > Profiles and Device Management.</li>
        <li>Open the profile with your Apple ID email on it and click 'Trust' "your@email.com."</li>
        <li>Go back to your homescreen and lauch the app or game that you downloaded.</li>
        <p>You will have to repeat this process every 7 days unless you get a codesigning service.</p>
      </ol>
    </div>
  </div>
  <div class="section fullwidth">
    <div class="heading">
      Common Errors With Cydia Impactor
    </div>
    <div>
      <ul>
        <li><a href="http://www.iphonehacks.com/2017/07/fix-provision-cpp168-error-cydia-impactor-yalu-jailbreak-10-2.html">Fix the "provision.cpp:168" error.</a></li>

        <li><a href="http://www.iblogapple.com/2017/03/12/fix-provision-cpp-71-error-cydia-impactor/">Fix the "provision.cpp:71" and "provision.cpp:81" errors.</a></li>

        <li><a href="https://techjourney.net/cydia-impactor-provision-cpp6268150-error/">Fix the "provision.cpp:62", "provision.cpp:68", and "provision.cpp:150" errors.</a></li>

        <li><a href="https://yalujailbreak.net/lockdown-cpp-57-error/">Fix the "lockdown.cpp:57" error.</a></li>

        <li><a href="http://www.iblogapple.com/2017/03/11/cydia-impactor-update-fix-http-win-cpp-158-error/">Fix the "http-win.cpp:158" error.</a></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "~assets/main.scss";
</style>
