window.addEventListener && window.requestAnimationFrame && document.getElementsByClassName && window.addEventListener('load', function () {
  var e, t, n = document.getElementsByClassName('progressive replace');

  function i() {
    t = t || setTimeout(function () {
      t = null, r()
    }, 300)
  }

  function r() {
    n.length && requestAnimationFrame(function () {
      for (var t, i, r = window.innerHeight, s = 0; s < n.length;) 0 < (i = (t = n[s].getBoundingClientRect()).top) + t.height && r > i ? (a(n[s]), n[s].classList.remove('replace')) : s++;
      e = n.length
    })
  }

  function a(e, t) {
    var n = e && (e.getAttribute('data-href') || e.href);
    if (n) {
      var i = new Image;
      e.dataset && (i.srcset = e.dataset.srcset || '', i.sizes = e.dataset.sizes || ''), i.onload = function () {
        requestAnimationFrame(function () {
          n === e.href && (e.style.cursor = 'default', e.addEventListener('click', function (e) {
            e.preventDefault()
          }, !1));
          var t = e.querySelector && e.querySelector('img.preview');
          e.insertBefore(i, t && t.nextSibling).addEventListener('animationend', function () {
            t && (i.alt = t.alt || '', e.removeChild(t)), i.classList.remove('reveal')
          })
        })
      }, (t = 1 + (t || 0)) < 3 && (i.onerror = function () {
        setTimeout(function () {
          a(e, t)
        }, 3e3 * t)
      }), i.className = 'reveal', i.src = n
    }
  }
  window.addEventListener('scroll', i, !1), window.addEventListener('resize', i, !1), MutationObserver && new MutationObserver(function () {
    n.length !== e && r()
  }).observe(document.body, {
    subtree: !0,
    childList: !0,
    attributes: !0,
    characterData: !0
  }), r()
}, !1);