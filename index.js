import "regenerator-runtime";

async function getMediaDevicesDescription() {
  document.getElementById("text").innerHTML = "getting infos...";
  try {
    const mediaDevices = await window.navigator.mediaDevices.enumerateDevices();
    const descriptor = mediaDevices
      .map(
        (device) =>
          `Kind: <b>${device.kind}</b> and label (if present): <b>${
            device.label || "Not present"
          }</b>`
      )
      .join("<br>");
    document.getElementById("text").innerHTML = descriptor;
  } catch (err) {
    document.getElementById("text").innerHTML = err;
  }
}

getMediaDevicesDescription();
