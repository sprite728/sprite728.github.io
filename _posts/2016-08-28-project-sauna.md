---
layout: project
title: "Sauna"
date:   2015-10-09 19:50:46
permalink: /projects/sauna.html
categories: project
cover_name: Sauna
cover_src: "/assets/imgs/projects/sauna/cover.png"
cover_tagline: "The potential and challenges of inferring thermal comfort  at home using commodity sensors"
---
<div class="wrapper project">
  <img src="/assets/imgs/projects/sauna/product.png">

  <h3>A Dream of Adaptive Homes</h3>
  <p>
    Researchers have been trying to model people’s thermal comfort (i.e., feeling of hot or cold) for more than four decades. They do this for two reasons: 1) to advance our knowledge in the interaction between our body and our mind; 2) to design systems that can react to people’s comfort, such as a smart home. As a UbiComp researcher, I am motivated by the latter, particularly, to create intelligent thermostats that can predict people’s comfort, therefore increasing their comfort while helping them save energy.
  </p>

  <img src="/assets/imgs/projects/sauna/1.png">

  <h3>Infer People’s Comfort is Challenging</h3>
  <p>
    Automatically infer people’s comfort using sensors are challenging. Past approaches require either cumbersome sensors or human observers, making them not suitable for naturalistic settings—- allowing people to perform their nature routines at home without much interruption. These approaches are also designed for large group of people in commercial buildings, making them not suitable for small households, as people’s behaviors at home are more dynamic than in offices.  
  </p>

  <div class="row">
    <div class="col-lg-4">
      <div class="row three-circle">
      <img src="/assets/imgs/projects/sauna/challenge-1.png">
      </div>
      <div class="row three-circle">
        Cubersome sensors
      </div>
    </div>
    <div class="col-lg-4">
      <div class="row three-circle">
      <img src="/assets/imgs/projects/sauna/challenge-2.png">
      </div>
      <div class="row three-circle">
        Design for large buildings, not for small households.
      </div>
    </div>
    <div class="col-lg-4">
      <div class="row three-circle">
      <img src="/assets/imgs/projects/sauna/challenge-3.png">
      </div>
      <div class="row three-circle">
        Home is a place people exhibit  dynamic and adaptive behaviors
      </div>
    </div>
  </div>

  <h3>Our Approach & The Sauna System</h3>
  <p>
    To infer people’s thermal comfort under naturalistic settings at home, we used wearable fitness trackers and indoor sensors. Although wearable fitness trackers are originally designed for health purposes, we found that they also provide additional sensor data that were important for sensing people’s comfort, such as activity level and skin temperature. 
  </p>
  <p>
    We took a supervised machine learning approach to collect ground truth and sensor data, as well as training our models. A smart home sensing system was built, and we deployed it to 7 households for a month to collect data. 
  </p>

  <img src="/assets/imgs/projects/sauna/process-1.png">
  <img src="/assets/imgs/projects/sauna/process-2.png">
  <img src="/assets/imgs/projects/sauna/process-3.png">
  <img src="/assets/imgs/projects/sauna/process-4.png">

  <h3>Result</h3>
  <div class="row">
    <div class="col-lg-7">
      <p>
        In short, our model performs much better than previous approaches, yielding significantly less errors.   We also identify situations that cause inaccurate prediction, as well as proposing possible solutions for improving comfort prediction. We are one step closer to building an adaptive thermostat.
      </p>
    </div>
    <div class="col-lg-5">
      <img src="/assets/imgs/projects/sauna/result.png">
    </div>
  </div>
  
  <p>If you are interested in the detail, you can read it in my paper or my presentation at UbiComp ’15.</p>

  <p><a href="/assets/imgs/projects/sauna/paper.pdf">paper</a> | <a href="/assets/imgs/projects/sauna/slides.pdf">slides</a></p>

</div>