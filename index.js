let drop = document.querySelector("input");
drop.addEventListener("dragenter", (e) => {
  document.querySelector(".drop").style.cssText(`
    border: 4px dashed #09f;
    background: rgba(0, 153, 255, .05);
  `);
  document.querySelector(".cont").style.color  = "#09f";
});


drop.addEventListener("dragleave", (e) => {
  document.querySelector(".drop").style.cssText(`
    border: 3px dashed #DADFE3;
    background: transparent;
`);
  document.querySelector(".cont").style.color  = "#8E99A5";
});

drop.addEventListener("dragend", (e) => {
  document.querySelector(".drop").style.cssText(`
    border: 3px dashed #DADFE3;
    background: transparent;
`);
  document.querySelector(".cont").style.color  = "#8E99A5";
});

drop.addEventListener("mouseout", (e) => {
  document.querySelector(".drop").style.cssText(`
    border: 3px dashed #DADFE3;
    background: transparent;
`);
  document.querySelector(".cont").style.color  = "#8E99A5";
})

drop.addEventListener("drop", (e) => {
  document.querySelector(".drop").style.cssText(`
    border: 3px dashed #DADFE3;
    background: transparent;
`);
  document.querySelector(".cont").style.color  = "#8E99A5";
})




function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object

  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; f = files[i]; i++) {
    // Only process image files.
    if (!f.type.match('image.*')) {
      continue;
    }
    var reader = new FileReader();

    // Closure to capture the file information.
    if(files.length != 4) {
      return;
    } else {
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
        };
      })(f);
    }

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}


document.querySelector("#files").addEventListener("change", handleFileSelect);