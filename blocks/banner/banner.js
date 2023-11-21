

  // // Create the video element
  // const videoElement = document.createElement('video');
  // videoElement.setAttribute('controls', false);  // Remove controls
  // videoElement.setAttribute('autoplay', true);    // Autoplay

  // // Set the video source
  // const sourceElement = document.createElement('source');
  // sourceElement.setAttribute('src', 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4');  // Replace with your video file path
  // sourceElement.setAttribute('type', 'video/mp4');

  // // Append the source element to the video element
  // videoElement.appendChild(sourceElement);

  var video = document.createElement('video');

  // Set attributes for autoplay and no controls
  video.autoplay = true;
  video.controls = false;
  video.muted = true; 

  // Create a source element and set the video source - replace 'your_video.mp4' with your actual video file
  var source = document.createElement('source');
  source.src = 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4';
  source.type = 'video/mp4';

  // Append the source element to the video element
  video.appendChild(source);

  // Append the video element to the body or any other container
  document.querySelector('.banner-container').innerHTML = '';
  document.querySelector('.banner-container').appendChild(video);
