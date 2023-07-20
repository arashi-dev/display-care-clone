import React from 'react'
import Hero from './_components/Hero';
import HeroAnimation from './_components/HeroAnimation';
import About from './_components/About';
import Vision from './_components/Vision';
import Principles from './_components/Principles';

const Page = () => {
  return (
    <div>
      <Hero />

      <HeroAnimation />

      <About />

      <Vision />

      <Principles />
    </div>
  )
}

// function startRecording() {
//   const chunks = []; // here we will store our recorded media chunks (Blobs)
//   const stream = temp1.captureStream(); // grab our canvas MediaStream
//   const rec = new MediaRecorder(stream); // init the recorder

//   rec.ondataavailable = e => chunks.push(e.data);

//   rec.onstop = e => exportVid(new Blob(chunks, {type: 'video/webm'}));

//   rec.start();
//   setTimeout(()=>rec.stop(), 15000); // stop recording in 3s
// }

// function exportVid(blob) {
//   const vid = document.createElement('video');
//   vid.src = URL.createObjectURL(blob);
//   vid.controls = true;
//   document.body.appendChild(vid);
//   const a = document.createElement('a');
//   a.download = 'myvid.webm';
//   a.href = vid.src;
//   a.textContent = 'download the video';
//   document.body.appendChild(a);
// }

export default Page