$(() => {
  const files = {
    tempo1: new Audio('./audio1.wav'),
    beat1: new Audio('./audio2.wav'),
    blah1: new Audio('./audio3.wav'),

    tempo2: new Audio('./audio1.wav'),
    beat2: new Audio('./audio2.wav'),
    blah2: new Audio('./audio3.wav'),

    tempo3: new Audio('./audio1.wav'),
    beat3: new Audio('./audio2.wav'),
    blah3: new Audio('./audio3.wav'),
  };

  // make all checkboxes with the same name be grouped
  $("input:checkbox").click(function() {
    const group = "input:checkbox[name='" + $(this).attr("name") + "']";
    $(group).not(this).prop("checked", false);
  });

  const playTracks = tracks => {
    tracks.forEach(track => files[track].play());
  }

  const stopAllTracks = () =>
    Object.keys(files).forEach(file => {
      files[file].pause();
      files[file].currentTime = 0;
    });

  const trackList = () => $('input:checkbox:checked').map(function () {
    return $(this).val();
  }).toArray();

  // connect handlers
  $('input:checkbox').click(function() {
    stopAllTracks();
    const tracks = trackList();
    if (tracks.length === 3) playTracks(tracks);
  });
});

