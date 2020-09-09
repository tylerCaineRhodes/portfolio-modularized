import React, { Component } from 'react';
import M from 'materialize-css';
import {
  About,
  Hakodate,
  JSwall,
  Expertise,
  Projects,
  Divider,
  MusicalBio,
  Contact,
  Footer,
  Nav,
} from './components';

class App extends Component {
  componentDidMount() {
    const parallaxElems = document.querySelectorAll('.parallax');
    const sideNavElems = document.querySelectorAll('.sidenav');
    const scrollspyElems = document.querySelectorAll('.scrollspy');
    const imageBoxElems = document.querySelectorAll('.materialboxed');
    const modalElems = document.querySelectorAll('.modal');

    M.Parallax.init(parallaxElems);
    M.Sidenav.init(sideNavElems);
    M.ScrollSpy.init(scrollspyElems);
    M.Materialbox.init(imageBoxElems);
    M.Modal.init(modalElems);

    window.addEventListener('scroll', this.debounce(this.checkSlide));
  }

  checkSlide = (e) => {
    const sliderImages = document.querySelectorAll('#slyimage-chan');
    sliderImages.forEach((image) => {
      const slideInAt = window.scrollY + window.innerHeight - image.height / 2;
      const isHalfShown = slideInAt > image.offsetTop;

      if (isHalfShown) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  };

  debounce = (func, wait = 20, immediate = true) => {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  render() {
    return (
      <>
        <Nav />
        <Hakodate />
        <MusicalBio />
        <Expertise />
        <JSwall />
        <Projects />
        <Divider />
        <About />
        <Divider />
        <Contact />
        <Footer />
        <Divider />
      </>
    );
  }
}

export default App;
