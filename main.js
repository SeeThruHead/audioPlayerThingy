$(() => {
  const files = {
    tempo1: new Audio('./tempo1.wav'),
    tempo2: new Audio('./tempo2.wav'),
    tempo3: new Audio('./tempo3.wav'),

    beat1: new Audio('./beat1.wav'),
    beat2: new Audio('./beat2.wav'),
    beat3: new Audio('./beat3.wav'),

    blah1: new Audio('./blah1.wav'),
    blah2: new Audio('./blah2.wav'),
    blah3: new Audio('./blah3.wav')
  };

  // make all checkboxes with the same name be grouped
  $("input:checkbox").click(function() {
    const group = "input:checkbox[name='" + $(this).attr("name") + "']";
    $(group).not(this).prop("checked", false);
  });

  // app logic
  const playTracks = tracks => tracks.forEach(track => files[track].play());

  const stopTrack = track => {
    track.pause();
    track.currentTime = 0;
  };

  const stopAllTracks = () =>
    Object.keys(files).forEach(file => stopTrack(files[file]));

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

