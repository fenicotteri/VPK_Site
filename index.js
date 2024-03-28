function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('start-animation');
      }
      else
      {
        change.target.classList.remove('start-animation');
      }
    });
}
  
  let options = {
    threshold: [0.7] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.animate');
  
  for (let elm of elements) {
    observer.observe(elm);
}

