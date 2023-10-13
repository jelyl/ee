// ANIMATION
requestAnimationFrame(draw);
function draw() {
  // Background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height / 4);

  let ancientEgyptImg = document.getElementById("ancient-egypt");
  let factor1 = cnv.width / ancientEgyptImg.width;
  ctx.drawImage(
    ancientEgyptImg,
    0,
    cnv.height / 4,
    ancientEgyptImg.width * factor1,
    ancientEgyptImg.height * factor1
  );

  requestAnimationFrame(draw);
}
